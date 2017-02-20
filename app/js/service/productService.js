//productService
module.exports = function(app) {
  app.service('productService', ['xhrService', '$q', '$filter', 'CONSTANTS',
    function(
      xhrService, $q, $filter, CONSTANTS) {
      this.indexData = function(data, offset) {
        angular.forEach(data, function(item, index) {
          item.index = index + offset;
        });
        return data;
      };
      /*
      转换商品列表
      */
      this._parseProductListData = function(data, labelList) {
        var temp = [];
        angular.forEach(data, function(d, i, a) {
          var obj = d.header;
          obj.category = d.category;
          obj.positions = d.positions;
          var labelNames = [];
          _.each(labelList, function(item) {
            var t = _.find(d.labelDtos, function(label) {
              return label.typeId == item.id;
            });
            if (typeof t != 'undefined') {
              labelNames.push(t.name);
            } else {
              labelNames.push('');
            }
          });
          obj.labelNames = labelNames;
          var t = '';
          _.each(obj.productTags, function(tagId, index) {
            if (index != 0) {
              t += ',';
            }
            t += CONSTANTS.PRODUCT_TAG.DESC[tagId];
            return t;
          });
          obj.productTagsPrefix = t;
          temp.push(obj);
        });
        return temp;
      };
      /*
      转换商品详情
      */
      this._parseProductData = function(res, labelList) {
        var temp = res.header;
        temp.categoryName = res.category.categoryName;
        temp.originPrice = temp.originPrice / 100.0;
        temp.price = temp.price / 100.0;
        temp.positionIds = res.positions;
        temp.labelDtos = [];
        temp.showLabelIdList = [];
        _.each(labelList, function(item) {
          var t = _.find(res.labelDtos, function(label) {
            return label.typeId == item.id;
          });
          if (typeof t != 'undefined') {
            temp.labelDtos.push(t);
            temp.showLabelIdList.push(t.id);
          } else {
            temp.showLabelIdList.push('');
          }
        });
        temp.labelIdList = _.pluck(temp.labelDtos, 'id');
        temp.categoryId = res.category.id;
        return temp;
      };
      /*按类型获取商品数据字典
      @Params 
      type
      */
      this.queryProductDictionary = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'product/dict/listByType',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      //接口
      this.queryProductByKey = function(params) {
        // debugger
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
      /*获取品类列表
      @Params
      categoryId
      */
      this.queryProductCategoryList = function(params) {
        params = typeof params != 'undefined' ? params : { parentCategoryId: 0 };
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'product/category/show_list/' + params.parentCategoryId,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*创建品类
      @Params
      id
      categoryName
      categoryLevel
      */
      this.createProductCategory = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: 'product/category',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*删除品类
      @Params
      categoryId
       */
      this.deleteProductCategory = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Delete({
          path: 'product/category/' + params.id,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*修改品类
      @Params
      id
      categoryName
      categoryLevel
      */
      this.modifyProductCategory = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: 'product/category/modify',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      //查看商品详情
      this.getProductById = function(params) {
        // debugger
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'product/' + params.id,
          params: params,
          success: function(res) {
            deferred.resolve($filter('int')(res, ['header.stock']));
          }
        });
        return promise;
      };
      //修改商品
      this.editProduct = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: 'product/' + params.id,
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      //将商品放入指定品类
      this.addProductToCategory = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: 'product/category/' + params.id,
          // path: 'company/shelf_product/createCategory',
          params: params.productIds,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      //保存新建商品
      this.saveNewProduct = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: 'product',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      //保存已有商品
      this.saveOldProduct = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: 'product/' + params.id,
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      //删除商品
      this.deleteProduct = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Delete({
          path: 'product/' + params.id,
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      //获取仓位列表
      this.getPositionList = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'product/position',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      //商品库存修改记录
      this.getProductStockChangeLog = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'product/' + params.id + '/stockchanges',
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
      //增加单品推荐期间展示次数
      this.incrProductRecommend = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: 'product/recommend/incrView',
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
    }
  ]);
};