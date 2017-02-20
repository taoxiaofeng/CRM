module.exports = function(app) {
  app.service('orderService', ['xhrService', 'CONSTANTS', '$q', 'utilService',
    'modalService', '$compile', '$templateCache', 'printService',
    'suiteService',
    function(xhrService, CONSTANTS, $q, utilService, modalService,
      $compile, $templateCache, printService, suiteService) {
      var ORDER_TYPE = CONSTANTS.ORDER_TYPE;
      var PRODUCT_FROM_TYPE = CONSTANTS.PICK_PRODUCT_FROM_TYPE;
      var me = this;
      //服务
      /*结算单详情数据转换
       */
      this._parseSettlementDetailData = function(data) {
        var t = angular.copy(data);
        var opItems = [];
        angular.forEach(data.inventoryOrders, function(inventoryOrder,
          j) {
          angular.forEach(inventoryOrder.deliveryOrders, function(
            deliveryOrder, a) {
            var opItem = {
              opTime: deliveryOrder.updateTime,
              shelfName: deliveryOrder.shelfName,
              deliveryOrderFee: deliveryOrder.orderFee
            };
            opItems.push(opItem);
          });
          angular.forEach(inventoryOrder.returnOrders, function(
            returnOrder, b) {
            var opItem = {
              opTime: returnOrder.updateTime,
              shelfName: returnOrder.shelfName,
              returnOrderFee: returnOrder.orderFee
            };
            opItems.push(opItem);
          });
          if (inventoryOrder.orderFee || inventoryOrder.paidFee ||
            inventoryOrder.discountFee || inventoryOrder.premiumFee
          ) {
            var inventoryOpItem = {
              opTime: inventoryOrder.endTime,
              shelfName: inventoryOrder.shelfName,
              inventoryOrderFee: inventoryOrder.orderFee,
              inventoryPaidFee: inventoryOrder.paidFee,
              inventoryDiscountFee: inventoryOrder.discountFee,
              premiumFee: inventoryOrder.premiumFee
            };
            opItems.push(inventoryOpItem);
          }
        });
        t.opItems = opItems;
        var maxColNum = 8;
        t.tbColNum = t.premiumFee ? maxColNum : maxColNum - 1;
        var shouldPayDesc = (t.orderFee - t.orderDiscount) / 100.0 +
          '元';
        if (t.orderDiscount || t.pocketMoneyFee) {
          shouldPayDesc += '(';
          shouldPayDesc += t.orderDiscount ? '本次结算优惠:' + t.orderDiscount /
            100.0 + '元 ' : '';
          shouldPayDesc += t.pocketMoneyFee ? '企业零花钱:' + t.pocketMoneyFee /
            100.0 + '元' : '';
          shouldPayDesc += ')';
        }
        t.shouldPayDesc = shouldPayDesc;
        return t;
      };
      /**
       * 拣货信息参考数据转换
       * 
       */
      this._parseDeliveryRecomm = function(data, productIdsInShelf) {
        var temp = {};
        _.each(_.keys(data), function(key, i) {
          var tempList = [];
          _.each(data[key], function(item) {
            var t = item;
            var productKey = '';
            if (key == 'replenishment') {
              productKey = 'productDetail';
            } else {
              productKey = 'product';
            }
            _.extend(t, item[productKey].header);
            t.productId = item[productKey].header.id;
            t.positions = item[productKey].positions;
            t.category = item[productKey].category;
            t.reasons = _.union([item.reason], item.otherReasons);
            if (key == 'wishlist') {
              t.suiteId = t.suite.id;
              t.issueId = t.issue.id;
            }
            t.from = [PRODUCT_FROM_TYPE.FROM_REFER];
            if (_.contains(productIdsInShelf, t.productId)) {
              t.from = _.union(t.from, [PRODUCT_FROM_TYPE.FROM_SHELF]);
            } else {
              t.from = _.union(t.from, [PRODUCT_FROM_TYPE.FROM_NEW]);
            }
            tempList.push(t);
          });
          temp[key] = tempList;
        });
        return temp;
      };
      /*获取参考页面信息
      @Params
      companyId
      shelfId  
       */
      this.queryDeliveryRecomm = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'logistics/order/recomm/' + params.companyId + '/' +
            params.shelfId,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*根据商品ids获取商品最近10次拣货均值
      @Params
      productId
       */
      this.queryLatestDeliveryCountAvgs = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: 'logistics/order/recomm/latestDeliveryCountAvgs',
          params: params.productIds,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*创建拣货单
       @Params
       shelfId
       urgent
       items{
       prductId
       itemNum
       itemType
       shelfProductId
       }
       */
      this.createDeliveryOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: 'logistics/order/delivery',
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
      /*修改送货单
       orderId B
       managerId B
       orderState B
       urgent B
       items B
       itemId
       productId
       itemNum
       deltaDes
       shelfProductId
       itemType
       */
      this.modifyDeliveryOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: 'logistics/order/delivery',
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
      /*查询送货单列表
       *offset R
       limit R
       startTime B
       endTime B
       companyId
       settlementId
       shelfId
       orderStates B
       */
      this.queryDeliveryList = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'logistics/order/delivery/findList',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*查询送货单列表
       *offset R
       limit R
       startTime B
       endTime B
       companyId
       settlementId
       shelfId
       orderStates B
       */
      this.queryPromotionList = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'company/promotion/order/page',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*查询送货单详细信息列表
       *@Params
       *orderIds
       *orderStates
       */

      this.queryDeliveryDetailList = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'logistics/order/delivery/findDetailList',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*修改送货单状态
       *orderId P
       *orderState B
       *optRecord B
       */
      this.modifyDeliveryState = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: 'logistics/order/delivery/' + params.orderId +
            '/state',
          params: {
            orderState: params.orderState,
            optRecord: params.optRecord,
            companyId: params.companyId
          },
          success: function(res) {
            deferred.resolve(res);
          },
          error: function(res) {
            deferred.reject(res);
          }
        });
        return promise;
      };
      /*查询送货单
       *@Params
       *orderId P
       */
      this.queryDeliveryDetail = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'logistics/order/delivery/' + params.orderId,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*删除送货单
       *@Params
       *
       */
      this.deleteDeliveryOrder = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Delete({
          path: 'logistics/order/delivery/' + params.orderId,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*分页查询送货单模板
       */
      this.queryDeliveryTemplate = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'logistics/order/delivery/template/findList',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*查询单据列表*
       @Params
       companyName
       orderType
       startDay
       endDay
       pageSize
       offset
       */
      this.queryOrderList = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: 'logistics/order/center',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*查询单据列表*
       @Params
       companyName
       orderType
       startDay
       endDay
       pageSize
       offset
       */
      this.queryTeaList = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'tea/order',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*查询退货单详情
       @Params
       orderId
       */
      this.queryRefundDetail = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'logistics/order/return/' + params.orderId,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*查询盘点单详情
       orderId
       */
      this.queryInventoryDetail = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'logistics/order/inventory/' + params.orderId,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*查询结算单详情
       orderId
       */
      this.querySettlementDetail = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'logistics/order/settlement/' + params.orderId,
          success: function(res) {
            var data = res;
            data.companyDiscount = parseInt(data.companyDiscount);
            data.deliveryFee = parseInt(data.deliveryFee);
            data.fullInvoice = parseInt(data.fullInvoice);
            data.inventoryFee = parseInt(data.inventoryFee);
            data.isInvoice = parseInt(data.isInvoice);
            data.orderDiscount = parseInt(data.orderDiscount);
            data.orderFee = parseInt(data.orderFee);
            data.paidFee = parseInt(data.paidFee);
            data.pocketMoneyFee = parseInt(data.pocketMoneyFee);
            data.preInventoryFee = parseInt(data.preInventoryFee);
            data.premiumFee = parseInt(data.premiumFee);
            data.returnFee = parseInt(data.returnFee);
            data.taxFee = parseInt(data.taxFee);
            deferred.resolve(data);
          }
        });
        return promise;
      };
      // 查询下午茶订单
      // @Params
      // orderIds
      this.teaOrderDetail = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'tea/order/' + params.orderId,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*批量更新拣货单状态
       @Params
       orderIds
       */
      this.batchUpdateDeliveryOrderState = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: 'logistics/order/delivery/batchUpdateState',
          params: params,
          success: function(res) {
            deferred.resolve(res);
          }
        });
        return promise;
      };
      /*根据送货单id获取送货单模板
       *orderId
       *scope
       *success
       */
      this.getCompiledDeliveryOrder = function(opts) {
        this.queryDeliveryDetail({ 'orderId': opts.orderId }).then(
          function(res) {
            var scope = opts.scope;
            scope.deliveryOrder = res;
            scope.deliveryOrder.name = '送货单' + '-' + scope.deliveryOrder
              .companyName + '-' + scope.deliveryOrder.shelfName +
              '(' + utilService.parseTimeByLong(scope.deliveryOrder.createTime,
                'yyyyMMddhhmmss') + ')';
            scope.deliveryOrder.putSaleProductList = [];
            scope.deliveryOrder.supplementProductList = [];
            scope.deliveryOrder.pullSaleProductList = [];
            angular.forEach(scope.deliveryOrder.items, function(item,
              i) {
              switch (parseInt(item.itemType)) {
                case 1:
                  scope.deliveryOrder.putSaleProductList.push(
                    item);
                  break;
                case 2:
                  scope.deliveryOrder.supplementProductList.push(
                    item);
                  break;
                case 3:
                  scope.deliveryOrder.pullSaleProductList.push(
                    item);
                  break;
              }
            });
            var temp = angular.element('<div></div>').append(scope.compileDeliveryTemplate(
              scope));
            opts.success && opts.success.call(this, temp);
          });
      };
      /*批量打印单
       *settlementOrderIds
       *inventoryOrderIds
       *deliveryOrderIds
       *returnOrderIds
       */
      this.queryOrderDetails = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Get({
          path: 'logistics/order/inventory/batchPrint',
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
      /*下午茶批量打印单
       *settlementOrderIds
       *inventoryOrderIds
       *deliveryOrderIds
       *returnOrderIds
       */
      this.teaOrderDetails = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Post({
          path: 'tea/order/findByIds',
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
      /*下午茶打印模板环境数据
       *
       */
      this.teaOrderScope = function(orderType, data, scope) {
        scope.utilService = utilService;
        scope.CONSTANTS = CONSTANTS;
        scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        scope.teaDetail = data;
        scope.teaDetail.name = '下午茶订单详情' + '-' +
          '(' + utilService.parseTimeByLong(scope.teaDetail.order.createTime,
            'yyyyMMddhhmm') + ')';
        scope.orderTitle = scope.teaDetail.name;
        return scope;
      };
      /*
       * 节假日打印模板环境数据
       */
      this.holidayOrderScope = function(orderType, data, scope) {
        scope.utilService = utilService;
        scope.CONSTANTS = CONSTANTS;
        scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        scope.holidayDetail = data;
        scope.holidayDetail.name = '节假日订单详情' + '-' +
          '(' + utilService.parseTimeByLong(scope.holidayDetail.order.createTime,
            'yyyyMMddhhmm') + ')';
        scope.orderTitle = scope.holidayDetail.name;
        return scope;
      };
      /*打印模板环境数据
       *
       */
      this.parsePrintOrderScope = function(orderType, data, scope) {
        scope.utilService = utilService;
        scope.CONSTANTS = CONSTANTS;
        scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        scope.ORDER_STATUS = CONSTANTS.ORDER_STATUS;
        scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        scope.BUY_TYPE = CONSTANTS.BUY_TYPE;
        scope.ISSUE_ACTIVE = CONSTANTS.ISSUE_ACTIVE;
        scope.DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;

        switch (orderType) {
          case ORDER_TYPE.DELIVERY:
            scope.deliveryOrder = data;
            scope.deliveryOrder.name = '送货单' + '-' + scope.deliveryOrder
              .companyName +
              '-' + scope.deliveryOrder.shelfName +
              '(' + utilService.parseTimeByLong(scope.deliveryOrder.createTime,
                'yyyyMMddhhmmss') + ')';
            scope.orderTitle = scope.deliveryOrder.name;
            scope.deliveryOrder.putSaleProductList = [];
            scope.deliveryOrder.supplementProductList = [];
            scope.deliveryOrder.pullSaleProductList = [];
            angular.forEach(scope.deliveryOrder.items, function(item, i) {
              switch (parseInt(item.itemType)) {
                case 1:
                  scope.deliveryOrder.putSaleProductList.push(item);
                  break;
                case 2:
                  scope.deliveryOrder.supplementProductList.push(
                    item);
                  break;
                case 3:
                  scope.deliveryOrder.pullSaleProductList.push(item);
                  break;
              }
            });
            break;
          case ORDER_TYPE.REFUND:
            scope.refundOrder = data;
            scope.refundOrder.name = '退货单' + '-' + scope.refundOrder.companyName +
              '-' + scope.refundOrder.shelfName +
              '(' + utilService.parseTimeByLong(scope.refundOrder.createTime,
                'yyyyMMddhhmmss') + ')';
            scope.orderTitle = scope.refundOrder.name;
            break;
          case ORDER_TYPE.INVENTORY:
            scope.inventoryOrder = data;
            scope.inventoryOrder.name = '盘点单' + '-' + scope.inventoryOrder
              .companyName +
              '-' + scope.inventoryOrder.shelfName +
              '(' + utilService.parseTimeByLong(scope.inventoryOrder.createTime,
                'yyyyMMddhhmmss') + ')';
            scope.orderTitle = scope.inventoryOrder.name;
            break;
          case ORDER_TYPE.SETTLEMENT:
            scope.settlementOrder = me._parseSettlementDetailData(data);
            scope.settlementOrder.name = '结算单' + '-' + scope.settlementOrder
              .companyName +
              '(' + utilService.parseTimeByLong(scope.settlementOrder.createTime,
                'yyyyMMddhhmmss') + ')';
            scope.orderTitle = scope.settlementOrder.name;
            break;
          case ORDER_TYPE.HOLIDAY:
            console.log(data);
            scope.order = data;
            // scope.settlementOrder = me._parseSettlementDetailData(data);
            // scope.settlementOrder.name = '结算单' + '-' + scope.settlementOrder.companyName +
            //     '(' + utilService.parseTimeByLong(scope.settlementOrder.createTime, 'yyyyMMddhhmmss') + ')';
            // scope.orderTitle = scope.settlementOrder.name;
            // scope.setHolidayOrder = data;

            break;
          case ORDER_TYPE.ISSUEDYNAMIC:
            /*console.log(data);
            scope.issueOrder = data;*/
            scope.issueDetail = data;
            scope.issueDetail.name = '期号' + '-' + scope.issueDetail.companyName +
              '-' + scope.issueDetail.id +
              '(' + utilService.parseTimeByLong(scope.issueDetail.issueStartTime,
                'yyyyMMddhhmmss') + ')';
            scope.orderTitle = scope.issueDetail.name;
            break;
          case ORDER_TYPE.SUITEDYNAMIC:
            /*console.log(data);
            scope.suiteOrder = data;
            break;*/

            scope.sOrder = suiteService.parseSuiteData(data);

            scope.sOrder.name = '套餐' + '-' + scope.sOrder.companyName +
              '-' + scope.sOrder.suiteId +
              '(' + utilService.parseTimeByLong(scope.sOrder.createTime,
                'yyyyMMddhhmmss') + ')';
            scope.orderTitle = scope.sOrder.name;
            break;
        }
        return scope;
      };
      /*营销订单印模板环境数据
       *
       */
      this.promotionOrderScope = function(orderType, data, scope) {
        scope.utilService = utilService;
        scope.CONSTANTS = CONSTANTS;
        scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        scope.PROMOTION_ORDER_STATUS = CONSTANTS.PROMOTION_ORDER_STATUS;
        scope.promotionDetail = data;
        scope.promotionDetail.order.deliveryTime = scope.promotionDetail
          .order.deliveryTime ?
          new Date(parseInt(scope.promotionDetail.order.deliveryTime)) :
          scope.promotionDetail
          .order.deliveryTime = scope.promotionDetail.order.deliveryTime;

        if (scope.promotionDetail.order.actualPrice) {
          scope.promotionDetail.order.actualPrice = parseFloat(scope.promotionDetail
            .order.actualPrice / 100, 2);
        }
        scope.promotionDetail.name = '营销订单详情' + '-' +
          '(' + utilService.parseTimeByLong(scope.promotionDetail.order
            .createTime,
            'yyyyMMddhhmm') + ')';
        scope.orderTitle = scope.promotionDetail.name;
        return scope;
      };
      /*获取单据详情
       *
       */
      this.queryOrderDetail = function(orderType, orderId, scope) {
        var me = this;
        var promise;
        switch (orderType) {
          case ORDER_TYPE.DELIVERY:
            promise = me.queryDeliveryDetail({
              orderId: orderId
            }).then(function(res) {
              scope = me.parsePrintOrderScope(orderType, res, scope);
            });
            break;
          case ORDER_TYPE.REFUND:
            promise = me.queryRefundDetail({
              orderId: orderId
            }).then(function(res) {
              scope = me.parsePrintOrderScope(orderType, res, scope);
            });
            break;
          case ORDER_TYPE.INVENTORY:
            promise = me.queryInventoryDetail({
              orderId: orderId
            }).then(function(res) {
              scope = me.parsePrintOrderScope(orderType, res, scope);
            });
            break;
          case ORDER_TYPE.SETTLEMENT:
            promise = me.querySettlementDetail({
              orderId: orderId
            }).then(function(res) {
              scope = me.parsePrintOrderScope(orderType, res, scope);
            });
            break;
          case ORDER_TYPE.TEAORDER:
            promise = me.teaOrderDetail({
              orderId: orderId
            }).then(function(res) {
              scope = me.teaOrderScope(orderType, res, scope);
            });
            break;
          case ORDER_TYPE.PROMOTION:
            promise = me.queryPromotionList({
              ids: orderId
            }).then(function(res) {
              res = res.content[0];
              scope = me.promotionOrderScope(orderType, res, scope);
            });
            break;
          case ORDER_TYPE.ISSUEDYNAMIC:
            promise = me.queryPromotionList({
              ids: orderId
            }).then(function(res) {
              res = res.content[0];
              scope = me.promotionOrderScope(orderType, res, scope);
            });
            break;
          case ORDER_TYPE.SUITEDYNAMIC:
            promise = me.queryPromotionList({
              ids: orderId
            }).then(function(res) {
              res = res.content[0];
              scope = me.promotionOrderScope(orderType, res, scope);
            });
            break;
        }
        return promise;
      };
      /*查看单据详情
       *PS:调用改方法必须保证root中有order样式
       */
      this.checkOrderDetail = function(orderType, orderId, scope,
        isUpdate,
        companyName) { //TYPE=5 为下午茶订单
        var me = this;
        var templateUrl = me.getTemplatePath(orderType);
        var vari = '';
        switch (orderType) {
          case ORDER_TYPE.DELIVERY: //送货
            vari = 'deliveryOrderModal';
            break;
          case ORDER_TYPE.REFUND: //退货
            vari = 'refundOrderModal';
            break;
          case ORDER_TYPE.INVENTORY: //盘点
            vari = 'inventoryOrderModal';
            break;
          case ORDER_TYPE.SETTLEMENT: //结算
            vari = 'settlementOrderModal';
            break;
          case ORDER_TYPE.TEAORDER: //下午茶
            vari = 'teaOrderModal';
            break;
          case ORDER_TYPE.HOLIDAY: //节假日
            vari = 'holidayModal';
            break;
          case ORDER_TYPE.PROMOTION: //营销账单
            vari = 'promotion';
            break;
          case ORDER_TYPE.ISSUEDYNAMIC: //期号
            vari = 'issueModal';
            break;
          case ORDER_TYPE.SUITEDYNAMIC: //套餐
            vari = 'suiteModal';
            break;
        }
        return me.queryOrderDetail(orderType, orderId, scope).then(
          function() {
            scope.exportExcelOnDetail = me.exportExcelOnDetail;
            if (companyName) {
              scope.teaDetail.order.companyName = companyName;
              scope.addTeaType(scope.teaDetail.order)
            }
            if (!isUpdate) {
              scope[vari] = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName(
                  'order-center')),
                scope: scope,
                templateUrl: templateUrl
              });
            }
          });
      };

      /*获取模板地址
       *
       */
      // this.keyremark=function(e,remark,id){
      //    var promise;
      //    me=this;
      //     if (e.keyCode == 13) { //回车键
      //          me.modifyRemark({
      //                orderId: id,
      //                remark:remark
      //            }).then(function(res) {

      //            });    
      //            }

      /*下午茶打印模板环境数据
       *
       */
      this.teaOrderScope = function(orderType, data, scope) {
        scope.utilService = utilService;
        scope.CONSTANTS = CONSTANTS;
        scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        scope.teaDetail = data;
        scope.teaDetail.name = '下午茶订单详情' + '-' +
          '(' + utilService.parseTimeByLong(scope.teaDetail.order.createTime,
            'yyyyMMddhhmm') + ')';
        scope.orderTitle = scope.teaDetail.name;
        return scope;
      };
      /*
       * 节假日打印模板环境数据
       */
      this.holidayOrderScope = function(orderType, data, scope) {
        scope.utilService = utilService;
        scope.CONSTANTS = CONSTANTS;
        scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        scope.holidayDetail = data;
        scope.holidayDetail.name = '节假日订单详情' + '-' +
          '(' + utilService.parseTimeByLong(scope.holidayDetail.order.createTime,
            'yyyyMMddhhmm') + ')';
        scope.orderTitle = scope.holidayDetail.name;
        return scope;
      };

      this.modifyRemark = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: 'tea/order/remark',
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
      // 取消下午茶
      this.cancelTea = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: 'tea/order/cancel',
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
      // 确认接收下午茶
      this.acceptTea = function(params) {
        var deferred = $q.defer();
        var promise = deferred.promise;
        xhrService.Put({
          path: 'tea/order/accept',
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
      this.getTemplatePath = function(orderType) {
        console.log(orderType)
        switch (orderType) {
          case ORDER_TYPE.DELIVERY:
            var templateUrl = 'order/deliveryOrderTemplate.html';
            break;
          case ORDER_TYPE.REFUND:
            var templateUrl = 'order/refundOrderTemplate.html';
            break;
          case ORDER_TYPE.INVENTORY:
            var templateUrl = 'order/inventoryOrderTemplate.html';
            break;
          case ORDER_TYPE.SETTLEMENT:
            var templateUrl = 'order/settlementOrderTemplate.html';
            break;

          case ORDER_TYPE.HOLIDAY:
            // alert("aaa")
            var templateUrl =
              'order/holidayWelfareParticularsTemplate.html';
            break;
          case ORDER_TYPE.TEAORDER:
            var templateUrl = 'order/teaOrderTemplate.html';
            break;
          case ORDER_TYPE.PROMOTION:
            var templateUrl = 'order/promotionOrderTemplate.html';
            break;

          case ORDER_TYPE.ISSUEDYNAMIC:
            var templateUrl = 'suite/issueDynamicTemplate.html';
            break;
          case ORDER_TYPE.SUITEDYNAMIC:
            var templateUrl =
              'suite/suiteDistributionDynamicTemplate.html';
            break;
        }
        return templateUrl;
      };
      /*获取模板节点
       *
       */
      this.getTemplateDomByType = function(orderType, scope) {
        var me = this;
        console.log(scope);
        return $compile($templateCache.get(me.getTemplatePath(orderType)))
          (scope);
      };
      /*
       * */
      this.printOrderDoms = function(orderDetails, orderType, scope) {
        var me = this;
        var doms = [];
        angular.forEach(orderDetails, function(detail) {
          var newscope = me.parsePrintOrderScope(orderType, detail,
            scope.$new(true));
          newscope.isPrint = true;
          console.log(newscope);
          doms.push(angular.element('<div></div>').append(me.getTemplateDomByType(
            orderType, newscope)));
        });
        return doms;
      };

      /*获取单据详情module的ID
       */
      this.getContainterId = function(orderType) {
        var containerId = '';
        switch (orderType) {
          case ORDER_TYPE.DELIVERY:
            containerId = 'delivery-order-table';
            break;
          case ORDER_TYPE.REFUND:
            containerId = 'refund-order-table';
            break;
          case ORDER_TYPE.INVENTORY:
            containerId = 'inventory-order-table';
            break;
          case ORDER_TYPE.SETTLEMENT:
            containerId = 'settlement-order-table';
            break;
          case ORDER_TYPE.HOLIDAY:
            containerId = 'holiday-welfare-order-detail-table';
            break;
          case ORDER_TYPE.TEAORDER:
            containerId = 'tea-order-table';
            break;
          case ORDER_TYPE.PROMOTION:
            containerId = 'promotion-order-table';
            break;
          case ORDER_TYPE.ISSUEDYNAMIC:
            containerId = 'issue-dynamic-template';
            break;
          case ORDER_TYPE.SUITEDYNAMIC:
            containerId = 'suite-dynamic-table';
            break;
        }
        return containerId;
      };
      this.formExcel = function(containerId, title) {
        var dom = angular.element('<a></a>');
        dom[0].href = $('#' + containerId).excelexportjs({
          containerid: containerId,
          datatype: 'table',
          returnUri: 'true'
        });
        dom[0].download = title + '.xls';
        dom[0].click();
      };
      /*从表格导出excel
       * PS:调用改方法必须保证有模板中有<div id="exportExcelWrap" class="hidden"></div>元素
       */
      this.exportExcel = function(orderType, orderId, scope) {
        var me = this;
        var containerId = me.getContainterId(orderType);
        if (orderId) {
          var excelTemplate = me.getTemplateDomByType(orderType, scope);
          angular.element(document.getElementById('exportExcelWrap')).append(
            excelTemplate);
          me.queryOrderDetail(orderType, orderId, scope).then(function() {
            scope.$applyAsync(function() {
              var dom = angular.element('<a></a>');
              dom[0].href = $('#' + containerId).excelexportjs({
                containerid: containerId,
                datatype: 'table',
                returnUri: 'true'
              });
              dom[0].download = scope.orderTitle + '.xls';
              dom[0].click();
            });
          });
        } else {
          scope.uri = $("#" + containerId).excelexportjs({
            containerid: containerId,
            datatype: 'table',
            returnUri: 'true'
          });
        }
      };
      /*从model中导出excel
       *
       */
      this.exportExcelOnDetail = function(orderType, scope) {
        me.exportExcel(orderType, '', scope);
      };
      /*从model中打印
       *
       */
      this.getPrintHtmlInOrderModule = function(orderType, scope) {
        var containerId = this.getContainterId(orderType);
        return $("#" + containerId).html();
      };
    }
  ]);
}