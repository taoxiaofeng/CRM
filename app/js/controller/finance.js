module.exports = function (app) {
    app.controller('finance', function ($scope, $mdSidenav, $mdDialog, $sce, $element, CONSTANTS, $compile, $filter, NgTableParams, orderService, printService, utilService, modalService, financeService) {
        $scope.CONSTANTS = CONSTANTS;
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        $scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        $scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        $scope.limit = 20;
        $scope.finances = [];
        $scope.selectedOrders = [];
        $scope.isInvoice = true;
        $scope.settlementOrder = {};
        $scope.orderStateList = [{
            desc: '全部付款状态',
            code: ''
        }, {
            desc: '待付款',
            code: CONSTANTS.SETTLEMENT_STATE.WAIT_SETTLEMENT
        }, {
            desc: '已付款',
            code: CONSTANTS.SETTLEMENT_STATE.COMPLETED
        }];
        $scope.invoiceNeedStateList = CONSTANTS.getList('INVOICE_NEED_STATE', true, undefined, undefined, {'': '全部开票需求'});
        $scope.invoiceStateList = CONSTANTS.getList('INVOICE_STATE', true, undefined, undefined, {'': '全部票号'});
        $scope.queryFinanceConfig = {
            queryFinanceKey: '',
            companyName: '',
            financeStartTime: '',
            financeEndTime: '',
            orderStates: '',
            isInvoice: '',
            isUpdateTime: 0,
            isInvoiceNum: '',
            choices: CONSTANTS.getList('INVOICE_TIME_TYPE', false),
            companyKeyup: function (e) {
                var keycode = window.event ? e.keyCode : e.which;
                if (keycode == 13) {
                    $scope.financeTable.reload();
                    $scope.financeTable.page(1);
                }
            },
            selectIsUpadate: function (timeType) {
                $scope.queryFinanceConfig.isUpdateTime = timeType.code;
            }
        };

        $scope.getFinanceList = function () {
            $scope.financeTable = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                getData: function (params) {
                    var p = {};
                    $scope.offset = $scope.limit * (params.page() - 1);
                    p = {
                        offset: $scope.offset,
                        limit: $scope.limit,
                        companyName: $scope.queryFinanceConfig.companyName
                    };
                    if ($scope.queryFinanceConfig.financeStartTime !== '') { //非空字符串
                        p.financeStartTime = $scope.queryFinanceConfig.financeStartTime;
                    }
                    if ($scope.queryFinanceConfig.financeEndTime !== '') { //非空字符串
                        p.financeEndTime = new Date($scope.queryFinanceConfig.financeEndTime.getTime()+24*60*60*1000);
                    }
                    if ($scope.queryFinanceConfig.orderStates != '') { //3 4
                        p.orderStates = $scope.queryFinanceConfig.orderStates;
                    }
                    if ($scope.queryFinanceConfig.isInvoice !== '') { // 0  1
                        p.isInvoice = $scope.queryFinanceConfig.isInvoice;
                    }
                    if ($scope.queryFinanceConfig.isUpdateTime) { //1
                        p.isUpdateTime = $scope.queryFinanceConfig.isUpdateTime;
                    }
                    if ($scope.queryFinanceConfig.isInvoiceNum !== '') { //0 1
                        p.isInvoiceNum = $scope.queryFinanceConfig.isInvoiceNum;
                    }
                    return financeService.queryFinanceList(p).then(function (res) {
                        $scope.finances = res.content;
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.offset + 1));
                    });
                }
            });
        };
        $scope.getFinanceList();
        $scope.confirmPaymentDialog;
        $scope.invoiceDialog;
        $scope.confirmPaymentParam = {
            refId: '',
            dueFee: '', //企业应付款
            badDebtFee: '', //坏账抵扣额
            receiveFee: '', //企业到账金额
            receiveFeeTime: '', //到账时间
            receiveFeeTimeHour: ''
        };
        $scope.invoiceParam = {
            refId: '',
            invoiceFee: 0,
            invoiceNumber: '',
            expressNumber: '',
            expressCompany: {},
            needExpressNumber: true
        };
        $scope.expressCompanyChoice = CONSTANTS.getList('EXPRESS_COMPANY_TYPE', false);
        $scope.currentOrder = {};
        $scope.queryFinanceList = function () {
            $scope.financeTable.reload();
        };

        $scope.openFinanceDetail = function (order) {
            $scope.currentOrder = order;
            orderService.checkOrderDetail(CONSTANTS.ORDER_TYPE.SETTLEMENT, order.orderId, $scope);
        };
        $scope.selectFinanceCompany = function (company) {
            $scope.queryFinanceConfig.company = company;
            $scope.financeTable.reload();
        };
        //表格中导出excel
        $scope.exportExcel = function (order) {
            $scope.currentOrder = order;
            orderService.exportExcel(CONSTANTS.ORDER_TYPE.SETTLEMENT, order.orderId, $scope);
        };
        $scope.showInoviceAndPaymentWin = function (order, scope, type) {
            if (type) {
                scope.confirmPaymentParam.refId = order.orderId;
                scope.confirmPaymentParam.dueFee = $filter('rmb')(scope.currentOrder.orderFee);
                scope.confirmPaymentParam.badDebtFee = $filter('rmb')(order.orderDiscount);
                scope.confirmPaymentParam.receiveFee = '';
                scope.confirmPaymentParam.receiveFeeTime = new Date().getTime();
                scope.confirmPaymentParam.receiveFeeTimeHour = new Date().getTime();
                scope.confirmPaymentDialog.showDialog($scope);
            } else {
                scope.invoiceParam.refId = order.orderId;
                scope.invoiceParam.invoiceNumber = '';
                scope.invoiceParam.invoiceFee = '';
                scope.invoiceParam.expressCompany = $scope.expressCompanyChoice[0];
                scope.invoiceParam.expressNumber = '';
                scope.invoiceDialog.showDialog($scope);
            }
        };
        $scope.printOrder = function (orderType) {
            var html = orderService.getPrintHtmlInOrderModule(orderType);
            $scope.$applyAsync(function () {
                console.log(html);
                printService.printByDefaultPrinter(html);
            });
        };
        $scope.closeConfirmPaymentWin = function () {
            $scope.confirmPaymentDialog.closeDialog();
        };
        $scope.closeInvoiceWin = function () {
            $scope.invoiceDialog.closeDialog();
        };
        $scope.confirmPayment = function () {
            financeService.confirmPayment(angular.copy($scope.confirmPaymentParam)).then(function () {
                $scope.closeConfirmPaymentWin();
                orderService.checkOrderDetail(CONSTANTS.ORDER_TYPE.SETTLEMENT, $scope.currentOrder.orderId, $scope, true);
            });
        };
        $scope.createInvoice = function () {
            financeService.createInvoice(angular.copy($scope.invoiceParam)).then(function () {
                $scope.closeInvoiceWin();
                orderService.checkOrderDetail(CONSTANTS.ORDER_TYPE.SETTLEMENT, $scope.currentOrder.orderId, $scope, true);
            });
        };
        $scope.selectExpressCompany = function (expressCompany) {
            $scope.invoiceParam.expressCompany = expressCompany;
            if (expressCompany.code == CONSTANTS.EXPRESS_COMPANY_TYPE.XIEDAI) {
                $scope.invoiceParam.needExpressNumber = false;
            } else {
                $scope.invoiceParam.needExpressNumber = true;
            }
        };
        $scope.selectOrderState = function (choice) {
            $scope.queryFinanceConfig.orderStates = choice.code;
            $scope.financeTable.reload();
            $scope.financeTable.page(1);
        };
        $scope.selectInvoiceNeedState = function (choice) {
            $scope.queryFinanceConfig.isInvoice = choice.code;
            $scope.financeTable.reload();
            $scope.financeTable.page(1);
        };
        $scope.selectInvoiceState = function (choice) {
            $scope.queryFinanceConfig.isInvoiceNum = choice.code;
            $scope.financeTable.reload();
            $scope.financeTable.page(1);
        };

        //导出单据列表
        var checkInfo = function (data) {
            angular.forEach(data, function (item) {
                var t = _.findWhere($scope.selectedOrders , {
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
            // debugger
            var isChecked;
            if (_.isObject(e)) {
                isChecked = e.currentTarget.checked;
            } else {
                isChecked = e;
            }
            order.checked = isChecked;
            if (isChecked) {
                $scope.selectedOrders.push(order);
            } else {
                $scope.checkAllCfg.flag = false;
                $scope.selectedOrders = _.without($scope.selectedOrders, order);
            }
        };
        $scope.selectAllOrder = function (e, data, checkall) {
            // debugger
            var st = e.currentTarget.checked;
            angular.forEach(data, function (item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item);
                }
            });
        };

        $scope.exportOrder = function () {

            /*selectedOrders=selectedOrders.concat(orders);*/

            var dom = angular.element('<a></a>');
            var containerId = 'finance-table';
            var myDate = new Date();
            var mytime=myDate.toLocaleString();
            dom[0].href = $('#' + containerId).excelexportjs({
                containerid: containerId,
                datatype: 'table',
                returnUri: 'true'
            });
            dom[0].download = '财务管理' + '（' + mytime + '）' + '.xls';
            dom[0].click();
        };

  
        /**
         * 批量导出excel
         */
        $scope.batchExportExcel = function () {
            // debugger
            if ($scope.selectedOrders.length) {
                $scope.exportOrder($scope.selectedOrders);
            } else {
                alert('请先确定需要导出的数据!!!');
            }
        };

        $scope.filterItems = function (item) {
            // debugger
            return item.checked == true;
        };
    });
};
