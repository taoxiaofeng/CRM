/*
 *shelfService
 */
module.exports = function(app) {
  app.service('shelfService', ['xhrService', 'CONSTANTS', '$q', function(
    xhrService, CONSTANTS, $q) {
    var shelves = [];
    //单利数据存储
    this.getShelves = function() {
      return shelves;
    };
    //服务
    /*货架数据转换
     *
     */
    this._parseShelfData = function(data) {
      //拷贝一份，保持数据源不变
      var temp = [];
      angular.forEach(data, function(item, index) {
        var t = angular.copy(item);
        t.index = index;
        t.company_type = CONSTANTS.COMPANY_TYPE.DESC[t.company_type];
        t.all_product_per = t.all_product_per && t.all_product_per
          .split(',').join(' | ');
        t.last_update_interval = t.last_update_interval && t.last_update_interval
          .split(',').join(' | ');
        t.valid_sheld_countVSshelf_count = t.valid_sheld_count +
          '/' + t.shelf_count;
        temp.push(t);
      });
      return temp;
    };
    /*
     *除当前货架上的其他商品
     */
    this._parseOtherShelfProducts = function(data, selectedIdList) {
      var me = this;
      var temp = [];
      angular.forEach(data, function(item, i) {
        var t = angular.copy(item.header);
        t.positions = item.positions;
        t.productId = item.header.id;
        if (_.contains(selectedIdList, t.productId)) {
          t.select = true;
        }
        t.categoryName = item.category.categoryName;
        t.category = item.category;
        temp.push(t);
      });
      return temp;
    };
    /**
     * 转换拣货单中的货架商品数据
     */
    this._parseShelfProductsInDeliveryEdit = function(data) {
      var temp = [];
      _.each(data, function(item) {
        var shelfProduct = item.productHeader || {};
        shelfProduct.shelfProductHeader = item.header;
        shelfProduct.category = item.productCategory;
        shelfProduct.positions = item.positionDtoList;
        shelfProduct.shelfStock = item.header.stock;
        shelfProduct.shelfProductId = item.header.id;
        shelfProduct.productId = item.productHeader.id;
        temp.push(shelfProduct);
      });
      return temp;
    };
    /*货架详细数据转换
     *
     */
    this._parseShelfDetailData = function(tables) {
      var t = [];
      angular.forEach(tables, function(table) {
        var temp = [];
        angular.forEach(table.productDetails, function(item) {
          var header = item.header;
          var row = parseInt(header.row);
          var col = parseInt(header.col);
          var rownum = row - 1;
          var colnum = col - 1;
          var unit = temp[rownum];
          if (!row && !col) {
            temp[4] = [];
            temp[4][0] = item;
          } else {
            if (unit && unit.length) {
              temp[rownum][colnum] = item;
            } else {
              temp[rownum] = [];
              temp[rownum][colnum] = item;
            }
          }
        });
        table.parsedProducts = temp;
        t.push(table);
      });
      return t;
    };
    /*货架商品数据转换
     */
    this._parseShelfProductsData = function(data) {
      var t1 = [];
      t1 = _.filter(data, function(item) {
        return item.header.row != 0;
      });
      var t2 = [];
      t2 = _.filter(data, function(item) {
        return item.header.row == 0;
      });
      t2 = _.map(t2, function(item) {
        item.header.row = 5;
        return item;
      });
      var t = t1.concat(t2);
      return t;
    };

    //接口

    /*获取公司列表
    *@Params
    * shelf_stock_percent
      shelf_warn_count
      company_name
      shelf_type
      last_update_interval
    */
    this.queryShelfList = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      var params_str = $.param(params);
      params && (params.urlWithParam = 'api/task/shelf_monitor' + (
        params_str ? '?' + params_str : ''));
      xhrService.Post({
        path: 'data/remote',
        params: params,
        success: function(res) {
          shelves = res;
          deferred.resolve(res);
        }
      });
      return promise;
    };

    /*根据公司获取货架列表
     *@Params
     *companyId
     */
    this.queryShelfListByCompanyId = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/shelf',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    /*根据货架获取货架下的商品列表
     *@Params
     *shelfId
     */
    this.queryShelfProducstsByShelfId = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/shelf/product/select_by_shelf_id',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    /*分页查询除当前货架上的其他商品
    *@Params
    shelfId
    productName
    categoryId
    profitLevel
    pageNo
    pageSize
    */
    this.queryOtherShelfProducts = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/shelf/product/other_shelf_products',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    /*货架商品销量曲线图
    *@Params
    shelfProductId
    days
     */
    this.queryShelfProductTrend = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'data/remote',
        params: {
          'urlWithParam': 'api/task/shelf_sale_trend?shelfProductId=' +
            params.shelfProductId + '&days=' + params.days
        },
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
    /*获取货架上的商品过去一周的日均销售量
    *@Params
    shelfId
    */
    this.queryShelfAvgSale = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/shelf/product/shelfSaleAverage',
        params: { 'shelfId': params.shelfId },
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    /*创建货架
     *@Params
     companyId 
     shelfName
     */
    this.createShelf = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/shelf',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
    /*更新货架名称
    *@Params
    shelfId
    shelfName
    */
    this.modifyShelf = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'company/shelf',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
    /*根据公司ID获取货架详情
     *@Params
     *companyId
     */
    this.queryShelfDetailByCompanyId = function(params) {
      var me = this;
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/survey/query_all',
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
    /*货架商品详细信息查询
    *@Params
    shelfProductId
    */
    this.queryShelfProductDetail = function(params) {
      var me = this;
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/shelf/product',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
  }]);
};