/**
 * Created by taoxiaofeng on 2016/11/25.
 */
/**
 * 商品标签管理
 * labelsManagement
 */
module.exports = function (app) {
    app.controller('commentsManage', function ($scope, $uibModal, $compile, modalService, orderService, NgTableParams, suiteService, CONSTANTS, utilService) {

        $scope.ORDER_STATUS = CONSTANTS.ORDER_STATUS;//订单状态
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE; //订单类型
        $scope.queryParams = {
            suiteName: '',//套餐名称
            suiteId: '',//套餐ID
            companyName: '', //公司名称
            companyId: '', //公司ID
            customerName: '', //用户名称
            content: '', //评论内容
            createTimeStart: '',//评论创建时间
            createTimeEnd: ''//评论创建时间
        };

        //根据企业搜索
        $scope.searchByCompany = function (company) {
            $scope.queryParams.companyName = company.companyName;
            $scope.commentsList();
        };

        //清空企业搜索
        $scope.emptyCompanySearch = function() {
            delete $scope.queryParams.companyName;
        };

        /**
         * 评论列表
         */
        $scope.commentsList = function (queryParams) {
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
                    // var search = getParams();
                    /*var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        customerName: $scope.customerName,
                        content: $scope.content,
                    };*/
                    var queryParam = angular.extend( getParams(),{
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit
                    });
                    return suiteService.queryComment(queryParam).then(function (res) {
                        // debugger
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            })
        };
        $scope.commentsList();
        var getParams = function () {
            // debugger
            var temp = $scope.queryParams;
            temp[temp.markId] = temp.fuzzy;
            return _.omit(temp, 'markId', 'fuzzy');
        };


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

        //选择
        $scope.queryChoose = {
            nameTypeData: [{
                markId: '',
                desc: '无'
            }, {
                markId: 'customerName',
                desc: '用户名'
            }, {
                markId: 'content',
                desc: '内容'
            }],
            selectItem: function (item) {
                $scope.queryParams["markId"] = item.markId;
            }
        };

        /**
         * 回复评论
         */
        $scope.replyComment = function (cm) {
            // debugger
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementById('commentsManage')),
                scope: $scope,
                templateUrl: 'suite/replyCommentsTemplate.html'
            });
            $scope.comments = cm;
        };

        /**
         * 确定回复
         *determineReply()
         */
        $scope.determineReply = function (comments) {
            var me = this;
            // debugger
            console.log(comments.content);
            var params = {
                suiteId: comments.suiteId,
                companyId: comments.companyId,
                content: comments.reply,
                parentId: comments.id,

            };
            suiteService._createComment(params).then(function (res) {
                $scope.commentsList();
                alert('回复成功！');
                me.$close();
            });
        };

        /**
         * 取消回复
         * cancelReply()
         */
        $scope.cancelReply = function () {
            // debugger
            this.$close();
        };

        /**
         * 删除评论
         */
        $scope.deleteComment = function (cm) {
            // debugger
            var params = {
                suiteCommentId: cm.id
            };
            suiteService._deleteComment(params).then(function (res) {
                alert('评论删除成功。');
                $scope.commentsList();
            });
        }

    });
};


