module.exports = function(app) {
    app.service('templateService', ['xhrService', '$q', 'cacheService', function(
        xhrService, $q, cacheService) {
        var me = this;
        this.query = function(path, type, params, needAll) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var params = params || {};
            xhrService[type].call(this, {
                path: path,
                params: params,
                success: function(res, data) {
                    deferred.resolve(res);
                },
                error: function(res, data) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
        /*获取模版列表
         *dest_id
         */
        this.queryTemplateList = function(params) {
            return me.query('template/helper/pageable', 'Post', params);
        };
        /*添加模板
         *name
         *version
         *dest_id
         */
        this.addTemplate = function(params) {
            return me.query('template/add', 'Post', params);
        };
        /*创建模板
        
         */
        this.createTemplate = function(params) {
            return me.query('template/helper', 'Post', params);
        };
        /*修改模板
         *id
         *type
         *name
         *status   
         *module
         */
        this.editTemplate = function(params) {
            // params.module = JSON.stringify(params.module);
            return me.query('template/helper', 'Put', params);
        };

        /*删除模板
         *id
         */
        this.deleteTemplate = function(params) {
            return me.query('template/helper/1/'+params.id, 'Delete', params);
        };
        /*获取模板详情
         */
        this.queryTemplateDetail = function(params) {
            return me.query('template/helper/' + params.id, 'Get', params);
        };
        /*模板发布
        type
        id
        status
         */
        this.publishTemplate=function(params){
            return me.query('template/helper/modify_status', 'Put', params);
        }


    }]);
};
