/**
 * Created by taoxiaofeng on 16/6/27.
 */
module.exports = function(app) {
    app.service('welfareService', ['xhrService', '$q', function(xhrService, $q) {
        /*零花钱工单列表分页查询
         *companyId
         *offset
         *limit
         */
        this.queryWelfareList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'welfare/pocketmoney/pageable',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*查询零钱发放列表
         *orderId
         *offset
         *limit
         */
        this.queryWelfareObjectList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'welfare/pocketmoney/order/' + params.orderId + '/items',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*零钱审核
         *orderId
         *orderState
         *optRecord
         */
        this.auditWelfare = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'welfare/pocketmoney/order/state',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*发放零钱
        *
        */
    }]);
};
