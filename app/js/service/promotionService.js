 var basePath = 'company/promotion/';
 module.exports = function(app) {
  app.service('promotionService', ['xhrService', 'utilService', '$q',
    function(xhrService, utilService,
      $q) {
      /*创建营销商品
       */
      this.createPromotionProduct = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: basePath + 'product',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*修改营销商品
       */
      this.modifyPromotionProduct = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'product/' + params.id,
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*
      查询营销商品列表
       */
      this.queryPromotionProductList = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: basePath + 'product/page',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*
      查询营销商品详情
       */
      this.queryPromotionProductDetail = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: basePath + 'product/' + params.id,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*
      上架营销商品
       */
      this.onlinePromotionProduct = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'product/online/' + params.id,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*
      下架营销商品
       */
      this.offlinePromotionProduct = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'product/offline/' + params.id,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*
      获取营销商品HTML链接
       */
      this.getPromotionProductLink = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: basePath + 'product/link/' + params.id,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /**
       * 创建营销套餐
       */
      this.createPromotionSuite = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: basePath + 'suite',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /**
       * 修改营销商品套餐
       */
      this.modifyPromotionSuite = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'suite/' + params.id,
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /**
       * 删除营销商品套餐
       */
      this.deletePromotionSuite = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Delete({
          path: basePath + 'suite/' + params.id,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /**
       * 查询营销商品套餐列表
       */
      this.queryPromotionSuiteList = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: basePath + 'suite/page',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /**
       * 查询营销商品套餐详细
       */
      this.queryPromotionSuiteDetail = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: basePath + 'suite/' + params.id,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /**
       * 获取营销商品HTML链接
       */
      this.getPromotionSuiteLink = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: basePath + 'suite/link/' + params.id,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /**
       * 转换营销商品详细
       */
      this._parsePromotionProductDetail = function(data) {
        var temp = angular.copy(data);
        temp.price = temp.price / 100;
        temp.originalPrice = temp.originalPrice / 100;
        temp.active = parseInt(temp.active);
        temp.imgDetails = _.map(data.images, function(item, i) {
          var t = item.match(/_\d+_/)[0];
          var size = t.substr(1, t.length - 2);
          var wh = item.match(/\d+X\d+/)[0].split('X');
          return {
            index: i + 1,
            path: item,
            image_width: wh[0],
            image_height: wh[1],
            file_size: size
          };
        });
        temp.desImgDetails = _.map(data.desImages, function(item, i) {
          var t = item.match(/_\d+_/)[0];
          var size = t.substr(1, t.length - 2);
          var wh = item.match(/\d+X\d+/)[0].split('X');
          return {
            index: i + 1,
            path: item,
            image_width: wh[0],
            image_height: wh[1],
            file_size: size
          };
        });
        return temp;
      };
      /**
       * 转换营销商品列表数据
       */
      this._parsePromotionProductList = function(data) {
        var temp = [];
        _.each(data, function(item) {
          item.active = parseInt(item.active);
          temp.push(item);
        });
        return temp;
      };
      /**
       * 转换营销套餐详细
       */
      this._parsePromotionSuiteDetail = function(data) {

      };
      /**
       * 转换营销套餐列表数据
       */
      this._parsePromotionSuiteList = function(data) {
        var temp = [];
        _.each(data, function(item) {
          var productNamesStr = '';
          _.each(item.productNames, function(name, i) {
            productNamesStr += name;
            if (i < item.productNames.length - 1) {
              productNamesStr += ',';
            }
          });
          item.productNamesStr = productNamesStr;
          temp.push(item);
        });
        return temp;
      };
      /*退货
       *
       * orderId
       */
      this.refundPromotionOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'order/refund/' + params.orderId,
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
      /*收货
       *
       * orderId
       */
      this.receivePromotionOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'order/receive/' + params.orderId,
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
      /*支付全额
       *orderId
       */
      this.payFullPromotionOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'order/pay/full/' + params.orderId,
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
      /*确认支付定金
       *orderId
       */
      this.confirmDeposit = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'order/deposit/confirm/' + params.orderId,
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
      /*订单发货
       *orderId
       * 
       */
      this.deliveryPromotionOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'order/deliver/' + params.orderId,
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
      /*确认订单
       *orderId
       */
      this.confirmOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        var orderObj = {};
        angular.forEach(params.order, function(v, key) {
          if (v !== null) {
            orderObj[key] = v;
          }
        });
        angular.forEach(params.orderItems,function(item){
          item.productId=item.id;
          item.productSubtitle=item.subtitle;
          item.productTitle=item.title;
          item.productCover=item.cover;
          item.productSku=item.sku;

        });
        params.order = orderObj;
        xhrService.Put({
          path: basePath + 'order/confirm/' + params.orderId,
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
      /*取消未支付订单
       *orderId
       */
      this.cancelNoPaymentOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'order/cancel/' + params.orderId,
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
      /*取消订单
       *orderId
       */
      this.cancelPaymentOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: basePath + 'order/cancel/payment/' + params.orderId,
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
 }
