/**
 * Created by taoxiaofeng on 2016/11/24.
 */
module.exports = function (app) {
    app.controller('suiteDistributionDynamic', function ($scope, NgTableParams, $uibModal, modalService, utilService, printService, CONSTANTS, $mdDialog, suiteService, orderService) {

        $scope.ORDER_STATUS = CONSTANTS.ORDER_STATUS;//订单状态
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE; //订单类型
        $scope.DELIVERY_STATE = CONSTANTS.DELIVERY_STATE; //送货单状态

        $scope.queryParams = {
            suiteName: '',//套餐名称
            startTime: '',//开始时间
            endTime: '',//结束时间
            companyId: '', //公司ID
        };
        //根据企业搜索
        $scope.searchByCompany = function (company) {
            $scope.queryParams.companyId = company.companyId;
            $scope.suiteDistributionDynamicList();
        };
        //清空企业搜索
        $scope.emptyCompanySearch = function () {
            delete $scope.queryParams.companyId;
        };


        /**
         * 套餐配送动态列表
         * 获取配送单列表接口：
         * logistics/order/delivery/findList
         */
        $scope.suiteDistributionDynamicList = function (queryParams) {
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.isSuiteOrderList = '1';//标记
            $scope.tableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        typeSort: $scope.typeSort,  // $scope.typeSort  取 赋值
                        isSuiteOrderList: $scope.isSuiteOrderList,
                        orderStates: $scope.orderStates
                    };
                    if ($scope.queryParams.companyId !== '') {
                        p.companyId = $scope.queryParams.companyId;
                    }
                    if ($scope.queryParams.suiteName !== '') {
                        p.suiteName = $scope.queryParams.suiteName;
                    }
                    if (!isNaN($scope.queryParams.startTime)) {
                        p.startTime = $scope.queryParams.startTime;
                    }
                    if (!isNaN($scope.queryParams.endTime)) {
                        p.endTime = $scope.queryParams.endTime + 86399000;
                    }
                    return suiteService.getSuiteDistributionDynamicList(angular.copy(p)).then(function (res) {
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            })
        };
        $scope.suiteDistributionDynamicList();

        /**
         * 获取期号列表

         $scope.getSuiteList = function () {
                suiteService.getAllIssueList({}).then(function (res) {
                    $scope.issue.issueChoices = res;
                });
            };
         $scope.getSuiteList();

         /!**
         * 期号筛选
         *!/
         $scope.issue = {
                issue: [],
                getDefaultItem: function (value) {
                    // debugger
                    var options = $scope.issueList.list;
                    return _.findWhere(options, {
                            id: value
                        }) || {
                            issueName: '全部'
                        };
                },
                selectItem: function (record) {
                    // debugger
                    if (record.id) {
                        $scope.issue.issueId = record.issueId;
                    }
                }
            };*/
        /*打印*/
        //打印单据列表
        var printOrderArray = [];
        var checkInfo = function (data) {
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
                temps.push(item.orderId);
            });
            var deliveryOrderIds = {
                deliveryOrderIds:temps
            };
            orderService.queryOrderDetails(
                // ids:_.pluck(orders,'id')
                // deliveryOrderIds: temps
                angular.copy(deliveryOrderIds)
            ).then(function (res) {
                var orderDetails = res.deliveryOrderDetails || [];
                $scope.isPrint = true;
                temps = orderService.printOrderDoms(orderDetails, $scope.ORDER_TYPE.SUITEDYNAMIC, $scope);
                console.log(temps);
                $scope.$applyAsync(function () {
                    var htmls = [];
                    console.log(temps);
                    angular.forEach(temps, function (item) {
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

        /**
         * 订单明细打印
         */
        $scope.orderDetailPrint = function (orderType) {
            var html = orderService.getPrintHtmlInOrderModule(orderType);
            $scope.$applyAsync(function () {
                console.log(html);
                printService.printByDefaultPrinter(html);
            });
        };
        /**
         *本期配送次数
         */
        $scope.sortByCurrentDistributionNumber = function (item) {
            $scope.typeSort = item.sortCode;    // 赋值 传给服务端
        };
        /**
         *订单参与人数
         */
        $scope.sortByOrderParticipation = function (item) {
            $scope.typeSort = item.sortCode;    // 赋值 传给服务端
        };
        /**
         * 期号订单明细
         * 获取配送单详情接口：
         * logistics/order/delivery/{orderId}
         */
        $scope.suiteOrderDetail = function (sOrder) {
            $scope.modal = modalService.initModal({
                //appendTo:将modal 加载到指定id的DOM页面
                appendTo: angular.element(document.getElementById('suiteDistributionDynamic')),
                scope: $scope,
                //templateUrl属性值是一个url路径,路径指向一个html模板
                templateUrl: 'suite/suiteDistributionDynamicTemplate.html'
            });
            var params = {orderId: sOrder.orderId};
            orderService.queryDeliveryDetail(params).then(function (res) {
                suiteService.parseSuiteData(res);
                $scope.sOrder = res;
            });
        };
        /**
         * 修改订单状态接口：
         * logistics/order/delivery/{orderId}/state
         */
        $scope.orderFinished = function (sOrder) {
            var me = this;
            var params = {orderId: sOrder.orderId, orderState: sOrder.orderState};
            orderService.modifyDeliveryState(params).then(function (res) {
                me.$close();
            })
        };

        // 套餐状态
        $scope.shipmentStatusList = CONSTANTS.getList({
            clsOrName: 'DELIVERY_STATE',
            defaultObj: {
                '': '全部状态'
            }
        });
        $scope.shipmentStatus = function (item) {
            $scope.orderStates = item.code;
            $scope.suiteDistributionDynamicList();
        };

        /**
         * 套餐实时动态-->明细
         * 配货单商品名称过滤掉建议下架的
         */
        $scope.filterType = function (item) {
            return item.itemType != 3
        };
    })
};


