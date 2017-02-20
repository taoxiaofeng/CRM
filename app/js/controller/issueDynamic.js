/**
 * Created by taoxiaofeng on 2016/11/23.
 */
module.exports = function (app) {
    app.controller('issueDynamic', function ($scope, NgTableParams, $uibModal, modalService, utilService, suiteService, CONSTANTS, $mdDialog, orderService, printService) {

        $scope.SUITE_STATUS = CONSTANTS.SUITE_STATUS;//套餐状态
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;//订单类型
        $scope.DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;//送货单状态
        $scope.ISSUE_ACTIVE = CONSTANTS.ISSUE_ACTIVE;//期号类型
        $scope.queryParams = {
            issueId: '', //期号ID
            companyName: '',    //企业名称
            issueStartTime: '', //创建期号开始时间
            issueEndTime: '',    //创建期号结束时间
            companyId: '', //公司ID
            sortType: ''  //排序
        };
        /**
         * 期号实时动态列表
         */
        $scope.issueDynamicList = function (queryParams) {
            $scope.offset = 0;
            $scope.limit = 20;
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
                        sortType:$scope.queryParams.sortType
                    };
                    if ($scope.queryParams.companyName !== '') {
                        p.companyName = $scope.queryParams.companyName;
                    }
                    if (!isNaN($scope.queryParams.issueStartTime)) {
                        p.issueStartTime = $scope.queryParams.issueStartTime;
                    }
                    if (!isNaN($scope.queryParams.issueEndTime)) {
                        p.issueEndTime = $scope.queryParams.issueEndTime;
                    }
                    return suiteService.queryIssueDynamic(angular.copy(p)).then(function (res) {
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            })
        };
        $scope.issueDynamicList();



        //根据企业搜索
        $scope.searchByCompany = function(company) {
            $scope.queryParams.companyName = company.companyName;
            $scope.issueDynamicList();
        };

        //清空企业搜索
        $scope.emptyCompanySearch = function() {
            delete $scope.queryParams.companyName;
        };


        /**
         * 打印
         * 打印单据列表
         */
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

        /**
         * 批量打印
         */
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
            // var ids = temps;
            var ids = {
                ids:temps
            };
            suiteService.issueDynamicPrint(
                // ids:_.pluck(orders,'id')
                angular.copy(ids)
            ).then(function (res) {
                var orderDetails = res || [];
                $scope.isPrint = true;
                temps = orderService.printOrderDoms(orderDetails, $scope.ORDER_TYPE.ISSUEDYNAMIC, $scope);
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
         * 期号订单明细
         */
        $scope.issueOrderDetail = function (iss) {
            $scope.modal = modalService.initModal({
                //appendTo:将modal 加载到指定id的DOM页面
                appendTo: angular.element(document.getElementById('issueDynamic')),
                scope: $scope,
                //templateUrl属性值是一个url路径,路径指向一个html模板
                templateUrl: 'suite/issueDynamicTemplate.html'
            });
            // $scope.iss = iss;
            var params = {issueId: iss.issueId, companyId: iss.companyId};
            suiteService.queryIssueChanges(params).then(function (res) {
                // res的值赋值给 issueDetail ，用于HTML 中的数据源
                $scope.issueDetail = res;
            });
        };

        //排序
        /*$scope.sortByIssue = function (item) {
            $scope.issueDynamicList(
                $scope.sortType = item.sortCode //通过参数传给服务端
            );
        };*/
        $scope.sortByIssue = function (item) {
            $scope.queryParams.sortType = item.sortCode;
            $scope.issueDynamicList();
        };
    })
};


