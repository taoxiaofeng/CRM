//productService
module.exports = function(app) {
  app.service('deadStockService', ['xhrService', '$q', '$filter', 'CONSTANTS',
    function(xhrService, $q, $filter, CONSTANTS) {
      this.query = function(url, type, params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService[type]({
          path: url,
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
      /*
       *查询滞销商品
       *{
       *productName
       *}
       */
      this.getDeadStockProductList = function(params) {
        return this.query('product/unsalable/_query', 'Post', params);
      };
      /*
       *删除滞销商品
       *{productId
       *}
       */
      this.removeDeadStockProduct = function(params) {
        return this.query('product/unsalable/del/'+params.productId, 'Delete', params);
      };


    }
  ]);
};
