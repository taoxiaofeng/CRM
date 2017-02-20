module.exports = function(app) {
  app.service('suiteService', ['xhrService', '$q', 'CONSTANTS', function(
    xhrService, $q, CONSTANTS) {
    var PRODUCT_FROM_TYPE = CONSTANTS.PICK_PRODUCT_FROM_TYPE;
    var PICK_PRODUCT_REASON = CONSTANTS.PICK_PRODUCT_REASON;
    //转换创建套餐 --> 上传图片 images
    this._getImageDetails = function(data) {
      var temp = angular.copy(data);
      console.log(temp);
      var imageDetails = _.map(temp, function(item, i) {
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
      return imageDetails;
    };
    /*
     查询本期套餐
     */
    this.queryOnlineSuites = function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'issue/online',
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /**
     * 套餐配送动态 --> 明细（套餐SKU数量、商品名称、商品数量）数据转换
     */
    this.parseSuiteData = function(res) {
      var items = _.filter(res.items, function(_items) {
        return _items.itemNum != "-1";
      });
      console.log(items);
      // var items = res.items;
      var suiteNamesArray = [];
      var obj = {};
      // 遍历items  分组
      _.each(items, function(item) {
        item.suiteName = item.suiteName != null ? item.suiteName :
          '好品推荐';
        if (obj[item.suiteName]) {
          obj[item.suiteName].products.push(item);
          obj[item.suiteName].itemNum += parseInt(item.itemNum);
          obj[item.suiteName].suiteName = item.suiteName;
        } else {
          obj[item.suiteName] = {
            suiteName: item.suiteName,
            products: [item],
            itemNum: parseInt(
              item.itemNum)
          };
        }
      });
      angular.forEach(obj, function(value, key) {
        suiteNamesArray.push(value);
      });
      res.suiteNamesArray = suiteNamesArray;
      res.suite = obj;
      return res;
    };
    /**
     * 转换本期套餐数据(拣货单编辑)
     */
    this._parseOnlineSuitesInDeliveryEdit = function(data,
      productIdsInShelf) {
      var temp = angular.copy(data);
      var suites = _.map(temp.suites, function(item) {
        var suiteProducts = _.map(item.products, function(product) {
          var suiteProduct = product.header || {};
          suiteProduct.positions = product.positions;
          suiteProduct.productId = product.header.id;
          suiteProduct.suiteId = item.suite.id;
          suiteProduct.issueId = temp.issue.id;
          suiteProduct.from = [PRODUCT_FROM_TYPE.FROM_SUITE];
          suiteProduct.reasons = [PICK_PRODUCT_REASON.WISHLIST];
          suiteProduct.category = product.category;
          if (_.contains(productIdsInShelf, suiteProduct.productId)) {
            suiteProduct.from = _.union(suiteProduct.from, [
              PRODUCT_FROM_TYPE.FROM_SHELF
            ]);
          } else {
            suiteProduct.from = _.union(suiteProduct.from, [
              PRODUCT_FROM_TYPE.FROM_NEW
            ]);
          }
          return suiteProduct;
        });
        var obj = {
          suiteTitle: item.suite.title,
          suite: item.suite,
          products: suiteProducts
        };
        return obj;
      });
      temp.suites = suites;
      return temp;

    };

    /**
     * 获取配送单列表接口：
     * logistics/order/delivery/findList
     */
    this.getSuiteDistributionDynamicList = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      /*if(params.type){//获取默认
       params.endTime =  $filter('date')(params.endTime, 'yyyy-MM-dd HH:mm:ss');
       params.startTime = $filter('date')(params.startTime, 'yyyy-MM-dd HH:mm:ss');
       delete params.type;
       } else{
       }*/
      xhrService.Get({
        // path: 'logistics/order/delivery/findList',
        path: 'logistics/order/delivery/findSuiteList',
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    /**
     * 期号
     * IssueSuite:
     *  suiteId
     *  active: boolean

     * Issue:
     *  id
     *  startTime
     *  endTime
     *  status: 0:待上线；1:已上线，2:已下线
     *  suites: IssueSuite[]

     * CreateOrUpdateIssueRequest:
     *  startTime
     *  endTime
     *  suites: IssueSuite[]
     */

    /**
     * 创建期号
     * POST
     * /backend/issue?publishImmediately=false
     * startTime
     *endTime
     *suites: IssueSuite[]
     */
    this.createIssue = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      params.isDeleted = 0;
      var path = 'issue'
      xhrService.Post({
        path: 'issue?publishImmediately=' + params.publishImmediately ||
          false,
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

    /**
     * 更新期号
     * PUT
     *  /backend/issue/{id}
     */
    this.updateIssue = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'issue/' + params.id,
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
    /**
     * 获取期号
     * GET
     * /backend/issue/{id}
     */
    this.getIssue = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'issue/' + params.id,
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

    /**
     *获取期号列表
     * GET
     * backend/issue?offset=0&limit=20&status=0&from=1480521600000&to=1481328000000
     */
    this.getAllIssueList = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'issue',
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

    /**
     * 套餐
     * Suite:
     *  id: String
     *  type: int - 特色0；标准1；
     *  status:int - 未发布0；已发布1；
     *  banner: String
     *  title: String
     *  des: String
     *  productIds: String[]

     * SuiteWithProducts:
     *  suite
     *  products

     * SuiteWithStatistics:
     *  suite
     */

    /**
     * 创建套餐
     * POST
     * /backend/suite
     */
    this.createSuite = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      params.isDeleted = 0;
      xhrService.Post({
        path: 'suite',
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

    /**
     * 编辑套餐
     * PUT
     * /backend/suite/{id}
     */
    this.editorSuite = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'suite/' + params.id,
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

    /**
     * 删除套餐
     * DELETE
     * /backend/suite/{id}
     */
    this.deleteSuite = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'suite/' + params.id,
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

    /**
     * 发布套餐
     * PUT
     * /backend/suite/{id}/publish
     */
    this.publishSuite = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'suite/' + params.id + '/publish',
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

    /**
     * 根据id获取套餐(SuiteWithProducts)
     * GET
     * /backend/suite/{id}
     */
    this.getSuite = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'suite/' + params.id,
        // params: params,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };

    /**
     * 获取套餐列表(SuiteWithStatistics[])
     * GET
     * /backend/suite?offset=0&limit=20&type=0&status=0&id={id}
     * [Filter Params: type(NONE,0,1), status(NONE,0,1), id(NONE,{id})]
     */
    this.getAllSuiteList = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'suite',
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

    /**
     * 期号实时动态
     * 分页查询期号实时动态数据
     * 接口名 /shelf/suite/statistical/pageable
     * 请求方法 POST
     * 请求参数: issueId, companyName, issueStartTime, issueEndTime
     */
    this.queryIssueDynamic = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'shelf/suite/statistical/pageable',
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
    /**
     * 查询期号变动明细
     * 接口名 /shelf/suite/statistical/期id/企业id
     * 请求方法 GET
     * 请求参数: issueId, companyId
     */
    this.queryIssueChanges = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: '/shelf/suite/statistical/' + params.issueId + '/' +
          params.companyId,
        // params: params,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };

    /**
     * 创建评论或回复
     * 接口名 crm/suite/comment
     * 请求方法 POST
     * 请求参数 suiteId, companyId, content, parentId
     */
    this._createComment = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'crm/suite/comment',
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

    /**
     * 分页查询评论
     * 接口名 crm/suite/comment/pageable
     * 请求方法 POST
     * 请求参数 suiteId, customerName, content, createTimeStart, createTimeEnd
     */
    this.queryComment = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'crm/suite/comment/pageable',
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

    /**
     * 删除评论
     * 接口名 crm/suite/comment/这里直接传suiteCommentId
     * 请求方法 DELETE
     * 请求参数 suiteCommentId
     */
    this._deleteComment = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'crm/suite/comment/' + params.suiteCommentId,
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

    /**
     *  查询消息中心列表
     *  接口名 /notification/center
     *  请求方法 GET
     *  请求参数 无
     */
    this.getMessageCenter = function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: '/notification/cente',
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


    /**
     * 期号实时动态 批量打印
     * shelf/suite/statistical/print
     * post
     */
    this.issueDynamicPrint = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'shelf/suite/statistical/print',
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