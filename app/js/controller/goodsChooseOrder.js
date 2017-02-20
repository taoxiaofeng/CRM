/*选品单*/
module.exports = function(app) {
  app.controller('goodsChooseOrderCtrl', function($scope, $state, $compile,
    $templateCache, CONSTANTS, modalService, utilService,
    goodsChooseService, NgTableParams, printService, shelfService) {
    $scope.ORDER_STATE = CONSTANTS.GOODSCHOOSE_ORDER_STATE;
    var ORDER_STATE = CONSTANTS.GOODSCHOOSE_ORDER_STATE;
    $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    $scope.orderStates = CONSTANTS.getList('GOODSCHOOSE_ORDER_STATE');
    $scope.curOrderState = $scope.orderStates[0];


    $scope.queryParams = {};
    $scope.offset = 0;
    $scope.limit = 10000;

    $scope.recordParams = {};

    $scope.setOrderTable = function() {
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
            orderStates: $scope.curOrderState.code != -1 ? [
              $scope.curOrderState.code
            ] : [ORDER_STATE.WAIT_VERIFY, ORDER_STATE.VERIFIED]
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
    //切换订单状态
    $scope.selectOrderState = function(item) {
      $scope.curOrderState = item;
      $scope.setOrderTable();
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
    //查看选购单明细
    $scope.checkOrderDetail = function(order) {
      getOrderDetail({
        orderId: order.orderId,
        didLoadData: function(res) {
          $scope.orderModal = modalService.initModal({
            appendTo: angular.element(document.getElementsByClassName(
              'goods-choose-order')),
            scope: $scope,
            templateUrl: 'goodsChooseOrder/goodsChooseOrderTemplate.html'
          });
        }
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
    //打印
    $scope.print = function() {
      $scope.$applyAsync(function() {
        printService.printByDefaultPrinter($(
          '#goods-choose-order-table').parent().html());
      });
    };
    //批量打印
    $scope.batchPrint = function() {

    };
    //取消此单
    $scope.cacelOrder = function(order) {
      openRecordModal(order, CONSTANTS.GOODSCHOOSE_ORDER_STATE.SYS_CANCLED);
    };
    //接收
    $scope.receiveOrder = function(order) {
      openRecordModal(order, CONSTANTS.GOODSCHOOSE_ORDER_STATE.VERIFIED);
    };
    //创建选购单
    $scope.createPickOrder = function(order) {

      shelfService.queryShelfListByCompanyId({
        companyId: order.companyId
      }).then(function(res) {
        if (res.length) {
          window.location.href = '#deliveryEdit/0/' + order.orderId;
        } else {
          alert('该企业暂无货架，无法创建拣货单!');
        }
      });

    };
    //打开客满备注 填写框
    var openRecordModal = function(order, recordType) {
      $scope.recordParams.type = recordType;
      $scope.recordParams.orderId = order.orderId;
      $scope.recordParams.optRecord = '';
      $scope.recordModal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'goods-choose-order')),
        scope: $scope,
        templateUrl: 'modalRecord'
      });
    };
    //客满备注 确定
    $scope.confirmRecord = function(params) {
      goodsChooseService.modifyOrderState({
        orderId: params.orderId,
        orderState: params.type,
        optRecord: params.optRecord
      }).then(function(res) {
        $scope.orderModal.close();
        $scope.recordModal.close();
        $scope.orderTable.reload();
      });
    };
  });


};