module.exports = function(app) {
  app.controller('newProductRecommendCtrl', function($scope, newProductService, NgTableParams, modalService, newProductService,  productService, $element, $compile, $templateCache, utilService, CONSTANTS) {
    $scope.labelList = [];
    $scope.product = {};
    $scope.profitLevel = CONSTANTS.PROFIT_LEVEL;
    $scope.newProductsQueryParams = {};
    $scope.cateotyList = [];
    $scope.lastUpdateTime = ''; // 销售数据更新于

    //表格设置
    $scope.queryParams = {};
    $scope.offset = 0;
    $scope.limit = 20;
    var tmpPutSaleObj = {};

    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function(params) {
        $scope.offset = $scope.limit * (params.page() - 1);
        var search = getParams();
        search.offset = $scope.offset;
        search.limit = $scope.limit;
        return newProductService.queryProductByKey(search).then(function(res) {
          $scope.lastUpdateTime = res.lastUpdateTime;
          return newProductService.indexData(res.list, $scope.offset + 1);
        });
      }
    });
    var getParams = function() {
      var temp = $scope.queryParams;
      temp[temp.markId] = temp.queryName;
      return _.omit(temp, 'markId', 'queryName');
    };
    //选择
    $scope.queryProductConfig = {
      nameTypeData: [{
        markId: 'productName', desc: '商品'
      }, {
        markId: 'skuCode', desc: '商品编码'
      }],
      selectItem: function(item) {
        $scope.queryParams["markId"] = item.markId;
      }
    };

    //回车键查询
    $scope.productKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.productSearch();
      }
    };
    //查询 商品名称
    $scope.productSearch = function() {
      $scope.tableParams.settings({
        dataset: []
      });
    };

    // 选中几条数据进行导出excel
    // 下面代码为导出Excel做准备
    var excelTemplate = $compile($templateCache.get('product/newProductTableTemplate.html'))($scope);
    angular.element(document.getElementById('exportExcelWrap')).append(excelTemplate);

    $scope.selectedProductList = []; //选中的商品列表
    $scope.updateSelection = function(e, product) {
      var isChecked = _.isObject(e) ? e.currentTarget.checked : e;
      product.checked = isChecked;
      if (isChecked) {
        $scope.selectedProductList.push(product);
      } else {
        $scope.selectedProductList = _.without($scope.selectedProductList,
          product);
      }
    };

    // 导出excel
    $scope.exportExcel = function () {
      if (!$scope.selectedProductList.length) {
        utilService.alertError('请先选择需导出的新品');
        return;
      }
      var dom = angular.element('<a></a>');
      dom[0].href = $('#export-company-table').excelexportjs({
        containerid: 'export-company-table',
        datatype: 'table',
        returnUri: 'true'
      });
      dom[0].download = '新品推荐列表.xls';
      dom[0].click();
    };

    // 添加新品，参考拣货单
    $scope.openAddModal = function (templateUrl) {
      $scope.addModel = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName('product')),
        templateUrl: templateUrl,
        scope: $scope,
        size: 'lg'
      });

      $scope.newProductsQueryParams = {};
      setNewProductsTable();
      queryProductCategoryList();
    };

    //查询商品类别列表
    var queryProductCategoryList = function() {
      productService.queryProductCategoryList().then(function(res) {
        $scope.cateotyList = [{
          code: '-1',
          desc: "全部品类"
        }];
        angular.forEach(res, function(category, index) {
          var item = { 'code': category.id, 'desc': category.categoryName };
          $scope.cateotyList.push(item);
        });
      });
    };
    $scope.profitList = CONSTANTS.getList({
      clsOrName: 'PROFIT_LEVEL',
      defaultObj: { '-1': '全部利润等级' }
    });

    // 新品上架modal中的表格数据
    var setNewProductsTable = function() {
      $scope.offset2 = 0;
      $scope.limit2 = 10;
      $scope.newProdcutsTable = new NgTableParams({
        count: $scope.limit2
      }, {
        counts: [],
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
        getData: function(params) {
          // 每次取重新渲染表格的时候，清楚之前选择的数据
          $scope.selectedProducts = [];
          return newProductService.queryAllProduct({
            offset: $scope.limit2 * (params.page() - 1),
            limit: $scope.limit2,
            productTags: [-1], // 查询商品库中非新品的商品
            productName: $scope.newProductsQueryParams.productName,
            categoryId: $scope.newProductsQueryParams.categoryId,
            profitLevel: $scope.newProductsQueryParams.profitLevel,
            isDeleted: 0
          }).then(function(res) {
            params.total(res.totalElements);
            return newProductService._parseOtherShelfProducts(res.content,
              _.keys(tmpPutSaleObj));
          });
        }
      });
    };

    //商品选择
    $scope.selectedProducts = [];
    $scope.chkboxChange = function(product) {
      var productId = product.id;
      if (product.select) {
        $scope.selectedProducts.push(productId);
      } else {
        $scope.selectedProducts = _.without($scope.selectedProducts, productId);
      }
    };

    //品类选择
    $scope.selectCategoryCallback = function(item) {
      if (item.code) {
        item.code !== '-1' ? $scope.newProductsQueryParams.categoryId =
            item.code : $scope.newProductsQueryParams.categoryId =
            undefined;
        setNewProductsTable();
      }
    };
    //利润等级选择
    $scope.selectProfitCallback = function(item) {
      if (item.code) {
        item.code !== '-1' ? $scope.newProductsQueryParams.profitLevel =
            item.code : $scope.newProductsQueryParams.profitLevel =
            undefined;
        setNewProductsTable();
      }
    };
    //搜索商品
    $scope.searchProduct = function(queryParams) {
      $scope.newProductsQueryParams.productName = queryParams.productName;
      setNewProductsTable();
    };
    $scope.keyPressSearchProduct = function(e, queryParams) {
      if (e.keyCode == 13) { //回车键
        $scope.searchProduct(queryParams);
      }
    };

    // 确认添加新品
    $scope.confirmAddNewProduct = function () {
      newProductService.addNewProducts({
        productIds: $scope.selectedProducts
      }).then(function (res) {
        $scope.tableParams.reload();
        $scope.addModel.close();
      });
    };

    // 删除新品
    $scope.deleteForm = {};
    $scope.deleteNewProduct = function(id) {
      $scope.deleteForm = {};
      $scope.deleteForm.productId = id;
      modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName('product')),
        templateUrl: 'newProductDelete',
        scope: $scope
      });
    };
    $scope.newProductDeleteSave = function() {
      var me = this;
      newProductService.deleteNewProduct({
        id: $scope.deleteForm.productId
      }).then(function() {
        $scope.tableParams.reload();
        me.$close();
      });
    };

    // 切换新品推荐中 1，待推荐状态 0，
    $scope.toggleProductStatus = function (proId, newRecommend) {
      newRecommend = newRecommend == 1 ? 0 : 1;
      newProductService.changeNewProductStatus({
        id: proId,
        newRecommend: newRecommend
      }).then(function () {
        $scope.tableParams.reload();
      })
    };

    $scope.product = {
      id: '',
      productName: '',
      categoryId: '',
      skuCode: '',
      price: '',
      recommendTimes: '', // 推荐次数
      recommendRate: '', // 推荐拣货率
      deliveryBackRate: '',
      shipmentRate: '',
      stock: '',
      availableStock: '',

      reset: function() {
        this.id = '';
        this.productName = '';
        this.categoryId = '';
        this.skuCode = '';
        this.price = '';
        this.recommendTimes = '';
        this.recommendRate = '';
        this.deliveryBackRate = '';
        this.shipmentRate = '';
        this.stock = '';
        this.availableStock = '';
      }
    }
  });
};