/**
 * 商品标签管理
 * labelsManagement
 */
module.exports = function (app) {
    app.controller('labelsManagement', function ($scope, $uibModal, $compile, modalService, labelsManagementService, NgTableParams) {
        $scope.paths = [{
            name: '首页',
            route: '#home'
        }, {
            name: '商品管理',
            active: true
        }];


        $scope.tags;
        $scope.labelName;
        $scope.label = {};
        $scope.addLabel = {};
        $scope.tagsList = [];
        $scope.labelsManagementTableData = [];
        $scope.newLabelsManagement = {};
        $scope.labelsManagementId = '';
        $scope.queryParams = {};

        /**
         * 商品标签 - 列表查询
         * 接口名 /company/label
         * 请求方法 GET
         * labelName  标签名称   offset 条目偏移 limit   \当前页显示数据个数
         */

        $scope.obtainLabesList = function (typeSort) {
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.tableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    return labelsManagementService.getLabelsList({
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        labelName: $scope.labelName,
                        // typeSort:$scope.typeSort  // $scope.typeSort  取 赋值
                        typeSort: typeSort // 取 typeSort 参数值
                    }).then(function (res) {
                        params.total(res.totalElements);
                        return res.content;
                    });
                }
            })
        };
        $scope.obtainLabesList();

        /**
         * 根据商品标签名称 查询
         */
        $scope.labelQuery = function (labelName) {
            labelsManagementService.getLabelsList(labelName).then(function () {
                $scope.obtainLabesList();
            });
        };

        /**
         * 添加标签   编辑标签
         *
         */
        $scope.tagEdit = function (tType) {
            /**
             * 判断打开modal时是编辑还是添加
             */
            if (tType) {//编辑
                $scope.addLabel = {
                    id: tType.id,
                    tagsName: tType.name,
                    type: tType.type,
                    noteName: tType.remark
                };
                $scope.defaultItem = { //设置下拉选项 默认值
                    id: tType.id,
                    type: tType.type
                };
            } else { //新增
                $scope.addLabel = {};
                $scope.defaultItem = { //设置下拉选项 默认值
                    id: 0,
                    type: '无'
                };
            }
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName('labelsManagement')),
                scope: $scope,
                templateUrl: 'addTagsModal'
            });
            /**
             * 添加/编辑标签 - 下拉列表-选择标签类型
             */
            $scope.selectTagType = function (item) {
                $scope.addLabel.type = item.type;
            };
        };

        /**
         * 商品标签 - 删除商品标签名称
         * 接口名 /company/label/delete_name/这里填写labelId
         * 请求方法 DELETE
         * 请求参数: id    主键id
         */

        $scope.tagDeleteClick = function (id, name) {
            $scope.labelsManagement = {};
            $scope.id = id;
            $scope.name = name;
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName('labelsManagement')),
                scope: $scope,
                templateUrl: 'deleteTagModel'
            });
        };
        $scope.deleteTable = function () {
            var me = this;
            labelsManagementService.deleteCommodityLabelName({
                id: $scope.id
            }).then(function (res) {
                $scope.obtainLabesList();
                me.$close();
            });
        };

        /**
         * 商品标签 - 创建商品标签名称
         * 添加标签确认
         * addLabel
         */
        $scope.addTagsConfirm = function (addLabel, scope) {
            if (addLabel.id) { //编辑
                var me = this;
                var params = {id: addLabel.id, type: addLabel.type, name: addLabel.tagsName, remark: addLabel.noteName};
                labelsManagementService.modifylabelsName(params).then(function (res) {
                    $scope.obtainLabesList();
                    me.$close();
                });
            } else { //新增
                var me2 = this;
                if (addLabel.type == "无") {
                    alert("标签类型不能为'无',请选择标签类型!!!");
                } else {
                    var params2 = {type: addLabel.type, name: addLabel.tagsName, remark: addLabel.noteName};
                    labelsManagementService.createLabelsName(params2).then(function (res) {
                        $scope.obtainLabesList();
                        me2.$close();
                    });
                }

            }
        };

        /**
         * 商品标签 - 获取标签类型列表
         */
        $scope.queryTagTypeList = function () {
            labelsManagementService.obtainLabelTypeList().then(function (res) {
                $scope.tagsList = res;
            });
        };
        $scope.queryTagTypeList();

        /**
         * 管理标签类型
         */
        $scope.tagsType = function () {
            $scope.labelsManagement = {};
            $scope.queryTagTypeList();
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName('labelsManagement')),
                scope: $scope,
                templateUrl: 'managementTagType',
                tagsList: $scope.tagsList
            });

            /**
             * 商品标签 - 创建标签类型
             * 接口名 /company/label/create_type
             * 请求方法 POST
             * 请求参数: type 标签类型
             * newTypeName  ==  type
             */
            $scope.addTagsType = function (newTypeName) {
                var type = newTypeName.type;
                labelsManagementService.createLabelsType(type).then(function (res) {
                    newTypeName.type = "";//新增后清除input
                    $scope.queryTagTypeList();
                });
            };

            /**
             * 商品标签 - 更新标签类型
             * 接口名 /company/label/modify_type
             * 请求方法 PUT
             * 请求参数 : id 主键id   type 标签类型
             */
            $scope.modifyType = function (tags) {
                var params = {type: tags.type, id: tags.id};
                labelsManagementService.updateLabelType(params).then(function () {
                    $scope.queryTagTypeList();
                    tags.inEdit = !tags.inEdit;
                });
            };

            /**
             * 商品标签 - 删除标签类型
             * 接口名 /company/label/delete_type/这里填写labelId
             * 请求方法 DELETE
             * 请求参数: id  主键id
             */
            $scope.deleteTableTyleClick = function (id, type) {
                $scope.labelsManagement = {};
                $scope.id = id;
                $scope.type = type;
                $scope.modal = modalService.initModal({
                    appendTo: angular.element(document.getElementsByClassName('labelsManagement')),
                    scope: $scope,
                    templateUrl: 'deleteTagTypeModel'
                });
            };
            $scope.deleteLabelType = function () {
                var me = this;
                labelsManagementService.deleteLabelType({
                    id: $scope.id
                }).then(function (res) {
                    $scope.queryTagTypeList();
                    $scope.obtainLabesList();
                    me.$close();
                });
            };


            /**
             * 选择标签回调
             * @param tags
             */
            $scope.selectTagsCallback = function (tags) {
                $scope.tags = tags;
                $scope.queryTagTypeList(tags);
            };
        };
        /**
         * 标签类型排序
         * @param item
         */
        $scope.sortByTagsType = function (item) {
            // $scope.typeSort = item.sortCode; // 赋值 传给服务端
            $scope.obtainLabesList(
                $scope.typeSort = item.sortCode  // 通过参数传给服务端
            );
        };
    });
};

