/*选品单历史*/
module.exports = function(app) {
  app.controller('goodsChooseHistoryCtrl', function($scope, $compile,
    $templateCache, CONSTANTS, modalService, utilService, NgTableParams,
    goodsChooseService) {
    $scope.ORDER_STATE = CONSTANTS.GOODSCHOOSE_ORDER_STATE;
    $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    $scope.orderStates = CONSTANTS.getList('GOODSCHOOSE_ORDER_STATE');
    $scope.curOrderState = $scope.orderStates[0];

    $scope.queryParams = {};
    $scope.offset = 0;
    $scope.limit = 10;

    $scope.setOrderTable = function(queryParams) {
      $scope.queryParams.startTime = $scope.queryParams.startTime;
      $scope.queryParams.endTime = $scope.queryParams.endTime;
      $scope.orderTable = new NgTableParams({
        count: $scope.limit
      }, {
        counts: [],
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
        getData: function(params) {
          return goodsChooseService.queryManagerOrderList({
            offset: (params.page() - 1) * $scope.limit,
            limit: $scope.limit,
            companyId: $scope.queryParams.companyId,
            startTime: $scope.queryParams.startTime ? $scope.queryParams
              .startTime.getTime() : null,
            endTime: $scope.queryParams.endTime ? $scope.queryParams
              .endTime.getTime() : null,
            orderStates: [$scope.ORDER_STATE.FINISH, $scope.ORDER_STATE
              .SYS_CANCLED
            ]
          }).then(function(res) {
            params.total(res.totalElements);
            return res.content;
          });
        }
      });

    };
    $scope.setOrderTable();

    //根据企业搜索
    $scope.searchByCompany = function(company) {
      $scope.queryParams.companyId = company.companyId;
      $scope.setOrderTable();
    };
    //清空企业搜索
    $scope.emptyCompanySearch = function() {
      delete $scope.queryParams.companyId;
    };
    //获取选购单详细
    var getOrderDetail = function(opts) {
      goodsChooseService.queryManagerOrderDetail({
        orderId: opts.orderId
      }).then(function(res) {
        $scope.order = res;
        $scope.order.name = '选购单' + '-' + res.companyName + '(' +
          utilService.parseTimeByLong(res.createTime,
            "yyyyMMddhhmmss") + ')';
        opts.didLoadData(res) || function() {

        };
      });
    };
    //查看选购单详细
    $scope.checkOrderDetail = function(order) {
      getOrderDetail({
        orderId: order.orderId,
        didLoadData: function(res) {
          $scope.orderModal = modalService.initModal({
            appendTo: angular.element(document.getElementsByClassName(
              'goods-choose-history')),
            scope: $scope,
            templateUrl: 'goodsChooseOrder/goodsChooseOrderTemplate.html'
          });
        }
      });
    };
    //打印
    $scope.print = function() {
      $scope.$applyAsync(function() {
        printService.printByDefaultPrinter($(
          '#goods-choose-order-table').parent().html());
      });
    };
    //详情页面导出Excel
    $scope.exportExcelOnDetail = function() {
      $scope.uri = $("#goods-choose-order-table").excelexportjs({
        containerid: 'goods-choose-order-table',
        datatype: 'table',
        returnUri: 'true'
      });
    };
    //在列表中导出Excel
    $scope.exportExcelOnList = function(order) {
      var excelTemplate = $compile($templateCache.get(
        'goodsChooseOrder/goodsChooseOrderTemplate.html'))($scope);
      angular.element(document.getElementById('exportExcelWrap')).append(
        excelTemplate);

      getOrderDetail({
        orderId: order.orderId,
        didLoadData: function(res) {
          $scope.$applyAsync(function() {
            var dom = angular.element('<a></a>');
            dom[0].href = $('#goods-choose-order-table').excelexportjs({
              containerid: "goods-choose-order-table",
              datatype: 'table',
              returnUri: 'true'
            });
            dom[0].download = $scope.order.name + '.xls';
            dom[0].click();
          });
        }
      });
    };
  });
}