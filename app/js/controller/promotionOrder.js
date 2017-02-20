module.exports = function(app) {
  app.controller('promotionOrderCtrl', function($scope, $compile,
    orderService,
    $templateCache, $mdDialog, modalService, printService, orderService,
    NgTableParams, utilService, CONSTANTS, companyService,
    promotionService,
    $filter) {
    $scope.utilService = utilService;
    $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
    $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    $scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
    $scope.PROMOTION_ORDER_STATUS = CONSTANTS.PROMOTION_ORDER_STATUS;
    $scope.Tea_Period_Type = CONSTANTS.Tea_Period_Type;
    $scope.currentOrderId;

    var COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    var ORDER_TYPE = CONSTANTS.ORDER_TYPE;
    var DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
    var REFUND_STATE = CONSTANTS.REFUND_STATE;
    var INVENTORY_STATE = CONSTANTS.INVENTORY_STATE;
    var SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
    var Tea_Period_Type = CONSTANTS.Tea_Period_Type;
    var Promotion_Search_Type = CONSTANTS.Promotion_Search_Type
    $scope.offset;
    $scope.limit;
    $scope.isUpdateTimeChoices = [{ desc: '下单时间', code: '0' }, {
      desc: '预约送货时间',
      code: '1'
    }];
    $scope.SearchChoices = [{ desc: '手机号', code: '1' }, { desc: '企业名称',
        code: '2' },
      { desc: '联系人', code: '3' }
    ];
    $scope.orderTypeList = [{ desc: '全部订单', code: '0' }, { desc: '待确认',
        code: '1' },
      { desc: '待付尾款', code: '2' }, { desc: '待发货', code: '3' }, {
        desc: '已发货',
        code: '4'
      }, { desc: '已收货', code: '5' }, { desc: '已取消', code: '6' }
    ];


    $scope.queryParams = {
      createStartDay: '',
      createEndDay: '',
      updateStartDay: '',
      updateEndDay: '',
      isPaid: '', // 0 没有  1 已支付
      isUpateTime: 0,
      tel: "",
      name: "",
      status: "",
      curOrderType: "",
      searchSelect: Promotion_Search_Type.TEL
    };

    var setOrderTable = function(queryParams) {
      $scope.queryParams.startDay = $scope.queryParams.startDay ||
        utilService
        .parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd');
      $scope.queryParams.endDay = $scope.queryParams.endDay ||
        utilService.parseTimeByDate(
          new Date(), 'yyyy-MM-dd');
      $scope.offset = 0;
      $scope.limit = 20;
      $scope.orderTable = new NgTableParams({
        count: $scope.limit
      }, {
        counts: [],
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
        getData: function(params) {
          var p = {
            offset: (params.page() - 1) * $scope.limit,
            limit: $scope.limit
          };
          if ($scope.queryParams.searchSelect ==
            Promotion_Search_Type.TEL) {
            if (/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(
                $scope.queryParams
                .name) || $scope.queryParams.name === "") {
              p.contactPhone = $scope.queryParams.name
            } else {
              alert('请输入正确格式的手机号码');
              $scope.queryParams.name = ''
            }

          } else if ($scope.queryParams.searchSelect ==
            Promotion_Search_Type
            .COMPANY) {
            p.companyName = $scope.queryParams.name
          } else if ($scope.queryParams.searchSelect ==
            Promotion_Search_Type
            .Name) {
            p.contactName = $scope.queryParams.name
          }
          if ($scope.queryParams.curOrderType) {
            p.status = $scope.queryParams.curOrderType;
          }


          if ($scope.queryParams.isUpateTime) {

            p.deliveryTimeStart = Date.parse($scope.queryParams.startDay
              .replace(
                /-/g, '/'));
            p.deliveryTimeEnd = Date.parse($scope.queryParams.endDay
              .replace(
                /-/g, '/') + ' 23:59:59');
          } else {
            p.createTimeStart = Date.parse($scope.queryParams.startDay
              .replace(
                /-/g, '/'));
            p.createTimeEnd = Date.parse($scope.queryParams.endDay
              .replace(/-/g,
                '/') + ' 23:59:59');
          }

          return orderService.queryPromotionList(p).then(function(
            res) {
            params.total(res.totalElements);
            var data = $scope.addRefundType(res.content);
            return checkInfo(utilService.indexArray(data,
              $scope.limit * (
                params.page() - 1) + 1));
          });
        }
      });
    };

    setOrderTable();
    // 下午茶类型转换
    $scope.addRefundType = function(data) {
        if (Object.prototype.toString.call(data) == '[object Array]') {
          teaArray = data;
        } else {
          teaArray = [data];
        }
        angular.forEach(teaArray, function(item, i) {
          if (item.order.status == 7 || item.order.status == 8) {
            item.order.refund = '未退款'
          } else if (item.order.status == 9) {
            item.order.refund = '已退款'
          } else {
            item.order.refund = '--'

          }

        })
        return teaArray;
      }
      //搜索单据searchTea
    $scope.searchTea = function(queryParams) {
      queryParams = queryParams || {};
      $scope.queryParams.name = queryParams.name || "";
      $scope.queryParams.searchSelect = queryParams.searchSelect;
      $scope.queryParams.startDay = queryParams.startTime ? utilService
        .parseTimeByDate(
          queryParams.startTime, 'yyyy-MM-dd') :
        utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd');
      $scope.queryParams.endDay = queryParams.endTime ? utilService.parseTimeByDate(
          queryParams.endTime, 'yyyy-MM-dd') :
        utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd');
      $scope.queryParams.isUpateTime = queryParams.isUpateTime;
      $scope.queryParams.searchSelect = queryParams.searchSelect;
      setOrderTable();
    };
    //选择单据类型
    $scope.selectOrderType = function(item) {
      if (item.code == 0) {
        $scope.queryParams.curOrderType = [2, 3, 4, 5, 6, 8, 9];
      } else if (item.code == 6) {
        $scope.queryParams.curOrderType = [8, 9];
      } else {
        $scope.queryParams.curOrderType = parseInt(item.code) + 1;
      }

      setOrderTable();
    };
    $scope.showDetail = function(order) {
      $scope.currentOrder = order;
      $scope.currentOrderId = order.order.id;
      $scope.checkOrderDetail(ORDER_TYPE.PROMOTION, order.order.id);
    };
    //明细
    $scope.checkOrderDetail = function(orderType, orderId, scope,
      isUpdate) {
      //$scope.companyName=companyName;
      orderService.checkOrderDetail(orderType, orderId, $scope,
        isUpdate);
    };
    /*打印*/
    //打印单据列表
    var printOrderArray = [];
    var checkInfo = function(data) {
      angular.forEach(data, function(item) {
        var t = _.findWhere(printOrderArray, {
          orderId: item.orderId
        });
        if (t) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
      return data;
    };
    $scope.checkAllCfg = {
      flag: false
    };
    //勾选
    $scope.updateSelection = function(e, order) {
      var isChecked;
      if (_.isObject(e)) {
        isChecked = e.currentTarget.checked;
      } else {
        isChecked = e;
      }
      order.checked = isChecked;
      if (isChecked) {
        printOrderArray.push(order);
      } else {
        $scope.checkAllCfg.flag = false;
        printOrderArray = _.without(printOrderArray, order);
      }
    };
    $scope.selectAllOrder = function(e, data, checkall) {
      var st = e.currentTarget.checked;
      angular.forEach(data, function(item) {
        if (item.checked !== st) {
          $scope.updateSelection(e.currentTarget.checked, item);
        }
      });
    };
    //批量打印
    $scope.printOrder = function(orders) {
      // debugger
      var promotionOrderIds = [];
      var orderArray = [];
      if (Object.prototype.toString.call(orders) == '[object Array]') {
        orderArray = orders;
      } else {
        orderArray = [orders];
      }
      angular.forEach(orderArray, function(item) {
        promotionOrderIds.push(item.order.id);
      });
      orderService.queryPromotionList({
        ids: promotionOrderIds
      }).then(function(res) {
        var promotionOrderDetails = res.content || [];
        var temps = [];
        angular.forEach(promotionOrderDetails, function(detail) {
          var scope = orderService.promotionOrderScope(
            ORDER_TYPE.PROMOTION,
            detail, $scope.$new(true));
          scope.isPrint = true;
          temps.push(angular.element('<div></div>').append(
            orderService.getTemplateDomByType(
              ORDER_TYPE.PROMOTION, scope)));
        });
        $scope.$applyAsync(function() {
          var htmls = [];
          angular.forEach(temps, function(item) {
            console.log(item[0].innerHTML);
            htmls.push(item[0].innerHTML);
          });
          printService.printByDefaultPrinter(htmls);
        });
      });
    };
    // 详情页打印
    $scope.printTeaHtml = function(orderType) {
      var html = orderService.getPrintHtmlInOrderModule(orderType);
      $scope.$applyAsync(function() {
        console.log(html);
        printService.printByDefaultPrinter(html);
      });
    };
    $scope.bathMultiPrint = function() {
      if (printOrderArray.length) {
        $scope.printOrder(printOrderArray);
      } else {
        $mdDialog.show($mdDialog.alert({
          title: '提示',
          textContent: '请选择需要打印的票据',
          ok: '确认'
        }));
      }
    };
    $scope.keyremark = function(e, remark, id) {
      if (e.keyCode == 13) { //回车键
        orderService.modifyRemark({
          orderId: id,
          remark: remark
        }).then(function(res) {

        });
      }
    };

    $scope.payFullDialog;
    $scope.sendDialog;
    $scope.refundDialog;
    $scope.payFullParams = {
      note: ''
    };
    $scope.sendParams = {
      expressName: '',
      expressNumber: ''
    };
    $scope.recordModal;
    $scope.recordParams = {};
    $scope.openRecordModal = function(order, recordType) {
      $scope.recordParams.type = recordType;
      $scope.recordParams.orderId = order.order.id;
      $scope.recordParams.optRecord = '';
      $scope.recordModal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'promotion')),
        scope: $scope,
        templateUrl: 'modalRecord'
      });
    };
    $scope.refreshModel = function(orderId) {
      $scope.checkOrderDetail(ORDER_TYPE.PROMOTION, orderId, $scope,
        true);
    };
    //取消此单
    $scope.cacelOrder = function(order) {
      var status = order.order.status;
      promotionService.cancelPaymentOrder({
        orderId: order.order.id
      }).then(function() {
        $scope.promotion.close();
        setOrderTable();
      });
    };

    //接收
    $scope.receiveOrder = function(order) {
      $scope.openRecordModal(order, CONSTANTS.GOODSCHOOSE_ORDER_STATE.VERIFIED);
    };
    //付尾款
    $scope.payFullOrder = function(order) {
      $scope.payFullCount = parseFloat(parseInt(order.order.actualPrice) *
        100 - parseInt(order.order.deposit), 2);
      $scope.payFullDialog.showDialog($scope);
    };
    $scope.confirmPayFull = function() {
      promotionService.payFullPromotionOrder({
        orderId: $scope.currentOrderId,
        crmNotes: $scope.payFullParams.note
      }).then(function() {
        $scope.refreshModel($scope.currentOrderId);
        setOrderTable();
        $scope.payFullDialog.closeDialog();
      });
    };
    //发货
    $scope.sendOrder = function(order) {
      $scope.sendDialog.showDialog($scope);
    };
    $scope.confirmSend = function() {
      promotionService.deliveryPromotionOrder({
        orderId: $scope.currentOrderId,
        expressId: $scope.sendParams.expressNumber,
        expressType: $scope.sendParams.expressName
      }).then(function() {
        $scope.refreshModel($scope.currentOrderId);
        setOrderTable();
        $scope.sendDialog.closeDialog();
      });
    };
    //退款
    $scope.refundOrder = function(order) {
      $scope.refundDialog.showDialog($scope);
    };
    $scope.confirmRefund = function(order) {
      promotionService.refundPromotionOrder({
        orderId: $scope.currentOrderId
      }).then(function() {
        $scope.refreshModel($scope.currentOrderId);
        setOrderTable();
        $scope.refundDialog.closeDialog();
      });
    };

    //确认订单
    $scope.confirmAndEditOrder = function(order, scope) {
      openEditModal(order, scope);
    };

    //收货
    $scope.receiveOrder = function(order) {
      promotionService.receivePromotionOrder({
        orderId: $scope.currentOrderId
      }).then(function() {
        $scope.refreshModel($scope.currentOrderId);
        setOrderTable();
      });
    };
    $scope.getPromotionProduct = function() {
      return promotionService.queryPromotionProductList({
        offset: 0,
        limit: 10000,
        title: $scope.editData.search,
        status: 1,
        payType:1
      }).then(function(res) {
        $scope.products = res.content;
        return $scope.products;

      })

    };
    $scope.getSelectedProduct = function(ids) {
      return promotionService.queryPromotionProductList({
        offset: 0,
        limit: 10000,
        ids: ids
      }).then(function(res) {
        $scope.selectedProduct = res.content;
        angular.forEach($scope.selectedProduct, function(item) {
          var array = _.where($scope.editData.orderItems, { productId: item
              .id });
          item.itemNum = parseInt(array[0].itemNum);

        })
        return $scope.selectedProduct;

      })

    };
    var openEditModal = function(order, scope) {
      $scope.editData = order;

      $scope.selectedProduct = [];
      ids = _.pluck($scope.editData.orderItems, 'productId');;
      $scope.getPromotionProduct()
      $scope.getSelectedProduct(ids);

      $scope.recordModal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'promotion')),
        scope: $scope,
        templateUrl: 'modal-promotionEdit',
        size: 'plg'
      });
    };
    $scope.promotionSelect = function(product) {
      _.each($scope.products, function(item) {
        item.isSelect = false;
      });
      _.each($scope.selectedProduct, function(item) {
        item.isSelect = false;
      });
      product.isSelect = true;
      $scope.selectItem = product;
    };
    $scope.promotiondelect = function(product) {
      _.each($scope.products, function(item) {
        item.isSelect = false;
      });
      _.each($scope.selectedProduct, function(item) {
        item.isSelect = false;
      });

      product.isSelect = true;
      $scope.delectItem = product;
    };

    $scope.changeTotal = function() {
      $scope.editData.order.price = 0;
      angular.forEach($scope.selectedProduct, function(item) {
        if (item.itemNum === 0 || item.itemNum < 0) {
          var index = _.findIndex($scope.selectedProduct, { id: item
              .id });
          $scope.selectedProduct.splice(index, 1);
          return
        } else {
          if (item.itemNum > 999) {
            item.itemNum = 999;
          }
          $scope.editData.order.price += item.itemNum * item.price;
        }

      })
    };
    $scope.confirmEdit = function() {
      if (!parseFloat($scope.editData.order.actualPrice)) {
        alert("请正确输入实收金额！");
        return;
      }
      if (($scope.editData.order.actualPrice * 100) > parseInt($scope.editData
          .order.price)) {
        alert("实收金额不可超过订单金额！");
        return;
      }
      if (!$scope.editData.order.deliveryTime) {
        alert("请正确输入送货时间！");
        return;
      }

      var order = angular.copy($scope.editData.order);
      order.deliveryTime = order.deliveryTime.getTime();
      order.actualPrice = parseInt(parseFloat(order.actualPrice, 2) *
        100);
      promotionService.confirmOrder({
        orderId: $scope.editData.order.id,
        order: order,
        orderItems: $scope.selectedProduct
      }).then(function(res) {
        $scope.recordModal.close();
        $scope.refreshModel($scope.editData.order.id);
        setOrderTable();
      });

    };
    $scope.copy = function(item) {
      var array = {};
      angular.forEach(item, function(v, key) {
        if (v !== null) {
          array[key] = angular.copy(v);
        }
      });
      return array
    };
    $scope.itemAdd = function() {
      if ($scope.selectItem) {
        var item = _.where($scope.selectedProduct, { id: $scope.selectItem
            .id });
        if (item.length) {
          item[0].itemNum += 1;
        } else {

          $scope.selectItem.itemNum = 1
          $scope.selectItem.isSelect = false;
          $scope.selectedProduct.push(angular.copy($scope.selectItem));
        }
        var item = _.where($scope.selectedProduct, { id: $scope.selectItem
            .id });
        if (item.length) {
          item[0].itemNum += 1;
        } else {

          $scope.selectItem.itemNum = 1
          $scope.selectItem.isSelect = false;
          $scope.selectedProduct.push(angular.copy($scope.selectItem));
        }
      }


    };
    $scope.dblAdd = function(product) {
      var item = _.where($scope.selectedProduct, { id: product.id });
      if (item.length) {
        item[0].itemNum += 1;
      } else {

        $scope.selectItem.itemNum = 1
        $scope.selectItem.isSelect = false;
        $scope.selectedProduct.push(angular.copy($scope.selectItem));
      }

    };
    $scope.itemDelect = function() {
      if ($scope.delectItem) {
        var index = _.findIndex($scope.selectedProduct, {
          id: $scope.delectItem
            .id
        });
        if (index >= 0) {
          $scope.selectedProduct.splice(index, 1);
          $scope.selectedProduct.splice(index, 1);
        }
      }


    };
    $scope.dblDelect = function(product) {
      var index = _.findIndex($scope.selectedProduct, { id: product.id });
      $scope.selectedProduct.splice(index, 1);
    };
  });
};