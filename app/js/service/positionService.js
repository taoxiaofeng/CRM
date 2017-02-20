module.exports = function(app) {
    app.service('positionService', ['xhrService', '$q', function(xhrService, $q) {
        /*新增仓位
        @Params
        row
        layer
        location
        */
        this.createPosition = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'product/position',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
        /*修改仓位
        @Params
        id
        row
        layer
        location
        */
        this.modifyPosition = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'product/position',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
        /*分页获取仓位
        @Params
        name
        sortType
        offset
        limit
        */
        this.queryPositionsByPage = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'product/position/_query',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
        /*非分页获取仓位
        @Params
        name
         */
        this.queryAllPositions = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'product/position/_queryAll',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
    }]);
};