/*
 *companyService
 */
module.exports = function(app) {
    app.service('financeService', ['xhrService', '$q', '$filter', function(xhrService, $q, $filter) {
        /*财务列表
         *companyId
         *financeStartTime
         *financeEndTime
         *orderStates
         *isInvoice
         *isUpdateTime
         */
        this.queryFinanceList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            params.financeStartTime && (params.financeStartTime = params.financeStartTime.getTime());
            params.financeEndTime && (params.financeEndTime = params.financeEndTime.getTime());
            xhrService.Get({
                path: 'logistics/order/settlement/finance/findList',
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
        /*财务结算单开票
         *
         */
        this.createInvoice = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            params.invoiceFee = $filter('points')(params.invoiceFee);
            params.expressCompany = params.expressCompany.desc || params.expressCompany;
            xhrService.Put({
                path: 'logistics/order/settlement/finance/invoice',
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
        /*结算单确认收款
         *
         */
        this.confirmPayment = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            params.receiveFee = $filter('points')(params.receiveFee);
            params.dueFee = $filter('points')(params.dueFee);
            params.badDebtFee = $filter('points')(params.badDebtFee);
            var d = new Date(params.receiveFeeTime);
            var s = new Date(params.receiveFeeTimeHour);
            d.setHours(s.getHours());
            d.setMinutes(s.getMinutes());
            d.setSeconds(s.getSeconds());
            params.receiveFeeTime = d.getTime();
            xhrService.Put({
                path: 'logistics/order/settlement/finance/confirmPayment',
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
