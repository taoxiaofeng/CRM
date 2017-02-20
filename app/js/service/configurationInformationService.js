/**
 * Created by taoxiaofeng on 2016/10/19.
 */
module.exports = function (app) {
    app.service('configurationInformationService', ['xhrService', '$q', function (xhrService, $q) {

        /**
         * CRM信息配置 - 零花钱基数#
         * 接口名 /info/config/pocket_money
         * 请求方法 PUT
         * 请求参数 : totalFee  零花钱校验值   int类型
         */
        this.pocketMoneyAudit = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'info/config/pocket_money',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * CRM信息配置 - 零花钱基数 -- 获取默认的零花钱基数
         * 接口名 info/config/money_base
         * 请求方法 GET
         */
        this.getPocketMoneyAudit = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'info/config/money_base',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * CRM信息配置 - 想要商品爱心跳动时间配置
         * 接口名 /info/config/heart_show
         * 请求方法 PUT
         * 请求参数: showTime  int类型
         */
        this.wishListConfiguration = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'info/config/heart_show',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };


        /**
         * CRM信息配置 - 获取  想要商品爱心跳动时间配置
         * 接口名 info/config/heart_base
         * 请求方法 GET
         */
        this.getWishListConfiguration = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'info/config/heart_base',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         *  CRM信息配置 - 营销商品/组合定金额度
         *  接口名 company/promotion/config/deposit
         *  请求方法 Get
         */
        this.getMarketingActivitiesDepositInfo = function () {
            // debugger
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/promotion/config/deposit',
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        this.marketingActivitiesDepositInfo = function (params) {
            // debugger
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/promotion/config/deposit/' + params,
                // params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * CRM信息配置 - 获取选购单上限#
         * 接口名 /info/config/manager_order
         * 请求方法 GET
         */
        this.getChooseOrderInfoCeiling = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'info/config/manager_order',
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * CRM信息配置 - 创建/修改选购上限值#
         * 接口名 /info/config/manager_order
         * 请求方法 POST
         * 请求参数: id   limitNum   shelfNumType
         */
        this.createChooseOrderInfo = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'info/config/manager_order',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        }
    }]);
};
