module.exports = function(app) {
    app.controller('positionManageCtrl', function($scope, NgTableParams, modalService, positionService, $mdDialog) {
        $scope.limit = 25;
        $scope.position = {};
        var loadPositionTable = function(queryParams) {
            queryParams = queryParams || {};
            $scope.positionTable = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 25,
                paginationMinBlocks: 2,
                getData: function(params) {
                    return positionService.queryPositionsByPage({
                        offset: (params.page() - 1) * $scope.limit,
                        limit: $scope.limit,
                        sortType: queryParams.sortType
                    }).then(function(res) {
                        params.total(res.totalElements);
                        return res.content;
                    });
                }
            });
        };
        loadPositionTable();
        //打开仓位编辑
        $scope.openPositionEditModal = function(mode, position) {
            $scope.position = {};
            if (mode == 'edit') { //编辑模式
                $scope.position = angular.copy(position);
            }
            $scope.positionEditModal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName('position-manage')),
                scope: $scope,
                templateUrl: 'positionEditModal',
                size:'sm'
            });
        };
        //提交仓位编辑
        $scope.submitPositionEdit = function(position) {
            var errorMsg = '';
            if (position.row.length != 3) {
                errorMsg = '\'排\'需为3位整数';
            }else if (position.layer.length != 2) {
                errorMsg = '\'层\'需为2位整数';
            }else if (position.location.length != 3) {
                errorMsg = '\'位置\'需为3位整数';
            }
            if (errorMsg.length) {
                $mdDialog.show($mdDialog.alert({
                    title: '失败',
                    textContent: errorMsg,
                    ok: '关闭',
                    zIndex: 999999999
                }).clickOutsideToClose(true));
                return;
            }
            if (typeof position.id == 'undefined') { //新增
                positionService.createPosition(position).then(function(res) {
                    $scope.positionEditModal.close();
                    loadPositionTable();
                });
            } else { //编辑
                positionService.modifyPosition(position).then(function(res) {
                    $scope.positionEditModal.close();
                    loadPositionTable();
                });
            }
        };
        //按编码排序
        $scope.sortByName = function(item) {
            loadPositionTable({
                sortType: item.sortCode
            });
        };

    });
};