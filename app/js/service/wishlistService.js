module.exports = function(app) {
    app.service('wishlistService', ['xhrService', '$q', function(xhrService, $q) {
        this._parseWishlist = function(data) {
            var temp = [];
            var shelfCount = data.shelfCount;
            angular.forEach(data.items, function(item, i) {
                var t = angular.copy(item);
                t.excess = i + 1 > 20 * shelfCount;//大于20*货架数斜体显示
                temp.push(t);
            });
            return temp;
        };
        /*查询企业心愿商品列表
         *companyId
         */
        this.queryWishlist = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'wishlist/company/' + params.companyId + '/reached',
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
}
