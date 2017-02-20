/**
 * Created by taoxiaofeng on 16/8/4.
 */
module.exports = function(app) {
    app.service('labelsManagementService', ['xhrService', '$q', function(xhrService, $q) {
        /*获取所有标签
        */
        this.getAllLabelList = function() {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/label/find_all_list',
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /**
         * 商品标签 - 列表查询
         * 接口名 /company/label
         * 请求方法 GET
         * 请求参数: labelName   offset  limit
         */
        this.getLabelsList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/label/find_name_list',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 创建商品标签名称
         * 接口名 /company/label/create_name
         * 请求方法 POST
         * 请求参数: type  name   remark
         */
        this.createLabelsName = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'company/label/create_name',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 查看商品标签名称明细
         * 接口名 /company/label/这里传labelId
         * 请求方法 GET
         * 请求参数: labelId
         */
        this.getLabelsDetails = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/label/' + params.labelId,
                /*params: params,*/
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 修改商品标签名称
         * 接口名 /company/label/modify_name
         * 请求方法 PUT
         * 请求参数: id  type   name   remark
         */
        this.modifylabelsName = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/label/modify_name',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 删除商品标签名称
         * 接口名 /company/label/delete_name/这里填写labelId
         * 请求方法 DELETE
         * 请求参数: id
         */
        this.deleteCommodityLabelName = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Delete({
                path: 'company/label/delete_name/' + params.id,
                /*params: params,*/
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 获取标签类型列表
         * 接口名 /company/label/find_type_list
         * 请求方法 GET
         * 请求参数 : 无
         */
        this.obtainLabelTypeList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/label/find_type_list',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 创建标签类型
         * 接口名 /company/label/create_type
         * 请求方法 POST
         * 请求参数: type
         */
        this.createLabelsType = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'company/label/create_type',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };


        /**
         * 商品标签 - 更新标签类型
         * 接口名 /company/label/modify_type
         * 请求方法 PUT
         * 请求参数: id  type
         */
        this.updateLabelType = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/label/modify_type',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 删除标签类型
         * 接口名 /company/label/delete_type/这里填写labelId
         * 请求方法 DELETE
         * 请求参数: id
         */
        this.deleteLabelType = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Delete({
                path: 'company/label/delete_type/' + params.id,
                /*params: params,*/
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
};