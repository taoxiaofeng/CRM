module.exports = function(app) {
  app.controller('productCtrl', function($scope, $mdPanel, productService,
    utilService, NgTableParams, modalService, CONSTANTS, positionService,
    labelsManagementService,$compile,$templateCache,orderService) {
    $scope.levelOneCategoryList = [];
    $scope.levelTwoCategoryList = [];
    $scope.brandAwarenessList = [];
    $scope.brandGradeList = [];
    $scope.originPlaceList = [];
    $scope.labelList = [];
    $scope.product = {};
    $scope.productPositionData = [];
    $scope.imgPrefix = window.cfg.picUrl;
    $scope.CONSTANTS = CONSTANTS;
    var CATEGORY_LEVEL = CONSTANTS.CATEGORY_LEVEL;
    var PRODUCT_DIC_TYPE = CONSTANTS.PRODUCT_DIC_TYPE;
    $scope.productTagsData = CONSTANTS.getList({
      clsOrName: 'PRODUCT_TAG',
      hasDefault: false
    });
    //表格设置
    $scope.queryParams = {};
    $scope.offset = 0;
    $scope.limit = 20;
    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function(params) {
        return labelsManagementService.getAllLabelList().then(
          function(
            labelRes) {
            $scope.labelList = labelRes;
            $scope.labelConfig.setList(labelRes);
            $scope.offset = $scope.limit * (params.page() - 1);
            var search = getParams();
            search.offset = $scope.offset;
            search.limit = $scope.limit;
            return productService.queryProductByKey(search).then(
              function(res) {
                params.total(res.totalElements);
                var data = productService._parseProductListData(
                  res.content,
                  $scope.labelList);
                return checkInfo(productService.indexData(data, $scope.offset +
                  1));
              });
          });
      }
    });
    var getParams = function() {
      // debugger
      var temp = $scope.queryParams;
      temp[temp.markId] = temp.queryName;
      return _.omit(temp, 'markId', 'queryName');
    };
    //选择
    $scope.queryProductConfig = {
      nameTypeData: [{
        markId: 'productName',
        desc: '商品'
      }, {
        markId: 'positionName',
        desc: '仓位'
      }, {
        markId: 'skuCode',
        desc: '商品编码'
      }],
      selectItem: function(item) {
        $scope.queryParams["markId"] = item.markId;
      }
    };

    var excelTemplate = $compile($templateCache.get(
      'product/productListExcelTemplate.html'))($scope);
    angular.element(document.getElementById('exportExcelWrap')).append(
      excelTemplate);
    $scope.selectedProductList = [];
    var checkInfo = function(data) {
      // debugger
      angular.forEach(data, function(item) {
        var t = _.findWhere($scope.selectedProductList, {
          id: item.id
        });
        if (t) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
      return data;
    };
    $scope.checkAllCfg = {
      flag: false
    };
    $scope.updateSelection = function(e, pro) {
      var isChecked;
      if (_.isObject(e)) {
        isChecked = e.currentTarget.checked;
      } else {
        isChecked = e;
      }
      pro.checked = isChecked;
      if (isChecked) {
        $scope.selectedProductList.push(pro);
      } else {
        $scope.checkAllCfg.flag = false;
        $scope.selectedProductList = _.without($scope.selectedProductList, pro);
      }
    };
    $scope.selectAllProduct = function(e, data) {
      var st = e.currentTarget.checked;
      angular.forEach(data, function(item) {
        if (item.checked !== st) {
          $scope.updateSelection(e.currentTarget.checked, item);
        }
      });
    };
    //回车键查询 
    $scope.productKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.productSearch();
      }
    };

    $scope.exportExcel = function() {
      if ($scope.selectedProductList.length) {
        orderService.formExcel('exportExcelWrap', '商品列表');
      } else {
        window.alert('请选择导出项');
      }
    };
    //查询 商品名称
    $scope.productSearch = function() {
      $scope.tableParams.settings({
        dataset: []
      });
    };
    //排序
    $scope.sort = function(item) {
      $scope.queryParams.sortType = item.sortCode;
      $scope.tableParams.settings({
        dataset: []
      });
    };
    //利润等级 筛选
    $scope.profitLevelFilter = {
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PROFIT_LEVEL',
          codeKey: 'profitLevel',
          valueKey: 'name',
          defaultObj: {
            '': '全部利润等级'
          }
        });
      },
      selectItem: function(item) {
        $scope.queryParams.profitLevel = item.profitLevel;
        $scope.tableParams.settings({
          dataset: []
        });
      }
    };
    //一级品类 筛选
    $scope.levelOneCategoryFilter = {
      list: [],
      defaultItem: {
        categoryName: '全部一级品类'
      },
      setList: function(list) {
        this.list = angular.copy(list);
        this.list.unshift(this.defaultItem);
      },
      selectItem: function(item) {
        $scope.queryParams.categoryId = item.id;
        $scope.tableParams.settings({
          dataset: []
        });
        $scope.levelTwoCategoryFilter.clearList();
        if (item.id) {
          productService.queryProductCategoryList({
            parentCategoryId: item.id
          }).then(function(res) {
            $scope.levelTwoCategoryFilter.setList(res);
          });
        }
      }
    };
    //二级品类 筛选
    $scope.levelTwoCategoryFilter = {
      list: [],
      defaultItem: {
        categoryName: '全部二级品类'
      },
      setList: function(list) {
        this.list = angular.copy(list);
        this.list.unshift(this.defaultItem);
      },
      clearList: function() {
        this.list = [];
      },
      selectItem: function(item) {
        $scope.queryParams.subCategoryId = item.id;
        $scope.tableParams.settings({
          dataset: []
        });
      }
    };
    //特殊标识 筛选
    $scope.productTagFilter = {
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PRODUCT_TAG',
          codeKey: 'productTag',
          valueKey: 'name',
          defaultObj: {
            '': '全部'
          }
        });
      },
      selectItem: function(item) {
        delete $scope.queryParams.productTags;
        if (item.productTag) {
          $scope.queryParams.productTags = [item.productTag];
        }
        $scope.tableParams.settings({
          dataset: []
        });
      }
    };
    //Modal
    $scope.productInitModal = function(templateUrl, size) {
      modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'product')),
        templateUrl: templateUrl,
        scope: $scope,
        size: size
      });
    };
    /*
     *管理品类
     */
    //初始化品类
    var categoryInit = function() {
      loadCategoryList(0);
    };
    //加载品类
    var loadCategoryList = function(parentCategoryId) {
      productService.queryProductCategoryList({
        parentCategoryId: parentCategoryId
      }).then(function(res) {
        if (!parentCategoryId) { //一级品类
          $scope.levelOneCategoryList = angular.copy(res);
          $scope.levelOneCategoryFilter.setList(res);
          if ($scope.levelOneCategoryList.length > 0) {
            $scope.selectedLevelOneCategory = $scope.levelOneCategoryList[
              0];
            loadCategoryList($scope.selectedLevelOneCategory.id);
          }
        } else { //二级品类
          $scope.levelTwoCategoryList = [];
          for (var i = 0; i < res.length / 2; i++) {
            var temp = [];
            temp.push(res[i * 2]);
            if (res[i * 2 + 1]) {
              temp.push(res[i * 2 + 1]);
            }
            $scope.levelTwoCategoryList.push(temp);
          }
        }
      });
    };
    $scope.levelOneCategoryManageList = function(item) {
      return item.id != '0';
    };
    //打开一级品类编辑框
    $scope.openLevelOneEditWin = function() {
      $scope.productInitModal('levelOneCategoryEdit', 'lg');
    };
    //创建品类
    $scope.createCategory = function(category, categoryLevel) {
      var params = {
        categoryName: category.categoryName,
        categoryLevel: categoryLevel,
        pickingValue: category.pickingValue
      }
      if (categoryLevel == CATEGORY_LEVEL.TWO) { //二级品类
        params.id = $scope.selectedLevelOneCategory.id;
      }
      productService.createProductCategory(params).then(function(res) {
        //新增后清空input
        category.categoryName = "";
        category.pickingValue = "";
        if (categoryLevel == CATEGORY_LEVEL.ONE) { //一级品类
          loadCategoryList(0);
        } else if (categoryLevel == CATEGORY_LEVEL.TWO) { //二级品类
          loadCategoryList($scope.selectedLevelOneCategory.id);
          $scope.addLevelTwo = {};
        }
      });
    };
    //修改品类
    $scope.modifyCategory = function(category, categoryLevel) {
      var params = {
        id: category.id,
        categoryName: category.categoryName,
        categoryLevel: categoryLevel,
        pickingValue: category.pickingValue
      }
      productService.modifyProductCategory(params).then(function(res) {
        if (categoryLevel == CATEGORY_LEVEL.ONE) { //一级品类
          loadCategoryList(0);
        } else if (categoryLevel == CATEGORY_LEVEL.TWO) { //二级品类
          loadCategoryList($scope.selectedLevelOneCategory.id);
        }
      });
    };
    //删除品类
    $scope.deleteCategory = function(category, categoryLevel) {
      if (confirm('是否确认删除该品类')) {
        productService.deleteProductCategory({
          id: category.id
        }).then(function(res) {
          if (categoryLevel == CATEGORY_LEVEL.ONE) { //一级品类
            loadCategoryList(0);
          } else if (categoryLevel == CATEGORY_LEVEL.TWO) { //二级品类
            loadCategoryList($scope.selectedLevelOneCategory.id);
          }
        });
      }
    };
    //选择一级品类
    $scope.selectLevelOne = function(index) {
      $scope.selectedLevelOneCategory = $scope.levelOneCategoryList[
        index];
      loadCategoryList($scope.selectedLevelOneCategory.id);
    };
    //初始化仓位
    var positionInit = function() {
      positionService.queryAllPositions().then(function(res) {
        $scope.productPositionData = res;
      });
    };
    //弹出管理品类
    $scope.categoryManageWin = function() {
      $scope.productInitModal('productCategoryManage');
      categoryInit();
    };
    /*
     * 商品的修改，编辑，保存，删除
     */
    //添加商品 新增/修改
    $scope.productEditWin = function(id) {
      labelsManagementService.getAllLabelList().then(function(labelRes) {
        $scope.labelList = labelRes;
        $scope.labelConfig.setList(labelRes);
      });
      //重置多选
      resetMultiSelect($scope.productPositionData);
      resetMultiSelect($scope.productTagsData);
      if (typeof id == 'undefined') { //新增模式
        $scope.product.reset();
        $scope.productLevelTwoCategoryConfig.reset();
        $scope.productInitModal('productEdit', 'lg');
      } else { //修改模式
        productService.getProductById({
          id: id
        }).then(function(res) {
          var data = productService._parseProductData(res, $scope.labelList);
          $scope.product = angular.extend($scope.product, data);
          _.each(data.positionIds, function(value, key) { //仓位 默认选中
            _.findWhere($scope.productPositionData, {
              id: value.id
            }).selected = true;
          });
          _.each(data.productTags, function(tagId) { //特殊标识 默认选中
            _.findWhere($scope.productTagsData, {
              code: tagId
            }).selected = true;
          });
          $scope.productInitModal('productEdit', 'lg');
        });
      }
    };
    //重置多选
    var resetMultiSelect = function(list) {
      _.each(list, function(item) {
        item.selected = false;
      });
    };
    //获取商品数据字典
    var loadProductDictionary = function(type) {
      productService.queryProductDictionary({
        type: type
      }).then(function(res) {
        switch (type) {
          case PRODUCT_DIC_TYPE.ORIGIN_PLACE:
            $scope.originPlaceList = res;
            break;
          case PRODUCT_DIC_TYPE.BRAND_AWARENESS:
            $scope.brandAwarenessList = res;
            break;
          case PRODUCT_DIC_TYPE.BRAND_GRADE:
            $scope.brandGradeList = res;
            break;
        }
      });
    };
    //利润
    $scope.profitLevelConfig = {
      getDefaultItem: function(value) {
        var options = this.getList();
        return _.findWhere(options, {
          profitLevel: value
        }) || {
          name: '无'
        };
      },
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PROFIT_LEVEL',
          hasDefault: false,
          codeKey: 'profitLevel',
          valueKey: 'name'
        });
      },
      selectItem: function(record) {
        if (typeof record.profitLevel != 'undefined') {
          $scope.product.profitLevel = record.profitLevel;
        }
      }
    };
    //原产地
    $scope.productOriginPlaceConfig = {
      getDefaultItem: function(value) {
        var options = $scope.originPlaceList;
        return _.findWhere(options, {
          id: value
        }) || {
          name: '无'
        };
      },
      selectItem: function(record) {
        $scope.product.originPlace = record.id;
      }
    };
    //品牌认知度
    $scope.productBrandAwarenessConfig = {
      getDefaultItem: function(value) {
        var options = $scope.brandAwarenessList;
        return _.findWhere(options, {
          id: value
        }) || {
          name: '无'
        };
      },
      selectItem: function(record) {
        $scope.product.brandAwareness = record.id;
      }
    };
    //品牌档次
    $scope.productBrandGradeConfig = {
      getDefaultItem: function(value) {
        var options = $scope.brandGradeList;
        return _.findWhere(options, {
          id: value
        }) || {
          name: '无'
        };
      },
      selectItem: function(record) {
        $scope.product.brandGrade = record.id;
      }
    };
    //一级品类 设置
    $scope.productLevelOneCategoryConfig = {
      getDefaultItem: function(value) {
        var options = $scope.levelOneCategoryList;
        return _.findWhere(options, {
          id: value
        }) || {
          categoryName: '无'
        };
      },
      selectItem: function(record) {
        // debugger
        if (record.id) {
          $scope.product.categoryId = record.id;
          productService.queryProductCategoryList({
            parentCategoryId: record.id
          }).then(function(res) {
            $scope.productLevelTwoCategoryConfig.setList(res);
          });
        }
      }
    };
    //二级品类 设置
    $scope.productLevelTwoCategoryConfig = {
      list: [],
      setList: function(list) {
        this.list = angular.copy(list);
      },
      getDefaultItem: function(value) {
        var options = this.list;
        if (options.length) {
          return _.findWhere(options, {
            id: value
          }) || {
            categoryName: '无'
          };
        } else {
          return value ? {
            categoryName: $scope.product.subCategoryName || '无',
          } : {
            categoryName: '无'
          };
        }
      },
      selectItem: function(record) {
        $scope.product.subCategoryId = record.id;
      },
      reset: function() {
        this.list = [];
      }
    };
    //标签 设置
    $scope.labelConfig = {
      lineslist: [],
      setList: function(list) {
        this.lineslist = [];
        for (var i = 0; i < list.length / 3; i++) {
          var temp = [];
          for (var j = 0; j < 3; j++) {
            if (list[i * 3 + j]) {
              var r = list[i * 3 + j];
              r.parentIndex = i * 3 + j;
              _.each(r.entries, function(item) {
                item.parentIndex = i * 3 + j;
              });
              temp.push(r);
            }
          }
          this.lineslist.push(temp);
        }
      },
      getDefaultItem: function(value, index) {
        var options = $scope.labelList[index].entries;
        return _.findWhere(options, {
          id: value
        }) || {
          name: '无'
        };
      },
      selectItem: function(record) {
        var t = _.reject($scope.product.labelDtos, function(item) {
          return item.type == record.type;
        });
        $scope.product.labelDtos = t;
        $scope.product.labelDtos.push(record);
      }
    };
    //进货 过期 损耗
    $scope.typeStr = '';
    $scope.tipStr = '';
    $scope.modalModifystock = function(strId, size, typeStr) {
      switch (typeStr) {
        case 'add': //1
          $scope.product.stockDeltaType = CONSTANTS.STOCK_MODIFY_TYPE.IMPORT;
          break;
        case 'expire': //4
          $scope.product.stockDeltaType = CONSTANTS.STOCK_MODIFY_TYPE.EXPIRE;
          break;
        case 'waste': //6
          $scope.product.stockDeltaType = CONSTANTS.STOCK_MODIFY_TYPE.WASTE;
          break;
      }
      $scope.typeStr = typeStr;
      $scope.tipStr = CONSTANTS.STOCK_MODIFY_TYPE.DESC[$scope.product.stockDeltaType];
      $scope.productInitModal(strId, size);
    };
    $scope.operateStock = function(data) {
      var stock = $scope.product.stock;
      if ($scope.product.stockDeltaType == CONSTANTS.STOCK_MODIFY_TYPE.IMPORT) {
        $scope.product.stock = $scope.product.stock + data;
        $scope.product.stockDelta = data;
      } else {
        if (stock < data) {
          window.alert('库存不够！请调整输入数据！');
          return;
        }
        $scope.product.stock = $scope.product.stock - data;
        $scope.product.stockDelta = -data;
      }
      this.$close();
    };
    //保存商品
    $scope.productSave = function(product) {
      var me = this;
      var errorMsg = $scope.product.checkComplete();
      if (errorMsg.length) {
        alert(errorMsg);
        return;
      }
      //仓位
      product.positionIds = _.pluck(product.positionOutPutData, 'id');
      //标签
      product.labelIdList = _.pluck(product.labelDtos, 'id');
      //特殊标识
      product.productTags = _.pluck(product.selectProductTagsData,
        'code');
      var saveParams = angular.copy(product);
      saveParams.originPrice = utilService.getPointInt(saveParams.originPrice);
      saveParams.price = utilService.getPointInt(saveParams.price);
      if (saveParams.id) {
        productService.saveOldProduct(saveParams).then(function() {
          $scope.tableParams.reload();
          me.$close();
        });
      } else {
        saveParams.stockAlarm = 999999;
        saveParams.intro = '-';
        saveParams.detail = '-';
        saveParams.imgs = ['-'];
        productService.saveNewProduct(saveParams).then(function() {
          $scope.tableParams.reload();
          me.$close();
        });
      }
    };
    //删除商品
    $scope.deleteForm = {};
    $scope.productDeleteWin = function(id) {
      $scope.deleteForm = {};
      $scope.deleteForm.productId = id;
      $scope.productInitModal('productDelete');
    };
    $scope.productDeleteSave = function() {
      var me = this;
      productService.deleteProduct({
        id: $scope.deleteForm.productId
      }).then(function() {
        $scope.tableParams.reload();
        me.$close();
      });
    };
    $scope.showBigImage = function(cover) {};
    $scope.inputData = [{
      name: 'Opera'
    }, {
      name: 'Internet Explorer'
    }, {
      name: 'Firefox'
    }];
    $scope.localLang = {
      selectAll: "全选",
      selectNone: "全不选",
      reset: "重置",
      search: "输入关键字搜索",
      nothingSelected: "无"
    };
    categoryInit();
    positionInit();
    //原产地
    loadProductDictionary(PRODUCT_DIC_TYPE.ORIGIN_PLACE);
    //品牌认知度
    loadProductDictionary(PRODUCT_DIC_TYPE.BRAND_AWARENESS);
    //品牌档次
    loadProductDictionary(PRODUCT_DIC_TYPE.BRAND_GRADE);
    /**
     * 按编码排序
     * @param item
     */
    $scope.sortByPosition = function(item) {
      $scope.queryParams.sortType = item.sortCode;
      $scope.tableParams.settings({
        dataset: []
      });
    };
    $scope.productStockChangeLogPanel;
    $scope.productStockChangeLogs = [];
    $scope.productStockChangeLogId;
    var stockChangeLogLimit = 10;
    $scope.productStockChangeLogTable = new NgTableParams({
      count: stockChangeLogLimit
    }, {
      counts: [],
      getData: function(params) {
        var p = {};
        var offset = stockChangeLogLimit * (params.page() - 1);
        p = {
          offset: offset,
          limit: stockChangeLogLimit,
          id: $scope.productStockChangeLogId
        };
        return productService.getProductStockChangeLog(p).then(
          function(res) {
            $scope.productStockChangeLogs = res.content;
            params.total(res.totalElements);
            return utilService.indexArray(res.content, offset +
              1);
          });
      }
    });;
    //库存修改记录
    $scope.showProductStockChangeLog = function(product, e) {
      e.stopPropagation();
      e.preventDefault();
      $scope.productStockChangeLogId = product.id;
      $scope.productInitModal('modal-productstockchangelogpanel', 'md');
    };
    $scope.product = {
      id: '',
      skuCode: '',
      productName: '',
      net: '',
      netUnit: '',
      profitLevel: '',
      originPlace: '',
      originPrice: '',
      price: '',
      expiryDate: '',
      brandAwareness: '',
      brandGrade: '',
      categoryId: '',
      subCategoryId: '',
      labelIdList: [],
      showLabelIdList: [],
      labelDtos: [],
      stock: 0,
      cover: '',
      reset: function() {
        this.id = '';
        this.skuCode = '';
        this.productName = '';
        this.net = '';
        this.netUnit = '';
        this.profitLevel = '';
        this.originPlace = '';
        this.originPrice = '';
        this.price = '';
        this.expiryDate = '';
        this.brandAwareness = '';
        this.brandGrade = '';
        this.categoryId = '';
        this.subCategoryId = '';
        this.labelIdList = [];
        this.showLabelIdList = [];
        this.labelDtos = [];
        this.stock = 0;
        this.cover = '';
      },
      checkComplete: function() {
        var errorMsg = "";
        if (typeof this.profitLevel == 'undefined') {
          errorMsg = '请选择利润等级';
        } else if (!this.originPlace) {
          errorMsg = '请选择原产地';
        } else if (!this.brandAwareness) {
          errorMsg = '请选择品牌认知度';
        } else if (!this.brandGrade) {
          errorMsg = '请选择品牌档次';
        } else if (!this.categoryId) {
          errorMsg = '请选择品类';
        }
        return errorMsg;
      }
    }
  });
};
