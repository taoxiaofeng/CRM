module.exports = function(app) {
  app.controller('promotionProductCtrl', function($scope, $mdDialog,
    promotionService, utilService, modalService, NgTableParams, CONSTANTS
  ) {
    $scope.PROMOTION_PAY_TYPE = CONSTANTS.PROMOTION_PAY_TYPE;
    $scope.utilService = utilService;
    $scope.picUrl = window.cfg.picUrl;
    $scope.queryParams = {
      status: 1
    };
    $scope.queryDesc = "";
    $scope.imgSizeLimit = {
      size: 500 * 1024,
      width: 1080,
      height: 1080
    }
    $scope.product = {
      imgDetails: [],
      desImgDetails: []
    };
    $scope.payTypeSelectDisabled = false; //标记支付方式是否可选
    /**
     * 列表
     */
    //表格设置
    $scope.offset = 0;
    $scope.limit = 20;
    var loadTable = function() {
      $scope.tableParams = new NgTableParams({
        count: $scope.limit
      }, {
        counts: [],
        paginationMaxBlocks: 20,
        paginationMinBlocks: 2,
        getData: function(params) {
          var searchParams = getQueryParams();
          $scope.offset = $scope.limit * (params.page() - 1);
          searchParams.offset = $scope.offset;
          searchParams.limit = $scope.limit;
          return promotionService.queryPromotionProductList(
            searchParams).then(function(res) {
            params.total(res.totalElements);
            return utilService.indexArray(promotionService._parsePromotionProductList(
                res.content),
              searchParams.offset);
          });
        }
      });
    };
    loadTable();
    //修改查询架上商品还是已下架商品
    $scope.changeActiveQueryParams = function(active) {
      $scope.queryParams = {};
      $scope.queryParams.status = active;
      $scope.queryProductConfig.selectItem($scope.queryProductConfig.nameTypeData[
        0]);
      loadTable();
    };
    //选择搜索条件
    $scope.queryProductConfig = {
      nameTypeData: [{
        markId: 'title',
        desc: '商品名称'
      }, {
        markId: 'sku',
        desc: '商品编码'
      }],
      selectItem: function(item) {
        var nameTypeData = $scope.queryProductConfig.nameTypeData;
        _.each(nameTypeData, function(t) {
          if (t.markId != item.markId) {
            delete $scope.queryParams[t.markId]; //去除非选中的查询字段
          }
        });
        $scope.queryParams["markId"] = item.markId;
        $scope.queryDesc = item.desc;
        $scope.queryConfigDefaultItem = item;
      }
    };
    $scope.queryConfigDefaultItem = $scope.queryProductConfig.nameTypeData[
      0];
    //回车键查询
    $scope.productKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.productSearch();
      }
    };
    //商品搜索
    $scope.productSearch = function() {
      loadTable();
    };
    //按商品编码排序
    $scope.sortBySku = function(item) {
      $scope.queryParams.field = 'sku';
      $scope.queryParams.asc = item.sortCode;
      loadTable();
    };
    var getQueryParams = function() {
      var temp = $scope.queryParams;
      temp[temp.markId] = temp.queryName;
      return _.omit(temp, 'markId', 'queryName');
    };
    // 获取H5链接
    $scope.getLink = function(id) {
      promotionService.getPromotionProductLink({
        id: id
      }).then(function(res) {
        $scope.wechatLink = res;
        //后续用正则匹配
        $scope.internalLink = '#' + res.split('?route=')[1];
        openMadal('linkShow', 'lg');
      });
    };
    // 设置商品上下架
    $scope.modifyProductActive = function(product) {
      if (product.active) { //需设置为下架
        promotionService.offlinePromotionProduct({
          id: product.id
        }).then(function(res) {
          product.active = !product.active;
          utilService.alertSuccess('下架成功');
          $scope.tableParams.reload();
        });
      } else { //需设置为上架
        promotionService.onlinePromotionProduct({
          id: product.id
        }).then(function(res) {
          product.active = !product.active;
          utilService.alertSuccess('上架成功');
          $scope.tableParams.reload();
        });
      }
    };
    /*
     *商品的新增，修改
     */
    //打开编辑框
    $scope.productEditWin = function(id) {
      openMadal('productEdit', 'lg');
      $scope.product = {
        imgDetails: [],
        desImgDetails: []
      };
      if (typeof id != 'undefined') { //修改模式
        $scope.payTypeSelectDisabled = true;
        promotionService.queryPromotionProductDetail({
          id: id
        }).then(function(res) {
          promotionService.getPromotionProductLink({
            id: id
          }).then(function(link) {
            var product = promotionService._parsePromotionProductDetail(
              res);
            product.link = link;
            $scope.product = product;
          });
        });
      } else {
        $scope.payTypeSelectDisabled = false;
      }
    };
    //支付类型设置
    $scope.payTypeConfig = {
      getDefaultItem: function(value) {
        var options = this.getList();
        return _.findWhere(options, {
          payType: value
        }) || options[0];
      },
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PROMOTION_PAY_TYPE',
          hasDefault: false,
          codeKey: 'payType',
          valueKey: 'name'
        });
      },
      selectItem: function(record) {
        if (typeof record.payType != 'undefined') {
          $scope.product.payType = record.payType;
        }
      }
    };
    var getImgs = function(type) {
      var imgs = type == 1 ? $scope.product.imgDetails : $scope.product
        .desImgDetails;
      return imgs;
    };
    //上传完图片
    $scope.didUploadImg = function(file, type) {
      var imgs = getImgs(type);
      file.index = imgs.length ? _.max(imgs, function(img) {
        return img.index;
      }).index + 1 : 1;
      imgs.push(file);
    };
    //轮播图排序
    $scope.sortImgs = function(type) {
      var imgs = getImgs(type);
      imgs = _.sortBy(imgs, function(img) {
        return img.index;
      });
      if (type == 1) {
        $scope.product.imgDetails = imgs;
      } else {
        $scope.product.desImgDetails = imgs;
      }
    };
    //预览图片
    $scope.imgPreview = function(img) {
      $scope.previewImg = img;
      openMadal('imgPreviewer', 'lg');
    };
    //删除图片
    $scope.deleteImg = function(i, type) {
      var imgs = getImgs(type);
      imgs.splice(i, 1);
    };
    //保存商品
    $scope.productSave = function(product) {
      if (!checkSaveProductValid(product)) {
        return;
      }
      var me = this;
      var saveParams = angular.copy(product);
      saveParams.images = _.pluck(product.imgDetails, 'path');
      saveParams.desImages = _.pluck(product.desImgDetails, 'path');
      saveParams.cover = saveParams.images[0];
      saveParams.price = utilService.getPointInt(saveParams.price);
      if (saveParams.originalPrice) {
        saveParams.originalPrice = utilService.getPointInt(saveParams.originalPrice);
      }
      delete saveParams.active;
      if (typeof product.id == 'undefined') { //新增模式
        promotionService.createPromotionProduct(saveParams).then(
          function(
            res) {
            $scope.tableParams.reload();
            me.$close();
          });
      } else { //编辑模式
        promotionService.modifyPromotionProduct(saveParams).then(
          function(
            res) {
            $scope.tableParams.reload();
            me.$close();
          });
      }
    };
    //验证保存商品有效性
    var checkSaveProductValid = function(product) {
      var maxTitleLength = 14,
        maxImgCount = 5,
        maxSubTitleLength = 35;
      var errorMsg = '';
      if (!product.payType) { //未选择支付类型
        errorMsg = '请选择支付类型';
      } else if (!product.imgDetails.length) { //未上传商品轮播图
        errorMsg = '请上传商品轮播图';
      } else if (product.title.length > maxTitleLength) {
        errorMsg = '标题不得大于' + maxTitleLength + '个字';
      } else if (product.imgDetails.length > maxImgCount) {
        errorMsg = '商品轮播图不得大于' + maxImgCount + '张';
      } else if (product.subtitle) {
        if (product.subtitle.length > maxSubTitleLength) {
          errorMsg = '副标题不得大于' + maxSubTitleLength + '个字';
        }
      }
      if (errorMsg.length) {
        utilService.alertError(errorMsg);
        return false;
      }
      return true;
    };
    //打开Modal
    var openMadal = function(templateUrl, size) {
      modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'promotion-product')),
        templateUrl: templateUrl,
        scope: $scope,
        size: size
      });
    };
  });
};