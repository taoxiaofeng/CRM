module.exports = function(app) {
  app.controller('deadStock', function($scope, $mdPanel, productService,
    utilService, NgTableParams, modalService, CONSTANTS, positionService,
    deadStockService) {
    $scope.CONSTANTS = CONSTANTS;
    var CATEGORY_LEVEL = CONSTANTS.CATEGORY_LEVEL;
    var PRODUCT_DIC_TYPE = CONSTANTS.PRODUCT_DIC_TYPE;
    //表格设置
    $scope.queryParams = {
      productName: ''
    };
    $scope.offset = 0;
    $scope.limit = 20;
    $scope.deadStockProductList = [];
    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: []
    });
    $scope.getDeadStockProductList = function(sortType) {
      var params = {
        productName: $scope.queryParams.productName
      };
      if (sortType) {
        params.sortType = sortType;
      }
      deadStockService.getDeadStockProductList(params).then(function(res) {
        $scope.deadStockProductList = res.list;
        $scope.tableParams.settings().dataset = $scope.deadStockProductList;
        $scope.tableParams.reload();
      });
    };
    $scope.delDeadStockProduct = function(product) {
      deadStockService.removeDeadStockProduct({
        productId: product.id
      }).then(function() {
        $scope.getDeadStockProductList();
      });
    };
    $scope.sort = function(sortObj, sortType) {
      var sortCode = sortObj.sortCode;
      var r;
      switch (sortType) {
        case 'price':
          r = sortCode * 1;
          break;
        case 'overStockRate':
          r = sortCode * 5;
          break;
        case 'distribShelfCount':
          r = sortCode * 6;
          break;
        case 'reBuyRateDeviate':
          r = sortCode * 8;
          break;
        case 'shipmentRateDeviate':
          r = sortCode * 10;
          break;
        case 'salesCountAvg':
          r = sortCode * 11;
          break;
        case 'salesFeeAvg':
          r = sortCode * 12;
          break;
        case 'stock':
          r = sortCode * 13;
          break;
      }
      $scope.getDeadStockProductList(r);
    };
    $scope.getDeadStockProductList();
  });
};
