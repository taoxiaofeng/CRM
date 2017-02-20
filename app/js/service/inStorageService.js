//inStorageService
module.exports = function(app) {
    app.service('inStorageService', ['xhrService', '$q', function(xhrService, $q) {
        /*
         *获取回仓单列表
         */
        this.getInStorageList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                // path: 'company/stock/query?pageNo=' + params.pageNo,
                path: 'logistics/order/backstock/findList',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /**
         * 获取回仓单详情
         */
        this.getInStorageDetail = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                // path: 'company/stock/detail',
                path: 'logistics/order/backstock/' + params.orderId,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*
         * 获取管理员列表
         */
        this.getAllManager = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'manager',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /**
         * 修改回仓单信息
         */
        this.updateInStorageDetail = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'logistics/order/backstock',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
};