/*拣货单编辑*/
module.exports = function(app) {
  app.controller('deliveryEditCtrl', function($scope, $compile,
    $templateCache, $routeParams, shelfService, companyService,
    productService, orderService, goodsChooseService, suiteService,
    modalService, NgTableParams, CONSTANTS, utilService) {
    $scope.CONSTANTS = CONSTANTS;
    $scope.PICK_PRODUCT_REASON = CONSTANTS.PICK_PRODUCT_REASON;
    var COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    $scope.utilService = utilService;
    $scope.picUrl = window.cfg.picUrl;
    $scope.pickOrder = {};
    $scope.orderId = $routeParams.orderId;
    $scope.goodsChooseOrderId = $routeParams.goodsChooseOrderId || 0;
    $scope.company = {};
    $scope.cateotyList = [];
    $scope.selectedListConfig = {};
    $scope.shelfProductList = [];
    var tmpNewProductList = [];
    var maxProductsCount = 50; //员工自费企业,商品数量极限值
    var goodsChooseProductList = [];
    var blackList = [];
    $scope.disableEdit = true;
    $scope.hasReferData;
    //参考页打开方式
    $scope.REFER_OPEN_MODE = {
      auto: 1, //自动
      manual: 2 //手动
    };
    $scope.localLang = {
      selectAll: "全选",
      selectNone: "全不选",
      reset: "重置",
      search: "输入关键字搜索",
      nothingSelected: "请选择需关联的本期套餐"
    };
    var PRODUCT_FROM_TYPE = CONSTANTS.PICK_PRODUCT_FROM_TYPE;
    $scope.PRODUCT_FROM_TYPE = PRODUCT_FROM_TYPE;
    var initView = function() {
      if ($scope.orderId > 0) { //修改模式
        initEditView();
      } else {
        $scope.openPickRefer($scope.REFER_OPEN_MODE.auto);
        if ($scope.goodsChooseOrderId > 0) { //选购单转化过来
          initGoodsChooseView();
        } else { //新增模式
        }
      }
    };
    var initEditView = function() {
      //下面代码为导出Excel做准备
      var excelTemplate = $compile($templateCache.get(
        'pickOrder/pickOrderTemplate.html'))($scope);
      angular.element(document.getElementById(
        'exportDeliveryExcelWrap')).append(excelTemplate);
      var queryParams = { orderId: $scope.orderId };
      orderService.queryDeliveryDetail(queryParams).then(function(res) {
        $scope.pickOrder = angular.copy(res);
        $scope.order = angular.copy(res); //excel中的order(由于与送货单共用同一个excel)
        _.each(res.items, function(item, i) {
          item.itemNum = parseInt(item.itemNum);
          if (item.suiteId && item.suiteId != 0) {
            item.issueId = res.issueId;
          }
          item.from = [PRODUCT_FROM_TYPE.FROM_EDIT];
          if (item.itemType == 1) {
            item.from = _.union(item.from, [PRODUCT_FROM_TYPE.FROM_NEW]);
          } else if (item.itemType == 2) {
            item.from = _.union(item.from, [PRODUCT_FROM_TYPE.FROM_SHELF]);
          }
          if (item.itemType != 3) {
            $scope.selectedListConfig.pushItem(item,
              PRODUCT_FROM_TYPE.FROM_EDIT);
          }
        });
        loadCompanyDetail(res.companyId);
        loadLatestDeliveryCountAvgs($scope.selectedListConfig.getIdList());
      });
    };
    //加载货架商品
    var loadShelfProducts = function(shelfId) {
      var queryParams = { shelfId: shelfId };
      shelfService.queryShelfProducstsByShelfId(queryParams).then(
        function(res) {
          $scope.shelfProductList = shelfService._parseShelfProductsInDeliveryEdit(
            res);
          loadShelfAvgSale(shelfId);
          loadDeliveryRecomm($scope.company.companyId, shelfId);
          loadOnlineSuites();
          if ($scope.goodsChooseOrderId) { //若是选购单转换过来
            judgeGoodsChooseListFrom();
          }
        });
    };
    //读取日均销量数据
    var loadShelfAvgSale = function(shelfId) {
      var queryParams = { shelfId: shelfId };
      shelfService.queryShelfAvgSale(queryParams).then(function(res) {
        _.each(res.content, function(item) {
          _.each($scope.shelfProductList, function(product) {
            if (product.shelfProductId == item.shelf_product_id) {
              product.shelfAvgSale = item;
            }
          });
        });
      });
    };
    //加载本期套餐
    var loadOnlineSuites = function() {
      suiteService.queryOnlineSuites().then(function(res) {
        var productIdsInShelf = _.pluck($scope.shelfProductList,
          'productId');
        onlineIssue = suiteService._parseOnlineSuitesInDeliveryEdit(
          res, productIdsInShelf);
        $scope.suiteList = onlineIssue.suites;
      });
    };
    //加载拣货参考
    var loadDeliveryRecomm = function(companyId, shelfId) {
      $scope.referData = {};
      $scope.hasReferData = false;
      orderService.queryDeliveryRecomm({
        companyId: companyId,
        shelfId: shelfId
      }).then(function(res) {
        var productIdsInShelf = _.pluck($scope.shelfProductList,
          'productId');
        $scope.referData = orderService._parseDeliveryRecomm(res,
          productIdsInShelf);
        $scope.disableEdit = false;
        $scope.hasReferData = true;
        incrProductRecommend();
        if ($scope.goodsChooseOrderId) { //选购单转换而来
          judgeSelectOnOpenRefer();
        }
      });
    };
    //增加单品推荐期间展示次数
    var incrProductRecommend = function() {
      var productIds = _.pluck($scope.referData.recommended,
        'productId');
      if (productIds.length) {
        productService.incrProductRecommend({
          productIds: productIds
        }).then(function(res) {});
      }
    };
    //根据商品ids获取商品最近10次拣货均值
    var loadLatestDeliveryCountAvgs = function(productIds) {
      orderService.queryLatestDeliveryCountAvgs({
        productIds: productIds
      }).then(function(res) {
        $scope.selectedListConfig.setLatestDeliveryCountAvgs(res);
      });
    };
    //加载黑名单商品
    var loadBlacklist = function() {
      companyService.getBlockCompany({
        companyId: $scope.company.companyId
      }).then(function(res) {
        blackList = res;
      });
    };
    //加载企业详情
    var loadCompanyDetail = function(companyId) {
      companyService.queryCompany({
        companyId: companyId
      }).then(function(res) {
        $scope.selectCompanyCallback(res);
      });
    };
    //初始化 选购单转换过来的界面
    var initGoodsChooseView = function() {
      goodsChooseService.queryManagerOrderDetail({
        orderId: $scope.goodsChooseOrderId
      }).then(function(res) {
        res.managerOrderId = res.orderId;
        delete res.orderId;
        shelfService.queryShelfListByCompanyId({
          companyId: res.companyId
        }).then(function(shelfRes) {
          if (!shelfRes.length) {
            window.history.back(-1);
            utilService.alertError('该企业暂无货架，无法创建拣货单!');
          }
          _.each(res.items, function(product) {
            product.reasons = [CONSTANTS.PICK_PRODUCT_REASON
              .CHOSEN
            ];
            product.from = [CONSTANTS.PICK_PRODUCT_FROM_TYPE
              .FROM_CHOOSE
            ];
            product.itemNum = product.itemNum > 0 ? product
              .itemNum : '';
            goodsChooseProductList.push(product);
          });
          $scope.pickOrder = angular.copy(res);
          loadCompanyDetail(res.companyId);
        });
      });
    };
    //判断选购单商品是新品上架还是补货
    var judgeGoodsChooseListFrom = function() {
      var shelfProductIds = _.pluck($scope.shelfProductList,
        'productId');
      _.each(goodsChooseProductList, function(product) {
        var item = angular.copy(product);
        if (_.contains(shelfProductIds, item.productId)) {
          item.from = _.union(item.from, [CONSTANTS.PICK_PRODUCT_FROM_TYPE
            .FROM_SHELF
          ]);
        } else {
          item.from = _.union(item.from, [CONSTANTS.PICK_PRODUCT_FROM_TYPE
            .FROM_NEW
          ]);
        }
        $scope.selectedListConfig.pushItem(item, CONSTANTS.PICK_PRODUCT_FROM_TYPE
          .FROM_CHOOSE);
      });
      loadLatestDeliveryCountAvgs($scope.selectedListConfig.getIdList());
    };
    /*主面板*/
    //选择公司
    $scope.selectCompanyCallback = function(company) {
      var GOODSCHOOSE_ORDER_STATE = CONSTANTS.GOODSCHOOSE_ORDER_STATE;
      $scope.company = company;
      loadBlacklist();
      if ($scope.orderId > 0 || $scope.goodsChooseOrderId > 0) {
        $scope.shelfSelectDisable = $scope.orderId > 0;
        loadShelfList(company);

      } else {
        goodsChooseService.queryManagerOrderList({
          offset: 0,
          limit: 1,
          companyId: company.companyId,
          orderStates: [GOODSCHOOSE_ORDER_STATE.WAIT_VERIFY,
            GOODSCHOOSE_ORDER_STATE.VERIFIED
          ]
        }).then(function(res) {
          if (res.content.length) {
            utilService.alertError('该企业存在未完成选购单，请从选购单模块进行创建拣货单!');
            $scope.disableEdit = true;
            $scope.shelfSelectDisable = true;
          } else {
            $scope.shelfSelectDisable = false;
            loadShelfList(company);
          }
        });
      }
    };
    //关联套餐
    $scope.relateSuites = function() {
      $scope.selectedListConfig.removeSuiteItems();
      _.each($scope.selectedSuiteList, function(suite) {
        _.each(suite.products, function(product) {
          $scope.selectedListConfig.pushItem(product,
            PRODUCT_FROM_TYPE.FROM_SUITE);
        });
      });
      loadLatestDeliveryCountAvgs($scope.selectedListConfig.getIdList());
    };
    //判断是否显示 新品上架/补货/下架
    $scope.isShowWrap = function(fromType) {
      return $scope.selectedListConfig.getList(fromType).length;
    };
    // 清空数据
    $scope.cleardata = function() {
      $scope.cateotyList = [];
      $scope.selectedListConfig.clearList();
    };
    //导出Excel
    $scope.exportExcel = function() {
      var dom = angular.element('<a></a>');
      dom[0].href = $('#pick-order-table').excelexportjs({
        containerid: 'pick-order-table',
        datatype: 'table',
        returnUri: 'true'
      });
      dom[0].download = '拣货单' + '-' + $scope.order.companyName + '-' +
        $scope.order.shelfName + '(' + utilService.parseTimeByLong(
          $scope.order.updateTime, 'yyyyMMddhhmmss') + ').xls';
      dom[0].click();
    };
    $scope.filterItems = function(item) {
      return item.itemType != 3;
    };
    //保存送货单
    $scope.saveDelivery = function(sendWarehouse) {
      var selectedNewProducts = $scope.selectedListConfig.getList(
        PRODUCT_FROM_TYPE.FROM_NEW);
      var selectedSupplementProducts = $scope.selectedListConfig.getList(
        PRODUCT_FROM_TYPE.FROM_SHELF);
      var selectedProducts = _.union(selectedNewProducts,
        selectedSupplementProducts);
      if (!selectedProducts.length) {
        utilService.alertError('请选择上架或补货商品!');
        return;
      }
      var itemNumFlag = true; //itemNum未填写标识
      var blackFlag = false; //黑名单标识
      var items = [];
      var blackIds = _.pluck(blackList, 'productId');
      _.each(selectedProducts, function(item) {
        if (!item.itemNum) {
          itemNumFlag = false;
        }
        item.black = _.contains(blackIds, item.productId);
        blackFlag = item.black;
        var itemType;
        if (_.contains(item.from, PRODUCT_FROM_TYPE.FROM_NEW)) {
          itemType = 1;
        } else if (_.contains(item.from, PRODUCT_FROM_TYPE.FROM_SHELF)) {
          itemType = 2;
        }
        items.push({
          productId: item.productId,
          itemNum: item.itemNum,
          itemType: itemType,
          shelfProductId: item.shelfProductId || 0,
          suiteId: item.suiteId,
          issueId: item.issueId,
          reasons: item.reasons
        });
      });
      var adviceOutList = $scope.selectedListConfig.getAdviceOutList();
      _.each(adviceOutList, function(item) {
        items.push({
          productId: item.productId,
          itemType: 3,
          shelfProductId: item.shelfProductId || 0
        });
      });
      if (!itemNumFlag) {
        utilService.alertError('请完善货品数量!');
        return;
      }
      var shelfType = $scope.company.shelfType;
      if (shelfType == COMPANY_TYPE.EMP_PAY_MODE && selectedProducts.length >
        maxProductsCount) {
        utilService.alertError('员工自费企业，商品不得超过' + maxProductsCount +
          '样!');
        return;
      }
      if ($scope.selectedListConfig.getCategorieNames().length <= 2) {
        if (!confirm('所涉及品类≤2,是否继续?')) {
          return;
        }
      }
      if (blackFlag) {
        if (!confirm('存在黑名单商品,是否继续?')) {
          return;
        }
      }
      //整合提取suiteIds issueId
      var suiteIds = _.union(_.without(_.pluck(items, 'suiteId'),
        null,
        undefined, '0'));
      var issueIds = _.union(_.without(_.pluck(items, 'issueId'),
        null,
        undefined, '0'));
      var issueId = -1;
      if (issueIds.length) {
        issueId = issueIds.length > 1 ? onlineIssue.issue.id :
          issueIds[0]; //若有关联本期套餐则issueId设为本期，否则始终取商品上关联的issueId
      }
      $scope.disableEdit = true;
      if ($scope.orderId > 0) { //编辑模式
        editDeliveryForServer(items, issueId, suiteIds, sendWarehouse);
      } else { //新增模式
        createDeliveryForServer(items, issueId, suiteIds, sendWarehouse);
      }
    };
    //发送到仓库
    $scope.sendWarehouse = function() {
      $scope.saveDelivery(true);
    };
    //新建(server交互)
    var createDeliveryForServer = function(items, issueId, suiteIds,
      sendWarehouse) {
      var params = {
        shelfId: $scope.pickOrder.shelfId,
        urgent: $scope.pickOrder.urgent,
        items: items,
        issueId: issueId,
        suiteIds: suiteIds
      };
      orderService.createDeliveryOrder(params).then(function(res) {
        $scope.disableEdit = false;
        $scope.orderId = res.orderId;
        if (sendWarehouse) { //发送给仓库
          sendWarehouseForServer();
        } else { //仅保存
          if ($scope.goodsChooseOrderId > 0) {
            setGoodsChooseOrderFinish();
          } else {
            alert('保存成功!');
            window.history.back(-1);
          }
        }
      }, function(res) {
        $scope.disableEdit = false;
      });
    };
    //编辑(server交互)
    var editDeliveryForServer = function(items, issueId, suiteIds,
      sendWarehouse) {
      var params = {
        orderId: $scope.pickOrder.orderId,
        orderState: $scope.pickOrder.orderState,
        urgent: $scope.pickOrder.urgent,
        items: items,
        issueId: issueId,
        suiteIds: suiteIds
      };
      orderService.modifyDeliveryOrder(params).then(function(res) {
        if (sendWarehouse) { //发送给仓库
          sendWarehouseForServer();
        } else { //仅保存
          utilService.alertSuccess('保存成功!');
          window.history.back(-1);
        }
      }, function(res) {
        $scope.disableEdit = false;
      });
    };
    //发送到仓库(server交互)
    var sendWarehouseForServer = function() {
      var sendWarehouseParams = {
        orderId: $scope.orderId,
        orderState: CONSTANTS.DELIVERY_STATE.WAIT_PICK
      };
      orderService.modifyDeliveryState(sendWarehouseParams).then(
        function(res) {
          if ($scope.goodsChooseOrderId > 0) {
            setGoodsChooseOrderFinish();
          } else {
            utilService.alertSuccess('发送成功!');
            window.history.back(-1);
          }
        });
    };
    //设置选购单为已完成 
    var setGoodsChooseOrderFinish = function() {
      goodsChooseService.modifyOrderState({
        orderId: $scope.goodsChooseOrderId,
        orderState: CONSTANTS.GOODSCHOOSE_ORDER_STATE.FINISH
      }).then(function(res) {
        utilService.alertSuccess('保存成功!');
        window.history.back(-1);
      });
    };
    /*新品上架*/
    var setNewProductsTable = function() {
      $scope.offset = 0;
      $scope.limit = 10;
      $scope.newProdcutsTable = new NgTableParams({
        count: $scope.limit
      }, {
        counts: [],
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
        getData: function(params) {
          return shelfService.queryOtherShelfProducts({
            offset: $scope.limit * (params.page() - 1),
            limit: $scope.limit,
            shelfId: $scope.pickOrder.shelfId,
            productName: $scope.newProductsQueryParams.productName,
            categoryId: $scope.newProductsQueryParams.categoryId,
            profitLevel: $scope.newProductsQueryParams.profitLevel,
            isDeleted: 0
          }).then(function(res) {
            params.total(res.totalElements);
            return shelfService._parseOtherShelfProducts(res.content,
              _.pluck(tmpNewProductList, 'productId'));
          });
        }
      });
    };
    //查询商品类别列表
    var queryProductCategoryList = function() {
      productService.queryProductCategoryList().then(function(res) {
        $scope.cateotyList = [{
          code: '-1',
          desc: "全部品类"
        }];
        angular.forEach(res, function(category, index) {
          var item = { 'code': category.id, 'desc': category.categoryName };
          $scope.cateotyList.push(item);
        });
      });
    };
    $scope.profitList = CONSTANTS.getList({
      clsOrName: 'PROFIT_LEVEL',
      defaultObj: { '-1': '全部利润等级' }
    });
    //打开 新品上架
    $scope.putSale = function() {
      var newProductList = $scope.selectedListConfig.getList(
        PRODUCT_FROM_TYPE.FROM_NEW);
      tmpNewProductList = angular.copy(newProductList);
      $scope.modal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'delivery-edit')),
        scope: $scope,
        templateUrl: 'modalProductList',
        size: 'lg'
      });
      $scope.newProductsQueryParams = {};
      setNewProductsTable();
      queryProductCategoryList();
    };
    //品类选择
    $scope.selectCategoryCallback = function(item) {
      if (item.code) {
        item.code !== '-1' ? $scope.newProductsQueryParams.categoryId =
          item.code : $scope.newProductsQueryParams.categoryId =
          undefined;
        setNewProductsTable();
      }
    };
    //利润等级选择
    $scope.selectProfitCallback = function(item) {
      if (item.code) {
        item.code !== '-1' ? $scope.newProductsQueryParams.profitLevel =
          item.code : $scope.newProductsQueryParams.profitLevel =
          undefined;
        setNewProductsTable();
      }
    };
    //搜索商品
    $scope.searchProduct = function(queryParams) {
      $scope.newProductsQueryParams.productName = queryParams.productName;
      setNewProductsTable();
    };
    $scope.keyPressSearchProduct = function(e, queryParams) {
      if (e.keyCode == 13) { //回车键
        $scope.searchProduct(queryParams);
      }
    };
    //商品选择
    $scope.chkboxChange = function(product) {
      if (product.select) {
        product.productId = product.id;
        tmpNewProductList.push(product);
      } else {
        tmpNewProductList = _.reject(tmpNewProductList, function(item) {
          return item.productId == product.productId;
        });
      }
    };
    //新品上架 确认
    $scope.confirmPutSale = function() {
      $scope.selectedListConfig.removeNewItemsWithoutIds(_.pluck(
        tmpNewProductList, 'productId'));
      _.each(tmpNewProductList, function(item) {
        $scope.selectedListConfig.pushItem(item, PRODUCT_FROM_TYPE.FROM_NEW);
      });
      loadLatestDeliveryCountAvgs($scope.selectedListConfig.getIdList());
      $scope.modal.close();
    };
    //新品上架 删除
    $scope.removePutSaleProduct = function(product) {
      $scope.selectedListConfig.removeItemByProductId(product.productId);
    };
    /*补货*/
    //打开 补货
    $scope.supplement = function() {
      judgeSelectOnOpenSupplement();
      $scope.modal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'delivery-edit')),
        scope: $scope,
        templateUrl: 'modalShelfProductListForSupplement',
        size: 'lg'
      });
    };
    //打开 补货时 判断是否选中
    var judgeSelectOnOpenSupplement = function() {
      _.each($scope.shelfProductList, function(item) {
        var selectedProduct = $scope.selectedListConfig.getByProductId(
          item.productId);
        item.tmpSelect = typeof selectedProduct != 'undefined';
        item.itemNum = item.tmpSelect ? selectedProduct.itemNum :
          '';
      });
    };
    $scope.selectOnChckbox = function(shelfProduct) {
      if (!shelfProduct.tmpSelect) {
        addRemoveProductOnSupplement(shelfProduct, false);
      } else {
        addRemoveProductOnSupplement(shelfProduct, true);
      }
    };
    //选中补货(填写数字时)
    $scope.selectOnInputNum = function(shelfProduct) {
      if (!shelfProduct.itemNum) {
        addRemoveProductOnSupplement(shelfProduct, false);
      } else {
        addRemoveProductOnSupplement(shelfProduct, true);
      }
    };
    //补货中 选中/移除
    var addRemoveProductOnSupplement = function(item, select) {
      _.each($scope.shelfProductList, function(p) {
        if (p.productId == item.productId) {
          p.tmpSelect = select;
          p.itemNum = item.itemNum;
        }
      });
    };
    //补货 确认
    $scope.supplementConfirm = function() {
      _.each($scope.shelfProductList, function(item) {
        if (item.tmpSelect) {
          $scope.selectedListConfig.pushItem(item,
            PRODUCT_FROM_TYPE.FROM_SHELF);
        } else {
          $scope.selectedListConfig.removeItemByProductId(item.productId);
        }
      });
      loadLatestDeliveryCountAvgs($scope.selectedListConfig.getIdList());
      $scope.modal.close();
    };
    //补货 删除
    $scope.removeSupplementProduct = function(product) {
      $scope.selectedListConfig.removeItemByProductId(product.productId);
    };
    /*拣货信息参考页面相关*/
    //打开拣货数据参考页
    $scope.openPickRefer = function(mode) {
      $scope.referOpenMode = mode;
      judgeSelectOnOpenRefer();
      $scope.modal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'delivery-edit')),
        scope: $scope,
        templateUrl: 'pickOrder/pickReferTemplate.html',
        size: 'xxlg'
      });
    };
    //打开 拣货数据参考页 判断是否选中
    var judgeSelectOnOpenRefer = function() {
      _.each(_.keys($scope.referData), function(key, i) {
        _.each($scope.referData[key], function(item) {
          var selectedProduct = $scope.selectedListConfig.getByProductId(
            item.productId);
          item.tmpSelect = typeof selectedProduct !=
            'undefined';
        });
      });
    };
    //保留小数
    $scope.reserveNum = function(num, pointNum) {
      pointNum = pointNum || 2;
      return parseFloat(num).toFixed(pointNum);
    };
    //返回
    $scope.goBack = function() {
      window.history.back();
    };
    //将套餐 加入 拣货单
    $scope.addSuiteToPickOrder = function() {
      _.each($scope.referData.wishlist, function(item) {
        $scope.addToPickOrder(item);
      });
    };
    //加入 拣货单
    $scope.addToPickOrder = function(item) {
      addRemoveProInRefer(item, true);
    };
    //移除 拣货单
    $scope.removeFromPickOrder = function(item) {
      addRemoveProInRefer(item, false);
    };
    /**
     * 商品加入或移除 参考页面
     * item   商品
     * select true(加入),false(移除)
     */
    var addRemoveProInRefer = function(item, select) {
      _.each(_.keys($scope.referData), function(key, i) {
        _.each($scope.referData[key], function(p) {
          if (p.productId == item.productId) {
            p.tmpSelect = select;
          }
        });
      });
    };
    //修改企业备注
    $scope.modifyCompanyDes = function(company) {
      companyService.editCompany(company).then(function(res) {
        utilService.alertSuccess('修改成功!');
      });
    };
    //完成
    $scope.finish = function() {
      _.each(_.keys($scope.referData), function(key, i) {
        if (key == 'zeroShipmentRate' || key == 'lowShipmentRate') {
          return;
        }
        _.each($scope.referData[key], function(item) {
          if (item.tmpSelect) {
            $scope.selectedListConfig.pushItem(item,
              PRODUCT_FROM_TYPE.FROM_REFER);
          } else { //必须用==false,否则会产生bug
            $scope.selectedListConfig.removeItemByProductId(
              item.productId);
          }
        });
      });
      loadLatestDeliveryCountAvgs($scope.selectedListConfig.getIdList());
      $scope.modal.close();
    };
    //自动添加
    $scope.autoAdd = function(item) {
      //心愿单商品：5个全选
      _.each($scope.referData.wishlist, function(item, index) {
        if (index < 5) {
          $scope.addToPickOrder(item);
        }
      });
      //下架同类替换：5个（每个品类出货率TOP1&销售额TOP1随机选择）
      _.each($scope.referData.replacements, function(item, index) {
        if (index % 2 == 0) {
          $scope.addToPickOrder(item);
        }
      });
      //货架TOP5:5个全选
      _.each($scope.referData.shelfSalesChart, function(item, index) {
        $scope.addToPickOrder(item);
      });
      //全局TOP5:5个全选
      _.each($scope.referData.globalSalesChart, function(item, index) {
        $scope.addToPickOrder(item);
      });
      //单品推荐：全选（3~5个）
      _.each($scope.referData.recommended, function(item, index) {
        $scope.addToPickOrder(item);
      });
      //建议补货：5个全选
      _.each($scope.referData.replenishment, function(item, index) {
        $scope.addToPickOrder(item);
      });
      $scope.finish();
    };
    //货架选择
    $scope.shelfConfig = {
      list: [],
      setList: function(list) {
        this.list = angular.copy(list);
      },
      getDefaultItem: function(value) {
        var options = this.list;
        return _.findWhere(options, {
          id: value
        }) || options[0];
      },
      selectItem: function(record) {
        $scope.pickOrder.shelfId = record.id;
      },
      reset: function() {
        this.list = [];
      }
    };
    //紧急度
    $scope.urgencyConfig = {
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'DELIVERY_URGENCY',
          hasDefault: false
        });
      },
      getDefaultItem: function(value) {
        var options = this.getList();
        return _.findWhere(options, {
          code: value
        }) || options[0];
      },
      selectItem: function(record) {
        $scope.pickOrder.urgent = record.code;
      }
    };
    //加载货架列表
    var loadShelfList = function(company) {
      var queryParams = { companyId: company.companyId };
      shelfService.queryShelfListByCompanyId(queryParams).then(function(
        res) {
        $scope.shelfConfig.setList(res);
      });
    };
    //选中商品list
    $scope.selectedListConfig = {
      list: [],
      pushItem: function(item, fromType) {
        var temp = angular.copy(item);
        var t = _.find(this.list, function(p) {
          return p.productId == temp.productId;
        });
        if (t) {
          var from = _.union(temp.from, t.from);
          var reasons = _.union(temp.reasons, t.reasons);
          _.extend(t, temp);
          t.from = from;
          t.reasons = reasons;
        } else {
          t = temp;
          t.from = _.union(temp.from || [], [fromType]);
          this.list.push(t);
        }
      },
      removeSuiteItems: function() {
        var PICK_PRODUCT_REASON = CONSTANTS.PICK_PRODUCT_REASON;
        this.list = _.reject(this.list, function(item) {
          return _.contains(item.from, PRODUCT_FROM_TYPE.FROM_SUITE) &&
            !_.contains(item.from, PRODUCT_FROM_TYPE.FROM_REFER);
        });
        _.each(this.list, function(item) {
          if (_.contains(item.reasons, PICK_PRODUCT_REASON.WISHLIST) &&
            !_.contains(item.from, PRODUCT_FROM_TYPE.FROM_REFER)) {
            item.reasons = _.without(item.reasons,
              PICK_PRODUCT_REASON.WISHLIST);
            item.from = _.without(item.from, PRODUCT_FROM_TYPE.FROM_SUITE);
          }
        });
      },
      removeItemByProductId: function(productId) {
        this.list = _.reject(this.list, function(item) {
          return item.productId == productId;
        });
      },
      //删除不在指定IDs中的商品
      removeNewItemsWithoutIds: function(productIds) {
        this.list = _.reject(this.list, function(item) {
          return !_.contains(productIds, item.productId) && _.contains(
            item.from, PRODUCT_FROM_TYPE.FROM_NEW);
        });
      },
      getByProductId: function(productId) {
        var product = _.find(this.list, function(item) {
          return item.productId == productId;
        });
        return product;
      },
      getByShelfProductId: function(shelfProductId) {
        var product = _.find(this.list, function(item) {
          if (_.contains(item.from, PRODUCT_FROM_TYPE.FROM_SHELF)) {
            return item.product.shelfProductHeader.id ==
              shelfProductId;
          } else {
            return false;
          }
        });
        return product;
      },
      getList: function(fromType) {
        if (fromType) {
          return _.filter(this.list, function(item) {
            return _.contains(item.from, fromType);
          });
        } else {
          return this.list;
        }

      },
      getIdList: function(fromType) {
        var selectedList = [];
        if (fromType) {
          selectedList = _.filter(this.list, function(item) {
            return _.contains(item.from, fromType);
          });
        } else {
          selectedList = this.list;
        }
        return _.pluck(selectedList, 'productId');
      },
      //获取建议下架商品
      getAdviceOutList: function() {
        var me = this;
        var adviceOutProductIds = [];
        //实时计算除去货架商品，并且通过productId去重
        var adviceOutList = _.reject($scope.shelfProductList,
          function(item) {
            var t = _.find(me.list, function(selectedObj) {
              return selectedObj.productId == item.productId;
            });
            if (_.contains(adviceOutProductIds, item.productId)) {
              return true;
            } else {
              adviceOutProductIds.push(item.productId);
              return t;
            }
          });
        return adviceOutList;
      },
      getCategorieNames: function() {
        var a = _.uniq(_.pluck(_.pluck(this.list, 'category'),
          'categoryName'));
        return a;
      },
      clearList: function() {
        this.list = [];
      },
      calculateTotalFee: function() {
        var totalFeeInt = 0;
        _.each($scope.selectedListConfig.list, function(item) {
          totalFeeInt += parseInt(item.price, 10) * item.itemNum;
        });
        $scope.pickOrder.orderFee = totalFeeInt;
      },
      //设置最近10日拣货均值
      setLatestDeliveryCountAvgs: function(avgList) {
        var list = angular.copy(this.list);
        _.each(list, function(item, index) {
          item.latestDeliveryCountAvgs = avgList[index];
        });
        this.list = list;
      }
    };
    //监听list改变
    $scope.$watch('selectedListConfig.list', function(newValue, oldValue) {
      if (newValue == oldValue) {
        return;
      }
      $scope.selectedListConfig.calculateTotalFee();
    }, true);
    //监听货架选择
    $scope.$watch('pickOrder.shelfId', function(newValue, oldValue) {
      if (newValue == oldValue) {
        return;
      }
      $scope.referData = {};
      if ($scope.orderId > 0) { //修改模式
        $scope.disableEdit = false;
        loadShelfProducts(newValue);
      } else { //新增模式
        //还原
        $scope.cleardata();
        $scope.pickOrder.urgent = $scope.urgencyConfig.getList()[0].code;
        if (typeof newValue != 'undefined') {
          judgeUnfinishedDelivery(newValue);
        } else {
          $scope.disableEdit = true;
        }
      }
    }, true);
    //查询该货架是否有未完成的送货单
    var judgeUnfinishedDelivery = function(shelfId) {
      var DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
      var params = {
        offset: 0,
        limit: 1,
        shelfId: shelfId,
        orderStates: [DELIVERY_STATE.INIT, DELIVERY_STATE.WAIT_PICK,
          DELIVERY_STATE.PICKING, DELIVERY_STATE.RETURN_INIT,
          DELIVERY_STATE.WAIT_COMFIRM, DELIVERY_STATE.WAIT_SHELVE
        ]
      };
      orderService.queryDeliveryList(params).then(function(res) {
        if (res.totalElements > 0) {
          utilService.alertError('该货架存在一个未完成的送货单，将无法创建送货单!');
          $scope.disableEdit = true;
        } else {
          loadShelfProducts(shelfId);
        }
      });
    };
    initView();
  });
};