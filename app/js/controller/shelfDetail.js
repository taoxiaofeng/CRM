module.exports = function(app) {
    app.controller('shelfDetail', function($scope, $element, $routeParams, productService, companyService, NgTableParams, utilService, shelfService, modalService) {
        var summaryCreateModal;
        var companyList = companyService.companyList;
        $scope.offset = 0;
        $scope.limit = 25;
        $scope.strategy = '';
        $scope.prefer = { name: '', id: '' };
        $scope.refuse = { name: '', id: '' };
        $scope.prefers = [];
        $scope.refuses = [];
        $scope.showPreferSearch = false;
        $scope.totalItems = companyList.length;
        $scope.currentCompany = _.findWhere(companyList, { companyId: $routeParams.companyId });
        $scope.currentPage = _.indexOf(companyList, $scope.currentCompany) + 1;
        $scope.$watch('currentPage', function() {
            $scope.init();
        });
        //配置
        $scope.summaryHead = [{
            title: '序号',
            field: 'index',
            show: true,
            getValue: function(value, record, index, scope) {
                return '<span>' + index + '</span>';
            }
        }, {
            title: '偏爱商品',
            field: 'prefers',
            getValue: function(value, record, index, scope) {
                return '<span>' + _.pluck(value || [], 'name').join(' | ') + '</span>';
            },
            show: true
        }, {
            title: '拒绝商品',
            field: 'refuses',
            getValue: function(value, record, index, scope) {
                return '<span>' + _.pluck(value || [], 'name').join(' | ') + '</span>';
            },
            show: true
        }, {
            title: '选购策略',
            field: 'strategy',
            getValue: function(value) {
                return '</span>' + (value || '') + '</span>';
            },
            show: true
        }];
        $scope.preferSummaryTable = new NgTableParams();
        //方法
        //初始化
        $scope.init = function() {
            $scope.currentCompany = companyList[$scope.currentPage - 1];
            shelfService.queryShelfDetailByCompanyId({
                companyId: $scope.currentCompany.companyId
            }).then(function(res) {
                $scope.tables = shelfService._parseShelfDetailData(res[0]);
            });
            companyService.queryCompanyPreferSummary({
                companyId: $scope.currentCompany.companyId
            }).then(function(res) {
                $scope.companySummary = res;
            });
        };
        $scope.openCreatePreferSummaryWin = function() {
            summaryCreateModal = modalService.initModal({
                templateUrl: 'summarycontent',
                appendTo: $element,
                scope: $scope,
                ok: $scope.createCompanyPreferSummary
            });
        };
        $scope.getTdCls = function(td) {
            var product = td && td.productHeader || {
                stock: 0,
                maxStock: 0
            };
            var ratio = 0;
            var stock;
            var maxStock;
            var cls = '';
            if (!td || !product) {
                return '';
            }
            stock = parseInt(product.stock);
            maxStock = parseInt(product.maxStock);
            ratio = parseFloat((stock / maxStock).toFixed(1));
            if (ratio <= 0.2) {
                cls = 'red';
            } else if (ratio > 0.2 && ratio <= 0.5) {
                cls = 'yellow';
            } else {
                cls = 'green';
            }
            if (maxStock === 0) {
                cls = 'blue';
            }
            return cls;
        };
        $scope.add = function($scope, type) {
            if ($scope[type].name) {
                if ($scope[type].id) {
                    $scope[type + 's'].push(angular.copy($scope[type]));
                    $scope[type].id = '';
                } else {
                    $scope[type + 's'].push(angular.copy($scope[type]));
                    $scope[type].name = '';
                }
            }
        };
        $scope.remove = function($scope, index, type) {
            $scope[type + 's'].splice(index, 1);
        };
        $scope.createCompanyPreferSummary = function() {
            return companyService.createCompanyPreferSummary({
                companyId: $scope.currentCompany.companyId,
                info: {
                    prefers: $scope.prefers,
                    refuses: $scope.refuses,
                    strategy: $scope.strategy
                }
            });
        };
        $scope.typeHeadOptions = [];
        $scope.typeHeadConfigs = {
            debounce: {
                'default': 500,
                'blur': 250
            },
            getterSetter: true
        };
        $scope.getTypeHeadOptions = function(value) { //搜索加载
            return productService.queryProductByKey({
                offset: $scope.offset,
                limit: $scope.limit,
                productName: value
            }).then(function(res) {
                return res.content;
            });
        };
        $scope.selectTypeHeadOptions = function(item, model, label, event, type) { //搜索选择
            $scope[type] = {
                name: item.header.productName,
                id: item.header.id
            };
        };

    });
};
