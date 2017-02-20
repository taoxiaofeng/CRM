/*
 *货架巡查
 *shelfController
 */
module.exports = function(app) {
    app.controller('shelf', function($scope, $mdSidenav, $sce, shelfService, companyService, authService, utilService, NgTableParams) {
        $scope.queryParams = {
            shelf_stock_percent: '',
            shelf_warn_count: '',
            shelf_type: '',
            last_update_interval: ''
        };
        $scope.companys = [];
        $scope.handleClickSearch = function() {
            shelfService.queryShelfList(_.omit($scope.queryParams, function(value) {
                return value === '';
            })).then(function(res) {
                var temp = [];
                $scope.companys = res.content;
                angular.forEach($scope.companys, function(item, index) {
                    $scope.companys.index = index;
                    temp.push({
                        companyName: item.company_name,
                        companyId: item.company_id
                    });
                });
                companyService.companyList = temp;
                $scope.tableParams.settings({
                    dataset: shelfService._parseShelfData($scope.companys)
                });
                $scope.hideFilterPanel();
            });
        };
        $scope.handleClickSearchAll = function() {
            shelfService.queryShelfList({}).then(function(res) {
                var temp = [];
                $scope.companys = res.content;
                angular.forEach($scope.companys, function(item, index) {
                    $scope.companys.index = index;
                    temp.push({
                        companyName: item.company_name,
                        companyId: item.company_id
                    });
                });
                companyService.companyList = temp;
                $scope.tableParams.settings({
                    dataset: shelfService._parseShelfData($scope.companys)
                });
            });
        };
        $scope.showFilterPanel = function() {
            $mdSidenav('right').toggle();
        };
        $scope.hideFilterPanel = function() {
            $mdSidenav('right').toggle();
        };
        $scope.heads = [{
            title: '序号',
            field: 'index',
            show: true,
            getValue: function(v, r, idx) {
                return '<span style="display:inline-block;width:40px;text-align:center">' + (v + 1) + '</span>';
            }
        }, {
            title: '公司名称',
            field: 'company_name',
            filter: { company_name: 'text' },
            getValue: function(v, r) {
                return '<a style="display:inline-block;width:150px" href="#shelf/' + r.company_id + '">' + v + '</a>';
            },
            show: true
        }, {
            title: '公司类型',
            field: 'company_type',
            filter: { company_type: 'text' },
            show: true
        }, {
            title: '公司地址',
            field: 'company_address',
            filter: { company_address: 'text' },
            getValue: function(v) {
                return '<span style="display:inline-block;width:150px">' + v + '</span>';
            },
            show: true
        }, {
            title: '货架数/货架总数',
            field: 'valid_sheld_countVSshelf_count',
            filter: { valid_sheld_countVSshelf_count: 'text' },
            show: true
        }, {
            title: '距离上次补货',
            field: 'last_update_interval',
            sortable: 'last_update_interval',
            filter: { last_update_interval: 'text' },
            show: true
        }, {
            title: '货架上货物总体占比',
            field: 'all_product_per',
            sortable: 'all_product_per',
            filter: { all_product_per: 'text' },
            show: true,
            getValue: function(v) {
                return '<span style="display:inline-block;width:150px">' + v + '</span>';
            }
        }];
        $scope.tableParams = new NgTableParams({
            count: 25
        }, {
            counts: [],
            paginationMaxBlocks: 13,
            paginationMinBlocks: 2,
            dataset: []
        });
        $scope.shelfStatusOptions = {
            choices: $([{ value: '', desc: '全部' }]).concat(utilService.getConstantJsonValue('SHELF_STATE')),
            getDefaultItem: function(value) {
                var v = value;
                var options = this.choices;
                return _.findWhere(options, { value: v }) || options[0];
            },
            selectItem: function(record) {
                this.defaultItem = record;
                $scope.queryParams.shelf_type = record.value;
            }
        };
        /*        shelfService.queryShelfList().then(function(res) {
                    var temp = [];
                    $scope.companys = res.content;
                    angular.forEach($scope.companys, function(item, index) {
                        $scope.companys.index = index;
                        temp.push({
                            companyName: item.company_name,
                            companyId: item.company_id
                        });
                    });
                    companyService.companyList = temp;
                    // = _.pluck($scope.companys, 'company_id');

                    $scope.tableParams.settings({
                        dataset: shelfService._parseShelfData($scope.companys)
                    });
                });*/
    });
};
