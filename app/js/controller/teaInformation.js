module.exports = function(app) {
    app.controller('teaCtrl', function($scope, $compile,orderService, $templateCache, $mdDialog, modalService, printService, orderService, NgTableParams, utilService, CONSTANTS,companyService) {
        $scope.utilService = utilService;
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        $scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        $scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
         $scope.Tea_Period_Type=CONSTANTS.Tea_Period_Type;


        var DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        var COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        var ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        var DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
        var REFUND_STATE = CONSTANTS.REFUND_STATE;
        var INVENTORY_STATE = CONSTANTS.INVENTORY_STATE;
        var SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        var Tea_Period_Type=CONSTANTS.Tea_Period_Type;
        $scope.offset;
        $scope.limit;
        $scope.curOrderType = { desc: '全部单据类型' };
        $scope.isUpdateTimeChoices=[{ desc: '下单时间', code: '0' }, { desc: '预约送货时间', code: '1' }];
        $scope.orderTypeList = [{ desc: '全部订单', code: '0' }, { desc: '已接单', code: '1' }, { desc: '待接单', code: '2' }, { desc: '已取消', code: '3' }];
        $scope.isPaidList = [{ desc: '全部付款状态', code: '' }, { desc: '未付款', code: '0' }, { desc: '已付款', code: '1' }];
        $scope.invoiceNeedStateList = CONSTANTS.getList('INVOICE_NEED_STATE', true, undefined, undefined, { '': '全部开票需求' });
        $scope.deliveryOrder = {};
        $scope.refundOrder = {};
        $scope.inventoryOrder = {};
        $scope.settlementOrder = {};

        $scope.queryParams = {
            createStartDay: '',
            createEndDay: '',
            updateStartDay: '',
            updateEndDay: '',
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
                        companyId: $scope.queryParams.companyName?$scope.queryParams.companyName:''
                    };
             switch (parseInt($scope.curOrderType.code)) {
                        case 0:
                            break;
                        case 1:
                            p.expressStatus=2;
                            break;
                        case 2:
                            p.expressStatus=1;
                            p.status=2;
                            break;
                        case 3:
                            p.status=4;
                          break;
                      }
                    if ($scope.queryParams.isInvoice !== '') {
                        p.isInvoice = $scope.queryParams.isInvoice;
                    }
                    if ($scope.queryParams.isPaid !== '') {
                        p.isPaid = $scope.queryParams.isPaid;
                    }
                    if ($scope.queryParams.isUpateTime) {

                        p.startTime = Date.parse($scope.queryParams.startDay.replace(/-/g,'/'));
                        p.endTime = Date.parse($scope.queryParams.endDay.replace(/-/g,'/')+' 23:59:59');
                        p.timeType=2;
                    } else {
                        p.startTime = Date.parse($scope.queryParams.startDay.replace(/-/g,'/'));
                        p.endTime = Date.parse($scope.queryParams.endDay.replace(/-/g,'/')+' 23:59:59');
                        p.timeType=1;
                    }

                    return orderService.queryTeaList(p).then(function(res) {
                        params.total(res.totalElements);
                        var data= $scope.addTeaType(res.content);
                        return checkInfo(utilService.indexArray(data, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            });
        };
        //setOrderTable();
        // 下午茶类型转换
          $scope.addTeaType=function(data){
            if (Object.prototype.toString.call(data) == '[object Array]') {
                teaArray = data;
            } else {
                teaArray = [data];
            }
             angular.forEach(teaArray, function(item, i) {
              if(item.expressStatus==2){
                item.type=1
              }else if(item.expressStatus==1&&item.status==2){
               item.type=2
              }else if(item.status==4){
               item.type=3

              }else{}

             })
             return teaArray;
          }
        //搜索单据
        $scope.searchTea = function(queryParams) {
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
        $scope.checkOrderDetail = function(orderType, orderId,companyName) {
            //$scope.companyName=companyName;
            orderService.checkOrderDetail(orderType, orderId, $scope,false,companyName);
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
        //批量打印
        $scope.printOrder = function(orders) {
            // debugger
            var teaOrderIds = [];
            var orderArray = [];
            if (Object.prototype.toString.call(orders) == '[object Array]') {
                orderArray = orders;
            } else {
                orderArray = [orders];
            }
            angular.forEach(orderArray, function(item) {
                teaOrderIds.push(item.id);
            });
            orderService.teaOrderDetails({
                orderIds: teaOrderIds
            }).then(function(res) {
                var teaOrderDetails = res|| [];
                var temps = [];
                angular.forEach(teaOrderDetails, function(detail) {
                    var orderType=ORDER_TYPE.SETTLEMENT;
                    var scope = orderService.teaOrderScope(ORDER_TYPE.TEAORDER, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(ORDER_TYPE.TEAORDER, scope)));
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
        // 详情页打印
        $scope.printTeaHtml= function(orderType) {
            var html = orderService.getPrintHtmlInOrderModule(orderType);
            $scope.$applyAsync(function() {
                console.log(html);
                printService.printByDefaultPrinter(html);
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
       $scope.keyremark=function(e,remark,id){
             if (e.keyCode == 13) { //回车键
                  orderService.modifyRemark({
                        orderId: id,
                        remark:remark
                    }).then(function(res) {
                        
                    });    
                    }
            
               
      
         };
         $scope.cancelOrder=function(id){
            orderService.cancelTea({
                orderId:id

            }).then(function(res) {
                $scope.teaDetail.order.type=100
                    });    
         } ;
         $scope.acceptOrder=function(id){
            orderService.acceptTea({
                orderId:id

            }).then(function(res) {
                   $scope.teaDetail.order.type=100     
                    });    
         } ;

    });
};
