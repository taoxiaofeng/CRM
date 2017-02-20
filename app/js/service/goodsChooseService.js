module.exports = function(app) {
    app.service('goodsChooseService', ['xhrService', '$q', function(xhrService, $q) {
        /*分页查询选购单列表
        *offset R
        limit R
        companyId
        startTime
        endTime
        orderStates
        */
        this.queryManagerOrderList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'managerorder/orders',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*查询行政选购单明细
         *orderId
         */
        this.queryManagerOrderDetail = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'managerorder/' + params.orderId,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*修改行政选购单状态
        *orderId
        *orderState
        */
        this.modifyOrderState = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'managerorder/'+params.orderId+'/state',
                params:{
                    orderState:params.orderState,
                    optRecord:params.optRecord
                },
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
}
