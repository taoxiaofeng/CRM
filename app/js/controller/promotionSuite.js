module.exports = function(app) {
  app.controller('promotionSuiteCtrl', function($scope, $mdDialog,
    NgTableParams, CONSTANTS, modalService, promotionService, utilService
  ) {
    var PROMOTION_PAY_TYPE = CONSTANTS.PROMOTION_PAY_TYPE;
    $scope.PROMOTION_PAY_TYPE = PROMOTION_PAY_TYPE;
    $scope.picUrl = window.cfg.picUrl;
    $scope.imgSizeLimit = {
      size: 16 * 1024,
      width: 256,
      height: 256
    };
    $scope.products = [];
    $scope.suite = {
      selectedProducts: []
    };
    $scope.queryParams = {}; //查询参数
    /**
     * 列表
     */
    //表格设置
    $scope.offset = 0;
    $scope.limit = 20;
    var queryParams = {
      offset: $scope.offset,
      limit: $scope.limit,
    }
    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function(params) {
        $scope.offset = $scope.limit * (params.page() - 1);
        return promotionService.queryPromotionSuiteList(queryParams)
          .then(
            function(res) {
              console.log(queryParams)
              params.total(res.totalElements);
              var suiteList = promotionService._parsePromotionSuiteList(
                res.content);
              suiteList = utilService.indexArray(suiteList,
                queryParams.offset);
              return suiteList;
            });
      }
    });
    //搜索查询
    $scope.suiteSearch = function() {
      queryParams.name = $scope.queryParams.des;
      $scope.tableParams.settings({
        dataset: []
      });
    };
    //按回车 搜索查询
    $scope.suiteSearchKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.productSearch();
      }
    };
    //支付方式 筛选
    $scope.payTypeFilter = {
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PROMOTION_PAY_TYPE',
          codeKey: 'payType',
          valueKey: 'name',
          defaultObj: {
            '': '全部支付方式'
          }
        });
      },
      selectItem: function(item) {
        console.log(item)
        if (item.payType) {
          queryParams.payType = item.payType;
        } else {
          delete queryParams.payType
        }

        $scope.tableParams.settings({
          dataset: []
        });
      }
    };
    //删除组合
    $scope.deleteSuite = function(id) {
      if (confirm('是否确认删除该组合?')) {
        promotionService.deletePromotionSuite({
          id: id
        }).then(function(res) {
          $scope.tableParams.reload();
        });
      }
    };
    //获取HTML5链接
    $scope.getLink = function(id) {
      promotionService.getPromotionSuiteLink({
        id: id
      }).then(function(res) {
        $scope.wechatLink = res;
        //后续用正则匹配
        $scope.internalLink = '#' + res.split('?route=')[1];
        openMadal('linkShow', 'lg');
      });
    };
    /**
     * 新建营销组合
     */
    //打开 营销组合新增
    $scope.suiteEditWin = function(suiteId) {
      openMadal('suiteEdit', 'lg');
      promotionService.queryPromotionProductList({
        offset: 0,
        limit: 10000,
        status: 1
      }).then(function(productsRes) {
        if (suiteId) { //编辑模式
          promotionService.queryPromotionSuiteDetail({
            id: suiteId
          }).then(function(res) {
            $scope.suite = res.suite;
            $scope.suite.selectedProducts = res.products;
            var selectedProductIds = _.pluck($scope.suite.selectedProducts,
              'id');
            //被选商品
            $scope.products = _.reject(productsRes.content,
              function(product) {
                return _.contains(selectedProductIds, product
                  .id);
              });
          });
        } else { //新增模式
          $scope.products = productsRes.content;
          $scope.suite = {
            selectedProducts: []
          };
        }
      });
    };
    //支付方式前缀
    $scope.getPayTypePrefix = function(product) {
      var preTxt = product.payType ? '(' + PROMOTION_PAY_TYPE.DESC[
        product.payType].substr(0, 1) + ')' : '';
      return preTxt;
    };
    //选中商品
    $scope.selectProduct = function(product, type) {
      _.each($scope.products, function(item) {
        item.isSelect = false;
      });
      _.each($scope.suite.selectedProducts, function(item) {
        item.isSelect = false;
      });
      product.isSelect = true;
    };
    //添加或移除商品
    $scope.modifySelectedProduct = function(mode) {
      var operateProducts = [];
      if (mode == 'add') {
        operateProducts = $scope.products;
      } else if (mode == 'remove') {
        operateProducts = $scope.suite.selectedProducts;
      }
      var operateProduct = _.find(operateProducts, function(item) {
        return item.isSelect == true;
      });
      if (!operateProduct) {
        utilService.alertError('请先选择商品!');
        return;
      }
      operateProduct.isSelect = false;
      if (mode == 'add') {
        $scope.products = _.without(operateProducts, operateProduct);
        $scope.suite.selectedProducts.push(operateProduct);
      } else if (mode == 'remove') {
        $scope.suite.selectedProducts = _.without(operateProducts,
          operateProduct);
        $scope.products.splice(0, 0, operateProduct);
      }
    };
    //保存组合
    $scope.suiteSave = function(suite) {
      if (!checkSaveSuiteValid(suite)) {
        return;
      }
      var me = this;
      suite.productIds = _.pluck(suite.selectedProducts, 'id');
      suite.productNames = _.pluck(suite.selectedProducts,
        'title');
      delete suite.selectedProducts;
      if (suite.id) { //编辑模式
        promotionService.modifyPromotionSuite(suite).then(function(res) {
          $scope.tableParams.reload();
          me.$close();
        });
      } else { //新增模式
        promotionService.createPromotionSuite(suite).then(function(res) {
          $scope.tableParams.reload();
          me.$close();
        });
      }
    };
    //验证保存套餐有效性
    var checkSaveSuiteValid = function(suite) {
      if (!suite.banner) {
        utilService.alertError('请上传微信转发ICON!');
        return false;
      }
      if (!suite.selectedProducts.length) {
        utilService.alertError('请添加商品!');
        return false;
      }
      var payTypes = _.union(_.pluck(suite.selectedProducts, 'payType'));
      if (payTypes.length > 1) {
        utilService.alertError('存在支付方式不一致的商品，请仔细检查!');
        return false;
      }
      return true;
    };
    //打开Modal
    var openMadal = function(templateUrl, size) {
      modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'promotion-suite')),
        templateUrl: templateUrl,
        scope: $scope,
        size: size
      });
    };
  });
};