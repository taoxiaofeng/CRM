module.exports = function (app) {
    app.controller('holidayWelfare', function ($scope, NgTableParams, holidayWelfareService, $uibModal, modalService, utilService, printService, CONSTANTS, $mdDialog, orderService) {
        $scope.holidayWelfare = {};
        $scope.welfareTime = {
            scheduledTime: '',
            scheduledTimeDate: '',
            sellingTime: '',
            sellingTimeDate: '',
            overTime: '',
            overTimeDate: ''
        };
        $scope.order = {};
        $scope.settlementOrder = {};
        $scope.PAYMENT_STATUS = CONSTANTS.PAYMENT_STATUS;   // 支付状态
        $scope.ORDER_STATUS = CONSTANTS.ORDER_STATUS;   //订单状态
        $scope.BUY_TYPE = CONSTANTS.BUY_TYPE; //购买类型
        var ORDER_STATUS = $scope.ORDER_STATUS;
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE; //订单类型
        $scope.payment;
        $scope.primaryBtnTexts = {
            1: '收到款项',
            2: '完成配送'
        };
        $scope.orderStatus = {};
        $scope.settlementWay = {};
        $scope.queryWelfareOrderParams = {};
        $scope.queryParams = {
            payChannels: '', // 支付状态
            status: '', // 订单状态
            startTime: '', //开始时间
            endTime: '', //结束时间
            companyIds: '' //公司ID
        };
        $scope.searchByCompany = function (company) {
            $scope.queryParams.companyIds = company.companyId;
            $scope.getHolidayWelfareList();
        };
        //选择支付状态
        $scope.selectPaymentStatus = function (choice) {
            $scope.queryParams.payChannels = choice.code;
            $scope.tableParams.reload();
            $scope.tableParams.page(1);
        };
        //选订单状态
        $scope.selestOrderStatus = function (choice) {
            $scope.queryParams.status = choice.code;
            $scope.tableParams.reload();
            $scope.tableParams.page(1);
        };
        /***
         * 获取节假日福利全部订单
         */
        $scope.getHolidayWelfareList = function (queryParams) {
            // debugger
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.tableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    // debugger
                    var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        status: $scope.orderStatus.code,
                        payChannels: $scope.settlementWay.code,
                        type: 1
                    };
                    if ($scope.queryParams.companyIds !== '') {
                        p.companyIds = $scope.queryParams.companyIds;
                    }
                    var Sdate = new Date($scope.queryParams.startTime);

                    var Edate = new Date($scope.queryParams.endTime);
                    // debugger
                    if (!isNaN($scope.queryParams.startTime)) {
                        p.startTime = new Date(Sdate.getFullYear(), Sdate.getMonth(), Sdate.getDate(), 0, 0, 0).getTime();
                    }
                    if (!isNaN($scope.queryParams.endTime)) {

                        p.endTime = new Date(Edate.getFullYear(), Edate.getMonth(), Edate.getDate(), 23, 59, 59).getTime();
                    }
                    return holidayWelfareService.getAllWelfareOrders(angular.copy(p)).then(function (res) {
                        // debugger
                        var a = holidayWelfareService.parseData(res.content);
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(a, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            });
        };
        $scope.getHolidayWelfareList();

        /*打印*/
        //打印单据列表
        var printOrderArray = [];
        var checkInfo = function (data) {
            // debugger
            angular.forEach(data, function (item) {
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
        /**
         * 勾选
         */
        $scope.updateSelection = function (e, order) {
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
        $scope.selectAllOrder = function (e, data, checkall) {
            var st = e.currentTarget.checked;
            angular.forEach(data, function (item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item);
                }
            });
        };

        /***
         * 批量打印
         */

        //打印
        $scope.printOrder = function (orders) {
            var temps = [];
            var aTemps = [];
            if (Object.prototype.toString.call(orders) == '[object Array]') {
                aTemps = orders;
            } else {
                aTemps = [orders];
            }
            angular.forEach(aTemps, function (item) {
                temps.push(item.id);
            });
            holidayWelfareService.getAllWelfareOrders({
                // ids:_.pluck(orders,'id')
                ids: temps
            }).then(function (res) {
                var holidayOrderDetails = res.content || [];
                $scope.isPrint = true;
                temps = orderService.printOrderDoms(holidayOrderDetails, $scope.ORDER_TYPE.HOLIDAY, $scope);
                // debugger
                console.log(temps);
                $scope.$applyAsync(function () {
                    var htmls = [];
                    console.log(temps);
                    angular.forEach(temps, function (item) {
                        // debugger
                        console.log(item[0].innerHTML);
                        htmls.push(item[0].innerHTML);
                    });
                    printService.printByDefaultPrinter(htmls);
                    console.log(htmls);
                });
            });
        };
        $scope.bathMultiPrint = function () {
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
        /***
         * 明细
         */
        $scope.orderDetail = function (order) {
            // debugger
            /*if (order.order.status == "2") {
             $scope.payment = true;
             }*/
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementById('holidayWelfare')),
                scope: $scope,
                templateUrl: 'order/holidayWelfareParticularsTemplate.html'
            });
            $scope.order = order;
            $scope.order.name = order.address.contactName + '-' + order.order.eventTitle;
        };

        /***
         * 明细 --> 打印
         */
        $scope.holidayWelfareDetailPrint = function (orderType) {
            // debugger
            var html = orderService.getPrintHtmlInOrderModule(orderType);
            $scope.$applyAsync(function () {
                console.log(html);
                printService.printByDefaultPrinter(html);
            });
        };


        /***
         * 节假日订购单明细导出Excel表格
         */
        $scope.exportExcelOnDetail = function () {
            $scope.uri = $("#holiday-welfare-order-detail-table").excelexportjs({
                containerid: 'holiday-welfare-order-detail-table',
                datatype: 'table',
                returnUri: 'true'
            });

        };
        /***
         * 修改订单状态
         */
        //
        $scope.modifyOrderStatus = function (order) {
            var params = {orderId: order.order.id, notes: ''};
            switch (order.order.status) {
                case ORDER_STATUS.WAITING_PAYMENT://待收款
                    _receivePayment(params, order);
                    break;
                case ORDER_STATUS.WAITING_DISTRIBUTION://待配送
                    _completeDelivery(params);
                    break;
            }
        };
        /***
         * 收到款项
         */
        var _receivePayment = function (params, order) {
            // debugger
            holidayWelfareService.receivePayment(params).then(function (res) {
                // order.order.payChannel = CONSTANTS.PAYMENT_STATUS.BANK_CARD;
                $scope.modal.close();
                $scope.getHolidayWelfareList();
            });
        };

        /**
         * 完成配送
         */
        var _completeDelivery = function (params) {
            holidayWelfareService.completeDelivery(params).then(function (res) {
                $scope.modal.close();
                $scope.getHolidayWelfareList();
            });
        };
        /***
         * 明细 --> 取消此单
         */
        $scope.cacelOrder = function (order) {
            var params = {orderId: order.order.id, notes: ''};
            holidayWelfareService.cancelOrder(params).then(function (res) {
                $scope.modal.close();
                $scope.getHolidayWelfareList();
            });
        };

        /***
         * 全部结算下拉筛选
         */
        $scope.settlementStatusList = CONSTANTS.getList({
            clsOrName: 'PAYMENT_STATUS',
            defaultObj: {
                '': '全部结算'
            }
        });
        $scope._settlementWay = function (item) {
            // debugger
            $scope.settlementWay = item;
            $scope.getHolidayWelfareList();
        };

        /***
         * 全部订单下拉筛选
         */
        $scope.orderStatusList = CONSTANTS.getList({
            clsOrName: 'ORDER_STATUS',
            defaultObj: {
                '': '全部订单'
            }
        });
        $scope._orderStatus = function (item) {
            $scope.orderStatus = item;
            $scope.getHolidayWelfareList();
        };
    })
};

