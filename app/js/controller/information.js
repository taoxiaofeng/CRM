/*
 *信息收集ljl
 *informationController
 */
module.exports = function(app) {
    app.controller('information', function($scope, $compile, $element, NgTableParams, shelfService, companyService, modalService) {
        var companyInformationCreateModal;
        $scope.infoModel = {
            staffNumber: [
                { desc: '空', value: 0 },
                { desc: '0-30人', value: 1 },
                { desc: '30-50人', value: 2 },
                { desc: '50-100人', value: 3 },
                { desc: '100-300人', value: 4 },
                { desc: '300-500人', value: 5 },
                { desc: '500人以上', value: 6 }
            ],
            genderRatio: [
                { desc: '空', value: 0 },
                { desc: '男生偏多', value: 1 },
                { desc: '女生偏多', value: 2 },
                { desc: '男女均衡', value: 3 }
            ],
            officeTime: [
                { desc: '空', value: 0 },
                { desc: '965', value: 1 },
                { desc: '995', value: 2 },
                { desc: '966', value: 3 },
                { desc: '996', value: 4 }
            ],
            staffType: [
                { desc: '空', value: 0 },
                { desc: '技术类', value: 1 },
                { desc: '销售类', value: 2 },
                { desc: '混合类', value: 3 }
            ],
            overtime: [
                { desc: '空', value: 0 },
                { desc: '多', value: 1 },
                { desc: '少', value: 2 }
            ],
            deliveryTime: [
                { desc: '空', value: 0 },
                { desc: '工作日', value: 1 },
                { desc: '工作日+周六', value: 2 },
                { desc: '工作日+周末', value: 3 }
            ],
            deliveryCycle: [
                { desc: '空', value: 0 },
                { desc: '一周两次', value: 1 },
                { desc: '一周一次', value: 2 },
                { desc: '两周一次', value: 3 },
                { desc: '一月一次', value: 4 }
            ],
            singlePrice: [
                { desc: '空', value: 0 },
                { desc: '0-2元', value: 1 },
                { desc: '2-4元', value: 2 },
                { desc: '4-10元', value: 3 }
            ],
            pricePrefer: [
                { desc: '空', value: 0 },
                { desc: '价格不敏感', value: 1 },
                { desc: '中等混搭', value: 2 },
                { desc: '低价', value: 3 }
            ],
            brandLevel: [
                { desc: '空', value: 0 },
                { desc: '无所谓', value: 1 },
                { desc: '大品牌', value: 2 },
                { desc: '进口', value: 3 },
                { desc: '国产', value: 4 }
            ],
            companyAtmosphere: [
                { desc: '空', value: 0 },
                { desc: '保守', value: 1 },
                { desc: '开放', value: 2 },
                { desc: '激情', value: 3 }
            ],
            companyLevel: [
                { desc: '空', value: 0 },
                { desc: '低档', value: 1 },
                { desc: '中档', value: 2 },
                { desc: '高档', value: 3 }
            ],
            welfareConsist: [
                { desc: '空', value: 0 },
                { desc: '无福利', value: 1 },
                { desc: '提供免费零食', value: 2 },
                { desc: '补贴零食费用', value: 3 }
            ],
            fivemeter: [
                { desc: '空', value: 0 },
                { desc: '没有', value: 1 },
                { desc: '有', value: 2 }
            ],
            foodPrefers: [
                { desc: '空', value: 0 },
                { desc: '饼干', value: 1 },
                { desc: '糕点', value: 2 },
                { desc: '膨化', value: 3 },
                { desc: '油炸', value: 4 },
                { desc: '糖果', value: 5 },
                { desc: '蜜饯', value: 6 },
                { desc: '坚果', value: 7 },
                { desc: '加工-肉类', value: 8 },
                { desc: '加工-豆类', value: 9 },
                { desc: '加工-植物', value: 10 },
                { desc: '冲泡', value: 11 },
                { desc: '其他', value: 12 }
            ],
            drinkPrefers: [
                { desc: '空', value: 0 },
                { desc: '碳酸', value: 1 },
                { desc: '果汁', value: 2 },
                { desc: '茶类', value: 3 },
                { desc: '咖啡', value: 4 },
                { desc: '冲饮', value: 5 },
                { desc: '乳制品', value: 6 }
            ],
            productFunctions: [
                { desc: '空', value: 0 },
                { desc: '早餐类', value: 1 },
                { desc: '加班类', value: 2 },
                { desc: '解馋类', value: 3 },
                { desc: '解渴类', value: 4 },
                { desc: '充饥类', value: 5 },
                { desc: '充电类', value: 6 }
            ]
        };
        $scope.company = {
            companyName: '',
            companyId: ''
        };
        $scope.createPreferCompany = {
            companyName: '',
            companyId: ''
        };
        $scope.typeHeadOptions = [{ companyName: '123', companId: '123' }, { companyName: '12345', companId: '12345' }, { companyName: '1234567', companId: '1234567' }];
        $scope.typeHeadConfigs = {
            debounce: {
                'default': 500,
                'blur': 250
            },
            getterSetter: true
        };
        $scope.info = {
            companyId: $scope.createPreferCompany.companyId,
            companyName: '',
            staffNumber: '',
            genderRatio: '',
            officeTime: '',
            staffType: '',
            overtime: '',
            deliveryPrice: '',
            monthBudget: '',
            deliveryTime: '',
            deliveryCycle: '',
            fivemeter: '',
            shelfPositions: [],
            foodPrefers: [],
            foodPreferType: [],
            foodPreferName: [],
            drinkPrefers: [],
            drinkPreferType: '',
            drinkPreferName: '',
            productFunctions: [],
            productFunctionType: '',
            ProductFunctionStr: '',
            singlePrice: '',
            pricePrefer: '',
            brandLevel: '',
            companyAtmosphere: '',
            companyLevel: '',
            welfareConsist: '',
            note: ''
        };
        $scope.informationHeads_alpha = [{
            title: '公司名称',
            field: 'companyName'
        }, {
            title: '合作模式',
            field: 'statusAlias'
        }, {
            title: '食物偏好',
            field: 'foodPrefers',
            getValue: function(v, r, index, scope, field) {
                var html = [];
                angular.forEach(v, function(item) {
                    html.push(_.findWhere($scope.infoModel[field], { value: item.value }).desc + '-' + item.name);
                });
                return html.join(' | ');
            }
        }, {
            title: '饮料偏好',
            field: 'drinkPrefers',
            getValue: function(v, r, index, scope, field) {
                var html = [];
                angular.forEach(v, function(item) {
                    html.push(_.findWhere($scope.infoModel[field], { value: item.value }).desc + '-' + item.name);
                });
                return html.join(' | ');
            }
        }, {
            title: '商品功能',
            field: 'productFunctions',
            getValue: function(v, r, index, scope, field) {
                var html = [];
                angular.forEach(v, function(item) {
                    html.push(_.findWhere($scope.infoModel[field], { value: item.value }).desc + '-' + item.name);
                });
                return html.join(' | ');

            }
        }, {
            title: '单品价格',
            field: 'singlePrice',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '价格偏好',
            field: 'pricePrefer',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '品牌度',
            field: 'brandLevel',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '公司氛围',
            field: 'companyAtmosphere',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '公司档次',
            field: 'companyLevel',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '福利组成',
            field: 'welfareConsist',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, { title: '备注', field: 'note' }, {
            title: '操作',
            field: 'command',
            getValue: function() {
                return '<button class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil"></span></button>';
            }
        }];
        $scope.informationHeads = [{
                title: '公司名称',
                field: 'companyName'
            }, {
                title: '货架位置',
                field: 'shelfPositions',
                getValue: function(v, r, index, scope, field) {
                    var str = [];
                    angular.forEach(v, function(item) {
                        var string = item.shelfName;
                        if (item.positionImg) {
                            string += (':<img style="width:26px;height26px;" src="' + window.cfg.picUrl + item.positionImg + '"/>');
                        }
                        str.push(string);
                    });
                    return '<span>' + str.join('') + '</span>';
                }
            }, {
                title: '公司人数',
                field: 'staffNumber',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '男女比例',
                field: 'genderRatio',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '上班时间',
                field: 'officeTime',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '人员类型',
                field: 'staffType',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '加班情况',
                field: 'overtime',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            },
            { title: '建议送货金额/次', field: 'deliveryPrice' },
            { title: '每月预算', field: 'monthBudget' }, {
                title: '送货时间',
                field: 'deliveryCycle',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '送货周期',
                field: 'deliveryTime',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '周边0.5km是否有店',
                field: 'fivemeter',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '操作',
                field: 'command',
                getValue: function() {
                    return '<button class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil"></span></button>';
                }
            }
        ];
        $scope.informationTable = new NgTableParams({}, {
            counts: [],
            dataset: []
        });
        $scope.resetCreateCompanyModel = function() {
            $scope.createPreferCompany = {
                companyName: '',
                companyId: ''
            };
            $scope.info.foodPrefers = [];
            $scope.info.drinkPrefers = [];
            $scope.info.productFunctions = [];
        };
        $scope.getTypeHeadOptions = function(value) { //搜索加载
            return companyService.queryCompanyList({
                pageNo: 0,
                delState: 0,
                companyName: value
            }).then(function(res) {
                return res.content;
            });
        };
        $scope.selectTypeHeadOptions = function(item, model, label, event, type) { //搜索选择
            if (type == 'create') {
                $scope.createPreferCompany = item;
                shelfService.queryShelfListByCompanyId({
                    companyId: $scope.createPreferCompany.companyId
                }).then(function(res) {
                    angular.forEach(res, function(item) {
                        $scope.info.shelfPositions.push({
                            shelfName: item.shelfName,
                            shelfId: item.id
                        });
                    });
                });
            } else {
                $scope.company = item;
                companyService.queryCompanyInformation({
                    companyId: $scope.company.companyId
                }).then(function(res) {
                    var data = [];
                    angular.forEach(res, function(item) {
                        item.detailInfo.companyName = item.companyName;
                        data.push(angular.extend(item, item.detailInfo));
                    });
                    $scope.informationTable.settings({
                        dataset: data
                    });
                });
            }
        };
        //创建企业信息
        $scope.openCreateCompanyInformationWin = function() {
            $scope.resetCreateCompanyModel();
            companyInformationCreateModal = modalService.initModal({
                templateUrl: 'informationCreateModal',
                appendTo: $element,
                scope: $scope,
                ok: $scope.createCompanyInformationConfirm
            });
        };
        $scope.createCompanyInformationConfirm = function() {
            if (!$scope.createPreferCompany.companyId) {
                window.alert('请选择公司！');
                return;
            }
            return companyService.createCompanyInformation({
                companyId: $scope.createPreferCompany.companyId,
                info: $scope.info
            });
        };
        //创建喜好
        $scope.addPrefer = function(type) {
            $scope.info[type].push({
                value: '',
                name: ''
            });
        };
        //删除洗好
        $scope.deletePrefer = function(type, index) {
            var prefers = $scope.info[type];
            $scope.info[type] = _.without(prefers, prefers[index]);
        };
        //下拉框选择
        $scope.selectOption = function(obj, type, index) {
            var infos = $scope.info[type];
            if (angular.isArray(infos)) {
                infos[index].value = obj.value;
            } else {
                $scope.info[type] = obj.value;
            }
        };

    });
};
