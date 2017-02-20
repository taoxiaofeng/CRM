//productService
module.exports = function(app) {
  app.service('newProductService', ['xhrService', '$q', function(
    xhrService, $q) {
    this.indexData = function(data, offset) {
      angular.forEach(data, function(item, index) {
        item.index = index + offset;
      });
      return data
    };

    // 查找新品表
    this.queryProductByKey = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'product/recommend/_query',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    //查看商品详情
    this.getProductById = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'product/' + params.id,
        params: params,
        success: function(res) {
          console.log($filter('int')(res, ['header.stock']))
          deferred.resolve($filter('int')(res, ['header.stock']));
        }
      });
      return promise;
    };

    // 修改新品推荐状态：推荐状态值 1:推荐中 2:待推荐
    this.changeNewProductStatus = function (params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'product/recommend/changeState',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    //删除新品推荐
    this.deleteNewProduct = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'product/recommend/del/' + params.id,
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    // 获取所有商品的数据，用于添加新品的对话框
    this.queryAllProduct = function (params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'product/_query',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    // 确认添加新品
    this.addNewProducts = function (params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      console.log('!!!!!! addNewProducts', params)
      xhrService.Post({
        path: 'product/recommend/add',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    /*
     *除当前货架上的其他商品
     */
    this._parseOtherShelfProducts = function(data, selectedIdList) {
      var temp = [];
      angular.forEach(data, function(item, i) {
        var t = angular.copy(item.header);
        t.positions = item.positions;
        if (selectedIdList.indexOf(item.header.id) > -1) {
          t.select = true;
        }
        t.categoryName = item.category.categoryName;
        temp.push(t);

      });
      return temp;
    };
  }]);
};
