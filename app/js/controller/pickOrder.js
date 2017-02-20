module.exports = function(app) {
  app.controller('pickOrderCtrl', function($scope, $timeout, $interpolate,
    $compile, $templateCache, $mdDialog, NgTableParams, printService,
    orderService, CONSTANTS, utilService, modalService) {
    $scope.CONSTANTS = CONSTANTS;
    $scope.DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
    $scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
    $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    var DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
    var DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
    var COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    var offset = 0;
    var limit = 10000;
    var curActiveTab = 0;

    $scope.utilService = utilService;
    $scope.order;
    $scope.operateOrderQueryParams = {};
    $scope.warehouseOrderQueryParams = {};
    $scope.warehouseOrderStates = [{ desc: '所有状态', orderState: -1 }, {
      desc: DELIVERY_STATE
        .DESC[DELIVERY_STATE.WAIT_PICK],
      orderState: DELIVERY_STATE.WAIT_PICK
    }, {
      desc: DELIVERY_STATE.DESC[DELIVERY_STATE.PICKING],
      orderState: DELIVERY_STATE
        .PICKING
    }];
    $scope.curOrderState = $scope.warehouseOrderStates[0];

    $scope.operateOrdersTableParams = new NgTableParams({ count: limit }, {
      counts: []
    });
    $scope.warehouseOrdertableParams = new NgTableParams({ count: limit }, {
      counts: []
    });
    //删除 拣货单
    $scope.deleteDeliveryOrder = function(orderId) {
      if (confirm('您是否确认删除该单据?')) {
        var params = { 'orderId': orderId };
        orderService.deleteDeliveryOrder(params).then(function(res) {
          alert('删除成功');
          $scope.searchOperateOrders($scope.queryParams);

        });
      }
    };
    //查询 运营单据
    $scope.searchOperateOrders = function(queryParams) {
      $scope.operateOrderQueryParams = queryParams || $scope.operateOrderQueryParams;
      var params = {
        offset: offset,
        limit: limit,
        orderStates: [DELIVERY_STATE.INIT, DELIVERY_STATE.RETURN_INIT],
        companyId: $scope.operateOrderQueryParams.companyId
      };
      orderService.queryDeliveryList(params).then(function(res) {
        $scope.operateOrdersTableParams.settings({
          dataset: res.content
        });
      });
    };
    //清空运营页卡下的公司搜索
    $scope.emptyCompanySearchInOperate = function() {
      delete $scope.operateOrderQueryParams.companyId;
      $scope.searchOperateOrders();
    };

    //查询 仓库单据
    $scope.searchWarehouseOrders = function(queryParams) {
      queryParams = queryParams || {};
      if (queryParams.orderStates) {
        $scope.warehouseOrderQueryParams.orderStates = queryParams.orderStates;
      } else if (queryParams.companyId) {
        $scope.warehouseOrderQueryParams.companyId = queryParams.companyId;
      } else {
        $scope.warehouseOrderQueryParams = {};
      }
      var params = {
        offset: offset,
        limit: limit,
        orderStates: $scope.warehouseOrderQueryParams.orderStates || [
          DELIVERY_STATE.WAIT_PICK, DELIVERY_STATE.PICKING
        ],
        companyId: $scope.warehouseOrderQueryParams.companyId
      };
      orderService.queryDeliveryList(params).then(function(res) {
        $scope.warehouseOrdertableParams.settings({
          dataset: res.content
        });
      });
    };
    //清空仓库页卡下的公司搜索
    $scope.emptyCompanySearchInWarehouse = function() {
      delete $scope.warehouseOrderQueryParams.companyId;
      $scope.searchWarehouseOrders();
    };
    //当前记录行是否需要高亮
    $scope.shouldRowHighlight = function(order) {
      return parseInt(order.returnTimes);
    };
    $scope.tabActive = function(tabIndex) {
      curActiveTab = tabIndex;
      switch (tabIndex) {
        case 0:
          $scope.searchOperateOrders();
          break;
        case 1:
          $scope.curOrderState = $scope.warehouseOrderStates[0];
          $scope.searchWarehouseOrders();
          break;
      }
    };
    //根据拣货单状态 查询
    $scope.selectWarehouseOrderState = function(item) {
      if (!item.orderState) {
        return;
      }
      var orderStates = item.orderState > 0 ? [item.orderState] : [
        DELIVERY_STATE.WAIT_PICK, DELIVERY_STATE.PICKING
      ];
      $scope.searchWarehouseOrders({ orderStates: orderStates });

    };
    //选中拣货单
    $scope.selectPickOrder = function(order) {
      order.selected = !order.selected;
    };
    //打开拣货单详情
    $scope.openPickOrderModal = function(orderId, e) {
      e.stopPropagation();
      getPickOrderDetail({
        orderId: orderId,
        didLoadData: function() {
          $scope.pickOrderModal = modalService.initModal({
            appendTo: angular.element(document.getElementsByClassName(
              'pick-order')),
            scope: $scope,
            templateUrl: 'pickOrder/pickOrderTemplate.html',
            size: 'lg'
          });
        }
      });
    };
    $scope.filterItems = function(item) {
      return item.itemType != 3;
    };

    //打开退回理由 填写框
    $scope.openReturnReasonModal = function() {
      $scope.returnReasonModal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'pick-order')),
        scope: $scope,
        templateUrl: 'modalReturnReason'
      });
    };
    //填完退回理由 确认
    $scope.confirmReturn = function(returnParams) {
      returnParams.orderId = $scope.order.orderId;
      returnParams.orderState = DELIVERY_STATE.RETURN_INIT;
      orderService.modifyDeliveryState(returnParams).then(function(res) {
        $scope.pickOrderModal.close();
        $scope.returnReasonModal.close();
        $scope.tabActive(curActiveTab);
      });
    };
    //打印
    $scope.printPickOrder = function(scope, orderId) {
      $mdDialog.show($mdDialog.confirm({
        title: '提示',
        textContent: '是否确认打印并开始拣货？',
        ok: '确认',
        cancel: '取消'
      })).then(function() {
        var params = { orderState: DELIVERY_STATE.PICKING };
        if (orderId) {
          params.orderId = orderId;
        } else {
          params.orderId = $scope.order.orderId;
        }
        orderService.modifyDeliveryState(params).then(function(res) {
          var html = '';
          $scope.pickOrderModal && $scope.pickOrderModal.close();
          $scope.tabActive(curActiveTab);
          //打印
          var s = scope.$new();
          var temp;
          s.printOrder = scope.order;
          s.printOrder.productList = [];
          _.each(s.printOrder.items, function(item) {
            item.positionStr = _.pluck(item.positions,
              'name').join('<br/>');
            if (item.itemType != 3) {
              s.printOrder.productList.push(item);
            }
          });
          temp = angular.element('<div></div>').append(scope.compilePrintTemplate(
            s));
          scope.$applyAsync(function() {
            console.log(temp[0].innerHTML);
            printService.printByDefaultPrinter(temp[0].innerHTML,
              false);
          });
        });
      });
    };
    $scope.printPickOrderInTable = function(scope, order) {
      if (order.orderState == DELIVERY_STATE.WAIT_PICK) { //待捡货
        $scope.printPickOrder(scope, order.orderId);
      } else {
        $scope.batchPrint(scope, [order.orderId]);
      }
    };
    //确认出库
    $scope.confirmPicking = function() {
      var params = {
        orderState: DELIVERY_STATE.WAIT_COMFIRM,
        orderId: $scope.order.orderId,
        companyId: $scope.order.companyId
      };
      orderService.modifyDeliveryState(params).then(function() {
        $scope.pickOrderModal.close();
        $scope.tabActive(curActiveTab);
        // //打印
        // orderService.getCompiledDeliveryOrder({
        //     orderId: $scope.order.orderId,
        //     scope: $scope,
        //     success: function(temp) {
        //         $scope.$applyAsync(function() {
        //             printService.printByDefaultPrinter(temp.find('table').parent().html());
        //         });
        //     }
        // });
      });
    };
    //批量打印
    $scope.compilePrintTemplate = function(scope) {
      return $compile($templateCache.get('print/pickOrderTemplate.html'))
        (scope);
    };
    $scope.compileDeliveryTemplate = function(scope) {
      return $compile($templateCache.get(
        'order/deliveryOrderTemplate.html'))(scope);
    };
    $scope.batchPrint = function(scope, orderIds) {
      if ($scope.selectOrders.length == 0) {
        alert('请先选择需要处理的单据');
        return;
      }
      //获取批量选中节点
      //请求批量拣货单详情
      var params = {
        orderIds: [],
        orderState: DELIVERY_STATE.WAIT_COMFIRM
      };
      if (orderIds && orderIds.length) {
        params.orderIds = orderIds;
      } else {
        params.orderIds = _.pluck(_.where($scope.warehouseOrdertableParams
          .data, { selected: true }), 'orderId');
      }
      params.offset = 0;
      params.limit = params.orderIds.length;
      orderService.queryDeliveryDetailList(params).then(function(res) {
        //回调编译模板
        var orders = res.content;
        var temps = [];
        angular.forEach(orders, function(order) {
          var t;
          var s = scope.$new(true);
          s.DELIVERY_URGENCY = DELIVERY_URGENCY;
          s.COMPANY_TYPE = COMPANY_TYPE;
          s.utilService = utilService;
          s.printOrder = order;
          s.printOrder.productList = [];
          _.each(s.printOrder.items, function(item) {
            item.positionStr = _.pluck(item.positions,
              'name').join('<br/>');
            if (item.itemType != 3) {
              s.printOrder.productList.push(item);
            }
          });
          t = angular.element('<div></div>').append(scope.compilePrintTemplate(
            s));
          temps.push(t);
        });
        scope.$applyAsync(function() {
          var temp = [];
          angular.forEach(temps, function(item) {
            console.log(item[0].innerHTML);
            temp.push(item[0].innerHTML);
          });
          printService.printByDefaultPrinter(temp);
        });
      });
    };
    //批量切换状态
    $scope.batchModifyState = function() {
      if ($scope.selectOrders.length == 0) {
        alert('请先选择需要处理的单据');
        return;
      }
      var f = $scope.selectOrders[0];
      var r = _.find($scope.selectOrders, function(item) {
        return item.orderState != f.orderState;
      });
      if (r) {
        alert('拣货单状态不同，无法批量处理');
        return;
      }
      var confirmContent = f.orderState == DELIVERY_STATE.WAIT_PICK ?
        '是否确认所选拣货单开始拣货?' :
        '是否确认所选拣货单商品已出库，并切换为送货单?';

      if (confirm(confirmContent)) {
        orderService.batchUpdateDeliveryOrderState({
          orderIds: _.pluck($scope.selectOrders, 'orderId')
        }).then(function() {
          $scope.tabActive(curActiveTab);
        });
      }

    };
    //获取拣货单详情
    var getPickOrderDetail = function(opts) {
      orderService.queryDeliveryDetail({ orderId: opts.orderId }).then(
        function(res) {
          debugger
          $scope.order = res;
          $scope.order.name = '拣货单' + '-' + $scope.order.companyName +
            '-' + $scope.order.shelfName + '(' + utilService.parseTimeByLong(
              $scope.order.updateTime, 'yyyyMMddhhmmss') + ')';
          opts.didLoadData();
        });
    };
    //详情页面 导出
    $scope.exportExcelOnDetail = function() {
      var dom = angular.element('<a></a>');
      dom[0].href = $('#pick-order-table').excelexportjs({
        containerid: 'pick-order-table',
        datatype: 'table',
        returnUri: 'true'
      });
      dom[0].download = $scope.order.name + '.xls';
      dom[0].click();
    };
    //未加载详情页面的情况下 导出
    $scope.exportExcelNeedLoadDetail = function(orderId, e) {
      e.stopPropagation();

      var excelTemplate = $compile($templateCache.get(
        'pickOrder/pickOrderTemplate.html'))($scope);
      angular.element(document.getElementById('exportExcelWrap')).append(
        excelTemplate);
      getPickOrderDetail({
        orderId: orderId,
        didLoadData: function() {
          $scope.$applyAsync(function() {
            var dom = angular.element('<a></a>');
            dom[0].href = $('#pick-order-table').excelexportjs({
              containerid: "pick-order-table",
              datatype: 'table',
              returnUri: 'true'
            });
            dom[0].download = $scope.order.name + '.xls';
            dom[0].click();
          });
        }
      });
    };
    $scope.$watch('warehouseOrdertableParams.data', function(newValue,
      oldValue) {
      $scope.selectOrders = _.where($scope.warehouseOrdertableParams.data, { selected: true });
    }, true);
  });
}