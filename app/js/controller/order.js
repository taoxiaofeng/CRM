module.exports = function(app) {
    app.controller('orderCtrl', function($scope, $compile, $templateCache, $mdDialog, modalService, printService, orderService, NgTableParams, utilService, CONSTANTS) {
        $scope.utilService = utilService;
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        $scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        $scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;

        var DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        var COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        var ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        var DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
        var REFUND_STATE = CONSTANTS.REFUND_STATE;
        var INVENTORY_STATE = CONSTANTS.INVENTORY_STATE;
        var SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;

        $scope.offset;
        $scope.limit;
        $scope.curOrderType = { desc: '全部单据类型' };
        $scope.orderTypeList = [{ desc: '全部单据类型' },
            { desc: ORDER_TYPE.DESC[ORDER_TYPE.DELIVERY], orderType: ORDER_TYPE.DELIVERY },
            { desc: ORDER_TYPE.DESC[ORDER_TYPE.REFUND], orderType: ORDER_TYPE.REFUND },
            { desc: ORDER_TYPE.DESC[ORDER_TYPE.INVENTORY], orderType: ORDER_TYPE.INVENTORY },
            { desc: ORDER_TYPE.DESC[ORDER_TYPE.SETTLEMENT], orderType: ORDER_TYPE.SETTLEMENT }
        ];
        $scope.isUpdateTimeChoices = CONSTANTS.getList('INVOICE_TIME_TYPE', false);
        $scope.isPaidList = [{ desc: '全部付款状态', code: '' }, { desc: '未付款', code: '0' }, { desc: '已付款', code: '1' }];
        $scope.invoiceNeedStateList = CONSTANTS.getList('INVOICE_NEED_STATE', true, undefined, undefined, { '': '全部开票需求' });
        $scope.deliveryOrder = {};
        $scope.refundOrder = {};
        $scope.inventoryOrder = {};
        $scope.settlementOrder = {};

        $scope.queryParams = {
            createStartTime: '',
            createEndTime: '',
            updateStartTime: '',
            updateEndTime: '',
            isInvoice: '', //0 不需要开票  1需要开票
            isPaid: '', // 0 没有  1 已支付
            isUpateTime: 0,
        };
        $scope.selectIsUpadate = function(choice) {
            $scope.queryParams.isUpateTime = parseInt(choice.code);
        };
        $scope.selectIsPaid = function(choice) {
            $scope.queryParams.isPaid = choice.code;
            $scope.orderTable.reload();
            $scope.orderTable.page(1);
        };
        $scope.selectInvoicenNeedState = function(choice) {
            $scope.queryParams.isInvoice = choice.code;
            $scope.orderTable.reload();
            $scope.orderTable.page(1);
        };
        var setOrderTable = function(queryParams) {
            $scope.queryParams.startDay = $scope.queryParams.startDay || utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd');
            $scope.queryParams.endDay = $scope.queryParams.endDay || utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd');
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.orderTable = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 13,
                paginationMinBlocks: 2,
                getData: function(params) {
                    var p = {
                        offset: (params.page() - 1) * $scope.limit,
                        limit: $scope.limit,
                        orderType: $scope.curOrderType.orderType,
                        companyName: $scope.queryParams.companyName
                    };
                    if ($scope.queryParams.isInvoice !== '') {
                        p.isInvoice = $scope.queryParams.isInvoice;
                    }
                    if ($scope.queryParams.isPaid !== '') {
                        p.isPaid = $scope.queryParams.isPaid;
                    }
                    if ($scope.queryParams.isUpateTime) {
                        p.updateStartTime = new Date($scope.queryParams.startDay + ' 00:00:00').getTime();
                        p.updateEndTime = new Date($scope.queryParams.endDay + ' 23:59:59').getTime();
                    } else {
                        p.createStartTime = new Date($scope.queryParams.startDay + ' 00:00:00').getTime();
                        p.createEndTime = new Date($scope.queryParams.endDay + ' 23:59:59').getTime();
                    }

                    return orderService.queryOrderList(p).then(function(res) {
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            });
        };
        setOrderTable();
        //搜索单据
        $scope.searchOrders = function(queryParams) {
            queryParams = queryParams || {};
            $scope.queryParams.companyName = queryParams.companyName;
            $scope.queryParams.startDay = queryParams.startTime ? utilService.parseTimeByDate(queryParams.startTime, 'yyyy-MM-dd') :
                utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd');
            $scope.queryParams.endDay = queryParams.endTime ? utilService.parseTimeByDate(queryParams.endTime, 'yyyy-MM-dd') :
                utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd');
            $scope.queryParams.isUpateTime = queryParams.isUpateTime;
            setOrderTable();
        };
        //获取单据状态描述
        $scope.getOrderStateDesc = function(orderType, orderState) {
            var orderStateDesc = '';
            switch (orderType) {
                case ORDER_TYPE.DELIVERY:
                    orderStateDesc = DELIVERY_STATE.DESC[orderState];
                    break;
                case ORDER_TYPE.REFUND:
                    orderStateDesc = REFUND_STATE.DESC[orderState];
                    break;
                case ORDER_TYPE.INVENTORY:
                    orderStateDesc = INVENTORY_STATE.DESC[orderState];
                    break;
                case ORDER_TYPE.SETTLEMENT:
                    orderStateDesc = SETTLEMENT_STATE.DESC[orderState];
                    break;
            }
            return orderStateDesc;
        };
        //选择单据类型
        $scope.selectOrderType = function(item) {

            $scope.curOrderType = item;
            setOrderTable();
        };
        //明细
        $scope.checkOrderDetail = function(orderType, orderId) {
            orderService.checkOrderDetail(orderType, orderId, $scope);
        };
        //获取送货单详情
        var getDeliveryDetail = function(opts) {
            orderService.queryDeliveryDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.deliveryOrder = res;
                $scope.deliveryOrder.name = '送货单' + '-' + $scope.deliveryOrder.companyName + '-' + $scope.deliveryOrder.shelfName +
                    '(' + utilService.parseTimeByLong($scope.deliveryOrder.createTime, 'yyyyMMddhhmmss') + ')';
                $scope.deliveryOrder.putSaleProductList = [];
                $scope.deliveryOrder.supplementProductList = [];
                $scope.deliveryOrder.pullSaleProductList = [];

                angular.forEach($scope.deliveryOrder.items, function(item, i) {
                    switch (parseInt(item.itemType)) {
                        case 1:
                            $scope.deliveryOrder.putSaleProductList.push(item);
                            break;
                        case 2:
                            $scope.deliveryOrder.supplementProductList.push(item);
                            break;
                        case 3:
                            $scope.deliveryOrder.pullSaleProductList.push(item);
                            break;
                    }
                });
                opts.didLoadData();
            });
        };
        //获取退货单详情
        var getRefundDetail = function(opts) {
            orderService.queryRefundDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.refundOrder = res;
                $scope.refundOrder.name = '退货单' + '-' + $scope.refundOrder.companyName + '-' + $scope.refundOrder.shelfName +
                    '(' + utilService.parseTimeByLong($scope.refundOrder.createTime, 'yyyyMMddhhmmss') + ')';
                opts.didLoadData();

            });

        };
        //获取盘点单详情
        var getInventoryDetail = function(opts) {
            orderService.queryInventoryDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.inventoryOrder = res;
                $scope.inventoryOrder.name = '盘点单' + '-' + $scope.inventoryOrder.companyName + '-' + $scope.inventoryOrder.shelfName +
                    '(' + utilService.parseTimeByLong($scope.inventoryOrder.createTime, 'yyyyMMddhhmmss') + ')';
                opts.didLoadData();
            });
        };
        //获取结算单详情
        var getSettlementDetail = function(opts) {
            orderService.querySettlementDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.settlementOrder = orderService._parseSettlementDetailData(res);
                $scope.settlementOrder.name = '结算单' + '-' + $scope.settlementOrder.companyName +
                    '(' + utilService.parseTimeByLong($scope.settlementOrder.createTime, 'yyyyMMddhhmmss') + ')';
                opts.didLoadData();
            });
        };
        //详细Modal中导出Excel（移至service）
        //列表中导出Excel
        $scope.exportExcelOnList = function(orderType, orderId) {
            orderService.exportExcel(orderType, orderId, $scope);
        };
        /*打印*/
        //打印单据列表
        var printOrderArray = [];
        var checkInfo = function(data) {
            angular.forEach(data, function(item) {
                var t = _.findWhere(printOrderArray, {
                    orderId: item.orderId
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
        //勾选
        $scope.updateSelection = function(e, order) {
            var isChecked;
            if (_.isObject(e)) {
                isChecked = e.currentTarget.checked;
            } else {
                isChecked = e;
            }
            order.checked = isChecked;
            if (isChecked) {
                printOrderArray.push(order);
            } else {
                $scope.checkAllCfg.flag = false;
                printOrderArray = _.without(printOrderArray, order);
            }
        };
        $scope.selectAllOrder = function(e, data, checkall) {
            var st = e.currentTarget.checked;
            angular.forEach(data, function(item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item);
                }
            });
        };
        //打印
        $scope.printOrder = function(orders) {
            var settlementOrderIds = [];
            var inventoryOrderIds = [];
            var deliveryOrderIds = [];
            var returnOrderIds = [];
            var orderArray = [];
            if (Object.prototype.toString.call(orders) == '[object Array]') {
                orderArray = orders;
            } else {
                orderArray = [orders];
            }
            angular.forEach(orderArray, function(item) {
                switch (item.orderType) {
                    case ORDER_TYPE.DELIVERY:
                        deliveryOrderIds.push(item.orderId);
                        break;
                    case ORDER_TYPE.REFUND:
                        returnOrderIds.push(item.orderId);
                        break;
                    case ORDER_TYPE.INVENTORY:
                        inventoryOrderIds.push(item.orderId);
                        break;
                    case ORDER_TYPE.SETTLEMENT:
                        settlementOrderIds.push(item.orderId);
                        break;
                }
            });
            orderService.queryOrderDetails({
                settlementOrderIds: settlementOrderIds,
                inventoryOrderIds: inventoryOrderIds,
                deliveryOrderIds: deliveryOrderIds,
                returnOrderIds: returnOrderIds
            }).then(function(res) {
                var settlementOrderDetails = res.settlementOrderDetails || [];
                var inventoryOrderDetails = res.inventoryOrderDetails || [];
                var deliveryOrderDetails = res.deliveryOrderDetails || [];
                var returnOrderDetails = res.returnOrderDetails || [];
                var orders = $([]).concat(settlementOrderDetails, inventoryOrderDetails, deliveryOrderDetails, returnOrderDetails);
                var temps = [];
                angular.forEach(settlementOrderDetails, function(detail) {
                    var orderType = ORDER_TYPE.SETTLEMENT;
                    var scope = orderService.parsePrintOrderScope(orderType, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(orderType, scope)));
                });
                angular.forEach(inventoryOrderDetails, function(detail) {
                    var orderType = ORDER_TYPE.INVENTORY;
                    var scope = orderService.parsePrintOrderScope(orderType, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(orderType, scope)));
                });
                angular.forEach(deliveryOrderDetails, function(detail) {
                    var orderType = ORDER_TYPE.DELIVERY;
                    var scope = orderService.parsePrintOrderScope(orderType, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(orderType, scope)));
                });
                angular.forEach(returnOrderDetails, function(detail) {
                    var orderType = ORDER_TYPE.REFUND;
                    var scope = orderService.parsePrintOrderScope(orderType, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(orderType, scope)));
                });
                $scope.$applyAsync(function() {
                    var htmls = [];
                    angular.forEach(temps, function(item) {
                        console.log(item[0].innerHTML);
                        htmls.push(item[0].innerHTML);
                    });
                    printService.printByDefaultPrinter(htmls);
                });
            });
        };
        $scope.bathMultiPrint = function() {
            if (printOrderArray.length) {
                $scope.printOrder(printOrderArray);
            } else {
                $mdDialog.show($mdDialog.alert({
                    title: '提示',
                    textContent: '请选择需要打印的票据',
                    ok: '确认'
                }));
            }
        };
    });
};
