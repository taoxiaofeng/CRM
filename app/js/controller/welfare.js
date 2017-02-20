/*零钱发放*/
module.exports = function(app) {
    app.controller('welfare', function($scope, $mdDialog, $element, $mdSidenav, $filter, uploadService, NgTableParams, welfareService, staffService, modalService, companyService, utilService, modalService, CONSTANTS) {
        var offset = 0;
        var limit = 25;
        $scope.queryWelfareConfig = {
            queryWelfareKey: ''
        };
        $scope.queryStaffConfig = {
            queryStaffKey: ''
        };
        $scope.queryWelfareConfig = {
            choices: [{
                value: 0,
                desc: '全部'
            }, {
                value: 1,
                desc: '待审核'
            }, {
                value: 2,
                desc: '审核通过'
            }, {
                value: 3,
                desc: '审核未通过'
            }],
            defaultItem: {
                value: 0,
                desc: '全部'
            },
            queryWelfareType: 0,
            queryWelfareKey: '',
            getOptionByValue: function(value) {
                var options = this.choices;
                return _.findWhere(options, { value: value });
            },
            selectItem: function(record) {
                this.defaultItem = record;
                $scope.queryWelfareConfig.queryWelfareType = record.value;
            }
        };
        $scope.welfareOfCompany = {
            companyId: '',
            offset: offset,
            limit: limit,
            welfares: [],
            getQueryParams: function(companyId) {
                //公司不同
                if (this.companyId !== companyId) {
                    this.reset();
                    this.companyId = companyId;
                }
                return {
                    offset: this.offset,
                    limit: this.limit,
                    companyId: this.companyId
                }
            },
            setWelfareOfCompany: function(welfares) {
                this.offset += welfares.length;
                this.welfares = $(this.welfares).concat(welfares);
            },
            reset: function() {
                this.offset = offset;
                this.companyId = '';
                this.welfares = [];
            }
        },
        $scope.welfareHeads = [{
            title: '序号',
            field: 'index'
        }, {
            title: '发放时间',
            field: 'createTime',
            getValue: function(value) {
                return '<span>' + $filter('date')(value, 'yyyy.MM.dd HH:mm:ss') + '</span>';
            },
            show: true
        }, {
            title: '发放企业',
            field: 'companyName',
            show: true,
            getValue: function(v) {
                return '<span  style="width:180px;display:inline-block;">' + v + '</span>';
            }
        }, {
            title: '发放总金额',
            field: 'orderFee',
            show: true,
            getValue: function(value) {
                return '<span  style="width:180px;display:inline-block;">' + $filter('rmb')(value) + '</span>';
            }
        }, {
            title: '操作账号',
            field: 'companyManagerName'
        }, {
            title: '手机号',
            field: 'mobile'
        }, {
            title: '座机',
            field: 'tel'
        }, {
            title: '状态',
            field: 'orderState',
            getValue: function(value) {
                return '<span class="text text-' + $filter('style')(value, 'WELFARE_STATE') + ' state">' + $filter('desc')(value, 'WELFARE_STATE') + '</span>';
            }
        }, {
            title: '操作',
            field: 'command',
            getValue: function(v, record, index, scope, column) {
                return '<button class="btn btn-default btn-sm"  ng-click="showWelfareListOfCompany(' + "'" + record.companyId + "'" + ',$event)" ><span class="glyphicon glyphicon-list"></span></button>' +
                    '&nbsp&nbsp&nbsp' +
                    '<button class="btn btn-primary btn-sm" href="javascript:;" ng-disabled="(' + record.orderState + '!=CONSTANTS.WELFARE_STATE.WAIT_AUDIT)" ng-click="auditWelfare(' + "'" + record.orderId + "'" + ",'pass'" + ',$event)">通过</button>' +
                    '&nbsp&nbsp&nbsp' +
                    '<button class="btn btn-danger btn-sm" href="javascript:;" ng-disabled="(' + record.orderState + '!=CONSTANTS.WELFARE_STATE.WAIT_AUDIT)" ng-click="auditWelfare(' + "'" + record.orderId + "'" + ",'refuse'" + ',$event)">拒绝</button>';
            }
        }];

        $scope.welfareDetailTableHeads = [{
            title: '序号',
            field: 'index'
        }, {
            title: '手机号',
            field: 'mobile'
        }, {
            title: '备注名',
            field: 'remark'
        }, {
            title: '昵称',
            field: 'alias'
        }, {
            title: '金额',
            field: 'fee',
            getValue: function(value) {
                return '<span  style="width:180px;display:inline-block;">' + $filter('rmb')(value) + '</span>';
            }
        }];
        $scope.staffHeads = [{
            title: '序号',
            field: 'index'
        }, {
            title: '手机号',
            field: 'mobile'
        }, {
            title: '备注名',
            field: 'remark'
        }, {
            title: '昵称',
            field: 'alias'
        }, {
            title: '头像',
            field: 'avatar',
            getValue:function (v,record) {
                return '<img class="head-portrait" src='+record.avatar+'/>';
            }
        }, {
            title: '操作',
            field: 'command',
            getValue: function(v, record, index, scope, column) {
                return '<button class="btn btn-default btn-sm"  ng-click="openEditStaffWin(\'' + record.id + '\')" ><span class="glyphicon glyphicon-pencil"></span></button>' +
                    '&nbsp&nbsp&nbsp' +
                    '<button class="btn btn-danger btn-sm" href="javascript:;" ng-click="deleteStaff(\'' + record.id + '\')"><span class="glyphicon glyphicon-trash"></span></button>';
            }
        }];
        //零钱表格
        var welfareDetailModal;
        $scope.CONSTANTS = CONSTANTS;
        $scope.welfareList = [];
        $scope.welfareDetails = [];
        $scope.welfareDetailCompany = {};
        $scope.offset = offset;
        $scope.limit = limit;
        $scope.welfareTable = new NgTableParams({
            count: 25
        }, {
            counts: [],
            getData: function(params) {
                var pageParams = utilService.resetPagination($scope, $scope.limit * (params.page() - 1), limit);
                var p = $.extend(pageParams, { companyId: $scope.welfareDetailCompany.companyId });
                return welfareService.queryWelfareList(p).then(function(res) {
                    $scope.welfares = res.content;
                    params.total(res.totalElements);
                    return utilService.indexArray(res.content, $scope.offset + 1);
                });
            }
        });
        $scope.welfareDetailNote = '';
        $scope.welfareDetail = {
            remark: '',
            createTime: 0
        }
        $scope.welfareDetailTable = new NgTableParams({
            count: 10
        }, {
            counts: []
        });
        $scope.welfareDetailCtrl;
        $scope.selectWelfareCompany = function(company) {
            $scope.welfareDetailCompany = company;
            $scope.welfareTable.reload();
        };
        $scope.searchWelfareByKey = function() {
            //$scope.welfareTable.reload();
        };

        $scope.auditWelfare = function(orderId, type, e) {
            e.preventDefault();
            e.stopPropagation();
            var orderState = type == 'refuse' ? CONSTANTS.WELFARE_STATE.REFUSED : CONSTANTS.WELFARE_STATE.PASSED;
            welfareService.auditWelfare({
                orderId: orderId,
                orderState: orderState
            }).then(function() {
                $scope.welfareTable.reload();
                $mdSidenav('left').close();
            });
        };
        //公司零钱列表
        $scope.showWelfareListOfCompany = function(companyId, e) {
            //点击重置页码
            if (e) {
                $scope.welfareOfCompany.reset();
            }
            var params = $scope.welfareOfCompany.getQueryParams(companyId);
            welfareService.queryWelfareList(params).then(function(res) {
                $scope.welfareOfCompany.setWelfareOfCompany(res.content);
                if (e) {
                    $mdSidenav('left').toggle();
                }
            });
        };
        $element.find('md-list').on('scroll', _.debounce(function(e) {
            var height = $(this).height();
            var bottom = this.scrollHeight - this.scrollTop;
            if (height + 50 >= bottom) {
                $scope.showWelfareListOfCompany($scope.welfareOfCompany.companyId);
            }
        }, 300));
        //零钱详情

        $scope.showWelfareDetail = function(orderId, item) {
            $scope.welfareDetail.remark = item.remark;
            $scope.welfareDetail.createTime = item.createTime;
            welfareService.queryWelfareObjectList({
                orderId: orderId,
                offset: offset,
                limit: 100000
            }).then(function(res) {
                $scope.welfareDetails = res.content;
                $scope.welfareDetailTable.settings({
                    dataset: utilService.indexArray(res.content, 1)
                });
                $scope.$applyAsync(function() {
                    $scope.welfareDetailCtrl.showDialog($scope);
                });
            });
        };
        /*员工管理*/
        var staffEditModal;
        $scope.staffDetailCtrl;
        $scope.currentStaff = {
            mobile: '',
            alias: '',
            avatar: '',
            remark: ''
        };
        $scope.staff = {
            companyId: '',
            keyword: '',
            items: []
        };
        $scope.staffTable = new NgTableParams({
            count: 25
        }, {
            counts: [],
            getData: function(params) {
                if (!$scope.staff.companyId) {
                    return;
                }
                var pageParams = {
                    limit: $scope.limit,
                    offset: $scope.limit * (params.page() - 1)
                };
                var p = $.extend(pageParams, {
                    companyId: $scope.staff.companyId,
                    queryParam: $scope.staff.keyword
                });
                return staffService.queryStaffList(p).then(function(res) {
                    $scope.staff.items = res.content;
                    params.total(res.totalElements);
                return utilService.indexArray(res.content,  $scope.limit * (params.page() - 1) + 1);
                });
            }
        });
        $scope.searchStaffByKey = function(value) {
            $scope.staff.keyword = value;
            $scope.staffTable.reload();
        };
        $scope.selectStaffCompany = function(company) {
            $scope.staff.companyId = company.companyId;
            $scope.staffTable.reload();
        };
        $scope.showWelfareSendWin = function() {
            $mdSidenav('right').toggle();
        };
        $scope.getStaffList = function() {
            staffService.queryStaffList();
        };
        $scope.openEditStaffWin = function(staffId) {
            staffService.queryStaffDetail({
                staffId: staffId
            }).then(function(res) {
                $scope.currentStaff = res;
                staffEditModal = modalService.initModal({
                    appendTo: $element,
                    scope: $scope,
                    ok: $scope.editStaffConfirm
                });
            });
        };
        $scope.editStaffConfirm = function() {
            console.log($scope.currentStaff);
            return staffService.editStaff($scope.currentStaff).then(function() {
                $scope.staffTable.reload();
            });
        };
        $scope.importStaffExcel = function() {
            uploadService.uploadFile().then(function(file) {
                staffService.examinExcel({
                    companyId: $scope.staff.companyId,
                    file: file
                }).then(function(res) {
                    if (res.code == 200) {
                        $mdDialog.show($mdDialog.confirm()
                                .title('成功')
                                .textContent('excel校验成功，是否开始导入?')
                                .ok('确定')
                                .cancel('取消'))
                            .then(function() {
                                staffService.importStaffExcel({
                                    companyId: $scope.staff.companyId,
                                    file: file
                                }).then(function() {
                                    $scope.staffTable.reload();
                                    $mdDialog.show($mdDialog.alert()
                                        .clickOutsideToClose(true)
                                        .title('成功')
                                        .textContent('导入成功！')
                                        .ok('确定'));
                                });
                            })
                    } else {
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('失败')
                            .textContent(res.consoleLog.join(';'))
                            .ok('确定')
                        );
                    }
                });
            });
        };
        $scope.exportStaffExcel=function(){
            window.open('http://res.kingxique.com/hollpin/crm/template/%E5%91%98%E5%B7%A5%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xls','_blank');
        };
        $scope.deleteStaff = function(staffId) {
            staffService.deleteStaff({
                staffId: staffId
            }).then(function() {
                $scope.staffTable.reload();
            });
        };
    });
};
