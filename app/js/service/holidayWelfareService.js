/**
 *
 */
module.exports = function (app) {
    app.service('holidayWelfareService', ['xhrService', '$q', '$filter', 'CONSTANTS', function (xhrService, $q, $filter, CONSTANTS) {

        /**
         * 显示待付款状态的订单 不显示支付方式
         */
        this.parseData = function (data) {
            // debugger
            var t = angular.copy(data);
            angular.forEach(t, function (order) {
                if (order.order.status == CONSTANTS.ORDER_STATUS.CANCEL) {
                    order.order.payChannel = '';
                }
                /*if (order.order.payChannel == CONSTANTS.PAYMENT_STATUS.WECHAT_PAY || order.order.payChannel == CONSTANTS.PAYMENT_STATUS.WECHAT_APP) {
                    order.order.status = CONSTANTS.ORDER_STATUS.WAITING_DISTRIBUTION;
                }*/
            });
            return t;
        };


        /**
         * 获取所有节假日福利订单
         */
        this.getAllWelfareOrders = function (params) {
            // debugger
            var deferred = $q.defer();
            var promise = deferred.promise;
            if(params.type){//获取默认
                // debugger
                params.endTime =  $filter('date')(params.endTime, 'yyyy-MM-dd HH:mm:ss');
                params.startTime = $filter('date')(params.startTime, 'yyyy-MM-dd HH:mm:ss');
                delete params.type;
            } else{
            }
            // params.limit=25;
            xhrService.Get({
                path: 'company/holiday/order/page',
                params: params,
                // remote:'holiday',
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /**
         * 明细 --> 备注 接口
         */
        this.setNotes = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/holiday/order/notes',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         *  取消订单
         *  params : id
         */
        this.cancelOrder = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/holiday/order/cancel',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 收到款项
         */
        this.receivePayment = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/holiday/order/confirm',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 完成配送
         */
        this.completeDelivery = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/holiday/order/finish',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 获取默认的(预定时间、热卖时间、结束时间)
         */
        this.getHolidayDefaultTime = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'holiday/period/default',
                // params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 更新(预定时间、热卖时间、结束时间)
         */
        this.updateHolidayTime = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'holiday/period/update',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
};