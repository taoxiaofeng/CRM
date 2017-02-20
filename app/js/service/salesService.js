/**
 * Created by zhouwan on 2017/1/13.
 */
module.exports = function (app) {
  app.service("salesService", ['xhrService', '$q', function (xhrService, $q) {
    this.getQuerySalesList = function (params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: "product/statistics/_query",
        params: params,
        success: function (res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
    this.getStartTime = function () {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'product/statistics/startTime',
        success: function (res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
    //滞销库
    this.addUnsalable = function (params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: "product/unsalable/add",
        params: params,
        success: function (res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    //新品推荐库
    this.addCommend = function (params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: "product/recommend/add",
        params: params,
        success: function (res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
    //删除新品推荐
    this.delRecommend = function (params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'product/recommend/del/' + params.id,
        success: function (res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
    //删除滞销商品
    this.delUnsalable = function (params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'product/unsalable/del/' + params.id,
        success: function (res) {
          deferred.resolve(res);
        }
      });
      return promise;
    }

  }]);

}