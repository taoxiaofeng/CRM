(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  'CONSTANTS': {
    //公司类型
    'COMPANY_TYPE': {
      COMPANY_PAY_MODE: '1',
      EMP_PAY_MODE: '2',
      DESC: {
        '1': '企业总包',
        '2': '员工自费'
      }
    },
    //客户类别
    'CUSTOMER_TYPE': {
      COMPANY: '1',
      HOTEL: '2',
      INTERNET_BAR: '3',
      DESC: {
        '1': '企业',
        '2': '酒店',
        '3': '网吧'
      }
    },
    //客户状态
    'CUSTOMER_STATUS': {
      BEING_COOPERATE: '0',
      PAUSE_COOPERATE: '1',
      STOP_COOPERATE: '2',
      DESC: {
        '0': '合作中',
        '1': '暂停合作',
        '2': '停止合作'
      }
    },
    //拣货类型
    'PICKING_TYPE': {
      RANDOM: '2',
      SELF: '1',
      OTHER: '3',
      DESC: {
        '2': '小二可随机配',
        '1': '完全自选',
        '3': '其他'
      }
    },
    //坏账抵扣类型
    'COMPANY_DEDUCTION_TYPE': {
      IN_TRADE_PAID: '1', //溢价支付收入
      IN_PLAT: '3', //平台发放收入
      OUT_SETTLEMENT_PAY: '2', //结算抵扣支出
      DESC: {
        '1': '溢价支付收入',
        '2': '结算抵扣支出',
        '3': '平台发放收入'
      }
    },
    //货架类型
    'SHELF_TYPE': {
      SNACKS: '0',
      FRIDGE: '1',
      FREEZER: '2',
      DESC: {
        '0': '零食',
        '1': '冰箱',
        '2': '冰柜'
      }
    },
    //单据类型
    'ORDER_TYPE': {
      DELIVERY: '1',
      REFUND: '2',
      INVENTORY: '3',
      SETTLEMENT: '4',
      HOLIDAY: '100',
      TEAORDER: '99',
      PROMOTION: '98',
      SUITEDYNAMIC: '97',
      ISSUEDYNAMIC: '96',
      DESC: {
        '1': '送货单',
        '2': '退货单',
        '3': '盘点单',
        '4': '结算单',
        '100': '节假日福利单',
        '99': '下午茶',
        '98': '营销单',
        '97': '套餐动态',
        '96': '期号动态'
      }
    },
    'IN_STORAGE_ORDER_TYPE': {
      DELIVERY_MODIFY_CONFIRM: '1',
      REFUND_CONFIRM: '2',
      DESC: {
        '1': '送货修改确认单',
        '2': '退货入库确认单',
      }
    },
    //货架状态
    'SHELF_STATE': {
      WAIT_SEND: '0',
      WAIT_COMFIRM: '1',
      WAIT_ONLINE: '2',
      UNORDER: '3',
      DESC: {
        '0': '已下单待发送',
        '1': '已下单待确认',
        '2': '已确认待上架',
        '3': '未下单'
      }
    },
    //入库修改确认单状态
    // 'IN_STORAGE_STATE': {
    //     IN_STORAGE_NO: 1,
    //     IN_STORAGE_YES: 2,
    //     DESC: {
    //         1: '未入库',
    //         2: '已入库'
    //     }
    // },
    'IN_STORAGE_STATE': {
      IN_STORAGE_NO: '0',
      IN_STORAGE_YES: '1',
      DESC: {
        '0': '未入库',
        '1': '已入库'
      }
    },
    //入库修改确认单是否修改
    'IN_STORAGE_MODIFYSTATE': {
      IN_STORAGE_MODIFYSTATE_NO: '0',
      IN_STORAGE_MODIFYSTATE_YES: '1',
      DESC: {
        '0': '否',
        '1': '是'
      }
    },
    //送货单状态
    'DELIVERY_STATE': {
      INIT: '0',
      WAIT_PICK: '4',
      PICKING: '5',
      RETURN_INIT: '6',
      WAIT_COMFIRM: '1',
      WAIT_SHELVE: '2',
      COMPLETED: '3',
      DESC: {
        '0': '仅保存',
        '4': '待拣货',
        '5': '正在拣货',
        '6': '仓库返回',
        '7': '客户退单',
        '1': '等待确认',
        '2': '等待上架',
        '3': '上架完成'
      }
    },
    //退货单状态
    'REFUND_STATE': {
      INIT: '0',
      WAIT_COMFIRM: '1',
      COMPLETED: '2',
      DESC: {
        '0': '保存未发送',
        '1': '等待确认',
        '2': '已确认'
      }
    },
    //盘点单状态
    'INVENTORY_STATE': {
      INIT: '0',
      WAIT_COMFIRM: '1',
      WAIT_SETTLEMENT: '2',
      COMPLETED: '3',
      DESC: {
        '0': '待结算',
        '1': '待结算',
        '2': '待结算',
        '3': '已结算'
      }
    },
    //结算单状态
    'SETTLEMENT_STATE': {
      IN_INVENTORY: '0',
      WAIT_SEND: '1',
      WAIT_COMFIRM: '2',
      WAIT_SETTLEMENT: '3',
      COMPLETED: '4',
      DESC: {
        '0': '盘点中',
        '1': '未发送',
        '2': '发送待确认',
        '3': '待付款',
        '4': '已付款'
      }
    },
    //选品单状态
    'GOODSCHOOSE_ORDER_STATE': {
      WAIT_VERIFY: '1',
      VERIFIED: '5',
      FINISH: '6',
      COMPANY_CANCLED: '8',
      SYS_CANCLED: '9',
      DESC: {
        '1': '待接收',
        '5': '已接收',
        '6': '已完成',
        '8': '已删除', //企业取消
        '9': '已取消' //好品取消
      }
    },
    //商品页面模式
    'PRODUCT_PAGE_MODE': {
      MANAGE: 0,
      SELECT: 1,
      DESC: {
        0: '管理',
        1: '选择'
      }
    },
    //送货单紧急度
    'DELIVERY_URGENCY': {
      COMMON: '0',
      URGENCY: '1',
      DESC: {
        '0': '正常',
        '1': '紧急'
      }
    },
    //数字增减标志
    'NUM_MODIFY_MODE': {
      ADD: '0',
      REDUCE: '1',
      DESC: {
        '0': '增',
        '1': '减'
      }
    },
    //利润等级
    'PROFIT_LEVEL': {
      UNKNOWN: '0',
      LOW_PROFIT: '1',
      MEDIUM_PROFIT: '5',
      HIGH_PROFIT: '9',
      DESC: {
        '0': '未知',
        '1': '低利润',
        '5': '中等利润',
        '9': '高利润'
      }
    },
    //商品特殊标识
    'PRODUCT_TAG': {
      NEW: '1',
      INACTIVE: '2',
      SHIELD: '3',
      DESC: {
        '1': '新品',
        '2': '滞销',
        '3': '屏蔽'
      }
    },
    'STOCK_MODIFY_TYPE': {
      IMPORT: '1',
      EXPIRE: '4',
      WASTE: '6',
      DESC: {
        '1': '进货',
        '4': '过期',
        '6': '损耗'
      }
    },
    'WELFARE_STATE': {
      WAIT_AUDIT: '0',
      PASSED: '1',
      REFUSED: '2',
      WAIT_SETTLE: '3',
      PAIED: '4',
      DESC: {
        '0': '待审核',
        '1': '待结算',
        '2': '审核未通过',
        '3': '待结算',
        '4': '已结算'
      },
      STYLE: {
        '0': 'primary',
        '1': 'success',
        '2': 'danger',
        '4': 'warning'
      }
    },
    'WEEK_TYPE': {
      DESC: {
        '1': '周一',
        '2': '周二',
        '3': '周三',
        '4': '周四',
        '5': '周五',
        '6': '周六',
        '7': '周日',
      }
    },
    //财务系统状态
    'INVOICE_NEED_STATE': {
      NONEED: '0',
      NEED: '1',
      DESC: {
        '0': '不需要',
        '1': '需要'
      }
    },
    'INVOICE_STATE': {
      UNINVOICED: '0',
      INVOICED: '1',
      DESC: {
        '0': '未开票',
        '1': '已开票'
      }
    },
    'INVOICE_TIME_TYPE': {
      CREATETIME: '0',
      UPDATETIME: '1',
      DESC: {
        '0': '生成时间',
        '1': '更新时间'
      }
    },
    'EXPRESS_COMPANY_TYPE': {
      YUNDA: '0',
      SHUNFENG: '1',
      XIEDAI: '2',
      YOUZHENG: '3',
      DESC: {
        '0': '韵达快递',
        '1': '顺丰快递',
        '2': '配送携带',
        '3': '邮政'
      }
    },
    'CATEGORY_LEVEL': {
      ONE: '1',
      TWO: '2',
      DESC: {
        '1': '一级品类',
        '2': '二级品类'
      }
    },
    'PRODUCT_DIC_TYPE': {
      ORIGIN_PLACE: '1',
      BRAND_AWARENESS: '2',
      BRAND_GRADE: '3',
      DESC: {
        '1': '原产地',
        '2': '品牌认知度',
        '3': '品牌档次'
      }
    },
    'PRODUCT_STOCK_CHANGE_TYPE': {
      PURCHASE: '1',
      DELIVERY: '2',
      RETURN: '3',
      EXPIRE: '4',
      DELIVERY_RETURN: '5',
      OTHER_LOSS: '6',
      DESC: {
        '1': '进货',
        '2': '出货',
        '3': '退货',
        '4': '过期',
        '5': '出货退回',
        '6': '其他损耗'
      }
    },
    /**
     *  全部结算
     *  微信支付
     *  对公账号支付
     */
    'PAYMENT_STATUS': {
      WECHAT_PAY: '1',
      ALIPAY_APP: '2',
      BALANCE: '5',
      WECHAT_APP: '7',
      BANK_CARD: '8',
      DESC: {
        '1': '微信公众号',
        '2': '支付宝',
        '5': '余额支付',
        '7': '微信APP支付',
        '8': '对公账号支付'
      }
    },
    /**
     * 全部订单
     * 待付款
     * 待配送
     * 已完成
     */
    'ORDER_STATUS': {
      WAITING_PAYMENT: '1',
      WAITING_DISTRIBUTION: '2',
      COMPLETE: '3',
      CANCEL: '4',
      DESC: {
        '1': '待付款',
        '2': '待配送',
        '3': '已完成',
        '4': '已取消'
      }
    },
    /**
     * 购买类型
     * 预定
     */
    'BUY_TYPE': {
      RESERVATION: '0',
      SELLING: '1',
      DESC: {
        '0': '预定',
        '1': '热卖'
      }
    },
    'PAY_TYPE': {
      UNKNOW: '0',
      WX_PAY: '1',
      ALI_PAY: '2',
      CASH: '3',
      BANK_CARD: '4',
      POCKET_MONEY: '5',
      WX_MICROPAY: '6',
      WX_APPPAY: '7',
      DESC: {
        '0': '未知',
        '1': '微信公众号',
        '2': '支付宝',
        '3': '现金',
        '4': '银行卡',
        '5': '余额支付',
        '6': '微信刷卡',
        '7': '微信APP'
      }
    },
    'Tea_ORDER_TYPE': {
      FINIORDER: '0',
      NEXTORDER: '1',
      CANCELORDER: '2',
      DESC: {
        '0': '未知',
        '1': 'daijiesong',
        '2': '已取消',
      }
    },
    'Time_Period': {
      MORNING: '1',
      AFTERNOON: '2',
      DESC: {
        '1': '上午',
        '2': '下午'
      }
    },
    'Tea_Period_Type': {
      ACCEPT: '1',
      WAIT: '2',
      CANCEL: '3',
      DESC: {
        '1': '已接单',
        '2': '待接单',
        '3': '已取消'
      }
    },
    'Promotion_Search_Type': {
      TEL: '1',
      COMPANY: '2',
      Name: '3',
      DESC: {
        '1': '按手机号搜索',
        '2': '按企业名称搜索',
        '3': '按联系人搜索'

      }
    },
    'PROMOTION_ORDER_STATUS': {
      WAIT_PAY_DEPOSIT: '1',
      WAIT_COMFIRM: '2',
      WAIT_PAY_FULL: '3',
      WAIT_SEND: '4',
      SEND: '5',
      RECEIVED: '6',
      CANCEL: '7',
      CANCEL_8: '8',
      CANCEL_9: '9',
      DESC: {
        '1': '待付定金',
        '2': '待确认',
        '3': '待付尾款',
        '4': '待发货',
        "5": "已发货",
        '6': '已收货',
        "7": "已取消",
        '8': '已取消', //(等待退款)
        '9': "已取消" //(已退款)
      }
    },
    'PRMOTION_PRODUCT_ACTIVE': {
      ACTIVE: '1',
      NOTACTIVE: '0',
      DESC: {
        '1': '架上商品',
        '0': '已下架商品'

      }
    },
    'ISSUE_STATUS': {
      WAITING_ONLINE: '0',
      ALREADY_ONLINE: '1',
      ALREADY_OFFLINE: '2',
      DESC: {
        '0': '待上线',
        '1': '已上线',
        '2': '已下线'
      }
    },
    'ISSUE_ACTIVE': {
      CLOSE: '0',
      OPEN: '1',
      DESC: {
        false: '关闭',
        true: '开启'
      }
    },

    'SUITE_TYPE': {
      FEATURES: '0',
      STANDARD: '1',
      DESC: {
        '0': '特色',
        '1': '标准'
      }
    },
    'SUITE_STATUS': {
      NOT_RELEASE: '0',
      ALREADY_RELEASE: '1',
      DESC: {
        '0': '未发布',
        '1': '已发布'
      }
    },
    'PROMOTION_PAY_TYPE': {
      PAY_DEPOSIT: '1',
      PAY_ALL: '2',
      DESC: {
        1: '定金支付',
        2: '全额支付'
      }
    },
    'TEMPLATE_TYPE': {
      ENTERPRISE: '1',
      HOTEL: '2',
      INTERNET_BAR: '3',
      GUEST: '4',
      DESC: {
        1: '企业',
        2: '酒店',
        3: '网吧',
        4: '自由人'
      }
    },
    'TEMPLATE_STATUS': {
      UNPUBLIC: '0',
      PUBLIC: '1',
      DESC: {
        '0': '未发布',
        '1': '发布'
      }
    },
    'CONTENT_TYPE': {
      BANNER: '0',
      COMMON: '1',
      DESC: {
        '0': '轮播图',
        '1': '普通'
      }
    },
    //拣货单商品 上架原因
    'PICK_PRODUCT_REASON': {
      CHOSEN: '0', //选购单
      WISHLIST: '1', //心愿单
      REPLACEMENT_ADVICE: '2', //下架商品同类替换推荐
      SHELF_BEST_SALES: '3', //货架最近60日出货率TOP3&销售额TOP2
      GLOBAL_BEST_SALES: '4', //全库最近60日出货率TOP3&销售额TOP2
      RECOMMENDED: '5', //单品推荐
      SUPPLEMENT_ADVICE: '6', //补货建议
      ICON: {
        '0': './img/icon-goodschoose-red.png',
        '1': './img/icon-like.png',
        '2': './img/icon-replacement-advice.png',
        '3': './img/icon-shelf-best-sales.png',
        '4': './img/icon-global-best-sales.png',
        '5': './img/icon-recommend.png',
        '6': './img/icon-supplement-advice.png'
      },
      KEY_WORD: {
        '0': '选',
        '1': '愿',
        '2': '替',
        '3': '架',
        '4': '全',
        '5': '单',
        '6': '补'
      },
      KEY: {
        'wishlist': '1',
        'replacements': '2',
        'shelfSalesChart': '3',
        'globalSalesChart': '4',
        'recommended': '5',
        'replenishment': '6'
      }
    },
    //拣货单商品 来源
    'PICK_PRODUCT_FROM_TYPE': {
      FROM_SUITE: 1,
      FROM_NEW: 2,
      FROM_SHELF: 3,
      FROM_REFER: 4,
      FROM_CHOOSE: 5,
      FROM_EDIT: 6
    },
    /*@Params
    options(必填，若为对象则所有参数都在该值设置,一旦以对象形式设置该值，后面参数失效。若为字符串，则表示取哪个enum,如 ‘PROFIT_LEVEL’)
    支持以下设置项
    clsOrName(必填,表示取哪个enum,如 ‘PROFIT_LEVEL’)
    hasDefault(非必填，不填将有默认值，该默认值特指 所有类型 或 不填 等)
    codeKey(非必填)
    valueKey(非必填)
    defaultObj(非必填 填写格式为{'-1':'所有类型'})
    */
    getList: function(options, hasDefault, codeKey, valueKey, defaultObj,
      isCodeNum) {
      var clsOrName;
      if (options.clsOrName) { //若options为对象,后面参数将从options中取值
        clsOrName = options.clsOrName;
        hasDefault = options.hasDefault;
        codeKey = options.codeKey;
        valueKey = options.valueKey;
        defaultObj = options.defaultObj;
        isCodeNum = options.isCodeNum;
      } else {
        clsOrName = options;
      }
      if (!clsOrName) {
        return [];
      }
      var ck = codeKey || 'code';
      var vk = valueKey || 'desc';

      var l = _.map(this[clsOrName].DESC, function(val, code) {
        // return { code: key, desc: val };
        var o = {};
        o[ck] = isCodeNum ? parseInt(code) : code;
        o[vk] = val;
        return o;
      });
      hasDefault = typeof(hasDefault) != 'undefined' ? hasDefault : true;
      if (hasDefault) {
        var dOjb = {};
        dOjb[ck] = isCodeNum ? -1 : '-1';
        dOjb[vk] = '全部';
        if (defaultObj) {
          if (_.pairs(defaultObj).length > 0) {
            dOjb[ck] = _.pairs(defaultObj)[0][0];
            dOjb[vk] = _.pairs(defaultObj)[0][1];
          }
        }
        l.splice(0, 0, dOjb);
      }
      return l;
    }
  }
};
},{}],2:[function(require,module,exports){
module.exports = function(app) {
  app.controller('account', function($scope, $mdDialog, modalService,
    utilService, accountService, NgTableParams, roleService) {
    $scope.searchName = "";
    $scope.heads = [{
      title: '序号',
      width: '6%',
      field: 'index',
    }, {
      title: '用户名',
      width: '16%',
      field: 'name',
    }, {
      title: '手机号',
      width: '24%',
      field: 'mobile',
    }, {
      title: '创建者',
      width: '16%',
      field: 'creator',
      getValue: function(creator) {
        return creator.name;
      }
    }, {
      title: '创建时间',
      width: '16%',
      field: 'createTime',
      getValue: function(createTime) {
        return utilService.parseTimeByLong(createTime,
          'yyyy-MM-dd hh:mm');
      }
    }, {
      title: '管理者',
      width: '16%',
      field: 'supervisor',
      getValue: function(supervisor) {
        return supervisor.name;
      }
    }, {
      title: '操作',
      width: '6%',
      getValue: function() {
        return '<button class="btn btn-default btn-sm" ng-click="editAccount(row)" ><span class="glyphicon glyphicon-pencil"></span></button>' +
          '&nbsp&nbsp&nbsp' +
          '<button class="btn btn-danger btn-sm" ng-click="deleteClick(row)"><span class="glyphicon glyphicon-trash"></span></button>';
      },
    }];
    $scope.createAccount = function() {
      $mdDialog.show(addOrEditAccountModalOptions($scope)).then(update);
    };

    $scope.manageRoles = function() {
      window.location.hash = "#/role"
    };

    /* 编辑*/
    $scope.editAccount = function(account) {
      $mdDialog.show(addOrEditAccountModalOptions($scope, account)).then(
        update);
    };

    /*删除*/
    $scope.deleteClick = function(account) {
      $scope.account = angular.copy(account);
      $scope.modal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'account')),
        scope: $scope,
        templateUrl: 'deleteUserModel'
      });
    };

    /*删除用户确认*/
    $scope.deleteUser = function(account) {
      accountService.deleteManager({
        id: $scope.account.managerId
      }).then(function(res) {
        update();
        $scope.modal.close();
      });
    };

    /*给table赋值*/
    var findAll = function() {
      if ($scope.searchName) {
        $scope.tableParams = new NgTableParams({}, {
          counts: [],
          getData: function(params) {
            return accountService.searchName($scope.searchName).then(
              function(res) {
                params.total(res.lenght);
                return accountService.indexAccount(res, 1);
              });
          }
        });
        $scope.offset = 0; // 重置
      } else {
        if (!$scope.offset) {
          $scope.offset = 0;
        }
        $scope.limit = 15;
        $scope.tableParams = new NgTableParams({
          count: $scope.limit
        }, {
          counts: [],
          paginationMaxBlocks: 25,
          paginationMinBlocks: 2,
          getData: function(params) {
            $scope.offset = $scope.limit * (params.page() - 1);
            return accountService.findAllManager({}, $scope.offset,
              $scope.limit).then(function(res) {
              params.total(res.totalElements);
              return accountService.indexAccount(res.content,
                $scope.offset + 1);
            });
          }
        });
      }
    };
    // 当前登陆账户
    $scope.currentAccount = {};
    // 特殊权限
    $scope.critialPermissions = [];
    // 所有管理者
    $scope.supervisors = [];
    // 所有角色
    $scope.role = {};

    function update() {
      findAll();
      accountService.loadSupervisors().then(function(res) {
        $scope.supervisors = res;
      });
    }

    (function() {
      accountService.loadSelf().then(function(res) {
        angular.extend($scope.currentAccount, res);
      });
      roleService.getCriticalPermissions().then(function(res) {
        angular.extend($scope.critialPermissions, res);
      });
      roleService.getRoles().then(function(res) {
        angular.extend($scope.role, res);
      });
      update();
    })();

    $scope.search = function() {
      $scope.searchName = $scope.searchName.trim();
      if ($scope.searchName) {
        findAll();
      }
    };
    $scope.clear = function() {
      $scope.searchName = "";
      findAll();
    };
    $scope.downloadExcel = function() {
      accountService.downloadExcel().then(function(data) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var blob = new Blob([data], {
            type: "octet/stream"
          }),
          url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = "permissions.xls";
        a.click();
        window.URL.revokeObjectURL(url);
      });
    };
    $scope.uploadPermissions = function() {
      uploadExcel(accountService.uploadPermissions);
    };
    $scope.uploadPermissionGroups = function() {
      uploadExcel(accountService.uploadPermissionGroups);
    };
    var uploadExcel = function(uploader) {
      $mdDialog.show(uploadExcelModalOptions(uploader)).then(function(
        data) {
        $mdDialog.show(
          $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('上传成功')
          .textContent(data.runMsg)
          .ok('确定')
        );
      });
    };
  });
};

function addOrEditAccountModalOptions(scope, account) {
  return {
    templateUrl: 'views/account/addOrEditAccountModal.html',
    controller: AddOrEditAccountCtrl,
    locals: {
      account: account,
      context: scope
    }
  };
};

function AddOrEditAccountCtrl($scope, $mdDialog, $mdPanel, accountService,
  context, account) {
  var currentAccount = context.currentAccount;
  var editMode = typeof(account) != 'undefined';
  $scope.editMode = editMode;
  $scope.allPermissions = [{
    id: "自定义",
    name: "特殊权限",
    permissions: context.critialPermissions
  }];
  $scope.account = account ? angular.copy(account) : {
    creator: currentAccount,
    supervisor: currentAccount,
  };
  if (!$scope.account.permissionIds) $scope.account.permissionIds = [];
  $scope.picUrl = window.cfg.picUrl;
  $scope.creatorName = $scope.account.creator.name;
  $scope.pickedSupervisor = $scope.account.supervisor;
  $scope.supervisors = [$scope.pickedSupervisor].concat(context.supervisors.filter(
    function(supervisor) {
      // 从管理者列表中过滤掉当前编辑的用户（如果有的话）和 pickedSupervisor（已放在第一位）
      var id = supervisor.managerId;
      return id !== $scope.account.managerId && id !== $scope.pickedSupervisor
        .managerId;
    }));
  $scope.ok = function() {
    var result = $scope.account;
    var checkRoleIds = $scope.checkedRoles.map(function(role) {
      return role.id;
    });
    if (editMode) {
      accountService.modifyManager({
          id: result.managerId,
          name: result.name,
          psw: result.password ? $.hex_md5(result.password) : null,
          supervisorId: $scope.pickedSupervisor.managerId,
          permissionIds: result.permissionIds,
          roleIds: checkRoleIds,
          avatar: result.avatar
        })
        .then(function() {
          $mdDialog.hide();
        });
    } else {
      accountService.createManager({
          name: result.name,
          mobile: result.mobile,
          psw: $.hex_md5(result.password),
          supervisorId: $scope.pickedSupervisor.managerId,
          permissionIds: result.permissionIds,
          roleIds: checkRoleIds,
          avatar: result.avatar
        })
        .then(function() {
          $mdDialog.hide();
        });
    }
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.pickRole = function() {
    $mdPanel.open(pickRoleOptions($mdPanel, context.role, $scope.checkedRoles,
      currentAccount));
  };
  $scope.checkedRoles = [];
  var checkedRoleIds = $scope.account.roleIds;
  if (checkedRoleIds) {
    findCheckedRoles(context.role);
  }

  function findCheckedRoles(role) {
    if (checkedRoleIds.indexOf(role.id) > -1) {
      $scope.checkedRoles.push(role);
    }
    angular.forEach(role.children, function(child) {
      findCheckedRoles(child);
    });
  };
};

function pickRoleOptions($mdPanel, role, checkedRoles, currentAccount) {
  return {
    attachTo: angular.element(document.body),
    controller: PanelDialogCtrl,
    controllerAs: 'ctrl',
    templateUrl: 'views/account/pickRolePanel.html',
    hasBackdrop: true,
    panelClass: 'pick-role-panel',
    position: $mdPanel.newPanelPosition().absolute().center(),
    trapFocus: true,
    zIndex: 10002,
    escapeToClose: true,
    focusOnOpen: true,
    locals: {
      role: role,
      checkedRoles: checkedRoles,
      currentAccount: currentAccount
    }
  };
};

function PanelDialogCtrl($scope, mdPanelRef, role, checkedRoles, currentAccount) {
  var checkedInfos = [];
  var currentRoleInfos = [];
  (function() {
    var ids = checkedRoles.map(function(role) {
      return role.id
    });

    function wrap(role, parentInfo) {
      var info = {
        _enabled: 0,
        role: role,
        parent: parentInfo,
      }
      info.children = !role.children ? [] : role.children.map(function(child) {
        return wrap(child, info);
      })
      if (ids.indexOf(role.id) > -1) checkedInfos.push(info);
      if (currentAccount.roleIds.indexOf(role.id) > -1) currentRoleInfos.push(
        info);
      return info;
    }
    $scope.roleInfo = wrap(role, null);
  }());
  var root = role;
  var result = [];
  var checkedRoleIds = [];
  var self = this;
  self.ok = function() {
    checkedRoles.splice(0, checkedRoles.length);
    angular.forEach(result, function(role) {
      checkedRoles.push(role);
    });
    self.closePanel();
  };
  self.closePanel = function() {
    mdPanelRef.close().then(function() {
      mdPanelRef.destroy();
    });
  };
  self.pickable = function(info) {
    var role = info.role;
    return role !== root && info._enabled == 0;
  };
  self.isChecked = function(info) {
    return checkedRoleIds.indexOf(info.role.id) > -1;
  };
  self.toggle = function(info) {
    var role = info.role;
    var index = checkedRoleIds.indexOf(role.id);
    if (index < 0) {
      checkedRoleIds.push(role.id);
      result.push(role);
      setParentEnable(info, false);
      setChildrenEnable(info, false);
    } else {
      checkedRoleIds.splice(index, 1);
      result.splice(index, 1);
      setParentEnable(info, true);
      setChildrenEnable(info, true);
    }
  };

  function setParentEnable(info, disable) {
    if (info.parent) {
      var parent = info.parent;
      var delta = disable ? -1 : 1;
      parent._enabled = parent._enabled + delta;
      setParentEnable(parent, disable);
    }
  };

  function setChildrenEnable(info, disable) {
    var children = info.children;
    if (children) {
      angular.forEach(children, function(child) {
        var delta = disable ? -1 : 1;
        child._enabled = child._enabled + delta;
        setChildrenEnable(child, disable);
      });
    }
  };
  // 1. 先将所有节点禁止
  setChildrenEnable($scope.roleInfo, false);
  // 2. 再开放当前账户所拥有角色的子角色
  angular.forEach(currentRoleInfos, function(currentRoleInfo) {
    setChildrenEnable(currentRoleInfo, true);
  });
  angular.forEach(checkedInfos, function(checkedInfo) {
    self.toggle(checkedInfo); // 选中已选角色
  });
}

function uploadExcelModalOptions(uploader) {
  return {
    templateUrl: 'views/account/uploadExcelModal.html',
    controller: UploadExcelCtrl,
    locals: {
      uploader: uploader
    }
  };
};

function UploadExcelCtrl($scope, $mdDialog, $timeout, accountService, uploader) {
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.ok = function() {
    var comment = $scope.comment;
    var file = $("#file_input")[0].files[0];
    uploader(comment, file).then(function(data) {
      $mdDialog.hide(data);
    });
  };
};
},{}],3:[function(require,module,exports){
/*
 *总控
 *appContrller
 */
module.exports = function(app) {
    app.controller('app', function($scope) {
        //开始路由回调
        //成功路由回调
        $scope.$on('$routeChangeSuccess', function(e,r) {
            var route=r.$$route;
            var path=route.name;
            $scope.$emit('sidebar.active',path);
        });

        $scope.tabs = [{
                title: 'Dynamic Title 1',
                content: ''
            },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2' }
        ];
        $scope.selectEvent = function(item) {

        };
        //添加tab 
        $scope.$on('AddTab', function(e, obj) {
            var id = obj.id;
            if (!_.findWhere(id, { id: id })) {
                $scope.tabs.push({
                    title: obj.name,
                    id: id,
                    content: '<div ui-view="' + id + '"></div>'
                });
            }
        });

    });
};

},{}],4:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 2016/11/25.
 */
/**
 * 商品标签管理
 * labelsManagement
 */
module.exports = function (app) {
    app.controller('commentsManage', function ($scope, $uibModal, $compile, modalService, orderService, NgTableParams, suiteService, CONSTANTS, utilService) {

        $scope.ORDER_STATUS = CONSTANTS.ORDER_STATUS;//订单状态
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE; //订单类型
        $scope.queryParams = {
            suiteName: '',//套餐名称
            suiteId: '',//套餐ID
            companyName: '', //公司名称
            companyId: '', //公司ID
            customerName: '', //用户名称
            content: '', //评论内容
            createTimeStart: '',//评论创建时间
            createTimeEnd: ''//评论创建时间
        };

        //根据企业搜索
        $scope.searchByCompany = function (company) {
            $scope.queryParams.companyName = company.companyName;
            $scope.commentsList();
        };

        //清空企业搜索
        $scope.emptyCompanySearch = function() {
            delete $scope.queryParams.companyName;
        };

        /**
         * 评论列表
         */
        $scope.commentsList = function (queryParams) {
            // debugger
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.tableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    // var search = getParams();
                    /*var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        customerName: $scope.customerName,
                        content: $scope.content,
                    };*/
                    var queryParam = angular.extend( getParams(),{
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit
                    });
                    return suiteService.queryComment(queryParam).then(function (res) {
                        // debugger
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            })
        };
        $scope.commentsList();
        var getParams = function () {
            // debugger
            var temp = $scope.queryParams;
            temp[temp.markId] = temp.fuzzy;
            return _.omit(temp, 'markId', 'fuzzy');
        };


        /*打印*/
        //打印单据列表
        var printOrderArray = [];
        var checkInfo = function (data) {
            // debugger
            angular.forEach(data, function (item) {
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
        /**
         * 勾选
         */
        $scope.updateSelection = function (e, order) {
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
        $scope.selectAllOrder = function (e, data, checkall) {
            var st = e.currentTarget.checked;
            angular.forEach(data, function (item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item);
                }
            });
        };

        //选择
        $scope.queryChoose = {
            nameTypeData: [{
                markId: '',
                desc: '无'
            }, {
                markId: 'customerName',
                desc: '用户名'
            }, {
                markId: 'content',
                desc: '内容'
            }],
            selectItem: function (item) {
                $scope.queryParams["markId"] = item.markId;
            }
        };

        /**
         * 回复评论
         */
        $scope.replyComment = function (cm) {
            // debugger
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementById('commentsManage')),
                scope: $scope,
                templateUrl: 'suite/replyCommentsTemplate.html'
            });
            $scope.comments = cm;
        };

        /**
         * 确定回复
         *determineReply()
         */
        $scope.determineReply = function (comments) {
            var me = this;
            // debugger
            console.log(comments.content);
            var params = {
                suiteId: comments.suiteId,
                companyId: comments.companyId,
                content: comments.reply,
                parentId: comments.id,

            };
            suiteService._createComment(params).then(function (res) {
                $scope.commentsList();
                alert('回复成功！');
                me.$close();
            });
        };

        /**
         * 取消回复
         * cancelReply()
         */
        $scope.cancelReply = function () {
            // debugger
            this.$close();
        };

        /**
         * 删除评论
         */
        $scope.deleteComment = function (cm) {
            // debugger
            var params = {
                suiteCommentId: cm.id
            };
            suiteService._deleteComment(params).then(function (res) {
                alert('评论删除成功。');
                $scope.commentsList();
            });
        }

    });
};



},{}],5:[function(require,module,exports){
/*
 *企业库控制器
 *companyController
 */
module.exports = function(app) {
  app.controller('company', function($scope, $mdSidenav, $mdDialog, $sce,
    $element, $compile, $templateCache, $filter, NgTableParams,
    printService, utilService,
    modalService, companyService, CONSTANTS) {
    $scope.CONSTANTS = CONSTANTS;
    $scope.queryParams = {}; //企业查询参数
    $scope.selectedCompanyList = []; //选中的企业列表

    // 下面代码为导出Excel做准备
    var excelTemplate = $compile($templateCache.get(
      'company/companyTableTemplate.html'))($scope);
    angular.element(document.getElementById(
      'exportExcelWrap')).append(excelTemplate);

    /*定义*/
    $scope.companyCreateModal;
    var getRecordById = function(record) {
      var value;
      angular.forEach($scope.company.contacts, function(item) {
        if (record.id == item.id) {
          value = item;
        }
      });
      return value;
    };
    var defaultConcat = {
      mobile: '',
      tel: '',
      qq: '',
      wechat: '',
      command: '',
      contactName: '',
      isEditing: true
    };
    $scope.companys = [];
    $scope.contactTableData = [];
    $scope.company = {
      companyId: '',
      companyManagerId: '',
      staffNum: '',
      companyName: '',
      shelfType: '',
      pickingType: CONSTANTS.PICKING_TYPE.RANDOM,
      pickingRemark: '',
      des: '',
      address: '',
      limitFee: '',
      lng: '',
      lat: '',
      change: '',
      followPeople: '',
      status: '',
      isPremium: false,
      contacts: [],
      sendWeek: [],
      balance: 0,
      superAdmin: '',
      customerType: '',
      reset: function() {
        this.companyId = '';
        this.companyManagerId = '';
        this.staffNum = '';
        this.companyName = '';
        this.shelfType = '';
        this.pickingType = CONSTANTS.PICKING_TYPE.RANDOM;
        this.pickingRemark = '';
        this.des = '';
        this.address = '';
        this.limitFee = '';
        this.contacts = [];
        this.sendWeek = [];
        this.lng = '';
        this.lat = '';
        this.isPremium = false;
        this.followPeople = '';
        this.status = '';
        this.change = '';
        this.balance = 0;
        this.superAdmin = '';
        this.customerType = '';
      }, //CompanyContactInfo[]  企业联系人列表
      viewFormate: function() {
        this.limitFee = this.limitFee >= 0 ? parseInt(this.limitFee /
          100) : '';
      }
    };
    //客户货架类型 设置
    $scope.formConfig = {
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'COMPANY_TYPE',
          hasDefault: false,
          codeKey: 'value',
          valueKey: 'desc'
        });
      },
      getDefaultItem: function(value) {
        var options = this.getList();
        return _.findWhere(options, {
          value: value
        }) || options[1];
      },
      selectItem: function(record) {
        this.defaultItem = record;
        $scope.company.shelfType = record.value;
      }
    };
    //客户类别(如企业，网吧等)
    $scope.customerType = {
      getList: function(mode) {
        var listOpts = {
          clsOrName: 'CUSTOMER_TYPE',
          codeKey: 'customerType',
          valueKey: 'name'
        };
        if (mode == 1) { //筛选模式
          listOpts.defaultObj = {
            '-1': '所有客户类别'
          };
        } else {
          listOpts.hasDefault = false;
        }
        return CONSTANTS.getList(listOpts);
      },
      getDefaultItem: function(mode, value) {
        var options = this.getList(mode);
        return _.findWhere(options, {
          customerType: value
        }) || options[0];
      },
      selectItem: function(mode, record) {
        if (mode == 1) { //筛选模式
          if (record.customerType != -1) {
            $scope.queryParams.customerType = record.customerType;
          } else {
            delete $scope.queryParams.customerType;
          }
          $scope.searchCompany();
        } else { //设置模式
          this.defaultItem = record;
          $scope.company.customerType = record.customerType;
        }
      }
    };
    //客户状态
    $scope.customerStatus = {
      getList: function(mode) {
        var listOpts = {
          clsOrName: 'CUSTOMER_STATUS',
          codeKey: 'customerStatus',
          valueKey: 'name'
        };
        if (mode == 1) { //筛选模式
          listOpts.defaultObj = {
            '-1': '所有企业状态'
          };
        } else {
          listOpts.hasDefault = false;
        }
        return CONSTANTS.getList(listOpts);
      },
      getDefaultItem: function(mode, value) {
        var options = this.getList(mode);
        return _.findWhere(options, {
          customerStatus: value
        }) || options[0];
      },
      selectItem: function(mode, record) {
        if (mode == 1) { //筛选模式
          if (record.customerStatus != -1) {
            $scope.queryParams.status = record.customerStatus;
          } else {
            delete $scope.queryParams.status;
          }
          $scope.searchCompany();
        } else {
          this.defaultItem = record;
          $scope.company.status = record.customerStatus;
        }
      }
    };
    //客户查询类别 设置
    $scope.queryCompanyTypeConfig = {
      nameTypeData: [{
        markId: 'companyName',
        desc: '名称'
      }, {
        markId: 'address',
        desc: '地址'
      }],
      selectItem: function(item) {
        $scope.queryParams["markId"] = item.markId;
        $scope.queryTypeName = item.desc;
      }
    };
    //回车键查询 
    $scope.companyKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.searchCompany();
      }
    };
    //表格设置
    $scope.offset = 0;
    $scope.limit = 20;
    $scope.companyTable = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function(params) {
        $scope.offset = $scope.limit * (params.page() - 1);
        var p = getParams();
        p.offset = $scope.offset;
        p.limit = $scope.limit;
        return companyService.queryCompanyList(p).then(function(res) {
          params.total(res.totalElements);
          return companyService.parseCompanyList(res.content,
            $scope.offset);
        });
      }
    });
    var getParams = function() {
      var temp = $scope.queryParams;
      _.each($scope.queryCompanyTypeConfig.nameTypeData, function(item) {
        delete temp[item.markId];
      });
      temp[temp.markId] = temp.queryName;
      return _.omit(temp, 'markId', 'queryName');
    };
    //勾选
    $scope.updateSelection = function(e, company) {
      var isChecked;
      if (_.isObject(e)) {
        isChecked = e.currentTarget.checked;
      } else {
        isChecked = e;
      }
      company.checked = isChecked;
      if (isChecked) {
        $scope.selectedCompanyList.push(company);
      } else {
        $scope.selectedCompanyList = _.without($scope.selectedCompanyList,
          company);
      }
    };

    // 选择星期
    var weekChoics = $filter('selection')('WEEK_TYPE', null, 'value',
      'desc', '', true);
    $scope.weekConfig = {
      choices: weekChoics,
      defaultItem: {
        value: '-1',
        desc: '选择星期'
      },
      getOptionByValue: function(value) {
        var options = this.choices;
        return _.findWhere(options, {
          value: value
        });
      },
      selectItem: function(record) {
        if (record.value == this.defaultItem.value) {
          return;
        } else {
          $scope.company.sendWeek = _.sortBy(_.union($scope.company.sendWeek, [
            record.value
          ]));
        }
      },
      delWeek: function(chip) {
        var value = $filter('value')(chip, 'WEEK_TYPE', true);
        $scope.company.sendWeek = _.without($scope.company.sendWeek,
          value);
      }
    };
    //查询企业列表
    $scope.searchCompany = function() {
      $scope.companyTable.settings({
        dataset: []
      });
    };
    //导出企业列表
    $scope.exportCompanyTableExcel = function() {
      if (!$scope.selectedCompanyList.length) {
        utilService.alertError('请先选择需导出的企业');
        return;
      }
      var dom = angular.element('<a></a>');
      dom[0].href = $('#export-company-table').excelexportjs({
        containerid: 'export-company-table',
        datatype: 'table',
        returnUri: 'true'
      });
      dom[0].download = '企业列表.xls';
      dom[0].click();
    };
    //打开企业 新增 编辑
    $scope.openCreateEditCompanyWin = function(companyId) {
      $scope.company.reset();
      if (!companyId) { //新增模式
        $scope.contactTable.settings({
          dataset: []
        });
        $scope.companyCreateModal = initModal('modelcontent', 'middle');
      } else {
        companyService.queryCompanyPremiumState({
          companyId: companyId
        }).then(function(res) {
          $scope.company.isPremium = !!parseInt(res.enable);
        });
        companyService.queryCompanyDeduction({
          companyId: companyId
        }).then(function(res) {
          $scope.company.balance = res.balance;
        });
        companyService.queryCompany({
          companyId: companyId
        }).then(function(res) {
          $scope.company = angular.extend($scope.company, res);
          $scope.company.viewFormate();
          $scope.contactTableData = angular.copy(res.contacts);
          $scope.contactTable.settings({
            dataset: $scope.contactTableData
          });
          $scope.companyCreateModal = initModal('modelcontent',
            'middle');
        });
      }

    };
    //Modal
    var initModal = function(templateUrl, size, appendToElement) {
      return modalService.initModal({
        appendTo: appendToElement || $element,
        templateUrl: templateUrl,
        scope: $scope,
        size: size
      });
    };
    //确定提交企业信息
    $scope.submitCompanyConfirm = function(company) {
      var errorMsg = '';
      if (!company.contacts.length) {
        errorMsg = '请添加联系方式';
      } else if (company.pickingType == CONSTANTS.PICKING_TYPE.OTHER) {
        if (!company.pickingRemark) {
          errorMsg = '请填写其他拣货类型';
        }
      }
      if (errorMsg.length) {
        utilService.alertError(errorMsg);
        return;
      }
      var companyParams = angular.copy(company);
      if (companyParams.pickingType != CONSTANTS.PICKING_TYPE.OTHER) {
        companyParams.pickingRemark = '';
      }
      if (companyParams.limitFee == '') {
        companyParams.limitFee = -1;
      } else {
        companyParams.limitFee = utilService.getPointInt(
          companyParams.limitFee || 0);
      }
      if (!company.companyId) { //新增模式
        $scope.createCompanyConfirm(companyParams);
      } else { //修改模式
        $scope.editCompanyConfirm(companyParams);
      }
    };
    //确认创建企业
    $scope.createCompanyConfirm = function(companyParams) {
      return companyService.createCompany(companyParams).then(function(
        res) {
        if (parseInt($scope.company.change)) {
          companyService.setCompanyDeduction({
            companyId: res.companyId,
            change: $filter('points')($scope.company.change)
          });
        }
        $scope.companyCreateModal.close();
        $scope.companyTable.reload();
      });
    };
    //确认编辑企业
    $scope.editCompanyConfirm = function(companyParams) {
      var promise = companyService.editCompany(companyParams)
        .then(function() {
          if (parseInt($scope.company.change)) {
            companyService.setCompanyDeduction({
              companyId: $scope.company.companyId,
              change: $filter('points')($scope.company.change)
            });
          }
          $scope.companyCreateModal.close();
          $scope.companyTable.reload();
        }, function() {});
      return promise;
    };
    //添加联系人
    $scope.confirmAdd = function() {
      $scope.contactTable.settings().dataset.push(angular.copy(
        defaultConcat));
      $scope.contactTable.reload();
    };

    //修改联系人
    $scope.confirmEdit = function(row, rowForm, scope) {
      row.isEditing = false;
      rowForm.$setPristine();

      if (row.id) { //修改联系人
        companyService.editCompanyContact(row).then(function(res) { //成功
          $scope.companyTable.reload();
        }, function() { //失败
          row = angular.extend(row, getRecordById(row));
        });
      } else { //添加联系人
        if (scope.company.companyId) { //修改企业时添加联系人
          row.companyId = scope.company.companyId;
          companyService.addCompanyContact(row).then(function(res) { //成功
            companyService.queryCompany({
              companyId: scope.company.companyId
            }).then(function(res) {
              $scope.company = angular.extend($scope.company,
                res);
              $scope.company.formate();
              $scope.contactTableData = angular.copy(res.contacts);
              $scope.contactTable.settings({
                dataset: $scope.contactTableData
              }); /*$scope.companyTable.reload();*/
            });
          }, function(error) { //失败
            $scope.contactTableData = _.without($scope.contactTableData,
              row);
            $scope.contactTable.settings({
              dataset: $scope.contactTableData
            });
            $scope.contactTable.reload();
          });
        } else { //创建企业时添加联系人
          $scope.company.contacts.push(row);
        }
      }
    };
    $scope.startEdit = function(row, rowForm) {
      row.isEditing = true;
      //rowForm.originRow = angular.copy(row);
    };
    //取消修改联系人
    $scope.cancelEdit = function(row, rowForm) {
      row.isEditing = false;
      rowForm.$setPristine();
      if (row.id) { //修改
        row = angular.extend(row, getRecordById(row));
      } else { //删除
        $scope.contactTable.settings().dataset = _.without($scope.contactTable
          .settings().dataset, row);
        $scope.contactTable.reload();
      }
    };
    //删除联系人
    $scope.confirmDelete = function(row) {
      if ($scope.contactTable.data.length == 1) {
        $mdDialog.show($mdDialog.alert({
          title: '失败',
          textContent: '无法删除,必须有1位联系人!',
          ok: '关闭'
        }));
        return;
      }
      companyService.deleteCompanyContact({
        contactId: row.id
      }).then(function() {
        $scope.contactTable.settings().dataset = _.without($scope.contactTable
          .settings().dataset, row);
        $scope.contactTable.reload();
      });
    };
    //重置密码
    $scope.resetPWD = function() {
      companyService.resetCompanyPassword({
        companyId: $scope.company.companyId
      }).then(function() {
        $mdDialog.show($mdDialog.alert({
          title: '成功',
          textContent: '重置密码成功',
          ok: '关闭'
        }));
      }, function() {
        $mdDialog.show($mdDialog.alert({
          title: '请求失败',
          textContent: '重置密码失败',
          ok: '关闭'
        }));
      });
    };

    //状态更改日志
    $scope.companyChangeLogCrl;
    $scope.companyChangeLogTableHeads = [{
      title: '序号',
      field: 'index'
    }, {
      title: '操作时间',
      field: 'optTime',
      getValue: function(value) {
        return '<span>' + $filter('date')(value, 'yyyy.MM.dd') +
          '</span>';
      },
      show: true
    }, {
      title: '姓名',
      field: 'optName',
      show: true,
      getValue: function(v) {
        return '<span  style="width:180px;display:inline-block;">' +
          v + '</span>';
      }
    }, {
      title: '操作前状态',
      field: 'preStatusAlias',
      show: true
    }, {
      title: '操作后状态',
      field: 'sufStatusAlias',
      show: true
    }];
    $scope.companyChangeLogTable = new NgTableParams({
      counts: 10
    }, {
      counts: [],
      paginationMaxBlocks: 13,
      paginationMinBlocks: 2,
      dataset: []
    });
    $scope.getCompanyStateChangeLog = function(companyId) {
      companyService.queryCompanyStateChangeLog({
        companyId: companyId
      }).then(function(res) {
        $scope.companyChangeLogTable.settings({
          dataset: utilService.indexArray(res, 1)
        });
        $scope.$applyAsync(function() {
          $scope.companyChangeLogCtrl.showDialog($scope);
        });
      });
    };
    $scope.changeCompanyPremiumState = function(company) {
        var state = company.isPremium;
        var companyId = company.companyId;
        if (state) {
          $mdDialog.show($mdDialog.confirm()
            .title('提示')
            .textContent('企业溢价功能开启后无法关闭，确定要开启？')
            .ok('确定')
            .cancel('取消')
          ).then(function(f) {
            companyService.setCompanyPremium({
              companyId: companyId
            }).then(function() {}, function() {
              company.isPremium = false;
            });
          }, function() {
            company.isPremium = false;
          });
        } else {
          $mdDialog.show($mdDialog.alert()
            .clickOutsideToClose(true)
            .title('提示')
            .textContent('企业溢价不支持关闭功能！')
            .ok('确定'));
          company.isPremium = true;
        }
      }
      //坏账抵扣
    $scope.companyDeductionCtrl;
    $scope.companyDeductionFlow = [];
    $scope.companyDeductionTableHeads = [{
      title: '坏账抵扣余额',
      field: 'balance',
      show: true,
      getValue: function(value) {
        return '<span>' + $filter('rmb')(value) + '</span>';
      }
    }, {
      title: '变化金额',
      field: 'change',
      show: true,
      getValue: function(value) {
        return '<span>' + $filter('rmb')(value) + '</span>';
      },
    }, {
      title: '类型',
      field: 'optType',
      show: true,
      getValue: function(value) {
        return '<span>' + $filter('desc')(value,
          'COMPANY_DEDUCTION_TYPE') + '</span>';
      }
    }, {
      title: '操作人',
      field: 'managerName',
      show: true
    }, {
      title: '操作时间',
      field: 'createTime',
      show: true,
      getValue: function(value) {
        return '<span>' + $filter('date')(value,
          'yyyy.MM.dd HH:mm:ss') + '</span>';
      },
    }];
    $scope.companyDeductionOffset = $scope.offset;
    $scope.companyDeductionTable;
    $scope.getCompanyDeductionList = function() {
      $scope.companyDeductionTable = new NgTableParams({
        count: $scope.limit
      }, {
        counts: [],
        getData: function(params) {
          var p = {};
          $scope.companyDeductionOffset = $scope.limit * (params.page() -
            1);
          p = {
            offset: $scope.companyDeductionOffset,
            limit: $scope.limit,
            companyId: $scope.company.companyId
          };
          return companyService.queryCompanyDeductionFlow(p).then(
            function(res) {
              $scope.companyDeductionFlow = res.content;
              params.total(res.totalElements);
              return companyService.indexCompany(res.content,
                $scope.companyDeductionOffset + 1);
            });
        }
      });
      $scope.$applyAsync(function() {
        $scope.companyDeductionCtrl.showDialog($scope);
      });
      /*            $scope.companyDeductionTable.reload().then(function() {
                      $scope.$applyAsync(function() {
                          $scope.companyDeductionCtrl.showDialog($scope);
                      });
                  });*/
    };
    //联系方式相关
    $scope.contactHeads = [{
      title: '联系人',
      field: 'contactName',
      dataType: 'text',
      required: true
    }, {
      title: '手机',
      field: 'mobile',
      dataType: 'text',
      required: true,
      relatedField: 'tel'
    }, {
      title: '座机',
      field: 'tel',
      dataType: 'text',
      required: true,
      relatedField: 'mobile'
    }, {
      title: 'QQ',
      field: 'qq',
      dataType: 'text'
    }, {
      title: '微信号',
      field: 'wechat',
      dataType: 'text'
    }, {
      title: '操作',
      field: 'command',
      dataType: 'command'
    }];
    $scope.block = {
      companyId: "",
      productId: "",
      reason: "",
      modifyReason: "",
      productName: "",
      modifyId: "",
      addBox: ""
    };
    $scope.getBlockList = function() {
      return companyService.getBlockCompany({
        companyId: $scope.block.companyId
      }).then(function(res) {
        $scope.blockConpanyList = res;
      });
    };
    $scope.seeBlock = function(companyId) {
      $scope.block.addBox = false;
      $scope.block.companyId = companyId;
      companyService.getZeroProduct({
        companyId: '714987242665279488'
      }).then(function(res) {
        $scope.blockZeroProduct = res;
      });
      $scope.getBlockList().then(function() {
        $scope.companyBlockModal = modalService.initModal({
          appendTo: $element,
          scope: $scope,
          templateUrl: "blockManage",
          backdrop: 'static',
          size: 'lg'
        });
      })

    };
    $scope.showAddBox = function() {
      $scope.block.addBox = true;
    }
    $scope.addBlock = function(productId, reason, callback) {
      companyService.addBlockCompany({
        companyId: $scope.block.companyId,
        productId: productId,
        reason: reason
      }).then(function(res) {
        $scope.getBlockList().then(function() {
          callback();
        })
      });

    };
    $scope.modifyBlock = function(id, name, reason) {
      $scope.block.modifyId = id;
      $scope.block.name = name;
      $scope.block.modifyReason = reason;
      $scope.deleteBlockModal = modalService.initModal({
        appendTo: $element,
        scope: $scope,
        templateUrl: "modifyDialog",
        backdrop: 'static',
        size: 'sm'
      });
    };
    $scope.modifyBlockSure = function() {
      var me = this;
      companyService.modifyBlockCompany({
        id: $scope.block.modifyId,
        reason: $scope.block.modifyReason
      }).then(function(res) {
        $scope.getBlockList().then(function() {
          me.$close();
        })
      });
    };
    $scope.deleteCancel = function() {
      var me = this;
      companyService.deleteBlockCompany({
        id: $scope.blockDeleteId,
      }).then(function(res) {

        $scope.getBlockList().then(function() {
          me.$close()
        })
      });
    };

    $scope.deleteBlock = function(id) {
      $scope.blockDeleteId = id;
      $scope.deleteBlockModal = modalService.initModal({
        appendTo: $element,
        scope: $scope,
        templateUrl: "blockDelete",
        backdrop: 'static',
        size: 'sm'
      });


    };
    $scope.contactTable = new NgTableParams({
      count: 5
    }, {
      counts: [],
      dataset: $scope.contactTableData
    });
  });
};
},{}],6:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 2016/10/18.
 * 信息配置
 * configurationInformation
 */
module.exports = function(app) {
  app.controller('configurationInformation', function($scope,
    configurationInformationService, $filter, holidayWelfareService,
    utilService) {


    $scope.queryParams = {};
    $scope.totalFee = [];
    $scope.showTime;
    $scope.depositAmount = [];
    $scope.welfareTime = {};


    /**
     * 获取零花钱审核基数默认值
     */
    $scope.getPocketMoneyAudit = function() {
      configurationInformationService.getPocketMoneyAudit().then(
        function(res) {
          $scope.totalFee = $filter('rmb')(res);
        });
    };
    $scope.getPocketMoneyAudit();


    /**
     * 零花钱审核基数
     */
    $scope.pocketMoneyAudit = function(totalFee) {
      configurationInformationService.pocketMoneyAudit($filter('points')
        (totalFee)).then(function() {
        alert("恭喜你,设置成功!!!");
      });
    };


    /**
     * 获取心愿单商检标识显示时效配置
     */
    $scope.getAging = function() {
      configurationInformationService.getWishListConfiguration().then(
        function(res) {
          $scope.showTime = res;
        });
    };
    $scope.getAging();

    /**
     * 心愿单上架标识显示时效配置
     */
    $scope.showTimeList = {
      showTimeArr: [{
        showTime: 0,
        name: '10天'
      }, {
        showTime: 1,
        name: '5分钟'
      }, {
        showTime: 2,
        name: '15分钟'
      }, {
        showTime: 3,
        name: '1天'
      }, {
        showTime: 4,
        name: '3天'
      }, {
        showTime: 5,
        name: '5天'
      }],
      getDefaultItem: function(showTime) {
        var s = parseInt(showTime);
        var options = this.showTimeArr;
        return _.findWhere(options, {
          showTime: s
        }) || options[0];
      },
      wishListLimitation: function(item) {
        var params = item.showTime;
        configurationInformationService.wishListConfiguration(params)
          .then(function() {

          });
      }
    };
    /***
     * 获取默认的(预定时间、热卖时间、结束时间)
     */
    $scope._getHolidayDefaultTime = function(scope) {
      holidayWelfareService.getHolidayDefaultTime().then(function(res) {
        // debugger
        console.log($scope.welfareTime.scheduledTimeDate = res.preSale);
        console.log($scope.welfareTime.scheduledTime = utilService.parseTimeByLong(
          res.preSale));
        console.log($scope.welfareTime.sellingTimeDate = res.hotSale);
        console.log($scope.welfareTime.sellingTime = utilService.parseTimeByLong(
          res.hotSale));
        console.log($scope.welfareTime.overTimeDate = res.endSale);
        console.log($scope.welfareTime.overTime = utilService.parseTimeByLong(
          res.endSale));
      })
    };
    $scope._getHolidayDefaultTime($scope);


    /***
     * 设置  更新节假日福利 活动时间
     * 截止时间到小时
     */

    //时间戳转换成八位日期 例如:2014-5-5
    function convertDate(cData) {
      var myDate = new Date(cData);
      var year = myDate.getFullYear();
      var month = myDate.getMonth() + 1;
      var day = myDate.getDate();
      return year + '-' + month + '-' + day;
    }

    //时间戳转换成四位时间 例如: 10:10:00
    function convertTime(cTime) {
      var myDate = new Date(cTime);
      var hours = myDate.getHours();
      var minutes = myDate.getMinutes();
      var second = myDate.getSeconds();
      return hours + ':' + minutes + ':' + second;
    }

    $scope.setWelfareTime = function(welfareTime) {
      // var scheduledConversion = new Date();
      var scheduledTimeDate = convertDate(welfareTime.scheduledTimeDate);
      var sellingTimeDate = convertDate(welfareTime.sellingTimeDate);
      var overTimeDate = convertDate(welfareTime.overTimeDate);
      var scheduledTime = convertTime(Date.parse((welfareTime.scheduledTime)));
      var sellingTime = convertTime(Date.parse((welfareTime.sellingTime)));
      var overTime = convertTime(Date.parse((welfareTime.overTime)));
      var preSale = Date.parse(scheduledTimeDate + ' ' + scheduledTime);
      var hotSale = Date.parse(sellingTimeDate + ' ' + sellingTime);
      var endSale = Date.parse(overTimeDate + ' ' + overTime);
      console.log(preSale);
      if (welfareTime.scheduledTime == "" || welfareTime.sellingTime ==
        "" || welfareTime.overTime == "") {
        alert("时间格式有误,请设置准确时间!!!")
      } else {
        var params = { preSale: preSale, hotSale: hotSale, endSale: endSale };
        holidayWelfareService.updateHolidayTime(params).then(function(
          res) {
          alert("设置成功。");
        });
      }
    };

    /**
     *营销商品/组合定金额度
     */
    //获取默认的营销商品/组合定金额度
    $scope._getMarketingActivitiesDepositInfo = function() {
      // debugger
      configurationInformationService.getMarketingActivitiesDepositInfo()
        .then(function(res) {
          $scope.depositAmount = $filter('rmb')(res);
        });
    };
    $scope._getMarketingActivitiesDepositInfo();

    $scope.marketingActivitiesDeposit = function(depositAmount) {
      // debugger
      configurationInformationService.marketingActivitiesDepositInfo(
        $filter('points')(depositAmount)).then(function(res) {
        alert('设置成功！！！');
      });
    };
    /**
     * 获取选购单选购上限配置设置
     */
    var limitNumConstant = {
      oneShelf: '1',
      twoShelf: '2',
      threeShelf: '3',
      fourShelf: '4',
      allShelf: '5'
    };
    $scope._getChooseOrderInfoCeiling = function() {
      configurationInformationService.getChooseOrderInfoCeiling().then(
        function(res) {
          $scope.limitNumConfig = {};
          var limitNumConstatInvert = _.invert(limitNumConstant);
          _.each(res, function(item) {
            var temp = {
              id: item.id,
              limitNum: item.limitNum
            };
            $scope.limitNumConfig[limitNumConstatInvert[item.shelfNumType]] =
              temp;
          });

        })
    };
    $scope._getChooseOrderInfoCeiling();
    /**
     * 选购单选购上限配置设置
     */
    $scope.chooseOrderInfo = function(limitNumConfig) {
      var params = _.map(_.pairs(limitNumConfig), function(item) {
        return {
          id: item[1].id || null,
          shelfNumType: limitNumConstant[item[0]],
          limitNum: item[1].limitNum
        }
      });

      configurationInformationService.createChooseOrderInfo(params).then(
        function(res) {
          utilService.alertSuccess('配置成功!');
        })
    }
  });
};
},{}],7:[function(require,module,exports){
module.exports = function(app) {
  app.controller('deadStock', function($scope, $mdPanel, productService,
    utilService, NgTableParams, modalService, CONSTANTS, positionService,
    deadStockService) {
    $scope.CONSTANTS = CONSTANTS;
    var CATEGORY_LEVEL = CONSTANTS.CATEGORY_LEVEL;
    var PRODUCT_DIC_TYPE = CONSTANTS.PRODUCT_DIC_TYPE;
    //表格设置
    $scope.queryParams = {
      productName: ''
    };
    $scope.offset = 0;
    $scope.limit = 20;
    $scope.deadStockProductList = [];
    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: []
    });
    $scope.getDeadStockProductList = function(sortType) {
      var params = {
        productName: $scope.queryParams.productName
      };
      if (sortType) {
        params.sortType = sortType;
      }
      deadStockService.getDeadStockProductList(params).then(function(res) {
        $scope.deadStockProductList = res.list;
        $scope.tableParams.settings().dataset = $scope.deadStockProductList;
        $scope.tableParams.reload();
      });
    };
    $scope.delDeadStockProduct = function(product) {
      deadStockService.removeDeadStockProduct({
        productId: product.id
      }).then(function() {
        $scope.getDeadStockProductList();
      });
    };
    $scope.sort = function(sortObj, sortType) {
      var sortCode = sortObj.sortCode;
      var r;
      switch (sortType) {
        case 'price':
          r = sortCode * 1;
          break;
        case 'overStockRate':
          r = sortCode * 5;
          break;
        case 'distribShelfCount':
          r = sortCode * 6;
          break;
        case 'reBuyRateDeviate':
          r = sortCode * 8;
          break;
        case 'shipmentRateDeviate':
          r = sortCode * 10;
          break;
        case 'salesCountAvg':
          r = sortCode * 11;
          break;
        case 'salesFeeAvg':
          r = sortCode * 12;
          break;
        case 'stock':
          r = sortCode * 13;
          break;
      }
      $scope.getDeadStockProductList(r);
    };
    $scope.getDeadStockProductList();
  });
};

},{}],8:[function(require,module,exports){
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
    $scope.pickReferBtnDisable = true;
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
        loadShelfProducts(res.shelfId);
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
            judgeSelectOnOpenRefer();
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
      orderService.queryDeliveryRecomm({
        companyId: companyId,
        shelfId: shelfId
      }).then(function(res) {
        var productIdsInShelf = _.pluck($scope.shelfProductList,
          'productId');
        $scope.referData = orderService._parseDeliveryRecomm(res,
          productIdsInShelf);
        $scope.pickReferBtnDisable = false;
        $scope.disableEdit = false;
        incrProductRecommend();
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
      _.each(goodsChooseProductList, function(item) {
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
          } else {
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
        if (!index % 2) {
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
      if ($scope.orderId > 0) { //修改模式
        $scope.disableEdit = false;
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
},{}],9:[function(require,module,exports){
module.exports = function (app) {
    app.controller('finance', function ($scope, $mdSidenav, $mdDialog, $sce, $element, CONSTANTS, $compile, $filter, NgTableParams, orderService, printService, utilService, modalService, financeService) {
        $scope.CONSTANTS = CONSTANTS;
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        $scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        $scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        $scope.limit = 20;
        $scope.finances = [];
        $scope.selectedOrders = [];
        $scope.isInvoice = true;
        $scope.settlementOrder = {};
        $scope.orderStateList = [{
            desc: '全部付款状态',
            code: ''
        }, {
            desc: '待付款',
            code: CONSTANTS.SETTLEMENT_STATE.WAIT_SETTLEMENT
        }, {
            desc: '已付款',
            code: CONSTANTS.SETTLEMENT_STATE.COMPLETED
        }];
        $scope.invoiceNeedStateList = CONSTANTS.getList('INVOICE_NEED_STATE', true, undefined, undefined, {'': '全部开票需求'});
        $scope.invoiceStateList = CONSTANTS.getList('INVOICE_STATE', true, undefined, undefined, {'': '全部票号'});
        $scope.queryFinanceConfig = {
            queryFinanceKey: '',
            companyName: '',
            financeStartTime: '',
            financeEndTime: '',
            orderStates: '',
            isInvoice: '',
            isUpdateTime: 0,
            isInvoiceNum: '',
            choices: CONSTANTS.getList('INVOICE_TIME_TYPE', false),
            companyKeyup: function (e) {
                var keycode = window.event ? e.keyCode : e.which;
                if (keycode == 13) {
                    $scope.financeTable.reload();
                    $scope.financeTable.page(1);
                }
            },
            selectIsUpadate: function (timeType) {
                $scope.queryFinanceConfig.isUpdateTime = timeType.code;
            }
        };

        $scope.getFinanceList = function () {
            $scope.financeTable = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                getData: function (params) {
                    var p = {};
                    $scope.offset = $scope.limit * (params.page() - 1);
                    p = {
                        offset: $scope.offset,
                        limit: $scope.limit,
                        companyName: $scope.queryFinanceConfig.companyName
                    };
                    if ($scope.queryFinanceConfig.financeStartTime !== '') { //非空字符串
                        p.financeStartTime = $scope.queryFinanceConfig.financeStartTime;
                    }
                    if ($scope.queryFinanceConfig.financeEndTime !== '') { //非空字符串
                        p.financeEndTime = new Date($scope.queryFinanceConfig.financeEndTime.getTime()+24*60*60*1000);
                    }
                    if ($scope.queryFinanceConfig.orderStates != '') { //3 4
                        p.orderStates = $scope.queryFinanceConfig.orderStates;
                    }
                    if ($scope.queryFinanceConfig.isInvoice !== '') { // 0  1
                        p.isInvoice = $scope.queryFinanceConfig.isInvoice;
                    }
                    if ($scope.queryFinanceConfig.isUpdateTime) { //1
                        p.isUpdateTime = $scope.queryFinanceConfig.isUpdateTime;
                    }
                    if ($scope.queryFinanceConfig.isInvoiceNum !== '') { //0 1
                        p.isInvoiceNum = $scope.queryFinanceConfig.isInvoiceNum;
                    }
                    return financeService.queryFinanceList(p).then(function (res) {
                        $scope.finances = res.content;
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.offset + 1));
                    });
                }
            });
        };
        $scope.getFinanceList();
        $scope.confirmPaymentDialog;
        $scope.invoiceDialog;
        $scope.confirmPaymentParam = {
            refId: '',
            dueFee: '', //企业应付款
            badDebtFee: '', //坏账抵扣额
            receiveFee: '', //企业到账金额
            receiveFeeTime: '', //到账时间
            receiveFeeTimeHour: ''
        };
        $scope.invoiceParam = {
            refId: '',
            invoiceFee: 0,
            invoiceNumber: '',
            expressNumber: '',
            expressCompany: {},
            needExpressNumber: true
        };
        $scope.expressCompanyChoice = CONSTANTS.getList('EXPRESS_COMPANY_TYPE', false);
        $scope.currentOrder = {};
        $scope.queryFinanceList = function () {
            $scope.financeTable.reload();
        };

        $scope.openFinanceDetail = function (order) {
            $scope.currentOrder = order;
            orderService.checkOrderDetail(CONSTANTS.ORDER_TYPE.SETTLEMENT, order.orderId, $scope);
        };
        $scope.selectFinanceCompany = function (company) {
            $scope.queryFinanceConfig.company = company;
            $scope.financeTable.reload();
        };
        //表格中导出excel
        $scope.exportExcel = function (order) {
            $scope.currentOrder = order;
            orderService.exportExcel(CONSTANTS.ORDER_TYPE.SETTLEMENT, order.orderId, $scope);
        };
        $scope.showInoviceAndPaymentWin = function (order, scope, type) {
            if (type) {
                scope.confirmPaymentParam.refId = order.orderId;
                scope.confirmPaymentParam.dueFee = $filter('rmb')(scope.currentOrder.orderFee);
                scope.confirmPaymentParam.badDebtFee = $filter('rmb')(order.orderDiscount);
                scope.confirmPaymentParam.receiveFee = '';
                scope.confirmPaymentParam.receiveFeeTime = new Date().getTime();
                scope.confirmPaymentParam.receiveFeeTimeHour = new Date().getTime();
                scope.confirmPaymentDialog.showDialog($scope);
            } else {
                scope.invoiceParam.refId = order.orderId;
                scope.invoiceParam.invoiceNumber = '';
                scope.invoiceParam.invoiceFee = '';
                scope.invoiceParam.expressCompany = $scope.expressCompanyChoice[0];
                scope.invoiceParam.expressNumber = '';
                scope.invoiceDialog.showDialog($scope);
            }
        };
        $scope.printOrder = function (orderType) {
            var html = orderService.getPrintHtmlInOrderModule(orderType);
            $scope.$applyAsync(function () {
                console.log(html);
                printService.printByDefaultPrinter(html);
            });
        };
        $scope.closeConfirmPaymentWin = function () {
            $scope.confirmPaymentDialog.closeDialog();
        };
        $scope.closeInvoiceWin = function () {
            $scope.invoiceDialog.closeDialog();
        };
        $scope.confirmPayment = function () {
            financeService.confirmPayment(angular.copy($scope.confirmPaymentParam)).then(function () {
                $scope.closeConfirmPaymentWin();
                orderService.checkOrderDetail(CONSTANTS.ORDER_TYPE.SETTLEMENT, $scope.currentOrder.orderId, $scope, true);
            });
        };
        $scope.createInvoice = function () {
            financeService.createInvoice(angular.copy($scope.invoiceParam)).then(function () {
                $scope.closeInvoiceWin();
                orderService.checkOrderDetail(CONSTANTS.ORDER_TYPE.SETTLEMENT, $scope.currentOrder.orderId, $scope, true);
            });
        };
        $scope.selectExpressCompany = function (expressCompany) {
            $scope.invoiceParam.expressCompany = expressCompany;
            if (expressCompany.code == CONSTANTS.EXPRESS_COMPANY_TYPE.XIEDAI) {
                $scope.invoiceParam.needExpressNumber = false;
            } else {
                $scope.invoiceParam.needExpressNumber = true;
            }
        };
        $scope.selectOrderState = function (choice) {
            $scope.queryFinanceConfig.orderStates = choice.code;
            $scope.financeTable.reload();
            $scope.financeTable.page(1);
        };
        $scope.selectInvoiceNeedState = function (choice) {
            $scope.queryFinanceConfig.isInvoice = choice.code;
            $scope.financeTable.reload();
            $scope.financeTable.page(1);
        };
        $scope.selectInvoiceState = function (choice) {
            $scope.queryFinanceConfig.isInvoiceNum = choice.code;
            $scope.financeTable.reload();
            $scope.financeTable.page(1);
        };

        //导出单据列表
        var checkInfo = function (data) {
            angular.forEach(data, function (item) {
                var t = _.findWhere($scope.selectedOrders , {
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

        /**
         * 勾选
         */
        $scope.updateSelection = function (e, order) {
            // debugger
            var isChecked;
            if (_.isObject(e)) {
                isChecked = e.currentTarget.checked;
            } else {
                isChecked = e;
            }
            order.checked = isChecked;
            if (isChecked) {
                $scope.selectedOrders.push(order);
            } else {
                $scope.checkAllCfg.flag = false;
                $scope.selectedOrders = _.without($scope.selectedOrders, order);
            }
        };
        $scope.selectAllOrder = function (e, data, checkall) {
            // debugger
            var st = e.currentTarget.checked;
            angular.forEach(data, function (item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item);
                }
            });
        };

        $scope.exportOrder = function () {

            /*selectedOrders=selectedOrders.concat(orders);*/

            var dom = angular.element('<a></a>');
            var containerId = 'finance-table';
            var myDate = new Date();
            var mytime=myDate.toLocaleString();
            dom[0].href = $('#' + containerId).excelexportjs({
                containerid: containerId,
                datatype: 'table',
                returnUri: 'true'
            });
            dom[0].download = '财务管理' + '（' + mytime + '）' + '.xls';
            dom[0].click();
        };

  
        /**
         * 批量导出excel
         */
        $scope.batchExportExcel = function () {
            // debugger
            if ($scope.selectedOrders.length) {
                $scope.exportOrder($scope.selectedOrders);
            } else {
                alert('请先确定需要导出的数据!!!');
            }
        };

        $scope.filterItems = function (item) {
            // debugger
            return item.checked == true;
        };
    });
};

},{}],10:[function(require,module,exports){
/*选品单历史*/
module.exports = function(app) {
  app.controller('goodsChooseHistoryCtrl', function($scope, $compile,
    $templateCache, CONSTANTS, modalService, utilService, NgTableParams,
    goodsChooseService) {
    $scope.ORDER_STATE = CONSTANTS.GOODSCHOOSE_ORDER_STATE;
    $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    $scope.orderStates = CONSTANTS.getList('GOODSCHOOSE_ORDER_STATE');
    $scope.curOrderState = $scope.orderStates[0];

    $scope.queryParams = {};
    $scope.offset = 0;
    $scope.limit = 10;

    $scope.setOrderTable = function(queryParams) {
      $scope.queryParams.startTime = $scope.queryParams.startTime;
      $scope.queryParams.endTime = $scope.queryParams.endTime;
      $scope.orderTable = new NgTableParams({
        count: $scope.limit
      }, {
        counts: [],
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
        getData: function(params) {
          return goodsChooseService.queryManagerOrderList({
            offset: (params.page() - 1) * $scope.limit,
            limit: $scope.limit,
            companyId: $scope.queryParams.companyId,
            startTime: $scope.queryParams.startTime ? $scope.queryParams
              .startTime.getTime() : null,
            endTime: $scope.queryParams.endTime ? $scope.queryParams
              .endTime.getTime() : null,
            orderStates: [$scope.ORDER_STATE.FINISH, $scope.ORDER_STATE
              .SYS_CANCLED
            ]
          }).then(function(res) {
            params.total(res.totalElements);
            return res.content;
          });
        }
      });

    };
    $scope.setOrderTable();

    //根据企业搜索
    $scope.searchByCompany = function(company) {
      $scope.queryParams.companyId = company.companyId;
      $scope.setOrderTable();
    };
    //清空企业搜索
    $scope.emptyCompanySearch = function() {
      delete $scope.queryParams.companyId;
    };
    //获取选购单详细
    var getOrderDetail = function(opts) {
      goodsChooseService.queryManagerOrderDetail({
        orderId: opts.orderId
      }).then(function(res) {
        $scope.order = res;
        $scope.order.name = '选购单' + '-' + res.companyName + '(' +
          utilService.parseTimeByLong(res.createTime,
            "yyyyMMddhhmmss") + ')';
        opts.didLoadData(res) || function() {

        };
      });
    };
    //查看选购单详细
    $scope.checkOrderDetail = function(order) {
      getOrderDetail({
        orderId: order.orderId,
        didLoadData: function(res) {
          $scope.orderModal = modalService.initModal({
            appendTo: angular.element(document.getElementsByClassName(
              'goods-choose-history')),
            scope: $scope,
            templateUrl: 'goodsChooseOrder/goodsChooseOrderTemplate.html'
          });
        }
      });
    };
    //打印
    $scope.print = function() {
      $scope.$applyAsync(function() {
        printService.printByDefaultPrinter($(
          '#goods-choose-order-table').parent().html());
      });
    };
    //详情页面导出Excel
    $scope.exportExcelOnDetail = function() {
      $scope.uri = $("#goods-choose-order-table").excelexportjs({
        containerid: 'goods-choose-order-table',
        datatype: 'table',
        returnUri: 'true'
      });
    };
    //在列表中导出Excel
    $scope.exportExcelOnList = function(order) {
      var excelTemplate = $compile($templateCache.get(
        'goodsChooseOrder/goodsChooseOrderTemplate.html'))($scope);
      angular.element(document.getElementById('exportExcelWrap')).append(
        excelTemplate);

      getOrderDetail({
        orderId: order.orderId,
        didLoadData: function(res) {
          $scope.$applyAsync(function() {
            var dom = angular.element('<a></a>');
            dom[0].href = $('#goods-choose-order-table').excelexportjs({
              containerid: "goods-choose-order-table",
              datatype: 'table',
              returnUri: 'true'
            });
            dom[0].download = $scope.order.name + '.xls';
            dom[0].click();
          });
        }
      });
    };
  });
}
},{}],11:[function(require,module,exports){
/*选品单*/
module.exports = function(app) {
  app.controller('goodsChooseOrderCtrl', function($scope, $state, $compile,
    $templateCache, CONSTANTS, modalService, utilService,
    goodsChooseService, NgTableParams, printService, shelfService) {
    $scope.ORDER_STATE = CONSTANTS.GOODSCHOOSE_ORDER_STATE;
    var ORDER_STATE = CONSTANTS.GOODSCHOOSE_ORDER_STATE;
    $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    $scope.orderStates = CONSTANTS.getList('GOODSCHOOSE_ORDER_STATE');
    $scope.curOrderState = $scope.orderStates[0];


    $scope.queryParams = {};
    $scope.offset = 0;
    $scope.limit = 10000;

    $scope.recordParams = {};

    $scope.setOrderTable = function() {
      $scope.orderTable = new NgTableParams({
        count: $scope.limit
      }, {
        counts: [],
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
        getData: function(params) {
          return goodsChooseService.queryManagerOrderList({
            offset: (params.page() - 1) * $scope.limit,
            limit: $scope.limit,
            companyId: $scope.queryParams.companyId,
            startTime: $scope.queryParams.startTime ? $scope.queryParams
              .startTime.getTime() : null,
            endTime: $scope.queryParams.endTime ? $scope.queryParams
              .endTime.getTime() : null,
            orderStates: $scope.curOrderState.code != -1 ? [
              $scope.curOrderState.code
            ] : [ORDER_STATE.WAIT_VERIFY, ORDER_STATE.VERIFIED]
          }).then(function(res) {
            params.total(res.totalElements);
            return res.content;
          });
        }
      });

    };
    $scope.setOrderTable();
    //根据企业搜索
    $scope.searchByCompany = function(company) {
      $scope.queryParams.companyId = company.companyId;
      $scope.setOrderTable();
    };
    //清空企业搜索
    $scope.emptyCompanySearch = function() {
      delete $scope.queryParams.companyId;
    };
    //切换订单状态
    $scope.selectOrderState = function(item) {
      $scope.curOrderState = item;
      $scope.setOrderTable();
    };
    //获取选购单详细
    var getOrderDetail = function(opts) {
      goodsChooseService.queryManagerOrderDetail({
        orderId: opts.orderId
      }).then(function(res) {
        $scope.order = res;
        $scope.order.name = '选购单' + '-' + res.companyName + '(' +
          utilService.parseTimeByLong(res.createTime,
            "yyyyMMddhhmmss") + ')';
        opts.didLoadData(res) || function() {

        };
      });
    };
    //查看选购单明细
    $scope.checkOrderDetail = function(order) {
      getOrderDetail({
        orderId: order.orderId,
        didLoadData: function(res) {
          $scope.orderModal = modalService.initModal({
            appendTo: angular.element(document.getElementsByClassName(
              'goods-choose-order')),
            scope: $scope,
            templateUrl: 'goodsChooseOrder/goodsChooseOrderTemplate.html'
          });
        }
      });
    };
    //详情页面导出Excel
    $scope.exportExcelOnDetail = function() {
      $scope.uri = $("#goods-choose-order-table").excelexportjs({
        containerid: 'goods-choose-order-table',
        datatype: 'table',
        returnUri: 'true'
      });
    };
    //在列表中导出Excel
    $scope.exportExcelOnList = function(order) {
      var excelTemplate = $compile($templateCache.get(
        'goodsChooseOrder/goodsChooseOrderTemplate.html'))($scope);
      angular.element(document.getElementById('exportExcelWrap')).append(
        excelTemplate);

      getOrderDetail({
        orderId: order.orderId,
        didLoadData: function(res) {
          $scope.$applyAsync(function() {
            var dom = angular.element('<a></a>');
            dom[0].href = $('#goods-choose-order-table').excelexportjs({
              containerid: "goods-choose-order-table",
              datatype: 'table',
              returnUri: 'true'
            });
            dom[0].download = $scope.order.name + '.xls';
            dom[0].click();
          });
        }
      });
    };
    //打印
    $scope.print = function() {
      $scope.$applyAsync(function() {
        printService.printByDefaultPrinter($(
          '#goods-choose-order-table').parent().html());
      });
    };
    //批量打印
    $scope.batchPrint = function() {

    };
    //取消此单
    $scope.cacelOrder = function(order) {
      openRecordModal(order, CONSTANTS.GOODSCHOOSE_ORDER_STATE.SYS_CANCLED);
    };
    //接收
    $scope.receiveOrder = function(order) {
      openRecordModal(order, CONSTANTS.GOODSCHOOSE_ORDER_STATE.VERIFIED);
    };
    //创建选购单
    $scope.createPickOrder = function(order) {

      shelfService.queryShelfListByCompanyId({
        companyId: order.companyId
      }).then(function(res) {
        if (res.length) {
          window.location.href = '#deliveryEdit/0/' + order.orderId;
        } else {
          alert('该企业暂无货架，无法创建拣货单!');
        }
      });

    };
    //打开客满备注 填写框
    var openRecordModal = function(order, recordType) {
      $scope.recordParams.type = recordType;
      $scope.recordParams.orderId = order.orderId;
      $scope.recordParams.optRecord = '';
      $scope.recordModal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'goods-choose-order')),
        scope: $scope,
        templateUrl: 'modalRecord'
      });
    };
    //客满备注 确定
    $scope.confirmRecord = function(params) {
      goodsChooseService.modifyOrderState({
        orderId: params.orderId,
        orderState: params.type,
        optRecord: params.optRecord
      }).then(function(res) {
        $scope.orderModal.close();
        $scope.recordModal.close();
        $scope.orderTable.reload();
      });
    };
  });


};
},{}],12:[function(require,module,exports){
module.exports = function (app) {
    app.controller('holidayWelfare', function ($scope, NgTableParams, holidayWelfareService, $uibModal, modalService, utilService, printService, CONSTANTS, $mdDialog, orderService) {
        $scope.holidayWelfare = {};
        $scope.welfareTime = {
            scheduledTime: '',
            scheduledTimeDate: '',
            sellingTime: '',
            sellingTimeDate: '',
            overTime: '',
            overTimeDate: ''
        };
        $scope.order = {};
        $scope.settlementOrder = {};
        $scope.PAYMENT_STATUS = CONSTANTS.PAYMENT_STATUS;   // 支付状态
        $scope.ORDER_STATUS = CONSTANTS.ORDER_STATUS;   //订单状态
        $scope.BUY_TYPE = CONSTANTS.BUY_TYPE; //购买类型
        var ORDER_STATUS = $scope.ORDER_STATUS;
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE; //订单类型
        $scope.payment;
        $scope.primaryBtnTexts = {
            1: '收到款项',
            2: '完成配送'
        };
        $scope.orderStatus = {};
        $scope.settlementWay = {};
        $scope.queryWelfareOrderParams = {};
        $scope.queryParams = {
            payChannels: '', // 支付状态
            status: '', // 订单状态
            startTime: '', //开始时间
            endTime: '', //结束时间
            companyIds: '' //公司ID
        };
        $scope.searchByCompany = function (company) {
            $scope.queryParams.companyIds = company.companyId;
            $scope.getHolidayWelfareList();
        };
        //选择支付状态
        $scope.selectPaymentStatus = function (choice) {
            $scope.queryParams.payChannels = choice.code;
            $scope.tableParams.reload();
            $scope.tableParams.page(1);
        };
        //选订单状态
        $scope.selestOrderStatus = function (choice) {
            $scope.queryParams.status = choice.code;
            $scope.tableParams.reload();
            $scope.tableParams.page(1);
        };
        /***
         * 获取节假日福利全部订单
         */
        $scope.getHolidayWelfareList = function (queryParams) {
            // debugger
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.tableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    // debugger
                    var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        status: $scope.orderStatus.code,
                        payChannels: $scope.settlementWay.code,
                        type: 1
                    };
                    if ($scope.queryParams.companyIds !== '') {
                        p.companyIds = $scope.queryParams.companyIds;
                    }
                    var Sdate = new Date($scope.queryParams.startTime);

                    var Edate = new Date($scope.queryParams.endTime);
                    // debugger
                    if (!isNaN($scope.queryParams.startTime)) {
                        p.startTime = new Date(Sdate.getFullYear(), Sdate.getMonth(), Sdate.getDate(), 0, 0, 0).getTime();
                    }
                    if (!isNaN($scope.queryParams.endTime)) {

                        p.endTime = new Date(Edate.getFullYear(), Edate.getMonth(), Edate.getDate(), 23, 59, 59).getTime();
                    }
                    return holidayWelfareService.getAllWelfareOrders(angular.copy(p)).then(function (res) {
                        // debugger
                        var a = holidayWelfareService.parseData(res.content);
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(a, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            });
        };
        $scope.getHolidayWelfareList();

        /*打印*/
        //打印单据列表
        var printOrderArray = [];
        var checkInfo = function (data) {
            // debugger
            angular.forEach(data, function (item) {
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
        /**
         * 勾选
         */
        $scope.updateSelection = function (e, order) {
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
        $scope.selectAllOrder = function (e, data, checkall) {
            var st = e.currentTarget.checked;
            angular.forEach(data, function (item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item);
                }
            });
        };

        /***
         * 批量打印
         */

        //打印
        $scope.printOrder = function (orders) {
            var temps = [];
            var aTemps = [];
            if (Object.prototype.toString.call(orders) == '[object Array]') {
                aTemps = orders;
            } else {
                aTemps = [orders];
            }
            angular.forEach(aTemps, function (item) {
                temps.push(item.id);
            });
            holidayWelfareService.getAllWelfareOrders({
                // ids:_.pluck(orders,'id')
                ids: temps
            }).then(function (res) {
                var holidayOrderDetails = res.content || [];
                $scope.isPrint = true;
                temps = orderService.printOrderDoms(holidayOrderDetails, $scope.ORDER_TYPE.HOLIDAY, $scope);
                // debugger
                console.log(temps);
                $scope.$applyAsync(function () {
                    var htmls = [];
                    console.log(temps);
                    angular.forEach(temps, function (item) {
                        // debugger
                        console.log(item[0].innerHTML);
                        htmls.push(item[0].innerHTML);
                    });
                    printService.printByDefaultPrinter(htmls);
                    console.log(htmls);
                });
            });
        };
        $scope.bathMultiPrint = function () {
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
        /***
         * 明细
         */
        $scope.orderDetail = function (order) {
            // debugger
            /*if (order.order.status == "2") {
             $scope.payment = true;
             }*/
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementById('holidayWelfare')),
                scope: $scope,
                templateUrl: 'order/holidayWelfareParticularsTemplate.html'
            });
            $scope.order = order;
            $scope.order.name = order.address.contactName + '-' + order.order.eventTitle;
        };

        /***
         * 明细 --> 打印
         */
        $scope.holidayWelfareDetailPrint = function (orderType) {
            // debugger
            var html = orderService.getPrintHtmlInOrderModule(orderType);
            $scope.$applyAsync(function () {
                console.log(html);
                printService.printByDefaultPrinter(html);
            });
        };


        /***
         * 节假日订购单明细导出Excel表格
         */
        $scope.exportExcelOnDetail = function () {
            $scope.uri = $("#holiday-welfare-order-detail-table").excelexportjs({
                containerid: 'holiday-welfare-order-detail-table',
                datatype: 'table',
                returnUri: 'true'
            });

        };
        /***
         * 修改订单状态
         */
        //
        $scope.modifyOrderStatus = function (order) {
            var params = {orderId: order.order.id, notes: ''};
            switch (order.order.status) {
                case ORDER_STATUS.WAITING_PAYMENT://待收款
                    _receivePayment(params, order);
                    break;
                case ORDER_STATUS.WAITING_DISTRIBUTION://待配送
                    _completeDelivery(params);
                    break;
            }
        };
        /***
         * 收到款项
         */
        var _receivePayment = function (params, order) {
            // debugger
            holidayWelfareService.receivePayment(params).then(function (res) {
                // order.order.payChannel = CONSTANTS.PAYMENT_STATUS.BANK_CARD;
                $scope.modal.close();
                $scope.getHolidayWelfareList();
            });
        };

        /**
         * 完成配送
         */
        var _completeDelivery = function (params) {
            holidayWelfareService.completeDelivery(params).then(function (res) {
                $scope.modal.close();
                $scope.getHolidayWelfareList();
            });
        };
        /***
         * 明细 --> 取消此单
         */
        $scope.cacelOrder = function (order) {
            var params = {orderId: order.order.id, notes: ''};
            holidayWelfareService.cancelOrder(params).then(function (res) {
                $scope.modal.close();
                $scope.getHolidayWelfareList();
            });
        };

        /***
         * 全部结算下拉筛选
         */
        $scope.settlementStatusList = CONSTANTS.getList({
            clsOrName: 'PAYMENT_STATUS',
            defaultObj: {
                '': '全部结算'
            }
        });
        $scope._settlementWay = function (item) {
            // debugger
            $scope.settlementWay = item;
            $scope.getHolidayWelfareList();
        };

        /***
         * 全部订单下拉筛选
         */
        $scope.orderStatusList = CONSTANTS.getList({
            clsOrName: 'ORDER_STATUS',
            defaultObj: {
                '': '全部订单'
            }
        });
        $scope._orderStatus = function (item) {
            $scope.orderStatus = item;
            $scope.getHolidayWelfareList();
        };
    })
};


},{}],13:[function(require,module,exports){
/*
 *首页
 *homeController
 */
module.exports = function (app) {
  app.controller('home', function ($scope) {
    $scope.ports = [{
      name: '信息配置',
      route: '#configurationInformation',
      img: './img/configurationInformation.png'
    }, {
      name: '企业库',
      route: '#company',
      img: './img/icon-company.png'
    }, {
      name: '企业货架管理',
      route: '#shelfManage',
      img: './img/icon-shelf.png'
    }, {
      name: '新品推荐',
      route: '#newProductRecommend',
      img: './img/icon-product.png'
    }, {
      name: '商品管理',
      route: '#product',
      img: './img/icon-product.png'
    }, {
      name: '商品标签管理',
      route: '#labelsManagement',
      img: './img/labelsManagement.png'
    }, {
      name: '商品数据统计',
      route: '#salesStatistics',
      img: './img/icon-marketing.png'
    }, {
      name: '企业营销数据',
      route: '',
      img: './img/icon-marketing.png'
    }, {
      name: '货架巡查',
      route: '#shelf',
      img: './img/icon-check.png'
    }, {
      name: '单据中心',
      route: '',
      img: './img/icon-ticket.png'
    }, {
      name: '账号管理',
      route: '#account',
      img: './img/icon-account.png'
    }, {
      name: '回仓单',
      route: '#inStorage',
      img: './img/icon-in-storage.png'
    }, {
      name: '信息收集',
      route: '',
      img: './img/icon-in-storage.png'
    }, {
      name: '节假日福利',
      route: '#holidayWelfare',
      img: './img/holidayWelfare.png'
    }, {
      name: '期号实时动态',
      route: '#issueDynamic',
      img: './img/icon-issueDynamic.png'
    }, {
      name: '套餐配送动态',
      route: '#suiteDistributionDynamic',
      img: './img/icon-suiteDistributionDynamic.png'
    }, {
      name: '套餐配置管理',
      route: '#suiteCfgManage',
      img: './img/icon-suiteCfgManage.png'
    }, {
      name: '后续更多哦',
      route: '',
      img: './img/icon-marketing.png'
    }];
  });
};
},{}],14:[function(require,module,exports){
module.exports = function(app) {
	app.controller('inStorage', function($scope, $compile, $templateCache, CONSTANTS, modalService, NgTableParams, inStorageService, utilService, companyService, productService, accountService,orderService) {
		$scope.utilService = utilService;
		$scope.CONSTANTS = CONSTANTS;
		$scope.ticketType = CONSTANTS.IN_STORAGE_ORDER_TYPE;
		$scope.profitLevel = CONSTANTS.PROFIT_LEVEL;
		$scope.queryParams = {};
		$scope.offset = 0;
		$scope.limit = 25;
		$scope.queryParams.startTime = new Date(utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd') + ' 00:00:00');
		$scope.queryParams.endTime = new Date(utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd') + " 23:59:59");
		var initView = function() {
			var excelTemplate1 = $compile($templateCache.get('inStorage/deliveryInStorageTemplate.html'))($scope);
			angular.element(document.getElementById('exportExcelWrap')).append(excelTemplate1);
			var excelTemplate2 = $compile($templateCache.get('inStorage/refundInStorageTemplate.html'))($scope);
			angular.element(document.getElementById('exportExcelWrap')).append(excelTemplate2);
		};
		initView();
		//查询
		$scope.searchInStorage = function(params) {
			var startTime = params.startTime.getTime(),
				endTime = params.endTime.getTime();
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};
		$scope.getParams = function() {
			var params = {
				// pageNo: $scope.pageNo,
				offset: $scope.offset,
				limit: $scope.limit,
				startTime: $scope.queryParams.startTime.getTime(),
				endTime: $scope.queryParams.endTime.getTime(),
				companyName: $scope.queryParams.companyName,
				orderTypes: $scope.queryParams.orderType,
				creatorId: $scope.queryParams.creatorId,
				orderStates: $scope.queryParams.orderStates,
				updateStatus: $scope.queryParams.updateStatus,
				companyId: $scope.queryParams.companyId,
				confirmId: $scope.queryParams.confirmId,
				modified: $scope.queryParams.modified
			};

			angular.forEach(params, function(v, k) {
				if (v == '-1') {
					delete params[k];
				}
			});
			if (!params.companyName) {
				delete params['companyId'];
			}
			return params;
		};
		$scope.typeHeadConfigs = {
			//不知道什么意思
			debounce: {
				'default': 500,
				'blur': 250
			},
			getterSetter: true
		};
		//搜索加载
		$scope.getTypeHeadOptions = function(value) {
			$scope.queryParams.companyId = '';
			return companyService.queryCompanyList({
				pageNo: 0,
				delState: 0,
				companyName: value
			}).then(function(res) {
				return res.content;
			});
		};
		//搜索选择
		$scope.selectTypeHeadOptions = function(item, model, label, event) {
			$scope.queryParams.companyId = item.companyId;
			$scope.tableParams.settings({
				dataset: []
			});
		};

		$scope.tableParams = new NgTableParams({
			count: $scope.limit
		}, {
			counts: [],
			paginationMaxBlocks: 25,
			paginationMinBlocks: 2,
			getData: function(params) {
				$scope.offset = (params.page() - 1) * $scope.limit;
				var params1 = $scope.getParams();
				return inStorageService.getInStorageList(params1).then(function(res) {
					params.total(res.totalElements);
					$scope.inStorageData = res.content;
					return accountService.indexAccount($scope.inStorageData, $scope.offset + 1);
				});
			}
		});
		//单据类型
		$scope.ticketData = [{
			markId: '-1',
			name: '全部单据类型'
		}, {
			markId: '1',
			name: '送货修改确认单'
		}, {
			markId: '2',
			name: '退货确认单'
		}];
		$scope.curTicketData = $scope.ticketData[0];
		$scope.localLang = {
			selectAll: "全选",
			selectNone: "全不选",
			reset: "重置",
			search: "请输入搜索内容...",
			nothingSelected: "12312"
		};
		$scope.orderTypeSelect = function(data) {
			$scope.offset = 0;
			$scope.limit = 25;
			$scope.queryParams.orderType = data.markId;
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};

		//单据操作人
		$scope.opeaterData = [{
			managerId: '-1',
			name: '全部单据操作人'
		}];
		$scope.curOpeaterData = $scope.opeaterData[0];
		$scope.opeaterDataFun = function() {
			inStorageService.getAllManager().then(function(res) {
				$scope.opeaterData = _.union($scope.opeaterData, res.content);
				$scope.stockManagerData = angular.copy($scope.opeaterData);
				$scope.stockManagerData[0].name = '全部入库确认人';
			});
		}();

		$scope.managerSelect = function(data) {
			$scope.queryParams.creatorId = data.managerId;
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};
		//状态
		$scope.orderStateData = [{
			markId: '-1',
			name: '全部状态'
		}, {
			markId: '0',
			name: '未入库'
		}, {
			markId: '1',
			name: '已入库'
		}];
		$scope.curOrderStateData = {
			markId: '-1',
			name: '全部状态'
		};
		$scope.orderStatusSelect = function(data) {
			$scope.queryParams.orderStates = data.markId;
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};
		//入库确认人
		$scope.stockManagerData = angular.copy($scope.opeaterData);
		$scope.stockManagerSelect = function(data) {

			$scope.queryParams.confirmId = data.managerId;
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};
		$scope.stockManagerData[0].name = '全部入库确认人';
		$scope.curStockManagerData = $scope.stockManagerData[0];
		//是否修改

		$scope.modifiedData = [{
			markId: '-1',
			name: '全部修改状态'
		}, {
			markId: '0',
			name: '否'
		}, {
			markId: '1',
			name: '是'
		}];
		$scope.curModifiedData = $scope.modifiedData[0];
		$scope.modifiedSelect = function(data) {
			$scope.queryParams.modified = data.markId;
			$scope.tableParams.settings({
				dataset: []
			});
		};

		/**
		查看明细
		*/
		$scope.stockOrderInfoData = {};
		$scope.productItems = [];
		$scope.viewDetail = function(obj) {
			var orderType = obj.orderType,
				orderState = obj.orderState;
			$scope.selectedObj = [];
			inStorageService.getInStorageDetail({
				orderId: obj.orderId
			}).then(function(res) {
				$scope.stockOrderInfoData = res;
				$scope.productItems = angular.copy(res.items);
				_.each($scope.productItems, function(v, k) {
					v.positionItem = v.positions[0] && v.positions[0].name;
					if ($scope.stockOrderInfoData.orderType == 1) {
						v.oldConfirmNum = parseInt(v.refItemNum) - parseInt(v.refConfirmNum);
					}
				});
				$scope.productItems = _.sortBy($scope.productItems, 'positionItem');

				if (orderType == 2) {
					//退货确认单详情Modal
					$scope.inStorageInitModal('modal-refund-confirm-ticket');
				} else if (orderType == 1) {

					$scope.inStorageInitModal('modal-delivery-modify-confirm-ticket');
				}
			});
		};
		$scope.getPositions = function(data) {
			var arr = [];
			_.each(data, function(v, k) {
				arr.push("'"+v.name);
			});
			return arr.join('<br/>');
		};

		$scope.errorTypeData = [{
			markId: 'A',
			name: '单据录错',
			selected: false
		}, {
			markId: 'B',
			name: '仓库错发',
			selected: false
		}, {
			markId: "C",
			name: "仓库漏发",
			selected: false
		}, {
			markId: "D",
			name: "仓库多发",
			selected: false
		}, {
			markId: "E",
			name: "客户不要",
			selected: false
		}, {
			markId: "F",
			name: "产品破损",
			selected: false
		}, {
			markId: "G",
			name: "产品临期",
			selected: false
		}, {
			markId: "H",
			name: "产品过期",
			selected: false
		}, {
			markId: "I",
			name: "其它",
			selected: false
		}];
		//打开库存修改框
		$scope.stockQueryParams = {};
		$scope.stockDeltaWin = function(item, index) {
			if ($scope.stockOrderInfoData.orderState == 0) {
				$scope.errorTypeSelectMarkId = '';
				_.each($scope.errorTypeData, function(v, k, obj) {
					v.selected = false;
				});
				$scope.stockQueryParams = {
					mode: item.confirmNum >= 0 ? 'add' : 'minus',
					confirmRecord: item.confirmRecord
				};
				$scope.inStorageInitModal('modal-modifystock', 'sm', 'row');
				$scope.stockDeltaWinItem = item;
			}
		};
		$scope.localLang = {
			selectAll: "全选",
			selectNone: "全不选",
			reset: "重置",
			search: "Type here to search...",
			nothingSelected: "无"
		};

		$scope.errorTypeSelectMarkId = '';
		$scope.stockDeltaWinConfirm = function(params) {
			if (params.typeOutPutData.length == 0) {
				alert('请选择原因！');
				return;
			}
			var index = _.findIndex($scope.productItems, $scope.stockDeltaWinItem);
			$scope.stockDeltaWinItem.confirmRecord = params.confirmRecord;
			$scope.stockDeltaWinItem.oldConfirmNum = $scope.stockDeltaWinItem.confirmNum;
			$scope.stockDeltaWinItem.confirmNum = params.mode == 'add' ? params.number : '-' + params.number;
			this.$close();
		};
		//选择错误类型
		$scope.errorTypeSelect = function(item) {
			$scope.errorTypeSelectMarkId = item.markId;
			if (item.markId == 'I') {
				$scope.stockQueryParams.confirmRecord = '';
			} else {
				$scope.stockQueryParams.confirmRecord = item.name;
			}

		};
		$scope.inStorageInitModal = function(templateUrl, size, parentClass) {
			parentClass = parentClass ? parentClass : 'inStorage';
			size = size ? size : 'lg';
			modalService.initModal({
				appendTo: angular.element(document.getElementsByClassName(parentClass)),
				templateUrl: templateUrl,
				scope: $scope,
				size: size
			});
		};
		/*新增商品*/
		var tmpPutSaleProductList = [],
			tmpPutSaleProductIdList = [];
		var getProductParams = function(params) {
			return _.pick(params, function(value, key) {
				// return value >= 0 && value != -1;
				return value != -1;
			});
		};
		$scope.productOffset = 0;
		$scope.productLimit = 5;
		var setNewProductsTable = function() {
			$scope.newProdcutsTable = new NgTableParams({
				count: $scope.productLimit
			}, {
				counts: [],
				paginationMaxBlocks: 13,
				paginationMinBlocks: 2,
				getData: function(params) {
					$scope.productOffset = $scope.productLimit * (params.page() - 1);
					var search = getProductParams($scope.productQueryParams);
					search.offset = $scope.productOffset;
					search.limit = $scope.productLimit;
					return productService.queryProductByKey(search).then(function(res) {
						params.total(res.totalElements);
						var data = [];
						angular.forEach(res.content, function(d, i, a) {
							d.header.category = d.category;
							d.header.positions = d.positions;
							data.push(d.header);
						});
						angular.forEach($scope.productItems, function(v, k) {

							index = _.findIndex(data, {
								id: v.id || v.productId
							});

							if (index >= 0) {
								data[index].select = true;
								data[index].isAddSelect = 'isAddSelect';
								// data.splice(index, 1);
							}
						});

						return data;
					});

				}
			});
		};

		var queryProductCategoryList = function() {
			$scope.categoryList = [{
				id: '-1',
				categoryName: '全部品类'
			}];
			$scope.curCateotyList = $scope.categoryList[0];
			productService.queryProductCategoryList().then(function(res) {
				angular.forEach(res, function(category, index) {
					$scope.categoryList.push(category);
				});
			});
		};
		/*
		 * 利润等级
		 */
		$scope.profitLevelData = [{
			profitLevel: -1,
			name: '全部利润等级'
		}, {
			profitLevel: 1,
			name: '低利润等级'
		}, {
			profitLevel: 5,
			name: '中等利润等级'
		}, {
			profitLevel: 9,
			name: '高利润等级'
		}, {
			profitLevel: 0,
			name: '未知'
		}];

		$scope.curProfitLevelData = {
			profitLevel: '-1',
			name: '全部利润等级'
		};

		//打开 新品新增商品
		$scope.addProductWin = function() {
			$scope.productQueryParams = {};
			queryProductCategoryList();
			$scope.inStorageInitModal('modalProductList', '', 'row');
		};

		//品类选择
		$scope.selectCategoryCallback = function(item) {
			if (item.id) {
				$scope.productQueryParams.categoryId = item.id;
				setNewProductsTable();
			}
		};
		//利润等级选择
		$scope.profitSelectCallback = function(item) {
			$scope.productQueryParams.profitLevel = item.profitLevel;
			setNewProductsTable();
		};
		//搜索商品
		$scope.searchProduct = function(queryParams) {
			$scope.productQueryParams.productName = queryParams.productName;
			setNewProductsTable();
		};
		$scope.keyPressSearchProduct = function(e, queryParams) {
			if (e.keyCode == 13) { //回车键
				$scope.searchProduct(queryParams);
			}
		};
		$scope.selected = [];
		$scope.selectedObj = [];
		var updateSelected = function(action, id, name) {
			if (action == 'add' && $scope.selected.indexOf(id) == -1) {
				$scope.selected.push(id);
				$scope.selectedObj.push(name);
			}
			if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
				var idx = $scope.selected.indexOf(id);
				$scope.selected.splice(idx, 1);
				$scope.selectedObj.splice(idx, 1);
			}
		};

		//商品选择
		$scope.chkboxChange = function(product, $event) {

			var checkbox = $event.target;
			var action = (checkbox.checked ? 'add' : 'remove');
			updateSelected(action, product.id, product);
		};
		//新增商品 确认
		$scope.oldSelectedObj = [];
		$scope.confirmPutSale = function() {
			var pItems = $scope.productItems;
			var sObj = $scope.selectedObj;
			var vId, v1Id, elem;
			if (pItems.length > 0) {
				_.each(sObj, function(v, k, obj) {
					vId = v.id || v.productId;
					elem = _.findWhere(pItems, {
						productId: vId
					});
					if (!elem) {
						elem = angular.copy(v);
						elem.productId = elem.id;
						elem.itemId = '';
						elem.confirmNum = 0;
						elem.confirmRecord = '';

						$scope.productItems.push(elem);
					}
				});
			} else {
				$scope.productItems = angular.copy($scope.selectedObj);

			}
			$scope.selectedObj = [];
			$scope.selected = [];

			this.$close();
		};

		//新增商品 删除
		$scope.removePutSaleProduct = function(i, item) {
			var id = item.id || item.productId;
			var index = _.findWhere($scope.selectedObj, {
				id: id
			});
			$scope.productItems.splice(i, 1);
		};
		//修改明细
		$scope.stockConfirmDetail = function() {
			var orderDetail = $scope.stockOrderInfoData,
				newItems = [],
				me = this;
			angular.forEach($scope.productItems, function(v, k) {
				newItems.push({
					itemId: v.itemId || '',
					confirmNum: v.confirmNum,
					confirmRecord: v.confirmRecord,
					productId: v.id || v.productId
				});
			});
			inStorageService.updateInStorageDetail({
				orderId: orderDetail.orderId,
				orderState: 1,
				items: newItems,
			}).then(function() {
				me.$close();
				$scope.tableParams.reload();
			});
		};
		//导出Excel
		$scope.exportExcel = function(order) {
			var orderType = order.orderType;
			var containerid;
			switch (orderType) {
				case $scope.ticketType.DELIVERY_MODIFY_CONFIRM:
					containerid = 'delivery-in-storage-table';
					break;
				case $scope.ticketType.REFUND_CONFIRM:
					containerid = 'refund-in-storage-table';
					break;
			}
			var dom = angular.element('<a></a>');
			dom[0].href = $("#" + containerid).excelexportjs({
				containerid: containerid,
				datatype: 'table',
				returnUri: 'true'
			});
			dom[0].download = $scope.ticketType.DESC[orderType] + '-' + order.companyName + '-' + order.shelfName + '(' + utilService.parseTimeByLong(order.createTime, 'yyyyMMddhhmmss') + ').xls';
			dom[0].click();
		};
		//查看关联送货单
		$scope.checkDeliveryOrder = function(refId){
            orderService.queryDeliveryDetail({'orderId': refId}).then(function(res) {
                $scope.deliveryOrder = res;
                $scope.deliveryOrder.name = '送货单' + '-' + $scope.deliveryOrder.companyName + '-' + $scope.deliveryOrder.shelfName + 
                                            '(' + utilService.parseTimeByLong($scope.deliveryOrder.createTime, 'yyyyMMddhhmmss') + ')';
                $scope.deliveryOrder.putSaleProductList = [];
                $scope.deliveryOrder.supplementProductList = [];
                $scope.deliveryOrder.pullSaleProductList = [];

                angular.forEach($scope.deliveryOrder.items, function(item, i) {
                    switch (item.itemType) {
                        case 1:
                            $scope.deliveryOrder.putSaleProductList.push(item);
                            break;
                        case 2:
                            $scope.deliveryOrder.supplementProductList.push(item);
                            break;
                        case 3:
                            $scope.deliveryOrder.pullSaleProductList.push(item);
                            break;
                    }
                });
                $scope.deliveryOrderModal = modalService.initModal({
                    appendTo: angular.element(document.getElementsByClassName('inStorage')),
                    scope: $scope,
                    templateUrl: 'order/deliveryOrderTemplate.html'
                });
            });
		};
	});
};
},{}],15:[function(require,module,exports){
/*
 *信息收集ljl
 *informationController
 */
module.exports = function(app) {
    app.controller('information', function($scope, $compile, $element, NgTableParams, shelfService, companyService, modalService) {
        var companyInformationCreateModal;
        $scope.infoModel = {
            staffNumber: [
                { desc: '空', value: 0 },
                { desc: '0-30人', value: 1 },
                { desc: '30-50人', value: 2 },
                { desc: '50-100人', value: 3 },
                { desc: '100-300人', value: 4 },
                { desc: '300-500人', value: 5 },
                { desc: '500人以上', value: 6 }
            ],
            genderRatio: [
                { desc: '空', value: 0 },
                { desc: '男生偏多', value: 1 },
                { desc: '女生偏多', value: 2 },
                { desc: '男女均衡', value: 3 }
            ],
            officeTime: [
                { desc: '空', value: 0 },
                { desc: '965', value: 1 },
                { desc: '995', value: 2 },
                { desc: '966', value: 3 },
                { desc: '996', value: 4 }
            ],
            staffType: [
                { desc: '空', value: 0 },
                { desc: '技术类', value: 1 },
                { desc: '销售类', value: 2 },
                { desc: '混合类', value: 3 }
            ],
            overtime: [
                { desc: '空', value: 0 },
                { desc: '多', value: 1 },
                { desc: '少', value: 2 }
            ],
            deliveryTime: [
                { desc: '空', value: 0 },
                { desc: '工作日', value: 1 },
                { desc: '工作日+周六', value: 2 },
                { desc: '工作日+周末', value: 3 }
            ],
            deliveryCycle: [
                { desc: '空', value: 0 },
                { desc: '一周两次', value: 1 },
                { desc: '一周一次', value: 2 },
                { desc: '两周一次', value: 3 },
                { desc: '一月一次', value: 4 }
            ],
            singlePrice: [
                { desc: '空', value: 0 },
                { desc: '0-2元', value: 1 },
                { desc: '2-4元', value: 2 },
                { desc: '4-10元', value: 3 }
            ],
            pricePrefer: [
                { desc: '空', value: 0 },
                { desc: '价格不敏感', value: 1 },
                { desc: '中等混搭', value: 2 },
                { desc: '低价', value: 3 }
            ],
            brandLevel: [
                { desc: '空', value: 0 },
                { desc: '无所谓', value: 1 },
                { desc: '大品牌', value: 2 },
                { desc: '进口', value: 3 },
                { desc: '国产', value: 4 }
            ],
            companyAtmosphere: [
                { desc: '空', value: 0 },
                { desc: '保守', value: 1 },
                { desc: '开放', value: 2 },
                { desc: '激情', value: 3 }
            ],
            companyLevel: [
                { desc: '空', value: 0 },
                { desc: '低档', value: 1 },
                { desc: '中档', value: 2 },
                { desc: '高档', value: 3 }
            ],
            welfareConsist: [
                { desc: '空', value: 0 },
                { desc: '无福利', value: 1 },
                { desc: '提供免费零食', value: 2 },
                { desc: '补贴零食费用', value: 3 }
            ],
            fivemeter: [
                { desc: '空', value: 0 },
                { desc: '没有', value: 1 },
                { desc: '有', value: 2 }
            ],
            foodPrefers: [
                { desc: '空', value: 0 },
                { desc: '饼干', value: 1 },
                { desc: '糕点', value: 2 },
                { desc: '膨化', value: 3 },
                { desc: '油炸', value: 4 },
                { desc: '糖果', value: 5 },
                { desc: '蜜饯', value: 6 },
                { desc: '坚果', value: 7 },
                { desc: '加工-肉类', value: 8 },
                { desc: '加工-豆类', value: 9 },
                { desc: '加工-植物', value: 10 },
                { desc: '冲泡', value: 11 },
                { desc: '其他', value: 12 }
            ],
            drinkPrefers: [
                { desc: '空', value: 0 },
                { desc: '碳酸', value: 1 },
                { desc: '果汁', value: 2 },
                { desc: '茶类', value: 3 },
                { desc: '咖啡', value: 4 },
                { desc: '冲饮', value: 5 },
                { desc: '乳制品', value: 6 }
            ],
            productFunctions: [
                { desc: '空', value: 0 },
                { desc: '早餐类', value: 1 },
                { desc: '加班类', value: 2 },
                { desc: '解馋类', value: 3 },
                { desc: '解渴类', value: 4 },
                { desc: '充饥类', value: 5 },
                { desc: '充电类', value: 6 }
            ]
        };
        $scope.company = {
            companyName: '',
            companyId: ''
        };
        $scope.createPreferCompany = {
            companyName: '',
            companyId: ''
        };
        $scope.typeHeadOptions = [{ companyName: '123', companId: '123' }, { companyName: '12345', companId: '12345' }, { companyName: '1234567', companId: '1234567' }];
        $scope.typeHeadConfigs = {
            debounce: {
                'default': 500,
                'blur': 250
            },
            getterSetter: true
        };
        $scope.info = {
            companyId: $scope.createPreferCompany.companyId,
            companyName: '',
            staffNumber: '',
            genderRatio: '',
            officeTime: '',
            staffType: '',
            overtime: '',
            deliveryPrice: '',
            monthBudget: '',
            deliveryTime: '',
            deliveryCycle: '',
            fivemeter: '',
            shelfPositions: [],
            foodPrefers: [],
            foodPreferType: [],
            foodPreferName: [],
            drinkPrefers: [],
            drinkPreferType: '',
            drinkPreferName: '',
            productFunctions: [],
            productFunctionType: '',
            ProductFunctionStr: '',
            singlePrice: '',
            pricePrefer: '',
            brandLevel: '',
            companyAtmosphere: '',
            companyLevel: '',
            welfareConsist: '',
            note: ''
        };
        $scope.informationHeads_alpha = [{
            title: '公司名称',
            field: 'companyName'
        }, {
            title: '合作模式',
            field: 'statusAlias'
        }, {
            title: '食物偏好',
            field: 'foodPrefers',
            getValue: function(v, r, index, scope, field) {
                var html = [];
                angular.forEach(v, function(item) {
                    html.push(_.findWhere($scope.infoModel[field], { value: item.value }).desc + '-' + item.name);
                });
                return html.join(' | ');
            }
        }, {
            title: '饮料偏好',
            field: 'drinkPrefers',
            getValue: function(v, r, index, scope, field) {
                var html = [];
                angular.forEach(v, function(item) {
                    html.push(_.findWhere($scope.infoModel[field], { value: item.value }).desc + '-' + item.name);
                });
                return html.join(' | ');
            }
        }, {
            title: '商品功能',
            field: 'productFunctions',
            getValue: function(v, r, index, scope, field) {
                var html = [];
                angular.forEach(v, function(item) {
                    html.push(_.findWhere($scope.infoModel[field], { value: item.value }).desc + '-' + item.name);
                });
                return html.join(' | ');

            }
        }, {
            title: '单品价格',
            field: 'singlePrice',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '价格偏好',
            field: 'pricePrefer',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '品牌度',
            field: 'brandLevel',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '公司氛围',
            field: 'companyAtmosphere',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '公司档次',
            field: 'companyLevel',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, {
            title: '福利组成',
            field: 'welfareConsist',
            getValue: function(v, r, index, scope, field) {
                return _.findWhere($scope.infoModel[field], { value: v }).desc;
            }
        }, { title: '备注', field: 'note' }, {
            title: '操作',
            field: 'command',
            getValue: function() {
                return '<button class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil"></span></button>';
            }
        }];
        $scope.informationHeads = [{
                title: '公司名称',
                field: 'companyName'
            }, {
                title: '货架位置',
                field: 'shelfPositions',
                getValue: function(v, r, index, scope, field) {
                    var str = [];
                    angular.forEach(v, function(item) {
                        var string = item.shelfName;
                        if (item.positionImg) {
                            string += (':<img style="width:26px;height26px;" src="' + window.cfg.picUrl + item.positionImg + '"/>');
                        }
                        str.push(string);
                    });
                    return '<span>' + str.join('') + '</span>';
                }
            }, {
                title: '公司人数',
                field: 'staffNumber',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '男女比例',
                field: 'genderRatio',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '上班时间',
                field: 'officeTime',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '人员类型',
                field: 'staffType',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '加班情况',
                field: 'overtime',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            },
            { title: '建议送货金额/次', field: 'deliveryPrice' },
            { title: '每月预算', field: 'monthBudget' }, {
                title: '送货时间',
                field: 'deliveryCycle',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '送货周期',
                field: 'deliveryTime',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '周边0.5km是否有店',
                field: 'fivemeter',
                getValue: function(v, r, index, scope, field) {
                    return _.findWhere($scope.infoModel[field], { value: v }).desc;
                }
            }, {
                title: '操作',
                field: 'command',
                getValue: function() {
                    return '<button class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil"></span></button>';
                }
            }
        ];
        $scope.informationTable = new NgTableParams({}, {
            counts: [],
            dataset: []
        });
        $scope.resetCreateCompanyModel = function() {
            $scope.createPreferCompany = {
                companyName: '',
                companyId: ''
            };
            $scope.info.foodPrefers = [];
            $scope.info.drinkPrefers = [];
            $scope.info.productFunctions = [];
        };
        $scope.getTypeHeadOptions = function(value) { //搜索加载
            return companyService.queryCompanyList({
                pageNo: 0,
                delState: 0,
                companyName: value
            }).then(function(res) {
                return res.content;
            });
        };
        $scope.selectTypeHeadOptions = function(item, model, label, event, type) { //搜索选择
            if (type == 'create') {
                $scope.createPreferCompany = item;
                shelfService.queryShelfListByCompanyId({
                    companyId: $scope.createPreferCompany.companyId
                }).then(function(res) {
                    angular.forEach(res, function(item) {
                        $scope.info.shelfPositions.push({
                            shelfName: item.shelfName,
                            shelfId: item.id
                        });
                    });
                });
            } else {
                $scope.company = item;
                companyService.queryCompanyInformation({
                    companyId: $scope.company.companyId
                }).then(function(res) {
                    var data = [];
                    angular.forEach(res, function(item) {
                        item.detailInfo.companyName = item.companyName;
                        data.push(angular.extend(item, item.detailInfo));
                    });
                    $scope.informationTable.settings({
                        dataset: data
                    });
                });
            }
        };
        //创建企业信息
        $scope.openCreateCompanyInformationWin = function() {
            $scope.resetCreateCompanyModel();
            companyInformationCreateModal = modalService.initModal({
                templateUrl: 'informationCreateModal',
                appendTo: $element,
                scope: $scope,
                ok: $scope.createCompanyInformationConfirm
            });
        };
        $scope.createCompanyInformationConfirm = function() {
            if (!$scope.createPreferCompany.companyId) {
                window.alert('请选择公司！');
                return;
            }
            return companyService.createCompanyInformation({
                companyId: $scope.createPreferCompany.companyId,
                info: $scope.info
            });
        };
        //创建喜好
        $scope.addPrefer = function(type) {
            $scope.info[type].push({
                value: '',
                name: ''
            });
        };
        //删除洗好
        $scope.deletePrefer = function(type, index) {
            var prefers = $scope.info[type];
            $scope.info[type] = _.without(prefers, prefers[index]);
        };
        //下拉框选择
        $scope.selectOption = function(obj, type, index) {
            var infos = $scope.info[type];
            if (angular.isArray(infos)) {
                infos[index].value = obj.value;
            } else {
                $scope.info[type] = obj.value;
            }
        };

    });
};

},{}],16:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 2016/11/23.
 */
module.exports = function (app) {
    app.controller('issueDynamic', function ($scope, NgTableParams, $uibModal, modalService, utilService, suiteService, CONSTANTS, $mdDialog, orderService, printService) {

        $scope.SUITE_STATUS = CONSTANTS.SUITE_STATUS;//套餐状态
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;//订单类型
        $scope.DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;//送货单状态
        $scope.ISSUE_ACTIVE = CONSTANTS.ISSUE_ACTIVE;//期号类型
        $scope.queryParams = {
            issueId: '', //期号ID
            companyName: '',    //企业名称
            issueStartTime: '', //创建期号开始时间
            issueEndTime: '',    //创建期号结束时间
            companyId: '', //公司ID
            sortType: ''  //排序
        };
        /**
         * 期号实时动态列表
         */
        $scope.issueDynamicList = function (queryParams) {
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.tableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        sortType:$scope.queryParams.sortType
                    };
                    if ($scope.queryParams.companyName !== '') {
                        p.companyName = $scope.queryParams.companyName;
                    }
                    if (!isNaN($scope.queryParams.issueStartTime)) {
                        p.issueStartTime = $scope.queryParams.issueStartTime;
                    }
                    if (!isNaN($scope.queryParams.issueEndTime)) {
                        p.issueEndTime = $scope.queryParams.issueEndTime;
                    }
                    return suiteService.queryIssueDynamic(angular.copy(p)).then(function (res) {
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            })
        };
        $scope.issueDynamicList();



        //根据企业搜索
        $scope.searchByCompany = function(company) {
            $scope.queryParams.companyName = company.companyName;
            $scope.issueDynamicList();
        };

        //清空企业搜索
        $scope.emptyCompanySearch = function() {
            delete $scope.queryParams.companyName;
        };


        /**
         * 打印
         * 打印单据列表
         */
        var printOrderArray = [];
        var checkInfo = function (data) {
            angular.forEach(data, function (item) {
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
        /**
         * 勾选
         */
        $scope.updateSelection = function (e, order) {
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
        $scope.selectAllOrder = function (e, data, checkall) {
            var st = e.currentTarget.checked;
            angular.forEach(data, function (item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item);
                }
            });
        };

        /**
         * 批量打印
         */
        $scope.printOrder = function (orders) {
            var temps = [];
            var aTemps = [];
            if (Object.prototype.toString.call(orders) == '[object Array]') {
                aTemps = orders;
            } else {
                aTemps = [orders];
            }
            angular.forEach(aTemps, function (item) {
                temps.push(item.id);
            });
            // var ids = temps;
            var ids = {
                ids:temps
            };
            suiteService.issueDynamicPrint(
                // ids:_.pluck(orders,'id')
                angular.copy(ids)
            ).then(function (res) {
                var orderDetails = res || [];
                $scope.isPrint = true;
                temps = orderService.printOrderDoms(orderDetails, $scope.ORDER_TYPE.ISSUEDYNAMIC, $scope);
                console.log(temps);
                $scope.$applyAsync(function () {
                    var htmls = [];
                    console.log(temps);
                    angular.forEach(temps, function (item) {
                        console.log(item[0].innerHTML);
                        htmls.push(item[0].innerHTML);
                    });
                    printService.printByDefaultPrinter(htmls);
                    console.log(htmls);
                });
            });
        };
        $scope.bathMultiPrint = function () {
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

        /**
         * 订单明细打印
         */
        $scope.orderDetailPrint = function (orderType) {
            var html = orderService.getPrintHtmlInOrderModule(orderType);
            $scope.$applyAsync(function () {
                console.log(html);
                printService.printByDefaultPrinter(html);
            });
        };
        /**
         * 期号订单明细
         */
        $scope.issueOrderDetail = function (iss) {
            $scope.modal = modalService.initModal({
                //appendTo:将modal 加载到指定id的DOM页面
                appendTo: angular.element(document.getElementById('issueDynamic')),
                scope: $scope,
                //templateUrl属性值是一个url路径,路径指向一个html模板
                templateUrl: 'suite/issueDynamicTemplate.html'
            });
            // $scope.iss = iss;
            var params = {issueId: iss.issueId, companyId: iss.companyId};
            suiteService.queryIssueChanges(params).then(function (res) {
                // res的值赋值给 issueDetail ，用于HTML 中的数据源
                $scope.issueDetail = res;
            });
        };

        //排序
        /*$scope.sortByIssue = function (item) {
            $scope.issueDynamicList(
                $scope.sortType = item.sortCode //通过参数传给服务端
            );
        };*/
        $scope.sortByIssue = function (item) {
            $scope.queryParams.sortType = item.sortCode;
            $scope.issueDynamicList();
        };
    })
};



},{}],17:[function(require,module,exports){
/**
 * 商品标签管理
 * labelsManagement
 */
module.exports = function (app) {
    app.controller('labelsManagement', function ($scope, $uibModal, $compile, modalService, labelsManagementService, NgTableParams) {
        $scope.paths = [{
            name: '首页',
            route: '#home'
        }, {
            name: '商品管理',
            active: true
        }];


        $scope.tags;
        $scope.labelName;
        $scope.label = {};
        $scope.addLabel = {};
        $scope.tagsList = [];
        $scope.labelsManagementTableData = [];
        $scope.newLabelsManagement = {};
        $scope.labelsManagementId = '';
        $scope.queryParams = {};

        /**
         * 商品标签 - 列表查询
         * 接口名 /company/label
         * 请求方法 GET
         * labelName  标签名称   offset 条目偏移 limit   \当前页显示数据个数
         */

        $scope.obtainLabesList = function (typeSort) {
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.tableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    return labelsManagementService.getLabelsList({
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        labelName: $scope.labelName,
                        // typeSort:$scope.typeSort  // $scope.typeSort  取 赋值
                        typeSort: typeSort // 取 typeSort 参数值
                    }).then(function (res) {
                        params.total(res.totalElements);
                        return res.content;
                    });
                }
            })
        };
        $scope.obtainLabesList();

        /**
         * 根据商品标签名称 查询
         */
        $scope.labelQuery = function (labelName) {
            labelsManagementService.getLabelsList(labelName).then(function () {
                $scope.obtainLabesList();
            });
        };

        /**
         * 添加标签   编辑标签
         *
         */
        $scope.tagEdit = function (tType) {
            /**
             * 判断打开modal时是编辑还是添加
             */
            if (tType) {//编辑
                $scope.addLabel = {
                    id: tType.id,
                    tagsName: tType.name,
                    type: tType.type,
                    noteName: tType.remark
                };
                $scope.defaultItem = { //设置下拉选项 默认值
                    id: tType.id,
                    type: tType.type
                };
            } else { //新增
                $scope.addLabel = {};
                $scope.defaultItem = { //设置下拉选项 默认值
                    id: 0,
                    type: '无'
                };
            }
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName('labelsManagement')),
                scope: $scope,
                templateUrl: 'addTagsModal'
            });
            /**
             * 添加/编辑标签 - 下拉列表-选择标签类型
             */
            $scope.selectTagType = function (item) {
                $scope.addLabel.type = item.type;
            };
        };

        /**
         * 商品标签 - 删除商品标签名称
         * 接口名 /company/label/delete_name/这里填写labelId
         * 请求方法 DELETE
         * 请求参数: id    主键id
         */

        $scope.tagDeleteClick = function (id, name) {
            $scope.labelsManagement = {};
            $scope.id = id;
            $scope.name = name;
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName('labelsManagement')),
                scope: $scope,
                templateUrl: 'deleteTagModel'
            });
        };
        $scope.deleteTable = function () {
            var me = this;
            labelsManagementService.deleteCommodityLabelName({
                id: $scope.id
            }).then(function (res) {
                $scope.obtainLabesList();
                me.$close();
            });
        };

        /**
         * 商品标签 - 创建商品标签名称
         * 添加标签确认
         * addLabel
         */
        $scope.addTagsConfirm = function (addLabel, scope) {
            if (addLabel.id) { //编辑
                var me = this;
                var params = {id: addLabel.id, type: addLabel.type, name: addLabel.tagsName, remark: addLabel.noteName};
                labelsManagementService.modifylabelsName(params).then(function (res) {
                    $scope.obtainLabesList();
                    me.$close();
                });
            } else { //新增
                var me2 = this;
                if (addLabel.type == "无") {
                    alert("标签类型不能为'无',请选择标签类型!!!");
                } else {
                    var params2 = {type: addLabel.type, name: addLabel.tagsName, remark: addLabel.noteName};
                    labelsManagementService.createLabelsName(params2).then(function (res) {
                        $scope.obtainLabesList();
                        me2.$close();
                    });
                }

            }
        };

        /**
         * 商品标签 - 获取标签类型列表
         */
        $scope.queryTagTypeList = function () {
            labelsManagementService.obtainLabelTypeList().then(function (res) {
                $scope.tagsList = res;
            });
        };
        $scope.queryTagTypeList();

        /**
         * 管理标签类型
         */
        $scope.tagsType = function () {
            $scope.labelsManagement = {};
            $scope.queryTagTypeList();
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName('labelsManagement')),
                scope: $scope,
                templateUrl: 'managementTagType',
                tagsList: $scope.tagsList
            });

            /**
             * 商品标签 - 创建标签类型
             * 接口名 /company/label/create_type
             * 请求方法 POST
             * 请求参数: type 标签类型
             * newTypeName  ==  type
             */
            $scope.addTagsType = function (newTypeName) {
                var type = newTypeName.type;
                labelsManagementService.createLabelsType(type).then(function (res) {
                    newTypeName.type = "";//新增后清除input
                    $scope.queryTagTypeList();
                });
            };

            /**
             * 商品标签 - 更新标签类型
             * 接口名 /company/label/modify_type
             * 请求方法 PUT
             * 请求参数 : id 主键id   type 标签类型
             */
            $scope.modifyType = function (tags) {
                var params = {type: tags.type, id: tags.id};
                labelsManagementService.updateLabelType(params).then(function () {
                    $scope.queryTagTypeList();
                    tags.inEdit = !tags.inEdit;
                });
            };

            /**
             * 商品标签 - 删除标签类型
             * 接口名 /company/label/delete_type/这里填写labelId
             * 请求方法 DELETE
             * 请求参数: id  主键id
             */
            $scope.deleteTableTyleClick = function (id, type) {
                $scope.labelsManagement = {};
                $scope.id = id;
                $scope.type = type;
                $scope.modal = modalService.initModal({
                    appendTo: angular.element(document.getElementsByClassName('labelsManagement')),
                    scope: $scope,
                    templateUrl: 'deleteTagTypeModel'
                });
            };
            $scope.deleteLabelType = function () {
                var me = this;
                labelsManagementService.deleteLabelType({
                    id: $scope.id
                }).then(function (res) {
                    $scope.queryTagTypeList();
                    $scope.obtainLabesList();
                    me.$close();
                });
            };


            /**
             * 选择标签回调
             * @param tags
             */
            $scope.selectTagsCallback = function (tags) {
                $scope.tags = tags;
                $scope.queryTagTypeList(tags);
            };
        };
        /**
         * 标签类型排序
         * @param item
         */
        $scope.sortByTagsType = function (item) {
            // $scope.typeSort = item.sortCode; // 赋值 传给服务端
            $scope.obtainLabesList(
                $scope.typeSort = item.sortCode  // 通过参数传给服务端
            );
        };
    });
};


},{}],18:[function(require,module,exports){
module.exports = function(app) {
  app.controller('newProductRecommendCtrl', function($scope, newProductService, NgTableParams, modalService, newProductService,  productService, $element, $compile, $templateCache, utilService, CONSTANTS) {
    $scope.labelList = [];
    $scope.product = {};
    $scope.profitLevel = CONSTANTS.PROFIT_LEVEL;
    $scope.newProductsQueryParams = {};
    $scope.cateotyList = [];
    $scope.lastUpdateTime = ''; // 销售数据更新于

    //表格设置
    $scope.queryParams = {};
    $scope.offset = 0;
    $scope.limit = 20;
    var tmpPutSaleObj = {};

    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function(params) {
        $scope.offset = $scope.limit * (params.page() - 1);
        var search = getParams();
        search.offset = $scope.offset;
        search.limit = $scope.limit;
        return newProductService.queryProductByKey(search).then(function(res) {
          $scope.lastUpdateTime = res.lastUpdateTime;
          return newProductService.indexData(res.list, $scope.offset + 1);
        });
      }
    });
    var getParams = function() {
      var temp = $scope.queryParams;
      temp[temp.markId] = temp.queryName;
      return _.omit(temp, 'markId', 'queryName');
    };
    //选择
    $scope.queryProductConfig = {
      nameTypeData: [{
        markId: 'productName', desc: '商品'
      }, {
        markId: 'skuCode', desc: '商品编码'
      }],
      selectItem: function(item) {
        $scope.queryParams["markId"] = item.markId;
      }
    };

    //回车键查询
    $scope.productKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.productSearch();
      }
    };
    //查询 商品名称
    $scope.productSearch = function() {
      $scope.tableParams.settings({
        dataset: []
      });
    };

    // 选中几条数据进行导出excel
    // 下面代码为导出Excel做准备
    var excelTemplate = $compile($templateCache.get('product/newProductTableTemplate.html'))($scope);
    angular.element(document.getElementById('exportExcelWrap')).append(excelTemplate);

    $scope.selectedProductList = []; //选中的商品列表
    $scope.updateSelection = function(e, product) {
      var isChecked = _.isObject(e) ? e.currentTarget.checked : e;
      product.checked = isChecked;
      if (isChecked) {
        $scope.selectedProductList.push(product);
      } else {
        $scope.selectedProductList = _.without($scope.selectedProductList,
          product);
      }
    };

    // 导出excel
    $scope.exportExcel = function () {
      if (!$scope.selectedProductList.length) {
        utilService.alertError('请先选择需导出的新品');
        return;
      }
      var dom = angular.element('<a></a>');
      dom[0].href = $('#export-company-table').excelexportjs({
        containerid: 'export-company-table',
        datatype: 'table',
        returnUri: 'true'
      });
      dom[0].download = '新品推荐列表.xls';
      dom[0].click();
    };

    // 添加新品，参考拣货单
    $scope.openAddModal = function (templateUrl) {
      $scope.addModel = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName('product')),
        templateUrl: templateUrl,
        scope: $scope,
        size: 'lg'
      });

      $scope.newProductsQueryParams = {};
      setNewProductsTable();
      queryProductCategoryList();
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

    // 新品上架modal中的表格数据
    var setNewProductsTable = function() {
      $scope.offset2 = 0;
      $scope.limit2 = 10;
      $scope.newProdcutsTable = new NgTableParams({
        count: $scope.limit2
      }, {
        counts: [],
        paginationMaxBlocks: 13,
        paginationMinBlocks: 2,
        getData: function(params) {
          // 每次取重新渲染表格的时候，清楚之前选择的数据
          $scope.selectedProducts = [];
          return newProductService.queryAllProduct({
            offset: $scope.limit2 * (params.page() - 1),
            limit: $scope.limit2,
            productTags: [-1], // 查询商品库中非新品的商品
            productName: $scope.newProductsQueryParams.productName,
            categoryId: $scope.newProductsQueryParams.categoryId,
            profitLevel: $scope.newProductsQueryParams.profitLevel,
            isDeleted: 0
          }).then(function(res) {
            params.total(res.totalElements);
            return newProductService._parseOtherShelfProducts(res.content,
              _.keys(tmpPutSaleObj));
          });
        }
      });
    };

    //商品选择
    $scope.selectedProducts = [];
    $scope.chkboxChange = function(product) {
      var productId = product.id;
      if (product.select) {
        $scope.selectedProducts.push(productId);
      } else {
        $scope.selectedProducts = _.without($scope.selectedProducts, productId);
      }
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

    // 确认添加新品
    $scope.confirmAddNewProduct = function () {
      newProductService.addNewProducts({
        productIds: $scope.selectedProducts
      }).then(function (res) {
        $scope.tableParams.reload();
        $scope.addModel.close();
      });
    };

    // 删除新品
    $scope.deleteForm = {};
    $scope.deleteNewProduct = function(id) {
      $scope.deleteForm = {};
      $scope.deleteForm.productId = id;
      modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName('product')),
        templateUrl: 'newProductDelete',
        scope: $scope
      });
    };
    $scope.newProductDeleteSave = function() {
      var me = this;
      newProductService.deleteNewProduct({
        id: $scope.deleteForm.productId
      }).then(function() {
        $scope.tableParams.reload();
        me.$close();
      });
    };

    // 切换新品推荐中 1，待推荐状态 0，
    $scope.toggleProductStatus = function (proId, newRecommend) {
      newRecommend = newRecommend == 1 ? 0 : 1;
      newProductService.changeNewProductStatus({
        id: proId,
        newRecommend: newRecommend
      }).then(function () {
        $scope.tableParams.reload();
      })
    };

    $scope.product = {
      id: '',
      productName: '',
      categoryId: '',
      skuCode: '',
      price: '',
      recommendTimes: '', // 推荐次数
      recommendRate: '', // 推荐拣货率
      deliveryBackRate: '',
      shipmentRate: '',
      stock: '',
      availableStock: '',

      reset: function() {
        this.id = '';
        this.productName = '';
        this.categoryId = '';
        this.skuCode = '';
        this.price = '';
        this.recommendTimes = '';
        this.recommendRate = '';
        this.deliveryBackRate = '';
        this.shipmentRate = '';
        this.stock = '';
        this.availableStock = '';
      }
    }
  });
};
},{}],19:[function(require,module,exports){
module.exports = function(app) {
    app.controller('orderCtrl', function($scope, $compile, $templateCache, $mdDialog, modalService, printService, orderService, NgTableParams, utilService, CONSTANTS) {
        $scope.utilService = utilService;
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        $scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        $scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;

        var DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        var COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        var ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        var DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
        var REFUND_STATE = CONSTANTS.REFUND_STATE;
        var INVENTORY_STATE = CONSTANTS.INVENTORY_STATE;
        var SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;

        $scope.offset;
        $scope.limit;
        $scope.curOrderType = { desc: '全部单据类型' };
        $scope.orderTypeList = [{ desc: '全部单据类型' },
            { desc: ORDER_TYPE.DESC[ORDER_TYPE.DELIVERY], orderType: ORDER_TYPE.DELIVERY },
            { desc: ORDER_TYPE.DESC[ORDER_TYPE.REFUND], orderType: ORDER_TYPE.REFUND },
            { desc: ORDER_TYPE.DESC[ORDER_TYPE.INVENTORY], orderType: ORDER_TYPE.INVENTORY },
            { desc: ORDER_TYPE.DESC[ORDER_TYPE.SETTLEMENT], orderType: ORDER_TYPE.SETTLEMENT }
        ];
        $scope.isUpdateTimeChoices = CONSTANTS.getList('INVOICE_TIME_TYPE', false);
        $scope.isPaidList = [{ desc: '全部付款状态', code: '' }, { desc: '未付款', code: '0' }, { desc: '已付款', code: '1' }];
        $scope.invoiceNeedStateList = CONSTANTS.getList('INVOICE_NEED_STATE', true, undefined, undefined, { '': '全部开票需求' });
        $scope.deliveryOrder = {};
        $scope.refundOrder = {};
        $scope.inventoryOrder = {};
        $scope.settlementOrder = {};

        $scope.queryParams = {
            createStartTime: '',
            createEndTime: '',
            updateStartTime: '',
            updateEndTime: '',
            isInvoice: '', //0 不需要开票  1需要开票
            isPaid: '', // 0 没有  1 已支付
            isUpateTime: 0,
        };
        $scope.selectIsUpadate = function(choice) {
            $scope.queryParams.isUpateTime = parseInt(choice.code);
        };
        $scope.selectIsPaid = function(choice) {
            $scope.queryParams.isPaid = choice.code;
            $scope.orderTable.reload();
            $scope.orderTable.page(1);
        };
        $scope.selectInvoicenNeedState = function(choice) {
            $scope.queryParams.isInvoice = choice.code;
            $scope.orderTable.reload();
            $scope.orderTable.page(1);
        };
        var setOrderTable = function(queryParams) {
            $scope.queryParams.startDay = $scope.queryParams.startDay || utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd');
            $scope.queryParams.endDay = $scope.queryParams.endDay || utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd');
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
                        limit: $scope.limit,
                        orderType: $scope.curOrderType.orderType,
                        companyName: $scope.queryParams.companyName
                    };
                    if ($scope.queryParams.isInvoice !== '') {
                        p.isInvoice = $scope.queryParams.isInvoice;
                    }
                    if ($scope.queryParams.isPaid !== '') {
                        p.isPaid = $scope.queryParams.isPaid;
                    }
                    if ($scope.queryParams.isUpateTime) {
                        p.updateStartTime = new Date($scope.queryParams.startDay + ' 00:00:00').getTime();
                        p.updateEndTime = new Date($scope.queryParams.endDay + ' 23:59:59').getTime();
                    } else {
                        p.createStartTime = new Date($scope.queryParams.startDay + ' 00:00:00').getTime();
                        p.createEndTime = new Date($scope.queryParams.endDay + ' 23:59:59').getTime();
                    }

                    return orderService.queryOrderList(p).then(function(res) {
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            });
        };
        setOrderTable();
        //搜索单据
        $scope.searchOrders = function(queryParams) {
            queryParams = queryParams || {};
            $scope.queryParams.companyName = queryParams.companyName;
            $scope.queryParams.startDay = queryParams.startTime ? utilService.parseTimeByDate(queryParams.startTime, 'yyyy-MM-dd') :
                utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd');
            $scope.queryParams.endDay = queryParams.endTime ? utilService.parseTimeByDate(queryParams.endTime, 'yyyy-MM-dd') :
                utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd');
            $scope.queryParams.isUpateTime = queryParams.isUpateTime;
            setOrderTable();
        };
        //获取单据状态描述
        $scope.getOrderStateDesc = function(orderType, orderState) {
            var orderStateDesc = '';
            switch (orderType) {
                case ORDER_TYPE.DELIVERY:
                    orderStateDesc = DELIVERY_STATE.DESC[orderState];
                    break;
                case ORDER_TYPE.REFUND:
                    orderStateDesc = REFUND_STATE.DESC[orderState];
                    break;
                case ORDER_TYPE.INVENTORY:
                    orderStateDesc = INVENTORY_STATE.DESC[orderState];
                    break;
                case ORDER_TYPE.SETTLEMENT:
                    orderStateDesc = SETTLEMENT_STATE.DESC[orderState];
                    break;
            }
            return orderStateDesc;
        };
        //选择单据类型
        $scope.selectOrderType = function(item) {

            $scope.curOrderType = item;
            setOrderTable();
        };
        //明细
        $scope.checkOrderDetail = function(orderType, orderId) {
            orderService.checkOrderDetail(orderType, orderId, $scope);
        };
        //获取送货单详情
        var getDeliveryDetail = function(opts) {
            orderService.queryDeliveryDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.deliveryOrder = res;
                $scope.deliveryOrder.name = '送货单' + '-' + $scope.deliveryOrder.companyName + '-' + $scope.deliveryOrder.shelfName +
                    '(' + utilService.parseTimeByLong($scope.deliveryOrder.createTime, 'yyyyMMddhhmmss') + ')';
                $scope.deliveryOrder.putSaleProductList = [];
                $scope.deliveryOrder.supplementProductList = [];
                $scope.deliveryOrder.pullSaleProductList = [];

                angular.forEach($scope.deliveryOrder.items, function(item, i) {
                    switch (parseInt(item.itemType)) {
                        case 1:
                            $scope.deliveryOrder.putSaleProductList.push(item);
                            break;
                        case 2:
                            $scope.deliveryOrder.supplementProductList.push(item);
                            break;
                        case 3:
                            $scope.deliveryOrder.pullSaleProductList.push(item);
                            break;
                    }
                });
                opts.didLoadData();
            });
        };
        //获取退货单详情
        var getRefundDetail = function(opts) {
            orderService.queryRefundDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.refundOrder = res;
                $scope.refundOrder.name = '退货单' + '-' + $scope.refundOrder.companyName + '-' + $scope.refundOrder.shelfName +
                    '(' + utilService.parseTimeByLong($scope.refundOrder.createTime, 'yyyyMMddhhmmss') + ')';
                opts.didLoadData();

            });

        };
        //获取盘点单详情
        var getInventoryDetail = function(opts) {
            orderService.queryInventoryDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.inventoryOrder = res;
                $scope.inventoryOrder.name = '盘点单' + '-' + $scope.inventoryOrder.companyName + '-' + $scope.inventoryOrder.shelfName +
                    '(' + utilService.parseTimeByLong($scope.inventoryOrder.createTime, 'yyyyMMddhhmmss') + ')';
                opts.didLoadData();
            });
        };
        //获取结算单详情
        var getSettlementDetail = function(opts) {
            orderService.querySettlementDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.settlementOrder = orderService._parseSettlementDetailData(res);
                $scope.settlementOrder.name = '结算单' + '-' + $scope.settlementOrder.companyName +
                    '(' + utilService.parseTimeByLong($scope.settlementOrder.createTime, 'yyyyMMddhhmmss') + ')';
                opts.didLoadData();
            });
        };
        //详细Modal中导出Excel（移至service）
        //列表中导出Excel
        $scope.exportExcelOnList = function(orderType, orderId) {
            orderService.exportExcel(orderType, orderId, $scope);
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
        //打印
        $scope.printOrder = function(orders) {
            var settlementOrderIds = [];
            var inventoryOrderIds = [];
            var deliveryOrderIds = [];
            var returnOrderIds = [];
            var orderArray = [];
            if (Object.prototype.toString.call(orders) == '[object Array]') {
                orderArray = orders;
            } else {
                orderArray = [orders];
            }
            angular.forEach(orderArray, function(item) {
                switch (item.orderType) {
                    case ORDER_TYPE.DELIVERY:
                        deliveryOrderIds.push(item.orderId);
                        break;
                    case ORDER_TYPE.REFUND:
                        returnOrderIds.push(item.orderId);
                        break;
                    case ORDER_TYPE.INVENTORY:
                        inventoryOrderIds.push(item.orderId);
                        break;
                    case ORDER_TYPE.SETTLEMENT:
                        settlementOrderIds.push(item.orderId);
                        break;
                }
            });
            orderService.queryOrderDetails({
                settlementOrderIds: settlementOrderIds,
                inventoryOrderIds: inventoryOrderIds,
                deliveryOrderIds: deliveryOrderIds,
                returnOrderIds: returnOrderIds
            }).then(function(res) {
                var settlementOrderDetails = res.settlementOrderDetails || [];
                var inventoryOrderDetails = res.inventoryOrderDetails || [];
                var deliveryOrderDetails = res.deliveryOrderDetails || [];
                var returnOrderDetails = res.returnOrderDetails || [];
                var orders = $([]).concat(settlementOrderDetails, inventoryOrderDetails, deliveryOrderDetails, returnOrderDetails);
                var temps = [];
                angular.forEach(settlementOrderDetails, function(detail) {
                    var orderType = ORDER_TYPE.SETTLEMENT;
                    var scope = orderService.parsePrintOrderScope(orderType, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(orderType, scope)));
                });
                angular.forEach(inventoryOrderDetails, function(detail) {
                    var orderType = ORDER_TYPE.INVENTORY;
                    var scope = orderService.parsePrintOrderScope(orderType, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(orderType, scope)));
                });
                angular.forEach(deliveryOrderDetails, function(detail) {
                    var orderType = ORDER_TYPE.DELIVERY;
                    var scope = orderService.parsePrintOrderScope(orderType, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(orderType, scope)));
                });
                angular.forEach(returnOrderDetails, function(detail) {
                    var orderType = ORDER_TYPE.REFUND;
                    var scope = orderService.parsePrintOrderScope(orderType, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(orderType, scope)));
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
    });
};

},{}],20:[function(require,module,exports){
module.exports = function(app) {
  app.controller('pickOrderCtrl', function($scope, $timeout, $interpolate,
    $compile, $templateCache, $mdDialog, NgTableParams, printService,
    orderService, CONSTANTS, utilService, modalService) {
    $scope.CONSTANTS = CONSTANTS;
    $scope.DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
    $scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
    $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    var DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
    var DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
    var COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
    var offset = 0;
    var limit = 10000;
    var curActiveTab = 0;

    $scope.utilService = utilService;
    $scope.order;
    $scope.operateOrderQueryParams = {};
    $scope.warehouseOrderQueryParams = {};
    $scope.warehouseOrderStates = [{ desc: '所有状态', orderState: -1 }, {
      desc: DELIVERY_STATE
        .DESC[DELIVERY_STATE.WAIT_PICK],
      orderState: DELIVERY_STATE.WAIT_PICK
    }, {
      desc: DELIVERY_STATE.DESC[DELIVERY_STATE.PICKING],
      orderState: DELIVERY_STATE
        .PICKING
    }];
    $scope.curOrderState = $scope.warehouseOrderStates[0];

    $scope.operateOrdersTableParams = new NgTableParams({ count: limit }, {
      counts: []
    });
    $scope.warehouseOrdertableParams = new NgTableParams({ count: limit }, {
      counts: []
    });
    //删除 拣货单
    $scope.deleteDeliveryOrder = function(orderId) {
      if (confirm('您是否确认删除该单据?')) {
        var params = { 'orderId': orderId };
        orderService.deleteDeliveryOrder(params).then(function(res) {
          alert('删除成功');
          $scope.searchOperateOrders($scope.queryParams);

        });
      }
    };
    //查询 运营单据
    $scope.searchOperateOrders = function(queryParams) {
      $scope.operateOrderQueryParams = queryParams || $scope.operateOrderQueryParams;
      var params = {
        offset: offset,
        limit: limit,
        orderStates: [DELIVERY_STATE.INIT, DELIVERY_STATE.RETURN_INIT],
        companyId: $scope.operateOrderQueryParams.companyId
      };
      orderService.queryDeliveryList(params).then(function(res) {
        $scope.operateOrdersTableParams.settings({
          dataset: res.content
        });
      });
    };
    //清空运营页卡下的公司搜索
    $scope.emptyCompanySearchInOperate = function() {
      delete $scope.operateOrderQueryParams.companyId;
      $scope.searchOperateOrders();
    };

    //查询 仓库单据
    $scope.searchWarehouseOrders = function(queryParams) {
      queryParams = queryParams || {};
      if (queryParams.orderStates) {
        $scope.warehouseOrderQueryParams.orderStates = queryParams.orderStates;
      } else if (queryParams.companyId) {
        $scope.warehouseOrderQueryParams.companyId = queryParams.companyId;
      } else {
        $scope.warehouseOrderQueryParams = {};
      }
      var params = {
        offset: offset,
        limit: limit,
        orderStates: $scope.warehouseOrderQueryParams.orderStates || [
          DELIVERY_STATE.WAIT_PICK, DELIVERY_STATE.PICKING
        ],
        companyId: $scope.warehouseOrderQueryParams.companyId
      };
      orderService.queryDeliveryList(params).then(function(res) {
        $scope.warehouseOrdertableParams.settings({
          dataset: res.content
        });
      });
    };
    //清空仓库页卡下的公司搜索
    $scope.emptyCompanySearchInWarehouse = function() {
      delete $scope.warehouseOrderQueryParams.companyId;
      $scope.searchWarehouseOrders();
    };
    //当前记录行是否需要高亮
    $scope.shouldRowHighlight = function(order) {
      return parseInt(order.returnTimes);
    };
    $scope.tabActive = function(tabIndex) {
      curActiveTab = tabIndex;
      switch (tabIndex) {
        case 0:
          $scope.searchOperateOrders();
          break;
        case 1:
          $scope.curOrderState = $scope.warehouseOrderStates[0];
          $scope.searchWarehouseOrders();
          break;
      }
    };
    //根据拣货单状态 查询
    $scope.selectWarehouseOrderState = function(item) {
      if (!item.orderState) {
        return;
      }
      var orderStates = item.orderState > 0 ? [item.orderState] : [
        DELIVERY_STATE.WAIT_PICK, DELIVERY_STATE.PICKING
      ];
      $scope.searchWarehouseOrders({ orderStates: orderStates });

    };
    //选中拣货单
    $scope.selectPickOrder = function(order) {
      order.selected = !order.selected;
    };
    //打开拣货单详情
    $scope.openPickOrderModal = function(orderId, e) {
      e.stopPropagation();
      getPickOrderDetail({
        orderId: orderId,
        didLoadData: function() {
          $scope.pickOrderModal = modalService.initModal({
            appendTo: angular.element(document.getElementsByClassName(
              'pick-order')),
            scope: $scope,
            templateUrl: 'pickOrder/pickOrderTemplate.html',
            size: 'lg'
          });
        }
      });
    };
    $scope.filterItems = function(item) {
      return item.itemType != 3;
    };

    //打开退回理由 填写框
    $scope.openReturnReasonModal = function() {
      $scope.returnReasonModal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'pick-order')),
        scope: $scope,
        templateUrl: 'modalReturnReason'
      });
    };
    //填完退回理由 确认
    $scope.confirmReturn = function(returnParams) {
      returnParams.orderId = $scope.order.orderId;
      returnParams.orderState = DELIVERY_STATE.RETURN_INIT;
      orderService.modifyDeliveryState(returnParams).then(function(res) {
        $scope.pickOrderModal.close();
        $scope.returnReasonModal.close();
        $scope.tabActive(curActiveTab);
      });
    };
    //打印
    $scope.printPickOrder = function(scope, orderId) {
      $mdDialog.show($mdDialog.confirm({
        title: '提示',
        textContent: '是否确认打印并开始拣货？',
        ok: '确认',
        cancel: '取消'
      })).then(function() {
        var params = { orderState: DELIVERY_STATE.PICKING };
        if (orderId) {
          params.orderId = orderId;
        } else {
          params.orderId = $scope.order.orderId;
        }
        orderService.modifyDeliveryState(params).then(function(res) {
          var html = '';
          $scope.pickOrderModal && $scope.pickOrderModal.close();
          $scope.tabActive(curActiveTab);
          //打印
          var s = scope.$new();
          var temp;
          s.printOrder = scope.order;
          s.printOrder.productList = [];
          _.each(s.printOrder.items, function(item) {
            item.positionStr = _.pluck(item.positions,
              'name').join('<br/>');
            if (item.itemType != 3) {
              s.printOrder.productList.push(item);
            }
          });
          temp = angular.element('<div></div>').append(scope.compilePrintTemplate(
            s));
          scope.$applyAsync(function() {
            console.log(temp[0].innerHTML);
            printService.printByDefaultPrinter(temp[0].innerHTML,
              false);
          });
        });
      });
    };
    $scope.printPickOrderInTable = function(scope, order) {
      if (order.orderState == DELIVERY_STATE.WAIT_PICK) { //待捡货
        $scope.printPickOrder(scope, order.orderId);
      } else {
        $scope.batchPrint(scope, [order.orderId]);
      }
    };
    //确认出库
    $scope.confirmPicking = function() {
      var params = {
        orderState: DELIVERY_STATE.WAIT_COMFIRM,
        orderId: $scope.order.orderId,
        companyId: $scope.order.companyId
      };
      orderService.modifyDeliveryState(params).then(function() {
        $scope.pickOrderModal.close();
        $scope.tabActive(curActiveTab);
        // //打印
        // orderService.getCompiledDeliveryOrder({
        //     orderId: $scope.order.orderId,
        //     scope: $scope,
        //     success: function(temp) {
        //         $scope.$applyAsync(function() {
        //             printService.printByDefaultPrinter(temp.find('table').parent().html());
        //         });
        //     }
        // });
      });
    };
    //批量打印
    $scope.compilePrintTemplate = function(scope) {
      return $compile($templateCache.get('print/pickOrderTemplate.html'))
        (scope);
    };
    $scope.compileDeliveryTemplate = function(scope) {
      return $compile($templateCache.get(
        'order/deliveryOrderTemplate.html'))(scope);
    };
    $scope.batchPrint = function(scope, orderIds) {
      if ($scope.selectOrders.length == 0) {
        alert('请先选择需要处理的单据');
        return;
      }
      //获取批量选中节点
      //请求批量拣货单详情
      var params = {
        orderIds: [],
        orderState: DELIVERY_STATE.WAIT_COMFIRM
      };
      if (orderIds && orderIds.length) {
        params.orderIds = orderIds;
      } else {
        params.orderIds = _.pluck(_.where($scope.warehouseOrdertableParams
          .data, { selected: true }), 'orderId');
      }
      params.offset = 0;
      params.limit = params.orderIds.length;
      orderService.queryDeliveryDetailList(params).then(function(res) {
        //回调编译模板
        var orders = res.content;
        var temps = [];
        angular.forEach(orders, function(order) {
          var t;
          var s = scope.$new(true);
          s.DELIVERY_URGENCY = DELIVERY_URGENCY;
          s.COMPANY_TYPE = COMPANY_TYPE;
          s.utilService = utilService;
          s.printOrder = order;
          s.printOrder.productList = [];
          _.each(s.printOrder.items, function(item) {
            item.positionStr = _.pluck(item.positions,
              'name').join('<br/>');
            if (item.itemType != 3) {
              s.printOrder.productList.push(item);
            }
          });
          t = angular.element('<div></div>').append(scope.compilePrintTemplate(
            s));
          temps.push(t);
        });
        scope.$applyAsync(function() {
          var temp = [];
          angular.forEach(temps, function(item) {
            console.log(item[0].innerHTML);
            temp.push(item[0].innerHTML);
          });
          printService.printByDefaultPrinter(temp);
        });
      });
    };
    //批量切换状态
    $scope.batchModifyState = function() {
      if ($scope.selectOrders.length == 0) {
        alert('请先选择需要处理的单据');
        return;
      }
      var f = $scope.selectOrders[0];
      var r = _.find($scope.selectOrders, function(item) {
        return item.orderState != f.orderState;
      });
      if (r) {
        alert('拣货单状态不同，无法批量处理');
        return;
      }
      var confirmContent = f.orderState == DELIVERY_STATE.WAIT_PICK ?
        '是否确认所选拣货单开始拣货?' :
        '是否确认所选拣货单商品已出库，并切换为送货单?';

      if (confirm(confirmContent)) {
        orderService.batchUpdateDeliveryOrderState({
          orderIds: _.pluck($scope.selectOrders, 'orderId')
        }).then(function() {
          $scope.tabActive(curActiveTab);
        });
      }

    };
    //获取拣货单详情
    var getPickOrderDetail = function(opts) {
      orderService.queryDeliveryDetail({ orderId: opts.orderId }).then(
        function(res) {
          debugger
          $scope.order = res;
          $scope.order.name = '拣货单' + '-' + $scope.order.companyName +
            '-' + $scope.order.shelfName + '(' + utilService.parseTimeByLong(
              $scope.order.updateTime, 'yyyyMMddhhmmss') + ')';
          opts.didLoadData();
        });
    };
    //详情页面 导出
    $scope.exportExcelOnDetail = function() {
      var dom = angular.element('<a></a>');
      dom[0].href = $('#pick-order-table').excelexportjs({
        containerid: 'pick-order-table',
        datatype: 'table',
        returnUri: 'true'
      });
      dom[0].download = $scope.order.name + '.xls';
      dom[0].click();
    };
    //未加载详情页面的情况下 导出
    $scope.exportExcelNeedLoadDetail = function(orderId, e) {
      e.stopPropagation();

      var excelTemplate = $compile($templateCache.get(
        'pickOrder/pickOrderTemplate.html'))($scope);
      angular.element(document.getElementById('exportExcelWrap')).append(
        excelTemplate);
      getPickOrderDetail({
        orderId: orderId,
        didLoadData: function() {
          $scope.$applyAsync(function() {
            var dom = angular.element('<a></a>');
            dom[0].href = $('#pick-order-table').excelexportjs({
              containerid: "pick-order-table",
              datatype: 'table',
              returnUri: 'true'
            });
            dom[0].download = $scope.order.name + '.xls';
            dom[0].click();
          });
        }
      });
    };
    $scope.$watch('warehouseOrdertableParams.data', function(newValue,
      oldValue) {
      $scope.selectOrders = _.where($scope.warehouseOrdertableParams.data, { selected: true });
    }, true);
  });
}
},{}],21:[function(require,module,exports){
module.exports = function(app) {
    app.controller('positionManageCtrl', function($scope, NgTableParams, modalService, positionService, $mdDialog) {
        $scope.limit = 25;
        $scope.position = {};
        var loadPositionTable = function(queryParams) {
            queryParams = queryParams || {};
            $scope.positionTable = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 25,
                paginationMinBlocks: 2,
                getData: function(params) {
                    return positionService.queryPositionsByPage({
                        offset: (params.page() - 1) * $scope.limit,
                        limit: $scope.limit,
                        sortType: queryParams.sortType
                    }).then(function(res) {
                        params.total(res.totalElements);
                        return res.content;
                    });
                }
            });
        };
        loadPositionTable();
        //打开仓位编辑
        $scope.openPositionEditModal = function(mode, position) {
            $scope.position = {};
            if (mode == 'edit') { //编辑模式
                $scope.position = angular.copy(position);
            }
            $scope.positionEditModal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName('position-manage')),
                scope: $scope,
                templateUrl: 'positionEditModal',
                size:'sm'
            });
        };
        //提交仓位编辑
        $scope.submitPositionEdit = function(position) {
            var errorMsg = '';
            if (position.row.length != 3) {
                errorMsg = '\'排\'需为3位整数';
            }else if (position.layer.length != 2) {
                errorMsg = '\'层\'需为2位整数';
            }else if (position.location.length != 3) {
                errorMsg = '\'位置\'需为3位整数';
            }
            if (errorMsg.length) {
                $mdDialog.show($mdDialog.alert({
                    title: '失败',
                    textContent: errorMsg,
                    ok: '关闭',
                    zIndex: 999999999
                }).clickOutsideToClose(true));
                return;
            }
            if (typeof position.id == 'undefined') { //新增
                positionService.createPosition(position).then(function(res) {
                    $scope.positionEditModal.close();
                    loadPositionTable();
                });
            } else { //编辑
                positionService.modifyPosition(position).then(function(res) {
                    $scope.positionEditModal.close();
                    loadPositionTable();
                });
            }
        };
        //按编码排序
        $scope.sortByName = function(item) {
            loadPositionTable({
                sortType: item.sortCode
            });
        };

    });
};
},{}],22:[function(require,module,exports){
module.exports = function(app) {
  app.controller('productCtrl', function($scope, $mdPanel, productService,
    utilService, NgTableParams, modalService, CONSTANTS, positionService,
    labelsManagementService,$compile,$templateCache,orderService) {
    $scope.levelOneCategoryList = [];
    $scope.levelTwoCategoryList = [];
    $scope.brandAwarenessList = [];
    $scope.brandGradeList = [];
    $scope.originPlaceList = [];
    $scope.labelList = [];
    $scope.product = {};
    $scope.productPositionData = [];
    $scope.imgPrefix = window.cfg.picUrl;
    $scope.CONSTANTS = CONSTANTS;
    var CATEGORY_LEVEL = CONSTANTS.CATEGORY_LEVEL;
    var PRODUCT_DIC_TYPE = CONSTANTS.PRODUCT_DIC_TYPE;
    $scope.productTagsData = CONSTANTS.getList({
      clsOrName: 'PRODUCT_TAG',
      hasDefault: false
    });
    //表格设置
    $scope.queryParams = {};
    $scope.offset = 0;
    $scope.limit = 20;
    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function(params) {
        return labelsManagementService.getAllLabelList().then(
          function(
            labelRes) {
            $scope.labelList = labelRes;
            $scope.labelConfig.setList(labelRes);
            $scope.offset = $scope.limit * (params.page() - 1);
            var search = getParams();
            search.offset = $scope.offset;
            search.limit = $scope.limit;
            return productService.queryProductByKey(search).then(
              function(res) {
                params.total(res.totalElements);
                var data = productService._parseProductListData(
                  res.content,
                  $scope.labelList);
                return checkInfo(productService.indexData(data, $scope.offset +
                  1));
              });
          });
      }
    });
    var getParams = function() {
      // debugger
      var temp = $scope.queryParams;
      temp[temp.markId] = temp.queryName;
      return _.omit(temp, 'markId', 'queryName');
    };
    //选择
    $scope.queryProductConfig = {
      nameTypeData: [{
        markId: 'productName',
        desc: '商品'
      }, {
        markId: 'positionName',
        desc: '仓位'
      }, {
        markId: 'skuCode',
        desc: '商品编码'
      }],
      selectItem: function(item) {
        $scope.queryParams["markId"] = item.markId;
      }
    };

    var excelTemplate = $compile($templateCache.get(
      'product/productListExcelTemplate.html'))($scope);
    angular.element(document.getElementById('exportExcelWrap')).append(
      excelTemplate);
    $scope.selectedProductList = [];
    var checkInfo = function(data) {
      // debugger
      angular.forEach(data, function(item) {
        var t = _.findWhere($scope.selectedProductList, {
          id: item.id
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
    $scope.updateSelection = function(e, pro) {
      var isChecked;
      if (_.isObject(e)) {
        isChecked = e.currentTarget.checked;
      } else {
        isChecked = e;
      }
      pro.checked = isChecked;
      if (isChecked) {
        $scope.selectedProductList.push(pro);
      } else {
        $scope.checkAllCfg.flag = false;
        $scope.selectedProductList = _.without($scope.selectedProductList, pro);
      }
    };
    $scope.selectAllProduct = function(e, data) {
      var st = e.currentTarget.checked;
      angular.forEach(data, function(item) {
        if (item.checked !== st) {
          $scope.updateSelection(e.currentTarget.checked, item);
        }
      });
    };
    //回车键查询 
    $scope.productKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.productSearch();
      }
    };

    $scope.exportExcel = function() {
      if ($scope.selectedProductList.length) {
        orderService.formExcel('exportExcelWrap', '商品列表');
      } else {
        window.alert('请选择导出项');
      }
    };
    //查询 商品名称
    $scope.productSearch = function() {
      $scope.tableParams.settings({
        dataset: []
      });
    };
    //排序
    $scope.sort = function(item) {
      $scope.queryParams.sortType = item.sortCode;
      $scope.tableParams.settings({
        dataset: []
      });
    };
    //利润等级 筛选
    $scope.profitLevelFilter = {
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PROFIT_LEVEL',
          codeKey: 'profitLevel',
          valueKey: 'name',
          defaultObj: {
            '': '全部利润等级'
          }
        });
      },
      selectItem: function(item) {
        $scope.queryParams.profitLevel = item.profitLevel;
        $scope.tableParams.settings({
          dataset: []
        });
      }
    };
    //一级品类 筛选
    $scope.levelOneCategoryFilter = {
      list: [],
      defaultItem: {
        categoryName: '全部一级品类'
      },
      setList: function(list) {
        this.list = angular.copy(list);
        this.list.unshift(this.defaultItem);
      },
      selectItem: function(item) {
        $scope.queryParams.categoryId = item.id;
        $scope.tableParams.settings({
          dataset: []
        });
        $scope.levelTwoCategoryFilter.clearList();
        if (item.id) {
          productService.queryProductCategoryList({
            parentCategoryId: item.id
          }).then(function(res) {
            $scope.levelTwoCategoryFilter.setList(res);
          });
        }
      }
    };
    //二级品类 筛选
    $scope.levelTwoCategoryFilter = {
      list: [],
      defaultItem: {
        categoryName: '全部二级品类'
      },
      setList: function(list) {
        this.list = angular.copy(list);
        this.list.unshift(this.defaultItem);
      },
      clearList: function() {
        this.list = [];
      },
      selectItem: function(item) {
        $scope.queryParams.subCategoryId = item.id;
        $scope.tableParams.settings({
          dataset: []
        });
      }
    };
    //特殊标识 筛选
    $scope.productTagFilter = {
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PRODUCT_TAG',
          codeKey: 'productTag',
          valueKey: 'name',
          defaultObj: {
            '': '全部'
          }
        });
      },
      selectItem: function(item) {
        delete $scope.queryParams.productTags;
        if (item.productTag) {
          $scope.queryParams.productTags = [item.productTag];
        }
        $scope.tableParams.settings({
          dataset: []
        });
      }
    };
    //Modal
    $scope.productInitModal = function(templateUrl, size) {
      modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'product')),
        templateUrl: templateUrl,
        scope: $scope,
        size: size
      });
    };
    /*
     *管理品类
     */
    //初始化品类
    var categoryInit = function() {
      loadCategoryList(0);
    };
    //加载品类
    var loadCategoryList = function(parentCategoryId) {
      productService.queryProductCategoryList({
        parentCategoryId: parentCategoryId
      }).then(function(res) {
        if (!parentCategoryId) { //一级品类
          $scope.levelOneCategoryList = angular.copy(res);
          $scope.levelOneCategoryFilter.setList(res);
          if ($scope.levelOneCategoryList.length > 0) {
            $scope.selectedLevelOneCategory = $scope.levelOneCategoryList[
              0];
            loadCategoryList($scope.selectedLevelOneCategory.id);
          }
        } else { //二级品类
          $scope.levelTwoCategoryList = [];
          for (var i = 0; i < res.length / 2; i++) {
            var temp = [];
            temp.push(res[i * 2]);
            if (res[i * 2 + 1]) {
              temp.push(res[i * 2 + 1]);
            }
            $scope.levelTwoCategoryList.push(temp);
          }
        }
      });
    };
    $scope.levelOneCategoryManageList = function(item) {
      return item.id != '0';
    };
    //打开一级品类编辑框
    $scope.openLevelOneEditWin = function() {
      $scope.productInitModal('levelOneCategoryEdit', 'lg');
    };
    //创建品类
    $scope.createCategory = function(category, categoryLevel) {
      var params = {
        categoryName: category.categoryName,
        categoryLevel: categoryLevel,
        pickingValue: category.pickingValue
      }
      if (categoryLevel == CATEGORY_LEVEL.TWO) { //二级品类
        params.id = $scope.selectedLevelOneCategory.id;
      }
      productService.createProductCategory(params).then(function(res) {
        //新增后清空input
        category.categoryName = "";
        category.pickingValue = "";
        if (categoryLevel == CATEGORY_LEVEL.ONE) { //一级品类
          loadCategoryList(0);
        } else if (categoryLevel == CATEGORY_LEVEL.TWO) { //二级品类
          loadCategoryList($scope.selectedLevelOneCategory.id);
          $scope.addLevelTwo = {};
        }
      });
    };
    //修改品类
    $scope.modifyCategory = function(category, categoryLevel) {
      var params = {
        id: category.id,
        categoryName: category.categoryName,
        categoryLevel: categoryLevel,
        pickingValue: category.pickingValue
      }
      productService.modifyProductCategory(params).then(function(res) {
        if (categoryLevel == CATEGORY_LEVEL.ONE) { //一级品类
          loadCategoryList(0);
        } else if (categoryLevel == CATEGORY_LEVEL.TWO) { //二级品类
          loadCategoryList($scope.selectedLevelOneCategory.id);
        }
      });
    };
    //删除品类
    $scope.deleteCategory = function(category, categoryLevel) {
      if (confirm('是否确认删除该品类')) {
        productService.deleteProductCategory({
          id: category.id
        }).then(function(res) {
          if (categoryLevel == CATEGORY_LEVEL.ONE) { //一级品类
            loadCategoryList(0);
          } else if (categoryLevel == CATEGORY_LEVEL.TWO) { //二级品类
            loadCategoryList($scope.selectedLevelOneCategory.id);
          }
        });
      }
    };
    //选择一级品类
    $scope.selectLevelOne = function(index) {
      $scope.selectedLevelOneCategory = $scope.levelOneCategoryList[
        index];
      loadCategoryList($scope.selectedLevelOneCategory.id);
    };
    //初始化仓位
    var positionInit = function() {
      positionService.queryAllPositions().then(function(res) {
        $scope.productPositionData = res;
      });
    };
    //弹出管理品类
    $scope.categoryManageWin = function() {
      $scope.productInitModal('productCategoryManage');
      categoryInit();
    };
    /*
     * 商品的修改，编辑，保存，删除
     */
    //添加商品 新增/修改
    $scope.productEditWin = function(id) {
      labelsManagementService.getAllLabelList().then(function(labelRes) {
        $scope.labelList = labelRes;
        $scope.labelConfig.setList(labelRes);
      });
      //重置多选
      resetMultiSelect($scope.productPositionData);
      resetMultiSelect($scope.productTagsData);
      if (typeof id == 'undefined') { //新增模式
        $scope.product.reset();
        $scope.productLevelTwoCategoryConfig.reset();
        $scope.productInitModal('productEdit', 'lg');
      } else { //修改模式
        productService.getProductById({
          id: id
        }).then(function(res) {
          var data = productService._parseProductData(res, $scope.labelList);
          $scope.product = angular.extend($scope.product, data);
          _.each(data.positionIds, function(value, key) { //仓位 默认选中
            _.findWhere($scope.productPositionData, {
              id: value.id
            }).selected = true;
          });
          _.each(data.productTags, function(tagId) { //特殊标识 默认选中
            _.findWhere($scope.productTagsData, {
              code: tagId
            }).selected = true;
          });
          $scope.productInitModal('productEdit', 'lg');
        });
      }
    };
    //重置多选
    var resetMultiSelect = function(list) {
      _.each(list, function(item) {
        item.selected = false;
      });
    };
    //获取商品数据字典
    var loadProductDictionary = function(type) {
      productService.queryProductDictionary({
        type: type
      }).then(function(res) {
        switch (type) {
          case PRODUCT_DIC_TYPE.ORIGIN_PLACE:
            $scope.originPlaceList = res;
            break;
          case PRODUCT_DIC_TYPE.BRAND_AWARENESS:
            $scope.brandAwarenessList = res;
            break;
          case PRODUCT_DIC_TYPE.BRAND_GRADE:
            $scope.brandGradeList = res;
            break;
        }
      });
    };
    //利润
    $scope.profitLevelConfig = {
      getDefaultItem: function(value) {
        var options = this.getList();
        return _.findWhere(options, {
          profitLevel: value
        }) || {
          name: '无'
        };
      },
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PROFIT_LEVEL',
          hasDefault: false,
          codeKey: 'profitLevel',
          valueKey: 'name'
        });
      },
      selectItem: function(record) {
        if (typeof record.profitLevel != 'undefined') {
          $scope.product.profitLevel = record.profitLevel;
        }
      }
    };
    //原产地
    $scope.productOriginPlaceConfig = {
      getDefaultItem: function(value) {
        var options = $scope.originPlaceList;
        return _.findWhere(options, {
          id: value
        }) || {
          name: '无'
        };
      },
      selectItem: function(record) {
        $scope.product.originPlace = record.id;
      }
    };
    //品牌认知度
    $scope.productBrandAwarenessConfig = {
      getDefaultItem: function(value) {
        var options = $scope.brandAwarenessList;
        return _.findWhere(options, {
          id: value
        }) || {
          name: '无'
        };
      },
      selectItem: function(record) {
        $scope.product.brandAwareness = record.id;
      }
    };
    //品牌档次
    $scope.productBrandGradeConfig = {
      getDefaultItem: function(value) {
        var options = $scope.brandGradeList;
        return _.findWhere(options, {
          id: value
        }) || {
          name: '无'
        };
      },
      selectItem: function(record) {
        $scope.product.brandGrade = record.id;
      }
    };
    //一级品类 设置
    $scope.productLevelOneCategoryConfig = {
      getDefaultItem: function(value) {
        var options = $scope.levelOneCategoryList;
        return _.findWhere(options, {
          id: value
        }) || {
          categoryName: '无'
        };
      },
      selectItem: function(record) {
        // debugger
        if (record.id) {
          $scope.product.categoryId = record.id;
          productService.queryProductCategoryList({
            parentCategoryId: record.id
          }).then(function(res) {
            $scope.productLevelTwoCategoryConfig.setList(res);
          });
        }
      }
    };
    //二级品类 设置
    $scope.productLevelTwoCategoryConfig = {
      list: [],
      setList: function(list) {
        this.list = angular.copy(list);
      },
      getDefaultItem: function(value) {
        var options = this.list;
        if (options.length) {
          return _.findWhere(options, {
            id: value
          }) || {
            categoryName: '无'
          };
        } else {
          return value ? {
            categoryName: $scope.product.subCategoryName || '无',
          } : {
            categoryName: '无'
          };
        }
      },
      selectItem: function(record) {
        $scope.product.subCategoryId = record.id;
      },
      reset: function() {
        this.list = [];
      }
    };
    //标签 设置
    $scope.labelConfig = {
      lineslist: [],
      setList: function(list) {
        this.lineslist = [];
        for (var i = 0; i < list.length / 3; i++) {
          var temp = [];
          for (var j = 0; j < 3; j++) {
            if (list[i * 3 + j]) {
              var r = list[i * 3 + j];
              r.parentIndex = i * 3 + j;
              _.each(r.entries, function(item) {
                item.parentIndex = i * 3 + j;
              });
              temp.push(r);
            }
          }
          this.lineslist.push(temp);
        }
      },
      getDefaultItem: function(value, index) {
        var options = $scope.labelList[index].entries;
        return _.findWhere(options, {
          id: value
        }) || {
          name: '无'
        };
      },
      selectItem: function(record) {
        var t = _.reject($scope.product.labelDtos, function(item) {
          return item.type == record.type;
        });
        $scope.product.labelDtos = t;
        $scope.product.labelDtos.push(record);
      }
    };
    //进货 过期 损耗
    $scope.typeStr = '';
    $scope.tipStr = '';
    $scope.modalModifystock = function(strId, size, typeStr) {
      switch (typeStr) {
        case 'add': //1
          $scope.product.stockDeltaType = CONSTANTS.STOCK_MODIFY_TYPE.IMPORT;
          break;
        case 'expire': //4
          $scope.product.stockDeltaType = CONSTANTS.STOCK_MODIFY_TYPE.EXPIRE;
          break;
        case 'waste': //6
          $scope.product.stockDeltaType = CONSTANTS.STOCK_MODIFY_TYPE.WASTE;
          break;
      }
      $scope.typeStr = typeStr;
      $scope.tipStr = CONSTANTS.STOCK_MODIFY_TYPE.DESC[$scope.product.stockDeltaType];
      $scope.productInitModal(strId, size);
    };
    $scope.operateStock = function(data) {
      var stock = $scope.product.stock;
      if ($scope.product.stockDeltaType == CONSTANTS.STOCK_MODIFY_TYPE.IMPORT) {
        $scope.product.stock = $scope.product.stock + data;
        $scope.product.stockDelta = data;
      } else {
        if (stock < data) {
          window.alert('库存不够！请调整输入数据！');
          return;
        }
        $scope.product.stock = $scope.product.stock - data;
        $scope.product.stockDelta = -data;
      }
      this.$close();
    };
    //保存商品
    $scope.productSave = function(product) {
      var me = this;
      var errorMsg = $scope.product.checkComplete();
      if (errorMsg.length) {
        alert(errorMsg);
        return;
      }
      //仓位
      product.positionIds = _.pluck(product.positionOutPutData, 'id');
      //标签
      product.labelIdList = _.pluck(product.labelDtos, 'id');
      //特殊标识
      product.productTags = _.pluck(product.selectProductTagsData,
        'code');
      var saveParams = angular.copy(product);
      saveParams.originPrice = utilService.getPointInt(saveParams.originPrice);
      saveParams.price = utilService.getPointInt(saveParams.price);
      if (saveParams.id) {
        productService.saveOldProduct(saveParams).then(function() {
          $scope.tableParams.reload();
          me.$close();
        });
      } else {
        saveParams.stockAlarm = 999999;
        saveParams.intro = '-';
        saveParams.detail = '-';
        saveParams.imgs = ['-'];
        productService.saveNewProduct(saveParams).then(function() {
          $scope.tableParams.reload();
          me.$close();
        });
      }
    };
    //删除商品
    $scope.deleteForm = {};
    $scope.productDeleteWin = function(id) {
      $scope.deleteForm = {};
      $scope.deleteForm.productId = id;
      $scope.productInitModal('productDelete');
    };
    $scope.productDeleteSave = function() {
      var me = this;
      productService.deleteProduct({
        id: $scope.deleteForm.productId
      }).then(function() {
        $scope.tableParams.reload();
        me.$close();
      });
    };
    $scope.showBigImage = function(cover) {};
    $scope.inputData = [{
      name: 'Opera'
    }, {
      name: 'Internet Explorer'
    }, {
      name: 'Firefox'
    }];
    $scope.localLang = {
      selectAll: "全选",
      selectNone: "全不选",
      reset: "重置",
      search: "输入关键字搜索",
      nothingSelected: "无"
    };
    categoryInit();
    positionInit();
    //原产地
    loadProductDictionary(PRODUCT_DIC_TYPE.ORIGIN_PLACE);
    //品牌认知度
    loadProductDictionary(PRODUCT_DIC_TYPE.BRAND_AWARENESS);
    //品牌档次
    loadProductDictionary(PRODUCT_DIC_TYPE.BRAND_GRADE);
    /**
     * 按编码排序
     * @param item
     */
    $scope.sortByPosition = function(item) {
      $scope.queryParams.sortType = item.sortCode;
      $scope.tableParams.settings({
        dataset: []
      });
    };
    $scope.productStockChangeLogPanel;
    $scope.productStockChangeLogs = [];
    $scope.productStockChangeLogId;
    var stockChangeLogLimit = 10;
    $scope.productStockChangeLogTable = new NgTableParams({
      count: stockChangeLogLimit
    }, {
      counts: [],
      getData: function(params) {
        var p = {};
        var offset = stockChangeLogLimit * (params.page() - 1);
        p = {
          offset: offset,
          limit: stockChangeLogLimit,
          id: $scope.productStockChangeLogId
        };
        return productService.getProductStockChangeLog(p).then(
          function(res) {
            $scope.productStockChangeLogs = res.content;
            params.total(res.totalElements);
            return utilService.indexArray(res.content, offset +
              1);
          });
      }
    });;
    //库存修改记录
    $scope.showProductStockChangeLog = function(product, e) {
      e.stopPropagation();
      e.preventDefault();
      $scope.productStockChangeLogId = product.id;
      $scope.productInitModal('modal-productstockchangelogpanel', 'md');
    };
    $scope.product = {
      id: '',
      skuCode: '',
      productName: '',
      net: '',
      netUnit: '',
      profitLevel: '',
      originPlace: '',
      originPrice: '',
      price: '',
      expiryDate: '',
      brandAwareness: '',
      brandGrade: '',
      categoryId: '',
      subCategoryId: '',
      labelIdList: [],
      showLabelIdList: [],
      labelDtos: [],
      stock: 0,
      cover: '',
      reset: function() {
        this.id = '';
        this.skuCode = '';
        this.productName = '';
        this.net = '';
        this.netUnit = '';
        this.profitLevel = '';
        this.originPlace = '';
        this.originPrice = '';
        this.price = '';
        this.expiryDate = '';
        this.brandAwareness = '';
        this.brandGrade = '';
        this.categoryId = '';
        this.subCategoryId = '';
        this.labelIdList = [];
        this.showLabelIdList = [];
        this.labelDtos = [];
        this.stock = 0;
        this.cover = '';
      },
      checkComplete: function() {
        var errorMsg = "";
        if (typeof this.profitLevel == 'undefined') {
          errorMsg = '请选择利润等级';
        } else if (!this.originPlace) {
          errorMsg = '请选择原产地';
        } else if (!this.brandAwareness) {
          errorMsg = '请选择品牌认知度';
        } else if (!this.brandGrade) {
          errorMsg = '请选择品牌档次';
        } else if (!this.categoryId) {
          errorMsg = '请选择品类';
        }
        return errorMsg;
      }
    }
  });
};

},{}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
module.exports = function(app) {
  app.controller('promotionProductCtrl', function($scope, $mdDialog,
    promotionService, utilService, modalService, NgTableParams, CONSTANTS
  ) {
    $scope.PROMOTION_PAY_TYPE = CONSTANTS.PROMOTION_PAY_TYPE;
    $scope.utilService = utilService;
    $scope.picUrl = window.cfg.picUrl;
    $scope.queryParams = {
      status: 1
    };
    $scope.queryDesc = "";
    $scope.imgSizeLimit = {
      size: 500 * 1024,
      width: 1080,
      height: 1080
    }
    $scope.product = {
      imgDetails: [],
      desImgDetails: []
    };
    $scope.payTypeSelectDisabled = false; //标记支付方式是否可选
    /**
     * 列表
     */
    //表格设置
    $scope.offset = 0;
    $scope.limit = 20;
    var loadTable = function() {
      $scope.tableParams = new NgTableParams({
        count: $scope.limit
      }, {
        counts: [],
        paginationMaxBlocks: 20,
        paginationMinBlocks: 2,
        getData: function(params) {
          var searchParams = getQueryParams();
          $scope.offset = $scope.limit * (params.page() - 1);
          searchParams.offset = $scope.offset;
          searchParams.limit = $scope.limit;
          return promotionService.queryPromotionProductList(
            searchParams).then(function(res) {
            params.total(res.totalElements);
            return utilService.indexArray(promotionService._parsePromotionProductList(
                res.content),
              searchParams.offset);
          });
        }
      });
    };
    loadTable();
    //修改查询架上商品还是已下架商品
    $scope.changeActiveQueryParams = function(active) {
      $scope.queryParams = {};
      $scope.queryParams.status = active;
      $scope.queryProductConfig.selectItem($scope.queryProductConfig.nameTypeData[
        0]);
      loadTable();
    };
    //选择搜索条件
    $scope.queryProductConfig = {
      nameTypeData: [{
        markId: 'title',
        desc: '商品名称'
      }, {
        markId: 'sku',
        desc: '商品编码'
      }],
      selectItem: function(item) {
        var nameTypeData = $scope.queryProductConfig.nameTypeData;
        _.each(nameTypeData, function(t) {
          if (t.markId != item.markId) {
            delete $scope.queryParams[t.markId]; //去除非选中的查询字段
          }
        });
        $scope.queryParams["markId"] = item.markId;
        $scope.queryDesc = item.desc;
        $scope.queryConfigDefaultItem = item;
      }
    };
    $scope.queryConfigDefaultItem = $scope.queryProductConfig.nameTypeData[
      0];
    //回车键查询
    $scope.productKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.productSearch();
      }
    };
    //商品搜索
    $scope.productSearch = function() {
      loadTable();
    };
    //按商品编码排序
    $scope.sortBySku = function(item) {
      $scope.queryParams.field = 'sku';
      $scope.queryParams.asc = item.sortCode;
      loadTable();
    };
    var getQueryParams = function() {
      var temp = $scope.queryParams;
      temp[temp.markId] = temp.queryName;
      return _.omit(temp, 'markId', 'queryName');
    };
    // 获取H5链接
    $scope.getLink = function(id) {
      promotionService.getPromotionProductLink({
        id: id
      }).then(function(res) {
        $scope.wechatLink = res;
        //后续用正则匹配
        $scope.internalLink = '#' + res.split('?route=')[1];
        openMadal('linkShow', 'lg');
      });
    };
    // 设置商品上下架
    $scope.modifyProductActive = function(product) {
      if (product.active) { //需设置为下架
        promotionService.offlinePromotionProduct({
          id: product.id
        }).then(function(res) {
          product.active = !product.active;
          utilService.alertSuccess('下架成功');
          $scope.tableParams.reload();
        });
      } else { //需设置为上架
        promotionService.onlinePromotionProduct({
          id: product.id
        }).then(function(res) {
          product.active = !product.active;
          utilService.alertSuccess('上架成功');
          $scope.tableParams.reload();
        });
      }
    };
    /*
     *商品的新增，修改
     */
    //打开编辑框
    $scope.productEditWin = function(id) {
      openMadal('productEdit', 'lg');
      $scope.product = {
        imgDetails: [],
        desImgDetails: []
      };
      if (typeof id != 'undefined') { //修改模式
        $scope.payTypeSelectDisabled = true;
        promotionService.queryPromotionProductDetail({
          id: id
        }).then(function(res) {
          promotionService.getPromotionProductLink({
            id: id
          }).then(function(link) {
            var product = promotionService._parsePromotionProductDetail(
              res);
            product.link = link;
            $scope.product = product;
          });
        });
      } else {
        $scope.payTypeSelectDisabled = false;
      }
    };
    //支付类型设置
    $scope.payTypeConfig = {
      getDefaultItem: function(value) {
        var options = this.getList();
        return _.findWhere(options, {
          payType: value
        }) || options[0];
      },
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PROMOTION_PAY_TYPE',
          hasDefault: false,
          codeKey: 'payType',
          valueKey: 'name'
        });
      },
      selectItem: function(record) {
        if (typeof record.payType != 'undefined') {
          $scope.product.payType = record.payType;
        }
      }
    };
    var getImgs = function(type) {
      var imgs = type == 1 ? $scope.product.imgDetails : $scope.product
        .desImgDetails;
      return imgs;
    };
    //上传完图片
    $scope.didUploadImg = function(file, type) {
      var imgs = getImgs(type);
      file.index = imgs.length ? _.max(imgs, function(img) {
        return img.index;
      }).index + 1 : 1;
      imgs.push(file);
    };
    //轮播图排序
    $scope.sortImgs = function(type) {
      var imgs = getImgs(type);
      imgs = _.sortBy(imgs, function(img) {
        return img.index;
      });
      if (type == 1) {
        $scope.product.imgDetails = imgs;
      } else {
        $scope.product.desImgDetails = imgs;
      }
    };
    //预览图片
    $scope.imgPreview = function(img) {
      $scope.previewImg = img;
      openMadal('imgPreviewer', 'lg');
    };
    //删除图片
    $scope.deleteImg = function(i, type) {
      var imgs = getImgs(type);
      imgs.splice(i, 1);
    };
    //保存商品
    $scope.productSave = function(product) {
      if (!checkSaveProductValid(product)) {
        return;
      }
      var me = this;
      var saveParams = angular.copy(product);
      saveParams.images = _.pluck(product.imgDetails, 'path');
      saveParams.desImages = _.pluck(product.desImgDetails, 'path');
      saveParams.cover = saveParams.images[0];
      saveParams.price = utilService.getPointInt(saveParams.price);
      if (saveParams.originalPrice) {
        saveParams.originalPrice = utilService.getPointInt(saveParams.originalPrice);
      }
      delete saveParams.active;
      if (typeof product.id == 'undefined') { //新增模式
        promotionService.createPromotionProduct(saveParams).then(
          function(
            res) {
            $scope.tableParams.reload();
            me.$close();
          });
      } else { //编辑模式
        promotionService.modifyPromotionProduct(saveParams).then(
          function(
            res) {
            $scope.tableParams.reload();
            me.$close();
          });
      }
    };
    //验证保存商品有效性
    var checkSaveProductValid = function(product) {
      var maxTitleLength = 14,
        maxImgCount = 5,
        maxSubTitleLength = 35;
      var errorMsg = '';
      if (!product.payType) { //未选择支付类型
        errorMsg = '请选择支付类型';
      } else if (!product.imgDetails.length) { //未上传商品轮播图
        errorMsg = '请上传商品轮播图';
      } else if (product.title.length > maxTitleLength) {
        errorMsg = '标题不得大于' + maxTitleLength + '个字';
      } else if (product.imgDetails.length > maxImgCount) {
        errorMsg = '商品轮播图不得大于' + maxImgCount + '张';
      } else if (product.subtitle) {
        if (product.subtitle.length > maxSubTitleLength) {
          errorMsg = '副标题不得大于' + maxSubTitleLength + '个字';
        }
      }
      if (errorMsg.length) {
        utilService.alertError(errorMsg);
        return false;
      }
      return true;
    };
    //打开Modal
    var openMadal = function(templateUrl, size) {
      modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'promotion-product')),
        templateUrl: templateUrl,
        scope: $scope,
        size: size
      });
    };
  });
};
},{}],25:[function(require,module,exports){
module.exports = function(app) {
  app.controller('promotionSuiteCtrl', function($scope, $mdDialog,
    NgTableParams, CONSTANTS, modalService, promotionService, utilService
  ) {
    var PROMOTION_PAY_TYPE = CONSTANTS.PROMOTION_PAY_TYPE;
    $scope.PROMOTION_PAY_TYPE = PROMOTION_PAY_TYPE;
    $scope.picUrl = window.cfg.picUrl;
    $scope.imgSizeLimit = {
      size: 16 * 1024,
      width: 256,
      height: 256
    };
    $scope.products = [];
    $scope.suite = {
      selectedProducts: []
    };
    $scope.queryParams = {}; //查询参数
    /**
     * 列表
     */
    //表格设置
    $scope.offset = 0;
    $scope.limit = 20;
    var queryParams = {
      offset: $scope.offset,
      limit: $scope.limit,
    }
    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function(params) {
        $scope.offset = $scope.limit * (params.page() - 1);
        return promotionService.queryPromotionSuiteList(queryParams)
          .then(
            function(res) {
              console.log(queryParams)
              params.total(res.totalElements);
              var suiteList = promotionService._parsePromotionSuiteList(
                res.content);
              suiteList = utilService.indexArray(suiteList,
                queryParams.offset);
              return suiteList;
            });
      }
    });
    //搜索查询
    $scope.suiteSearch = function() {
      queryParams.name = $scope.queryParams.des;
      $scope.tableParams.settings({
        dataset: []
      });
    };
    //按回车 搜索查询
    $scope.suiteSearchKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.productSearch();
      }
    };
    //支付方式 筛选
    $scope.payTypeFilter = {
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'PROMOTION_PAY_TYPE',
          codeKey: 'payType',
          valueKey: 'name',
          defaultObj: {
            '': '全部支付方式'
          }
        });
      },
      selectItem: function(item) {
        console.log(item)
        if (item.payType) {
          queryParams.payType = item.payType;
        } else {
          delete queryParams.payType
        }

        $scope.tableParams.settings({
          dataset: []
        });
      }
    };
    //删除组合
    $scope.deleteSuite = function(id) {
      if (confirm('是否确认删除该组合?')) {
        promotionService.deletePromotionSuite({
          id: id
        }).then(function(res) {
          $scope.tableParams.reload();
        });
      }
    };
    //获取HTML5链接
    $scope.getLink = function(id) {
      promotionService.getPromotionSuiteLink({
        id: id
      }).then(function(res) {
        $scope.wechatLink = res;
        //后续用正则匹配
        $scope.internalLink = '#' + res.split('?route=')[1];
        openMadal('linkShow', 'lg');
      });
    };
    /**
     * 新建营销组合
     */
    //打开 营销组合新增
    $scope.suiteEditWin = function(suiteId) {
      openMadal('suiteEdit', 'lg');
      promotionService.queryPromotionProductList({
        offset: 0,
        limit: 10000,
        status: 1
      }).then(function(productsRes) {
        if (suiteId) { //编辑模式
          promotionService.queryPromotionSuiteDetail({
            id: suiteId
          }).then(function(res) {
            $scope.suite = res.suite;
            $scope.suite.selectedProducts = res.products;
            var selectedProductIds = _.pluck($scope.suite.selectedProducts,
              'id');
            //被选商品
            $scope.products = _.reject(productsRes.content,
              function(product) {
                return _.contains(selectedProductIds, product
                  .id);
              });
          });
        } else { //新增模式
          $scope.products = productsRes.content;
          $scope.suite = {
            selectedProducts: []
          };
        }
      });
    };
    //支付方式前缀
    $scope.getPayTypePrefix = function(product) {
      var preTxt = product.payType ? '(' + PROMOTION_PAY_TYPE.DESC[
        product.payType].substr(0, 1) + ')' : '';
      return preTxt;
    };
    //选中商品
    $scope.selectProduct = function(product, type) {
      _.each($scope.products, function(item) {
        item.isSelect = false;
      });
      _.each($scope.suite.selectedProducts, function(item) {
        item.isSelect = false;
      });
      product.isSelect = true;
    };
    //添加或移除商品
    $scope.modifySelectedProduct = function(mode) {
      var operateProducts = [];
      if (mode == 'add') {
        operateProducts = $scope.products;
      } else if (mode == 'remove') {
        operateProducts = $scope.suite.selectedProducts;
      }
      var operateProduct = _.find(operateProducts, function(item) {
        return item.isSelect == true;
      });
      if (!operateProduct) {
        utilService.alertError('请先选择商品!');
        return;
      }
      operateProduct.isSelect = false;
      if (mode == 'add') {
        $scope.products = _.without(operateProducts, operateProduct);
        $scope.suite.selectedProducts.push(operateProduct);
      } else if (mode == 'remove') {
        $scope.suite.selectedProducts = _.without(operateProducts,
          operateProduct);
        $scope.products.splice(0, 0, operateProduct);
      }
    };
    //保存组合
    $scope.suiteSave = function(suite) {
      if (!checkSaveSuiteValid(suite)) {
        return;
      }
      var me = this;
      suite.productIds = _.pluck(suite.selectedProducts, 'id');
      suite.productNames = _.pluck(suite.selectedProducts,
        'title');
      delete suite.selectedProducts;
      if (suite.id) { //编辑模式
        promotionService.modifyPromotionSuite(suite).then(function(res) {
          $scope.tableParams.reload();
          me.$close();
        });
      } else { //新增模式
        promotionService.createPromotionSuite(suite).then(function(res) {
          $scope.tableParams.reload();
          me.$close();
        });
      }
    };
    //验证保存套餐有效性
    var checkSaveSuiteValid = function(suite) {
      if (!suite.banner) {
        utilService.alertError('请上传微信转发ICON!');
        return false;
      }
      if (!suite.selectedProducts.length) {
        utilService.alertError('请添加商品!');
        return false;
      }
      var payTypes = _.union(_.pluck(suite.selectedProducts, 'payType'));
      if (payTypes.length > 1) {
        utilService.alertError('存在支付方式不一致的商品，请仔细检查!');
        return false;
      }
      return true;
    };
    //打开Modal
    var openMadal = function(templateUrl, size) {
      modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'promotion-suite')),
        templateUrl: templateUrl,
        scope: $scope,
        size: size
      });
    };
  });
};
},{}],26:[function(require,module,exports){
/*
 * 角色管理 Controller
 */
module.exports = function(app) {
  app.controller('RoleCtrl', function($scope, $uibModal, roleService) {
    var loadRoles = function() {
      roleService.getRoles().then(function(res) {
        $scope.role = res;
      });
    };
    $scope.roleService = roleService;
    $scope.role = null;
    $scope.editable = function(role) {
      // 只有非根节点节点才可以编辑
      return $scope.role !== role;
    };
    $scope.addRole = function(scope, parent) {
      $uibModal.open(addOrEditModalOptionFactory($scope.permissions))
        .result.then(function(res) {
          res.parentId = parent.id;
          roleService.addRole(res).then(loadRoles);
        });
    };
    $scope.editRole = function(scope, role) {
      $uibModal.open(addOrEditModalOptionFactory($scope.permissions, role))
        .result.then(function(res) {
          roleService.editRole(role.id, res).then(loadRoles);
        });
    };
    $scope.removeRole = function(scope, role) {
      $uibModal.open(removeModalOptionFactory(role))
        .result.then(function(roleToRemove) {
          roleService.removeRole(roleToRemove.id).then(function() {
            scope.remove();
          });
        });
    };
    loadRoles();
    roleService.getNormalPermissions().then(function(res) {
      $scope.permissions = res;
    });
  });

  function addOrEditModalOptionFactory(permissions, roleToEdit) {
    return {
      templateUrl: 'views/account/addOrEditRoleModal.html',
      resolve: {
        roleToEdit: function() {
          return roleToEdit;
        },
        allPermissions: function() {
          return permissions
        }
      },
      controller: AddOrEditModalController
    };
  };

  /**
   * 新增/添加角色对话框 Controller
   */
  function AddOrEditModalController($scope, $uibModalInstance, roleToEdit, allPermissions) {
    $scope.allPermissions = allPermissions;
    $scope.addRoleMode = !roleToEdit;
    $scope.result = {
      name: roleToEdit ? roleToEdit.name : "",
      permissionIds: roleToEdit ? roleToEdit.permissions.map(function(permission) {
        return permission.id
      }) : []
    };
    $scope.ok = function() {
      $uibModalInstance.close($scope.result);
    };
    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    };
  };
};

function removeModalOptionFactory(roleToRemove) {
  return {
    templateUrl: 'views/account/removeRoleModal.html',
    size: 'sm',
    resolve: {
      roleToRemove: roleToRemove
    },
    controller: function($scope, $uibModalInstance, roleToRemove) {
      $scope.roleToRemove = roleToRemove;
      $scope.ok = function() {
        $uibModalInstance.close(roleToRemove);
      };
      $scope.cancel = function() {
        $uibModalInstance.dismiss();
      };
    }
  };
};

},{}],27:[function(require,module,exports){
/*销售数据统计*/
module.exports = function (app) {
  app.controller('salesCtrl', function ($scope, productService, utilService, salesService, NgTableParams, $element, $compile, $templateCache) {
    $scope.intervalHide = false;
    $scope.utilService = utilService;
    $scope.yearHide = true;
    $scope.monthHide = true;
    $scope.weekHide = true;
    $scope.levelOneCategoryList = [];

    $scope.years = [];
    $scope.months = [];
    $scope.weekList = [];//{startDate,endDate,weekNum}
    $scope.intervalList = [{ value: 1, interval: "昨日" }, {
      value: 2,
      interval: "最近7天"
    }, { value: 3, interval: "最近30天" }, { value: 4, interval: "最近90天" }];

    $scope.selectYear = '';
    $scope.selectWeek = '';
    $scope.selectMonth = 1;
    $scope.selectInterval = $scope.intervalList[0];

    $scope.productName = "";
    $scope.searchType = 1;
    $scope.salesList = [];
    var categoryId = 0;
    var sortType = 0;

    // 下面代码为导出Excel做准备
    var excelTemplate = $compile($templateCache.get(
      'dataStatistics/salesStatisticsTableTemplate.html'))($scope);
    angular.element(document.getElementById(
      'exportExcelWrap')).append(excelTemplate);

    $scope.setInterval = function () {//区间统计
      $scope.intervalHide = false;
      $scope.yearHide = true;
      $scope.monthHide = true;
      $scope.weekHide = true;
      $scope.searchType = 1;
    };
    $scope.setMonths = function () {
      $scope.yearHide = false;
      $scope.monthHide = false;
      $scope.intervalHide = true;
      $scope.weekHide = true;
      $scope.searchType = 2;

    };
    $scope.setWeeks = function () {
      $scope.yearHide = false;
      $scope.weekHide = false;
      $scope.monthHide = true;
      $scope.intervalHide = true;
      $scope.searchType = 3;

    };
    $scope.onYearChange = function () {
      $scope.months = $scope.selectYear.month;
      $scope.selectMonth = $scope.months[0];
      $scope.weekList = $scope.selectYear.week;
      $scope.selectWeek = $scope.weekList[0];
    };
    $scope.offset = 0;
    $scope.limit = 20;
    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function (params) {
        var searchParams = getQueryParams();
        $scope.offset = $scope.limit * (params.page() - 1);
        searchParams.offset = $scope.offset;
        searchParams.limit = $scope.limit;
        return salesService.getQuerySalesList(searchParams).then(function (res) {
          params.total(res.totalElements);

          return res.content;
        });
      }

    });

    $scope.onSearch = function () {//查询按钮
      $scope.tableParams.settings({
        dataset: []
      });
    };
    $scope.onProductNameSearch = function () {
      $scope.tableParams.settings({
        dataset: []
      });
    };
    $scope.exportExcel = function () {//导出excel

      if (!$scope.salesList.length) {
        utilService.alertError('请先选择需导出的数据');
        return;
      }
      var dom = angular.element('<a></a>');
      dom[0].href = $('#export-sales-table').excelexportjs({
        containerid: 'export-sales-table',
        datatype: 'table',
        returnUri: 'true'
      });
      dom[0].download = '商品销售数据.xls';
      dom[0].click();

    };
    //回车键查询
    $scope.productKeyup = function (e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.onSearch();
      }
    };
    //勾选
    $scope.updateSelection = function (e, item) {
      var isChecked;
      if (_.isObject(e)) {
        isChecked = e.currentTarget.checked;
      } else {
        isChecked = e;
      }
      item.checked = isChecked;
      if (isChecked) {
        $scope.salesList.push(item);
      } else {
        $scope.salesList = _.without($scope.salesList,
          item);
      }
    };
    $scope.unsalableClick = function (item) {//加入滞销商品库
      if (item.isUnsalable == 1) {
        salesService.delUnsalable({
          id: item.id
        }).then(function (res) {
        });
      } else {
        var params = { productIds: [item.id] };
        salesService.addUnsalable(params).then(function (res) {
        });
      }
      $scope.tableParams.reload();
    };
    //新品推荐
    $scope.recommendClick = function (item) {
      var params = { productIds: [item.id] };
      if (item.isNew == 1) {
        salesService.delRecommend({
          id: item.id
        }).then(function (res) {

        });
      } else {
        salesService.addCommend(params).then(function (res) {

        });
      }
      $scope.tableParams.reload();

    }
    //组装参数
    var getQueryParams = function () {
      var queryParams = {};
      switch ($scope.searchType) {
        case 1:
          queryParams.range = $scope.selectInterval.value;
          break;
        case 2:
          queryParams.year = $scope.selectYear.year;
          queryParams.month = $scope.selectMonth;
          break;
        case 3:
          queryParams.startTime = utilService.parseTimeByLong($scope.selectWeek.startDate, "yyyy-MM-dd");
          queryParams.endTime = utilService.parseTimeByLong($scope.selectWeek.endDate, "yyyy-MM-dd");
          break;
      }
      ;
      queryParams.productName = $scope.productName;
      queryParams.type = $scope.searchType;
      queryParams.sortType = sortType;
      if (categoryId > 0) {
        queryParams.categoryId = categoryId;
      }
      return queryParams;
    };

    //初始化品类
    var categoryInit = function () {
      loadCategoryList(0);
    };
    //加载品类
    var loadCategoryList = function (parentCategoryId) {
      productService.queryProductCategoryList({
        parentCategoryId: parentCategoryId
      }).then(function (res) {
        if (!parentCategoryId) { //一级品类
          $scope.levelOneCategoryList = angular.copy(res);
          $scope.levelOneCategoryFilter.setList(res);
          if ($scope.levelOneCategoryList.length > 0) {
            $scope.selectedLevelOneCategory = $scope.levelOneCategoryList[0];
            loadCategoryList($scope.selectedLevelOneCategory.id);
          }
        }
      });
    };
    $scope.levelOneCategoryManageList = function (item) {
      return item.id != '0';
    };
    categoryInit();
    //一级品类 筛选
    $scope.levelOneCategoryFilter = {
      list: [],
      defaultItem: {
        categoryName: '全部品类'
      },
      setList: function (list) {
        productService.queryProductCategoryList({
          parentCategoryId: 0
        })
        this.list = angular.copy(list);
        this.list.unshift(this.defaultItem);
      },
      selectItem: function (item) {//一级品类选中后
        if (item.id) {
          categoryId = item.id;
        } else {
          categoryId = 0;
        }
        $scope.categoryName = item.categoryName;
        $scope.onSearch();
      }
    };
    /**
     * 一星期毫秒数
     * @returns {number}
     */
    var getWeekTime = function weekTime() {
      return 7 * 24 * 3600000;
    };
    /**
     * 获取星期数组
     * @param year
     * @returns {Array}
     */
    var getWeekList = function (startDay, endDay) {
      var date = startDay;
      var endDate = endDay;
      // 取得这个日期对象 date 的长整形时间 time
      var time = date.getTime();
      var weekday = date.getDay();//新年的第 一天是星期几
      if (weekday == 0) {
        weekday = 7;
      }
      var list = [];
      var i = 0;
      while (time < endDate.getTime()) {
        var weekItem = {};
        weekItem.weekNum = (i + 1);
        if (i == 0) {
          weekItem.startDate = time;
          time = time + (7 - weekday) * 24 * 3600000;
        } else {
          weekItem.startDate = time + (24 * 3600000);
          time = time + getWeekTime();
        }
        weekItem.endDate = time;
        if (time >= endDate.getTime()) {
          weekItem.endDate = endDate.getTime();
        }
        weekItem.selectOption = "第" + weekItem.weekNum + "周(" + utilService.parseTimeByLong(weekItem.startDate, "MM月dd日") + "-" + utilService.parseTimeByLong(weekItem.endDate, "MM月dd日") + ")";
        list.push(weekItem);
        i++;
      }
      return list;
    };
    /**
     * 开始时间
     * @returns {Date}
     */
    var getStartDate = function () {
      salesService.getStartTime().then(function (res) {
        var val = Date.parse(res.startTimeStr);
        var newDate = new Date(val);
        var list = getSelectTimeList(newDate);
        $scope.years = list;
        $scope.selectYear = $scope.years[0];
        $scope.months = $scope.selectYear.month;
        $scope.weekList = $scope.selectYear.week;
        $scope.selectWeek = $scope.weekList[0];
        $scope.selectMonth = $scope.months[0];
      });
    };
    /**
     * 获取选择某年的月份
     * @param startMonth
     * @param endMonth
     * @returns {Array}
     */
    var getMonthList = function (startMonth, endMonth) {
      var list = [];
      for (var i = startMonth; i <= endMonth; i++) {
        list.push(i + 1);
      }
      return list;
    };
    /**
     * 获取时间数组
     * @param startDate
     * @returns {Array}
     */
    var getSelectTimeList = function (startDate) {
      var today = new Date();
      var startYear = startDate.getFullYear();
      var endYear = today.getFullYear();
      var yearList = [];
      for (var i = startYear; i <= endYear; i++) {
        var yearItem = { year: '', week: [], month: [] };
        var startDay;
        var endDay;
        if (i == startYear) {
          startDay = startDate;
          endDay = new Date(startYear, "11", "31");
        } else if (i == endYear) {
          startDay = new Date(endYear, "0", "1");
          endDay = today;
        } else {
          startDay = new Date(i, "0", "1");
          endDay = new Date(i, "11", "31");
        }
        yearItem.week = getWeekList(startDay, endDay);
        yearItem.month = getMonthList(startDay.getMonth(), endDay.getMonth());
        yearItem.year = i;
        yearList.push(yearItem);
      }
      return yearList;
    };
    $scope.sortByPosition = function (item) {
      sortType = item.sortCode;
      $scope.tableParams.settings({
        dataset: []
      });
    };

    getStartDate();
  });
}
},{}],28:[function(require,module,exports){
/*
 *货架巡查
 *shelfController
 */
module.exports = function(app) {
    app.controller('shelf', function($scope, $mdSidenav, $sce, shelfService, companyService, authService, utilService, NgTableParams) {
        $scope.queryParams = {
            shelf_stock_percent: '',
            shelf_warn_count: '',
            shelf_type: '',
            last_update_interval: ''
        };
        $scope.companys = [];
        $scope.handleClickSearch = function() {
            shelfService.queryShelfList(_.omit($scope.queryParams, function(value) {
                return value === '';
            })).then(function(res) {
                var temp = [];
                $scope.companys = res.content;
                angular.forEach($scope.companys, function(item, index) {
                    $scope.companys.index = index;
                    temp.push({
                        companyName: item.company_name,
                        companyId: item.company_id
                    });
                });
                companyService.companyList = temp;
                $scope.tableParams.settings({
                    dataset: shelfService._parseShelfData($scope.companys)
                });
                $scope.hideFilterPanel();
            });
        };
        $scope.handleClickSearchAll = function() {
            shelfService.queryShelfList({}).then(function(res) {
                var temp = [];
                $scope.companys = res.content;
                angular.forEach($scope.companys, function(item, index) {
                    $scope.companys.index = index;
                    temp.push({
                        companyName: item.company_name,
                        companyId: item.company_id
                    });
                });
                companyService.companyList = temp;
                $scope.tableParams.settings({
                    dataset: shelfService._parseShelfData($scope.companys)
                });
            });
        };
        $scope.showFilterPanel = function() {
            $mdSidenav('right').toggle();
        };
        $scope.hideFilterPanel = function() {
            $mdSidenav('right').toggle();
        };
        $scope.heads = [{
            title: '序号',
            field: 'index',
            show: true,
            getValue: function(v, r, idx) {
                return '<span style="display:inline-block;width:40px;text-align:center">' + (v + 1) + '</span>';
            }
        }, {
            title: '公司名称',
            field: 'company_name',
            filter: { company_name: 'text' },
            getValue: function(v, r) {
                return '<a style="display:inline-block;width:150px" href="#shelf/' + r.company_id + '">' + v + '</a>';
            },
            show: true
        }, {
            title: '公司类型',
            field: 'company_type',
            filter: { company_type: 'text' },
            show: true
        }, {
            title: '公司地址',
            field: 'company_address',
            filter: { company_address: 'text' },
            getValue: function(v) {
                return '<span style="display:inline-block;width:150px">' + v + '</span>';
            },
            show: true
        }, {
            title: '货架数/货架总数',
            field: 'valid_sheld_countVSshelf_count',
            filter: { valid_sheld_countVSshelf_count: 'text' },
            show: true
        }, {
            title: '距离上次补货',
            field: 'last_update_interval',
            sortable: 'last_update_interval',
            filter: { last_update_interval: 'text' },
            show: true
        }, {
            title: '货架上货物总体占比',
            field: 'all_product_per',
            sortable: 'all_product_per',
            filter: { all_product_per: 'text' },
            show: true,
            getValue: function(v) {
                return '<span style="display:inline-block;width:150px">' + v + '</span>';
            }
        }];
        $scope.tableParams = new NgTableParams({
            count: 25
        }, {
            counts: [],
            paginationMaxBlocks: 13,
            paginationMinBlocks: 2,
            dataset: []
        });
        $scope.shelfStatusOptions = {
            choices: $([{ value: '', desc: '全部' }]).concat(utilService.getConstantJsonValue('SHELF_STATE')),
            getDefaultItem: function(value) {
                var v = value;
                var options = this.choices;
                return _.findWhere(options, { value: v }) || options[0];
            },
            selectItem: function(record) {
                this.defaultItem = record;
                $scope.queryParams.shelf_type = record.value;
            }
        };
        /*        shelfService.queryShelfList().then(function(res) {
                    var temp = [];
                    $scope.companys = res.content;
                    angular.forEach($scope.companys, function(item, index) {
                        $scope.companys.index = index;
                        temp.push({
                            companyName: item.company_name,
                            companyId: item.company_id
                        });
                    });
                    companyService.companyList = temp;
                    // = _.pluck($scope.companys, 'company_id');

                    $scope.tableParams.settings({
                        dataset: shelfService._parseShelfData($scope.companys)
                    });
                });*/
    });
};

},{}],29:[function(require,module,exports){
module.exports = function(app) {
    app.controller('shelfDetail', function($scope, $element, $routeParams, productService, companyService, NgTableParams, utilService, shelfService, modalService) {
        var summaryCreateModal;
        var companyList = companyService.companyList;
        $scope.offset = 0;
        $scope.limit = 25;
        $scope.strategy = '';
        $scope.prefer = { name: '', id: '' };
        $scope.refuse = { name: '', id: '' };
        $scope.prefers = [];
        $scope.refuses = [];
        $scope.showPreferSearch = false;
        $scope.totalItems = companyList.length;
        $scope.currentCompany = _.findWhere(companyList, { companyId: $routeParams.companyId });
        $scope.currentPage = _.indexOf(companyList, $scope.currentCompany) + 1;
        $scope.$watch('currentPage', function() {
            $scope.init();
        });
        //配置
        $scope.summaryHead = [{
            title: '序号',
            field: 'index',
            show: true,
            getValue: function(value, record, index, scope) {
                return '<span>' + index + '</span>';
            }
        }, {
            title: '偏爱商品',
            field: 'prefers',
            getValue: function(value, record, index, scope) {
                return '<span>' + _.pluck(value || [], 'name').join(' | ') + '</span>';
            },
            show: true
        }, {
            title: '拒绝商品',
            field: 'refuses',
            getValue: function(value, record, index, scope) {
                return '<span>' + _.pluck(value || [], 'name').join(' | ') + '</span>';
            },
            show: true
        }, {
            title: '选购策略',
            field: 'strategy',
            getValue: function(value) {
                return '</span>' + (value || '') + '</span>';
            },
            show: true
        }];
        $scope.preferSummaryTable = new NgTableParams();
        //方法
        //初始化
        $scope.init = function() {
            $scope.currentCompany = companyList[$scope.currentPage - 1];
            shelfService.queryShelfDetailByCompanyId({
                companyId: $scope.currentCompany.companyId
            }).then(function(res) {
                $scope.tables = shelfService._parseShelfDetailData(res[0]);
            });
            companyService.queryCompanyPreferSummary({
                companyId: $scope.currentCompany.companyId
            }).then(function(res) {
                $scope.companySummary = res;
            });
        };
        $scope.openCreatePreferSummaryWin = function() {
            summaryCreateModal = modalService.initModal({
                templateUrl: 'summarycontent',
                appendTo: $element,
                scope: $scope,
                ok: $scope.createCompanyPreferSummary
            });
        };
        $scope.getTdCls = function(td) {
            var product = td && td.productHeader || {
                stock: 0,
                maxStock: 0
            };
            var ratio = 0;
            var stock;
            var maxStock;
            var cls = '';
            if (!td || !product) {
                return '';
            }
            stock = parseInt(product.stock);
            maxStock = parseInt(product.maxStock);
            ratio = parseFloat((stock / maxStock).toFixed(1));
            if (ratio <= 0.2) {
                cls = 'red';
            } else if (ratio > 0.2 && ratio <= 0.5) {
                cls = 'yellow';
            } else {
                cls = 'green';
            }
            if (maxStock === 0) {
                cls = 'blue';
            }
            return cls;
        };
        $scope.add = function($scope, type) {
            if ($scope[type].name) {
                if ($scope[type].id) {
                    $scope[type + 's'].push(angular.copy($scope[type]));
                    $scope[type].id = '';
                } else {
                    $scope[type + 's'].push(angular.copy($scope[type]));
                    $scope[type].name = '';
                }
            }
        };
        $scope.remove = function($scope, index, type) {
            $scope[type + 's'].splice(index, 1);
        };
        $scope.createCompanyPreferSummary = function() {
            return companyService.createCompanyPreferSummary({
                companyId: $scope.currentCompany.companyId,
                info: {
                    prefers: $scope.prefers,
                    refuses: $scope.refuses,
                    strategy: $scope.strategy
                }
            });
        };
        $scope.typeHeadOptions = [];
        $scope.typeHeadConfigs = {
            debounce: {
                'default': 500,
                'blur': 250
            },
            getterSetter: true
        };
        $scope.getTypeHeadOptions = function(value) { //搜索加载
            return productService.queryProductByKey({
                offset: $scope.offset,
                limit: $scope.limit,
                productName: value
            }).then(function(res) {
                return res.content;
            });
        };
        $scope.selectTypeHeadOptions = function(item, model, label, event, type) { //搜索选择
            $scope[type] = {
                name: item.header.productName,
                id: item.header.id
            };
        };

    });
};

},{}],30:[function(require,module,exports){
/*货架管理*/
module.exports = function(app) {
  app.controller('shelfManageCtrl', function($scope, $compile, $templateCache,
    shelfService, NgTableParams, modalService, companyService,
    utilService, CONSTANTS) {
    $scope.PROFIT_LEVEL = CONSTANTS.PROFIT_LEVEL;
    $scope.paths = [{
      name: '首页',
      root: '#home'
    }, {
      name: '企业货架管理',
      active: true
    }];
    $scope.picUrl = window.cfg.picUrl;
    var defaultShelf = { desc: '暂无货架' };
    $scope.curShelf = defaultShelf;
    $scope.company;
    $scope.shelfList = [];
    $scope.shelfTypeList = CONSTANTS.getList('SHELF_TYPE', false, '', '',
      null, true);
    var salesChartDays = 14;

    var initView = function() {
      var excelTemplate = $compile($templateCache.get(
        'shelfmanage/shelfProductsTemplate.html'))($scope);
      angular.element(document.getElementById('exportExcelWrap')).append(
        excelTemplate);
    };
    initView();
    $scope.selectCompanyCallback = function(company) {
      $scope.company = company;
      $scope.queryShelfListByCompany(company);
    };
    $scope.queryShelfListByCompany = function(company) {
      $scope.shelfList = [];
      var queryParams = { companyId: company.companyId };
      shelfService.queryShelfListByCompanyId(queryParams).then(function(
        res) {
        if (res.length > 0) {
          angular.forEach(res, function(item, i) {
            var t = item;
            t.desc = item.shelfName;
            $scope.shelfList.push(t);
            if (i == 0) {
              $scope.curShelf = t;
            }

          });
        } else {
          $scope.curShelf = defaultShelf;
          $scope.shelfProducts = [];
        }
      });
    };
    $scope.selectShelfCallback = function(item) {
      $scope.curShelf = item;
      if (typeof item.id == 'undefined') {
        return;
      }
      var queryParams = { shelfId: item.id };
      shelfService.queryShelfProducstsByShelfId(queryParams).then(
        function(res) {
          var shelfProducts = shelfService._parseShelfProductsData(
            res);
          $scope.shelfProducts = shelfProducts;
        });
    };

    //获取位置信息
    $scope.getPositionName = function(shelfProduct) {
      var curShelfType = $scope.curShelf.shelfType;
      var marks = ['A', 'B', 'C', 'D', 'E'];
      var positionName = shelfProduct.header.row == 5 && curShelfType ==
        CONSTANTS.SHELF_TYPE.SNACKS ?
        '饮料栏/' + shelfProduct.header.col :
        '第' + shelfProduct.header.row + '层/' + marks[shelfProduct.header
          .row - 1] + shelfProduct.header.col;
      return positionName;
    };

    /*管理货架 modal相关*/
    //管理货架
    $scope.manageShelf = function() {
      $scope.createShelfObj = {};
      $scope.queryShelfListByCompany($scope.company);
      $scope.modal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'shelf-manage')),
        scope: $scope
      });
    };
    $scope.getDefaultShelfType = function(shelf) {
      if (typeof shelf != 'undefined') {
        return _.findWhere($scope.shelfTypeList, { code: shelf.shelfType }) ||
          $scope.shelfTypeList[0];
      } else {
        return $scope.shelfTypeList[0];
      }
    };
    $scope.selectShelfTypeCallback = function(item, shelf) {
      if (typeof shelf != 'undefined') {
        shelf.shelfType = item.code;
      } else {
        $scope.createShelfObj.shelfType = item.code;
      }

    };
    //新建货架
    $scope.createShelf = function(e) {
      var shelf = $scope.createShelfObj;
      var params = {
        shelfName: shelf.shelfName,
        companyId: $scope.company.companyId,
        shelfType: shelf.shelfType
      };
      shelfService.createShelf(params).then(function(res) {
        $scope.queryShelfListByCompany($scope.company);
        e.target.reset();
      });
    };
    //更新货架
    $scope.modifyShelf = function(shelf) {
      if (shelf.number == 0) {
        alert('货架编号需为大于0的整数');
        return;
      }
      var params = {
        shelfName: shelf.shelfName,
        shelfId: shelf.id,
        shelfType: shelf.shelfType,
        number: shelf.number
      };
      shelfService.modifyShelf(params).then(function(res) {
        $scope.queryShelfListByCompany($scope.company);
        shelf.inEdit = !shelf.inEdit;
      });
    };


    /*销量走势图 modal相关*/
    $scope.checkSalesChart = function(shelfProductId) {
      var params = { shelfProductId: shelfProductId, days: salesChartDays };
      shelfService.queryShelfProductTrend(params).then(function(res) {
        var xAxisDataTmp = [];
        var seriesDataTmp = [];
        angular.forEach(res.content, function(item, i) {
          xAxisDataTmp.push(item.date.substring(5, item.date.length));
          seriesDataTmp.push(item.sales);
        });
        $scope.xAxisData = xAxisDataTmp;
        $scope.seriesData = seriesDataTmp;
        $scope.modal = modalService.initModal({
          appendTo: angular.element(document.getElementsByClassName(
            'shelf-manage')),
          scope: $scope,
          templateUrl: 'modalSalesLine',
          size: 'lg'
        });
      });

    };

    /*商品详情 modal相关*/
    $scope.checkProductDetail = function(shelfProduct) {
      var params = { shelfProductId: shelfProduct.header.id };
      shelfService.queryShelfProductDetail(params).then(function(res) {
        $scope.curProduct = res;
        $scope.modal = modalService.initModal({
          appendTo: angular.element(document.getElementsByClassName(
            'shelf-manage')),
          scope: $scope,
          templateUrl: 'modalProductDetail',
          size: 'lg'
        });
      });
    };
    //货架信息导出Excel
    $scope.exportShelfProducts = function() {
      $scope.$applyAsync(function() {
        var dom = angular.element('<a></a>');
        dom[0].href = $('#shelf-products-table').excelexportjs({
          containerid: "shelf-products-table",
          datatype: 'table',
          returnUri: 'true'
        });
        dom[0].download = $scope.company.companyName + '-' + $scope
          .curShelf.shelfName + '-' + utilService.parseTimeByDate(
            new Date(), 'yyyyMMddhhmmss') + '.xls';
        dom[0].click();
      });
    };

  });
};
},{}],31:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 2016/11/24.
 */
module.exports = function (app) {
    app.controller('suiteCfgManage', function ($scope, NgTableParams, $uibModal,
                                               modalService, suiteService, utilService, CONSTANTS, productService,
                                               orderService) {

        $scope.ORDER_STATUS = CONSTANTS.ORDER_STATUS; //订单状态
        $scope.SUITE_TYPE = CONSTANTS.SUITE_TYPE; // 套餐类型
        $scope.ISSUE_STATUS = CONSTANTS.ISSUE_STATUS; //期号状态
        $scope.SUITE_STATUS = CONSTANTS.SUITE_STATUS; //套餐状态
        $scope.imgPrefix = window.cfg.picUrl;
        $scope.picUrl = window.cfg.picUrl;
        $scope.utilService = utilService;
        $scope.imgSizeLimit = {
            // size: 500 * 1024,
            width: 750,
            // height: 420
        };
        $scope.iss = {};
        $scope._suite = {};
        $scope.cSuite = {};

        //清空时间
        $scope.clearData = function () {
            $scope.queryIssueParams = {
                from: '',
                to: ''
            };
        };

        // 定义期号对象，组合创建期号数据
        $scope.q = {
            suites: [],
            reset: function () {
                this.suites = [];
                this.from = undefined;
                this.to = undefined;
            }
        };
        $scope.t = {};
        $scope.queryIssueParams = {
            from: '',
            to: '',
            sortType: ''
        };
        //创建期号 -->存储套餐的table
        $scope.issueTableData = [];
        $scope.suiteOfIssueTable = new NgTableParams({
            count: 10000
        }, {
            counts: [],
            dataset: $scope.issueTableData
        });
        //创建套餐 -->存储商品的table
        $scope.productTableData = [];
        $scope.productTable = new NgTableParams({
            count: 10000
        }, {
            counts: [],
            dataset: $scope.productTableData
        });

        $scope._suiteType = {};
        $scope._suiteStatus = {};

        //导出excel选择的数据
        $scope.suiteSelectedArray = [];
        $scope.suiteCheckAllCfg = {
            flag: false
        };
        $scope.suiteExportTableParams = new NgTableParams({
            count: 25
        }, {
            counts: [],
            dataset: $scope.suiteSelectedArray
        });


        // 获取期号列表: [GET] backend/issue?offset=0&limit=20&status=0&from=1480521600000&to=1481328000000
        $scope.issueCfgManageList = function (queryParams) {
            queryParams = queryParams || $scope.queryIssueParams;
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.issueTableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit
                    };
                    p = angular.extend(p, queryParams || {});
                    if (!p.from) {
                        p = _.omit(p, 'from');
                    }
                    if (!p.to) {
                        p = _.omit(p, 'to');
                    }
                    return suiteService.getAllIssueList(angular.copy(p)).then(function (res) {
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit *
                            (params.page() - 1) + 1));
                    });
                }
            });
        };


        // 期号订单状态
        $scope.issueStatusList = CONSTANTS.getList({
            clsOrName: 'ISSUE_STATUS',
            defaultObj: {
                '': '全部'
            }
        });
        $scope.exportExcel = function (containerId, title, arrayStr) {
            if ($scope[arrayStr].length) {
                orderService.formExcel(containerId, title);
            } else {
                window.alert('请选择导出项');
            }

        };
        $scope.createIssueModal;
        $scope.resetIssueForm = function () {
            $scope.iss = {};
            $scope.suiteOfIssueTable.settings().dataset = [];
        };
        // 创建期号
        $scope.createIssue = function (iss) {
            $scope.resetIssueForm();
            $scope.createIssueModal = modalService.initModal({
                appendTo: angular.element(document.getElementById('suiteCfgManage')),
                scope: $scope,
                templateUrl: 'suite/createIssueTemplate.html'
            });

        };
        // 打印单据列表
        $scope.issueSelectedArray = [];
        $scope.issueExportTableParams = new NgTableParams({
            count: 25
        }, {
            counts: [],
            dataset: $scope.issueSelectedArray
        });

        //创建期号 --> 添加套餐
        $scope.addSuiteOfIssue = function (addIssue) {
            if (addIssue != null && addIssue != undefined &&
                addIssue != '') {

                var params = {id: addIssue.suiteId};
                suiteService.getSuite(params).then(function (res) {
                    // 802007417859604480
                    if (res == "" || res == undefined || res == null) {
                        alert('套餐不存在或者套餐ID有误，请更换套餐ID。');
                        return
                    }
                    res.active = true;
                    res.suite.active = true;
                    res.suite.suiteId = res.suite.id;
                    //数据源 $data  dataset
                    $scope.suiteOfIssueTable.settings().dataset.splice(0, 0, res);
                    // $scope.suiteOfIssueTable.settings().dataset.push(res);
                    $scope.suiteOfIssueTable.reload();
                    addIssue.suiteId = '';
                    // 数据源 q.suites
                    /*suiteId
                     *active: boolean
                     */
                });
            } else {
                alert('请输入套餐ID!');
            }
        };

        // 创建期号 --> 变更已添加的套餐状态

        $scope.changeSuiteOfIssueStatus = function (iss) {
            iss.active = !iss.active;
            if ($scope.iss.issue) {
                suiteService.updateIssue($scope.iss.issue).then(function () {
                });
            }
        };

        // 创建期号 --> 删除已添加的套餐 iss
        $scope.deleteSuiteOfIssue = function (index) {
            this.suiteOfIssueTable.settings().dataset.splice(index, 1);
            this.suiteOfIssueTable.reload();
        };

        // 期号配置--> 编辑 --> 删除已添加的套餐 iss
        $scope.deleteEditorSuiteOfIssue = function (iss, index) {
            var delSuiteId = iss.suiteId;
            $scope.iss.issue.suites = _.reject($scope.iss.issue.suites, function (item) {
                return item.suiteId == delSuiteId;
            });
            suiteService.updateIssue($scope.iss.issue).then(function () {
                $scope.issueCfgManageList();
                $scope.suiteOfIssueTable.settings().dataset = $scope.iss.suite.suites;
            });
            this.suiteOfIssueTable.settings().dataset.splice(index, 1);
            this.suiteOfIssueTable.reload();
        };
        $scope.issueStatus = function (item) {
            $scope.issueCfgManageList({
                status: item.code
            });
        };
        var checkInfo = function (data) {
            angular.forEach(data, function (item) {
                var t = _.findWhere($scope.issueSelectedArray, {
                    id: item.issue.id
                });
                if (t) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            });
            return data;
        };
        $scope.issueCheckAllCfg = {
            flag: false
        };

        $scope.updateIssueExportTable = function () {
            $scope.issueExportTableParams.settings().dataset = $scope.issueSelectedArray;
            $scope.issueExportTableParams.reload();
        };
        // 勾选
        $scope.updateSelection = function (e, item, selectedArrayStr, checkAllCfg,
                                           callback) {
            var isChecked;
            if (_.isObject(e)) {
                isChecked = e.currentTarget.checked;
            } else {
                isChecked = e;
            }
            item.checked = isChecked;
            if (isChecked) {
                $scope[selectedArrayStr].push(item);
            } else {
                checkAllCfg.flag = false;
                $scope[selectedArrayStr] = _.without($scope[selectedArrayStr], item);
            }
            callback && callback.call();
        };
        $scope.selectAllOrder = function (e, data, selectedArrayStr, flag, callback) {
            var st = e.currentTarget.checked;
            angular.forEach(data, function (item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item,
                        selectedArrayStr,
                        flag, callback);
                }
            });
        };
        //编辑期号
        $scope.editIssue = function (iss) {
            $scope.resetIssueForm();
            $scope.iss = iss;
            suiteService.getIssue({
                id: iss.issue.id
            }).then(function (res) {
                $scope.iss.issue = res;
                $scope.modal = modalService.initModal({
                    appendTo: angular.element(document.getElementById('suiteCfgManage')),
                    scope: $scope,
                    templateUrl: 'suite/createIssueTemplate.html'
                });

            });
        };
        // 创建期号 --> 保存
        $scope.saveIssue = function (iss, active) {
            var suites = [];
            angular.forEach($scope.suiteOfIssueTable.settings().dataset, function (suite) {
                suites.push({
                    suiteId: suite.suite.id,
                    active: suite.suite.active
                });
            });
            suiteService.createIssue({
                startTime: $scope.q.startTime,
                endTime: $scope.q.endTime + 86399000,
                suites: suites,
                publishImmediately: active
            }).then(function (res) {
                if (res.suites.length < 1) {
                    alert('不可以创建空的期号，请添加套餐。');
                    return
                }
                $scope.createIssueModal.close();
                $scope.issueCfgManageList();
                $scope.q.reset();
            });
        };

        $scope.issueCfgManageList();

        //期号配置 --> 排序
        $scope.sortByIssue = function (item) {
            $scope.queryIssueParams.sortType = item.sortCode;
            $scope.issueCfgManageList();
        };

        /*************************************套餐*****************************************/

        $scope.suiteQueryParams = {
            sortType: '',
            type: '',
            status: '',
            // id: ''
        };
        $scope.disableEdit = false; //默认不允许操作
        /**
         * 获取套餐列表(SuiteWithStatistics[]): [GET] /backend/suite?offset=0&limit=20&type=0&status=0&id={id}
         * [Filter Params: type(NONE,0,1), status(NONE,0,1), id(NONE,{id})]
         */
        $scope.suiteCfgManageList = function (suiteQueryParams) {
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.suiteOfIssueTableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                getData: function (params) {
                    var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        sortType: $scope.suiteQueryParams.sortType,
                        type: $scope._suiteType.code,
                        status: $scope._suiteStatus.code,
                        id: $scope.suiteQueryParams.suiteId
                    };
                    return suiteService.getAllSuiteList(angular.copy(p)).then(function (res) {
                        params.total(res.totalElements);
                        return checkSuiteInfo(utilService.indexArray(res.content, $scope
                                .limit *
                            (params.page() - 1) + 1));
                    });
                }
            })
        };
        $scope.suiteCfgManageList();

        $scope.updateSuiteExportTable = function () {
            $scope.suiteExportTableParams.settings().dataset = $scope.suiteSelectedArray;
            $scope.suiteExportTableParams.reload();
        };
        var checkSuiteInfo = function (data) {
            angular.forEach(data, function (item) {
                var t = _.findWhere($scope.suiteSelectedArray, {
                    id: item.suiteId
                });
                if (t) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            });
            return data;
        };
        // 创建套餐
        $scope._createSuite = function (_suite) {
            $scope.images.imgDetails=[];
            $scope.disableEdit = false;
            $scope.productTable.settings().dataset = [];
            if (_suite) { //复制
                //拿到转换后的 images.imgDetails
                $scope.images.imgDetails = suiteService._getImageDetails(_suite.suite.images);
                $scope.cSuite = {
                    banner: _suite.suite.banner,
                    type: _suite.suite.type,
                    title: _suite.suite.title,
                    des: _suite.suite.des,
                    showProducts: !_suite.suite.showProducts
                };
                if (_suite.suite.type == "0") {
                    $scope.cSuite.features = true;
                }
                if (_suite.suite.type == "1") {
                    $scope.cSuite.standard = true;
                }
                angular.forEach(_suite.suite.productIds, function (id) {
                    $scope.addByProductId({
                        productId: id
                    });
                });
            } else { //新增
                $scope.cSuite = {};
            }
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementById('suiteCfgManage')),
                scope: $scope,
                templateUrl: 'suite/createSuiteTemplate.html'
            });
        };
        //添加图片
        $scope.images = {
            imgDetails: [],
            desImgDetails: []
        };
        var getImgs = function (type) {
            var imgs = type == 1 ? $scope.images.imgDetails : $scope.images
                .desImgDetails;
            return imgs;
        };
        //上传完图片
        $scope.didUploadImg = function (file, type) {
            var imgs = getImgs(type);
            file.index = imgs.length ? _.max(imgs, function (img) {
                return img.index;
            }).index + 1 : 1;
            imgs.push(file);
        };
        //轮播图排序
        $scope.sortImgs = function (type) {
            var imgs = getImgs(type);
            imgs = _.sortBy(imgs, function (img) {
                return img.index;
            });
            if (type == 1) {
                $scope.images.imgDetails = imgs;
            } else {
                $scope.images.desImgDetails = imgs;
            }
        };
        //预览图片
        $scope.imgPreview = function(img) {
            $scope.previewImg = img;
            modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName(
                    'suiteCfgManage')),
                templateUrl: 'imgPreviewer',
                scope: $scope,
                size: 'lg'
            });
        };
        //删除图片
        $scope.deleteImg = function(i, type) {
            var imgs = getImgs(type);
            imgs.splice(i, 1);
        };
        //验证保存商品有效性
        var checkSaveProductImg = function (images) {
            var errorMsg = '';
            if (images.length == 0) { //未上传商品轮播图
                // errorMsg = '请上传商品轮播图';
                alert('请添加图片');
                return
            }
            if (errorMsg.length) {
                utilService.alertError(errorMsg);
                return false;
            }
            return true;
        };
        //创建套餐 --> 添加 SkuCode
        $scope.addBySkuCode = function (addProduct) {
            if ($scope.productTable.settings().dataset.length >= 15) {
                alert('商品数量过多,请酌情添加。(可添加商品数量最多不能大于15个)');
                return;
            }
            //查找数组下面某个属性的值
            // var t = _.find(productData, function (item) {
            //     return item.header.id == addProduct.productId;
            // });
            /*if (t) {
             alert('该SKU ID已存在!');
             return;
             }*/
            if (addProduct == null || addProduct == undefined && addProduct == '') {
                alert('商品编码 不能为空！！！');
                return;
            }
            var params = {skuCode: addProduct.skuCode};
            productService.queryProductByKey(params).then(function (res) {
                // 数据源 $data  dataset
                if (res.totalElements != 1) {
                    alert('请输入正确的商品编码');
                    return;
                }
                $scope.productTable.settings().dataset.splice(0, 0, res.content[0]);
                // $scope.productTable.settings().dataset.push(res.content[0]);
                $scope.productTable.reload();
            });
            //添加成功后清空input
            addProduct.skuCode = "";
        };
        $scope.addByProductId = function (id) {
            var params = {id: id.productId};
            productService.getProductById(params).then(function (res) {
                // 数据源 $data  dataset
                $scope.productTable.settings().dataset.push(res);
                $scope.productTable.reload();
            });
        };
        //创建套餐 --> 删除商品
        $scope._deleteProduct = function (index) {
            //根据元素位置 删除当前行
            this.productTable.settings().dataset.splice(index, 1);
            //根据ID 删除商品
            /*this.productTable.settings().dataset = _.reject(productData, function (item) {
             return item.header.id == id;
             });*/
            this.productTable.reload();
        };
        //发布套餐
        $scope._publishSuite = function (_suite) {
            var params = {id: _suite.suite.id};
            suiteService.publishSuite(params).then(function (res) {
                $scope.suiteCfgManageList();
            })
        };
        // 套餐类型
        $scope.suiteTypeList = CONSTANTS.getList({
            clsOrName: 'SUITE_TYPE',
            defaultObj: {
                '': '全部类型'
            }
        });
        $scope.suiteType = function (item) {
            $scope._suiteType = item;
            $scope.suiteCfgManageList();
        };
        // 套餐状态
        $scope.suiteStatusList = CONSTANTS.getList({
            clsOrName: 'SUITE_STATUS',
            defaultObj: {
                '': '全部状态'
            }
        });
        $scope.suiteStatus = function (item) {
            $scope._suiteStatus = item;
            $scope.suiteCfgManageList();
        };
        //创建套餐 --> 保存
        $scope.saveSuite = function (cSuite) {
            /*if (!checkSaveProductImg($scope.images.imgDetails)) {
                return;
            }*/
            var images =  _.pluck($scope.images.imgDetails, 'path');
            console.log(images);
            var me = this;
            var productIds = [];
            var productData = $scope.productTable.settings().dataset;
            angular.forEach(productData, function (item) {
                productIds.push(item.header.id);
            });
            var params = {
                banner: cSuite.banner,
                // type:cSuite.type,
                title: cSuite.title,
                des: cSuite.des,
                productIds: productIds,
                images:images,
            };
            if (cSuite.showProducts == undefined || cSuite.showProducts == null || cSuite.showProducts == '') {
                params.showProducts = true
            } else {
                params.showProducts = !cSuite.showProducts
            }
            if (cSuite.features) {
                params.type = '0';
            }
            if (cSuite.standard) {
                params.type = '1';
            }
            if (cSuite.features && cSuite.standard) {
                alert('套餐类型选择有误(单选)。');
            }
            if (cSuite.title.length > 10) {
                alert('主标题字符数不能大于10个字符。');
                return;
            }
            if ($scope.productTable.settings().dataset.length < 1) {
                alert('请添加商品！！！');
            } else {
                suiteService.createSuite(params).then(function (res) {
                    $scope.suiteCfgManageList();
                    alert('添加成功！！！');
                    me.$close();
                });
            }
        };
        //删除套餐
        $scope._deleteSuite = function (id) {
            $scope.id = id;
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName(
                    'suiteCfgManage')),
                scope: $scope,
                templateUrl: 'deleteSuiteModel'
            });
        };
        $scope._deleteSuiteOk = function () {
            var me = this;
            suiteService.deleteSuite({id: $scope.id}).then(function (res) {
                $scope.suiteCfgManageList();
                me.$close();
            });
        };
        //查看详情
        $scope.suiteDetails = function (_suite) {
            // $scope.images.imgDetails=[];
            //拿到转换后的 images.imgDetails
            $scope.images.imgDetails = suiteService._getImageDetails(_suite.suite.images);

            $scope.productTable.settings().dataset = [];
            $scope.disableEdit = true;
            $scope.cSuite = {
                banner: _suite.suite.banner,
                type: _suite.suite.type,
                title: _suite.suite.title,
                des: _suite.suite.des,
                // images: _suite.suite.images,
                showProducts: !_suite.suite.showProducts,
            };
            if (_suite.suite.type == "0") {
                $scope.cSuite.features = true;
            }
            if (_suite.suite.type == "1") {
                $scope.cSuite.standard = true;
            }
            angular.forEach(_suite.suite.productIds, function (id) {
                $scope.addByProductId({
                    productId: id
                });
            });
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementById('suiteCfgManage')),
                scope: $scope,
                templateUrl: 'suite/createSuiteTemplate.html'
            });

        };
        //排序
        $scope._sortSuite = function (item) {
            $scope.suiteQueryParams.sortType = item.sortCode;
            $scope.suiteCfgManageList();
            /*$scope.suiteCfgManageList(
             $scope.sortType = item.sortCode //通过参数传给服务端
             );*/
        };
    })
};

},{}],32:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 2016/11/24.
 */
module.exports = function (app) {
    app.controller('suiteDistributionDynamic', function ($scope, NgTableParams, $uibModal, modalService, utilService, printService, CONSTANTS, $mdDialog, suiteService, orderService) {

        $scope.ORDER_STATUS = CONSTANTS.ORDER_STATUS;//订单状态
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE; //订单类型
        $scope.DELIVERY_STATE = CONSTANTS.DELIVERY_STATE; //送货单状态

        $scope.queryParams = {
            suiteName: '',//套餐名称
            startTime: '',//开始时间
            endTime: '',//结束时间
            companyId: '', //公司ID
        };
        //根据企业搜索
        $scope.searchByCompany = function (company) {
            $scope.queryParams.companyId = company.companyId;
            $scope.suiteDistributionDynamicList();
        };
        //清空企业搜索
        $scope.emptyCompanySearch = function () {
            delete $scope.queryParams.companyId;
        };


        /**
         * 套餐配送动态列表
         * 获取配送单列表接口：
         * logistics/order/delivery/findList
         */
        $scope.suiteDistributionDynamicList = function (queryParams) {
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.isSuiteOrderList = '1';//标记
            $scope.tableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        typeSort: $scope.typeSort,  // $scope.typeSort  取 赋值
                        isSuiteOrderList: $scope.isSuiteOrderList,
                        orderStates: $scope.orderStates
                    };
                    if ($scope.queryParams.companyId !== '') {
                        p.companyId = $scope.queryParams.companyId;
                    }
                    if ($scope.queryParams.suiteName !== '') {
                        p.suiteName = $scope.queryParams.suiteName;
                    }
                    if (!isNaN($scope.queryParams.startTime)) {
                        p.startTime = $scope.queryParams.startTime;
                    }
                    if (!isNaN($scope.queryParams.endTime)) {
                        p.endTime = $scope.queryParams.endTime + 86399000;
                    }
                    return suiteService.getSuiteDistributionDynamicList(angular.copy(p)).then(function (res) {
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            })
        };
        $scope.suiteDistributionDynamicList();

        /**
         * 获取期号列表

         $scope.getSuiteList = function () {
                suiteService.getAllIssueList({}).then(function (res) {
                    $scope.issue.issueChoices = res;
                });
            };
         $scope.getSuiteList();

         /!**
         * 期号筛选
         *!/
         $scope.issue = {
                issue: [],
                getDefaultItem: function (value) {
                    // debugger
                    var options = $scope.issueList.list;
                    return _.findWhere(options, {
                            id: value
                        }) || {
                            issueName: '全部'
                        };
                },
                selectItem: function (record) {
                    // debugger
                    if (record.id) {
                        $scope.issue.issueId = record.issueId;
                    }
                }
            };*/
        /*打印*/
        //打印单据列表
        var printOrderArray = [];
        var checkInfo = function (data) {
            angular.forEach(data, function (item) {
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
        /**
         * 勾选
         */
        $scope.updateSelection = function (e, order) {
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
        $scope.selectAllOrder = function (e, data, checkall) {
            var st = e.currentTarget.checked;
            angular.forEach(data, function (item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item);
                }
            });
        };

        /***
         * 批量打印
         */

        //打印
        $scope.printOrder = function (orders) {
            var temps = [];
            var aTemps = [];
            if (Object.prototype.toString.call(orders) == '[object Array]') {
                aTemps = orders;
            } else {
                aTemps = [orders];
            }
            angular.forEach(aTemps, function (item) {
                temps.push(item.orderId);
            });
            var deliveryOrderIds = {
                deliveryOrderIds:temps
            };
            orderService.queryOrderDetails(
                // ids:_.pluck(orders,'id')
                // deliveryOrderIds: temps
                angular.copy(deliveryOrderIds)
            ).then(function (res) {
                var orderDetails = res.deliveryOrderDetails || [];
                $scope.isPrint = true;
                temps = orderService.printOrderDoms(orderDetails, $scope.ORDER_TYPE.SUITEDYNAMIC, $scope);
                console.log(temps);
                $scope.$applyAsync(function () {
                    var htmls = [];
                    console.log(temps);
                    angular.forEach(temps, function (item) {
                        console.log(item[0].innerHTML);
                        htmls.push(item[0].innerHTML);
                    });
                    printService.printByDefaultPrinter(htmls);
                    console.log(htmls);
                });
            });
        };
        $scope.bathMultiPrint = function () {
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

        /**
         * 订单明细打印
         */
        $scope.orderDetailPrint = function (orderType) {
            var html = orderService.getPrintHtmlInOrderModule(orderType);
            $scope.$applyAsync(function () {
                console.log(html);
                printService.printByDefaultPrinter(html);
            });
        };
        /**
         *本期配送次数
         */
        $scope.sortByCurrentDistributionNumber = function (item) {
            $scope.typeSort = item.sortCode;    // 赋值 传给服务端
        };
        /**
         *订单参与人数
         */
        $scope.sortByOrderParticipation = function (item) {
            $scope.typeSort = item.sortCode;    // 赋值 传给服务端
        };
        /**
         * 期号订单明细
         * 获取配送单详情接口：
         * logistics/order/delivery/{orderId}
         */
        $scope.suiteOrderDetail = function (sOrder) {
            $scope.modal = modalService.initModal({
                //appendTo:将modal 加载到指定id的DOM页面
                appendTo: angular.element(document.getElementById('suiteDistributionDynamic')),
                scope: $scope,
                //templateUrl属性值是一个url路径,路径指向一个html模板
                templateUrl: 'suite/suiteDistributionDynamicTemplate.html'
            });
            var params = {orderId: sOrder.orderId};
            orderService.queryDeliveryDetail(params).then(function (res) {
                suiteService.parseSuiteData(res);
                $scope.sOrder = res;
            });
        };
        /**
         * 修改订单状态接口：
         * logistics/order/delivery/{orderId}/state
         */
        $scope.orderFinished = function (sOrder) {
            var me = this;
            var params = {orderId: sOrder.orderId, orderState: sOrder.orderState};
            orderService.modifyDeliveryState(params).then(function (res) {
                me.$close();
            })
        };

        // 套餐状态
        $scope.shipmentStatusList = CONSTANTS.getList({
            clsOrName: 'DELIVERY_STATE',
            defaultObj: {
                '': '全部状态'
            }
        });
        $scope.shipmentStatus = function (item) {
            $scope.orderStates = item.code;
            $scope.suiteDistributionDynamicList();
        };

        /**
         * 套餐实时动态-->明细
         * 配货单商品名称过滤掉建议下架的
         */
        $scope.filterType = function (item) {
            return item.itemType != 3
        };
    })
};



},{}],33:[function(require,module,exports){
module.exports = function(app) {
    app.controller('teaCtrl', function($scope, $compile,orderService, $templateCache, $mdDialog, modalService, printService, orderService, NgTableParams, utilService, CONSTANTS,companyService) {
        $scope.utilService = utilService;
        $scope.ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        $scope.DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        $scope.COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        $scope.SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
         $scope.Tea_Period_Type=CONSTANTS.Tea_Period_Type;


        var DELIVERY_URGENCY = CONSTANTS.DELIVERY_URGENCY;
        var COMPANY_TYPE = CONSTANTS.COMPANY_TYPE;
        var ORDER_TYPE = CONSTANTS.ORDER_TYPE;
        var DELIVERY_STATE = CONSTANTS.DELIVERY_STATE;
        var REFUND_STATE = CONSTANTS.REFUND_STATE;
        var INVENTORY_STATE = CONSTANTS.INVENTORY_STATE;
        var SETTLEMENT_STATE = CONSTANTS.SETTLEMENT_STATE;
        var Tea_Period_Type=CONSTANTS.Tea_Period_Type;
        $scope.offset;
        $scope.limit;
        $scope.curOrderType = { desc: '全部单据类型' };
        $scope.isUpdateTimeChoices=[{ desc: '下单时间', code: '0' }, { desc: '预约送货时间', code: '1' }];
        $scope.orderTypeList = [{ desc: '全部订单', code: '0' }, { desc: '已接单', code: '1' }, { desc: '待接单', code: '2' }, { desc: '已取消', code: '3' }];
        $scope.isPaidList = [{ desc: '全部付款状态', code: '' }, { desc: '未付款', code: '0' }, { desc: '已付款', code: '1' }];
        $scope.invoiceNeedStateList = CONSTANTS.getList('INVOICE_NEED_STATE', true, undefined, undefined, { '': '全部开票需求' });
        $scope.deliveryOrder = {};
        $scope.refundOrder = {};
        $scope.inventoryOrder = {};
        $scope.settlementOrder = {};

        $scope.queryParams = {
            createStartDay: '',
            createEndDay: '',
            updateStartDay: '',
            updateEndDay: '',
            isInvoice: '', //0 不需要开票  1需要开票
            isPaid: '', // 0 没有  1 已支付
            isUpateTime: 0,
        };
        $scope.selectIsUpadate = function(choice) {
            $scope.queryParams.isUpateTime = parseInt(choice.code);
        };
        $scope.selectIsPaid = function(choice) {
            $scope.queryParams.isPaid = choice.code;
            $scope.orderTable.reload();
            $scope.orderTable.page(1);
        };
        $scope.selectInvoicenNeedState = function(choice) {
            $scope.queryParams.isInvoice = choice.code;
            $scope.orderTable.reload();
            $scope.orderTable.page(1);
        };
        var setOrderTable = function(queryParams) {
            $scope.queryParams.startDay = $scope.queryParams.startDay || utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd');
            $scope.queryParams.endDay = $scope.queryParams.endDay || utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd');
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
                        limit: $scope.limit,
                        companyId: $scope.queryParams.companyName?$scope.queryParams.companyName:''
                    };
             switch (parseInt($scope.curOrderType.code)) {
                        case 0:
                            break;
                        case 1:
                            p.expressStatus=2;
                            break;
                        case 2:
                            p.expressStatus=1;
                            p.status=2;
                            break;
                        case 3:
                            p.status=4;
                          break;
                      }
                    if ($scope.queryParams.isInvoice !== '') {
                        p.isInvoice = $scope.queryParams.isInvoice;
                    }
                    if ($scope.queryParams.isPaid !== '') {
                        p.isPaid = $scope.queryParams.isPaid;
                    }
                    if ($scope.queryParams.isUpateTime) {

                        p.startTime = Date.parse($scope.queryParams.startDay.replace(/-/g,'/'));
                        p.endTime = Date.parse($scope.queryParams.endDay.replace(/-/g,'/')+' 23:59:59');
                        p.timeType=2;
                    } else {
                        p.startTime = Date.parse($scope.queryParams.startDay.replace(/-/g,'/'));
                        p.endTime = Date.parse($scope.queryParams.endDay.replace(/-/g,'/')+' 23:59:59');
                        p.timeType=1;
                    }

                    return orderService.queryTeaList(p).then(function(res) {
                        params.total(res.totalElements);
                        var data= $scope.addTeaType(res.content);
                        return checkInfo(utilService.indexArray(data, $scope.limit * (params.page() - 1) + 1));
                    });
                }
            });
        };
        //setOrderTable();
        // 下午茶类型转换
          $scope.addTeaType=function(data){
            if (Object.prototype.toString.call(data) == '[object Array]') {
                teaArray = data;
            } else {
                teaArray = [data];
            }
             angular.forEach(teaArray, function(item, i) {
              if(item.expressStatus==2){
                item.type=1
              }else if(item.expressStatus==1&&item.status==2){
               item.type=2
              }else if(item.status==4){
               item.type=3

              }else{}

             })
             return teaArray;
          }
        //搜索单据
        $scope.searchTea = function(queryParams) {
            queryParams = queryParams || {};
            $scope.queryParams.companyName = queryParams.companyName;
            $scope.queryParams.startDay = queryParams.startTime ? utilService.parseTimeByDate(queryParams.startTime, 'yyyy-MM-dd') :
                utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd');
            $scope.queryParams.endDay = queryParams.endTime ? utilService.parseTimeByDate(queryParams.endTime, 'yyyy-MM-dd') :
                utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd');
            $scope.queryParams.isUpateTime = queryParams.isUpateTime;
            setOrderTable();
        };
        //获取单据状态描述
        $scope.getOrderStateDesc = function(orderType, orderState) {
            var orderStateDesc = '';
            switch (orderType) {
                case ORDER_TYPE.DELIVERY:
                    orderStateDesc = DELIVERY_STATE.DESC[orderState];
                    break;
                case ORDER_TYPE.REFUND:
                    orderStateDesc = REFUND_STATE.DESC[orderState];
                    break;
                case ORDER_TYPE.INVENTORY:
                    orderStateDesc = INVENTORY_STATE.DESC[orderState];
                    break;
                case ORDER_TYPE.SETTLEMENT:
                    orderStateDesc = SETTLEMENT_STATE.DESC[orderState];
                    break;
            }
            return orderStateDesc;
        };
        //选择单据类型
        $scope.selectOrderType = function(item) {

            $scope.curOrderType = item;
            setOrderTable();
        };
        //明细
        $scope.checkOrderDetail = function(orderType, orderId,companyName) {
            //$scope.companyName=companyName;
            orderService.checkOrderDetail(orderType, orderId, $scope,false,companyName);
        };
        //获取送货单详情
        var getDeliveryDetail = function(opts) {
            orderService.queryDeliveryDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.deliveryOrder = res;
                $scope.deliveryOrder.name = '送货单' + '-' + $scope.deliveryOrder.companyName + '-' + $scope.deliveryOrder.shelfName +
                    '(' + utilService.parseTimeByLong($scope.deliveryOrder.createTime, 'yyyyMMddhhmmss') + ')';
                $scope.deliveryOrder.putSaleProductList = [];
                $scope.deliveryOrder.supplementProductList = [];
                $scope.deliveryOrder.pullSaleProductList = [];

                angular.forEach($scope.deliveryOrder.items, function(item, i) {
                    switch (parseInt(item.itemType)) {
                        case 1:
                            $scope.deliveryOrder.putSaleProductList.push(item);
                            break;
                        case 2:
                            $scope.deliveryOrder.supplementProductList.push(item);
                            break;
                        case 3:
                            $scope.deliveryOrder.pullSaleProductList.push(item);
                            break;
                    }
                });
                opts.didLoadData();
            });
        };

        //获取退货单详情
        var getRefundDetail = function(opts) {
            orderService.queryRefundDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.refundOrder = res;
                $scope.refundOrder.name = '退货单' + '-' + $scope.refundOrder.companyName + '-' + $scope.refundOrder.shelfName +
                    '(' + utilService.parseTimeByLong($scope.refundOrder.createTime, 'yyyyMMddhhmmss') + ')';
                opts.didLoadData();

            });

        };
        //获取盘点单详情
        var getInventoryDetail = function(opts) {
            orderService.queryInventoryDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.inventoryOrder = res;
                $scope.inventoryOrder.name = '盘点单' + '-' + $scope.inventoryOrder.companyName + '-' + $scope.inventoryOrder.shelfName +
                    '(' + utilService.parseTimeByLong($scope.inventoryOrder.createTime, 'yyyyMMddhhmmss') + ')';
                opts.didLoadData();
            });
        };
        //获取结算单详情
        var getSettlementDetail = function(opts) {
            orderService.querySettlementDetail({ 'orderId': opts.orderId }).then(function(res) {
                $scope.settlementOrder = orderService._parseSettlementDetailData(res);
                $scope.settlementOrder.name = '结算单' + '-' + $scope.settlementOrder.companyName +
                    '(' + utilService.parseTimeByLong($scope.settlementOrder.createTime, 'yyyyMMddhhmmss') + ')';
                opts.didLoadData();
            });
        };
        //详细Modal中导出Excel（移至service）
        //列表中导出Excel
        $scope.exportExcelOnList = function(orderType, orderId) {
            orderService.exportExcel(orderType, orderId, $scope);
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
            var teaOrderIds = [];
            var orderArray = [];
            if (Object.prototype.toString.call(orders) == '[object Array]') {
                orderArray = orders;
            } else {
                orderArray = [orders];
            }
            angular.forEach(orderArray, function(item) {
                teaOrderIds.push(item.id);
            });
            orderService.teaOrderDetails({
                orderIds: teaOrderIds
            }).then(function(res) {
                var teaOrderDetails = res|| [];
                var temps = [];
                angular.forEach(teaOrderDetails, function(detail) {
                    var orderType=ORDER_TYPE.SETTLEMENT;
                    var scope = orderService.teaOrderScope(ORDER_TYPE.TEAORDER, detail, $scope.$new(true));
                    scope.isPrint = true;
                    temps.push(angular.element('<div></div>').append(orderService.getTemplateDomByType(ORDER_TYPE.TEAORDER, scope)));
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
        $scope.printTeaHtml= function(orderType) {
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
       $scope.keyremark=function(e,remark,id){
             if (e.keyCode == 13) { //回车键
                  orderService.modifyRemark({
                        orderId: id,
                        remark:remark
                    }).then(function(res) {
                        
                    });    
                    }
            
               
      
         };
         $scope.cancelOrder=function(id){
            orderService.cancelTea({
                orderId:id

            }).then(function(res) {
                $scope.teaDetail.order.type=100
                    });    
         } ;
         $scope.acceptOrder=function(id){
            orderService.acceptTea({
                orderId:id

            }).then(function(res) {
                   $scope.teaDetail.order.type=100     
                    });    
         } ;

    });
};

},{}],34:[function(require,module,exports){
module.exports = function(app) {
  app.controller('template', function($scope, $mdDialog, $filter,
    NgTableParams, templateService, CONSTANTS, cacheService, utilService) {
    $scope.template = {
      name: ''
    };
    $scope.queryTemplateParams = {
      type: '',
      name: '',
      status: ''
    };
    $scope.queryTemplateConfig = {
      selectCompanyType: function(item) {
        $scope.queryTemplateParams.type = item.code;
        $scope.queryTemplateList();
      },
      selectTemplateStatus: function(item) {
        $scope.queryTemplateParams.status = item.code;
        $scope.queryTemplateList();
      },
      companyTypes: CONSTANTS.getList({
        clsOrName: 'TEMPLATE_TYPE',
        defaultObj: {
          '': '全部类型'
        }
      }),
      templateStatuses: CONSTANTS.getList({
        clsOrName: 'TEMPLATE_STATUS',
        defaultObj: {
          '': '全部状态'
        }
      })
    };

    $scope.limit = 25;
    $scope.templateList = [];
    $scope.templateTableHead = [];
    $scope.templateTable = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      getData: function(params) {
        var p = {};
        $scope.offset = $scope.limit * (params.page() - 1);
        p = {
          offset: $scope.offset,
          limit: $scope.limit
        };
        return templateService.queryTemplateList(angular.extend(p, $scope.queryTemplateParams))
          .then(function(res) {
            $scope.templateList = res.content;
            params.total(res.totalElements);
            return utilService.indexArray(res.content, $scope.offset +
              1);
          });
      }
    });
    $scope.queryTemplateList = function() {
      $scope.templateTable.reload();
      $scope.templateTable.page(1);
    };
    $scope.createTemplate = function() {
      window.location.hash = '#/templateEdit';
    };
    $scope.editTemplate = function(t) {
      window.location.hash = '#/templateEdit/' + t.id;
    };
    $scope.publishTemplate = function(t) {
      templateService.publishTemplate({
        id: t.id,
        type: t.type,
        status: CONSTANTS.TEMPLATE_STATUS.PUBLIC,
      }).then(function(res) {
        $scope.queryTemplateList();
      });
    };
    $scope.deleteTemplate = function(t) {
      templateService.deleteTemplate({
        id: t.id
      }).then(function() {
        $scope.templateTable.reload();
        $scope.templateTable.page(1);
      });
    };
  });
};

},{}],35:[function(require,module,exports){
module.exports = function(app) {
  app.controller('templateEdit', function($scope, $routeParams,
    $mdSidenav, uploadService, utilService, CONSTANTS,
    NgTableParams, templateService, $filter, $mdDialog) {
    var templateId = $routeParams.templateId || '';
    $scope.CONSTANTS = CONSTANTS;
    $scope.picUrl = window.cfg.picUrl;
    $scope.templateDefault = {
      name: '',
      creatTime: '',
      updateTime: '',
      type: '',
      status: '',
      module: []
    };
    $scope.template = {
      name: '',
      creatTime: '',
      updateTime: '',
      type: '',
      status: '',
      module: []
    };
    $scope.modules = $scope.template.module || [];
    $scope.fullWidth = 4;
    $scope.defaultModule = {
      width: '',
      height: '',
      mergeNext: false,
      isHide: false,
      contents: [{
        x: '',
        y: '',
        width: '',
        height: '',
        contentType: '',
        contentLink: [],
        contentImage: []
      }]
    };
    //侧边栏选中的内容元素
    $scope.newContent = {
      contentType: '',
      disableAlert: '',
      isDisable: false,
      isPop: false,
      noBorder: false,
      contentLink: [],
      contentImage: []
    };
    //所有模块类型及其布局
    $scope.allModules = [
      //1行
      {
        width: $scope.fullWidth,
        height: 1,
        contents: [{
          x: 0,
          y: 0,
          width: $scope.fullWidth,
          height: 1
        }]
      },
      //1行2列
      {
        width: $scope.fullWidth,
        height: 1,
        contents: [{
          x: 0,
          y: 0,
          width: 2,
          height: 1
        }, {
          x: 2,
          y: 0,
          width: 2,
          height: 1
        }]
      },
      //1行4列
      {
        width: $scope.fullWidth,
        height: 1,
        contents: [{
          x: 0,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 1,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 2,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 3,
          y: 0,
          width: 1,
          height: 1
        }]
      },
      //2行
      {
        width: $scope.fullWidth,
        height: 2,
        contents: [{
          x: 0,
          y: 0,
          width: $scope.fullWidth,
          height: 2
        }]
      },
      //2行2列
      {
        width: $scope.fullWidth,
        height: 2,
        contents: [{
          x: 0,
          y: 0,
          width: 2,
          height: 2
        }, {
          x: 2,
          y: 0,
          width: 2,
          height: 2
        }]
      },
      //2行，口田
      {
        width: $scope.fullWidth,
        height: 2,
        contents: [{
          x: 0,
          y: 0,
          width: 2,
          height: 2
        }, {
          x: 2,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 2,
          y: 1,
          width: 1,
          height: 1
        }, {
          x: 3,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 3,
          y: 1,
          width: 1,
          height: 1
        }]
      }
    ];
    $scope.allContentTypes = CONSTANTS.getList('CONTENT_TYPE', false);
    $scope.allTemplateTypes = CONSTANTS.getList('TEMPLATE_TYPE', false);
    $scope.allTemplateStatuses = CONSTANTS.getList('TEMPLATE_STATUS',
      false);
    $scope.disableChoices = [{
      name: '允许',
      value: false
    }, {
      name: '禁止',
      value: true
    }];
    $scope.popChoices = [{
      name: '无',
      value: false
    }, {
      name: '有',
      value: true
    }];
    $scope.borderChoices = [{
      name: '否',
      value: false
    }, {
      name: '是',
      value: true
    }];
    $scope.currentEditContent = $scope.newContent;

    var init = function() {
      //获取模板详情
      if (templateId) {
        templateService.queryTemplateDetail({
          id: templateId
        }).then(function(res) {
          $scope.template = res;
        });
      }
    };
    $scope.saveTemplate = function() {
      var params = angular.copy($scope.template);
      var fn = '';
      if (params.id) {
        fn = 'editTemplate';
      } else {
        fn = 'createTemplate';
      }
      if (!params.name || !params.type || !params.status) {
        $mdDialog.show($mdDialog.alert({
          title: '提示',
          textContent: '请完整填写模版信息',
          ok: '确认',
          cancel: '取消'
        }));
        return;
      }
      templateService[fn](params).then(function(res) {
        window.location.hash = '#template';
      });
    };
    $scope.resetEditTemplate = function() {
      if (templateId) {
        init();
      } else {
        $scope.template = angular.copy($scope.templateDefault);
        $scope.modules = $scope.template.module;
      }
    };
    //模块
    //delete module
    $scope.deleteModule = function(index) {
      $scope.modules.splice(index, 1);
    };
    $scope.moveModule = function(index, isUp) {
      var beforeIndex = isUp ? index - 1 : index;
      if ((isUp && !index) || (!isUp && index == $scope.modules.length -
          1)) {
        return;
      }
      $scope.modules[beforeIndex] = $scope.modules.splice(beforeIndex +
        1, 1,
        $scope.modules[beforeIndex])[0];
    };
    $scope.toggleModuleConfigWin = function() {
      $mdSidenav('right').toggle();
    };
    $scope.selectModule = function(m) {
      var module = angular.extend(angular.copy($scope.defaultModule),
        angular.copy(
          m));
      $scope.modules.push(module);
      $scope.toggleModuleConfigWin();
    };
    //内容
    $scope.editContent = function(moduleIndex, x, y) {
      $scope.currentEditModule = $scope.modules[moduleIndex];
      angular.forEach($scope.currentEditModule.contents, function(
        content,
        index) {
        if (content.x == x && content.y == y) {
          $scope.currentEditContentIndex = index;
          $scope.currentEditContent = angular.extend(angular.copy(
              $scope.newContent),
            angular.copy(content));
        }
      });
      console.log($scope.currentEditContent);
      $scope.toggleEditContentWin();
    };
    $scope.toggleEditContentWin = function() {
      $mdSidenav('left').toggle();
    };
    $scope.bannerContentElementPanel;
    $scope.bannerContent = {
      link: '',
      image: '',
      isEdit: false,
      index: '',
      reset: function() {
        this.link = '';
        this.image = '';
        this.isEdit = false;
        this.index = '';
      }
    };
    $scope.addBannerElement = function() {
      $scope.bannerContent.reset();
      $scope.bannerContentElementPanel.showDialog($scope);
    };
    $scope.editBannerElement = function(index) {
      $scope.bannerContent.isEdit = true;
      $scope.bannerContent.index = index;
      $scope.bannerContent.image = $scope.currentEditContent.contentImage[
        index];
      $scope.bannerContent.link = $scope.currentEditContent.contentLink[
        index];
      $scope.bannerContentElementPanel.showDialog($scope);
    };
    $scope.confirmBannerContent = function() {
      $scope.bannerContentElementPanel.closeDialog($scope);
      var index = $scope.bannerContent.index;
      if ($scope.bannerContent.isEdit) {
        $scope.currentEditContent.contentLink[index] =
          $scope.bannerContent.link;
        $scope.currentEditContent.contentImage[index] =
          $scope.bannerContent.image;
      } else {
        $scope.currentEditContent.contentLink.push($scope.bannerContent
          .link);
        $scope.currentEditContent.contentImage.push($scope.bannerContent
          .image);
      }
    };
    $scope.confirmEditContent = function() {
      $scope.currentEditModule.contents[$scope.currentEditContentIndex] =
        $scope.currentEditContent;
      $scope.toggleEditContentWin();
    };
    $scope.cancelEditContent = function() {
      $scope.toggleEditContentWin();
    };
    $scope.deleteCurrentEditContent = function(index) {
      $mdDialog.show($mdDialog.confirm({
        title: '提示',
        textContent: '删除后无法恢复，确认删除？',
        ok: '确认',
        cancel: '取消'
      })).then(function() {
        $scope.currentEditContent.contentImage.splice(index, 1);
        $scope.currentEditContent.contentLink.splice(index, 1);
      });
    };
    $scope.changeMergeNext = function(module) {
      if (module.mergeNext == 'true' || module.mergeNext == true) {
        module.mergeNext = false;
      } else {
        module.mergeNext = true;
      }
    };
    $scope.$watch('template', function(v) {
      $scope.modules = v.module || [];
    })
    init();
  });
};
},{}],36:[function(require,module,exports){
/*零钱发放*/
module.exports = function(app) {
    app.controller('welfare', function($scope, $mdDialog, $element, $mdSidenav, $filter, uploadService, NgTableParams, welfareService, staffService, modalService, companyService, utilService, modalService, CONSTANTS) {
        var offset = 0;
        var limit = 25;
        $scope.queryWelfareConfig = {
            queryWelfareKey: ''
        };
        $scope.queryStaffConfig = {
            queryStaffKey: ''
        };
        $scope.queryWelfareConfig = {
            choices: [{
                value: 0,
                desc: '全部'
            }, {
                value: 1,
                desc: '待审核'
            }, {
                value: 2,
                desc: '审核通过'
            }, {
                value: 3,
                desc: '审核未通过'
            }],
            defaultItem: {
                value: 0,
                desc: '全部'
            },
            queryWelfareType: 0,
            queryWelfareKey: '',
            getOptionByValue: function(value) {
                var options = this.choices;
                return _.findWhere(options, { value: value });
            },
            selectItem: function(record) {
                this.defaultItem = record;
                $scope.queryWelfareConfig.queryWelfareType = record.value;
            }
        };
        $scope.welfareOfCompany = {
            companyId: '',
            offset: offset,
            limit: limit,
            welfares: [],
            getQueryParams: function(companyId) {
                //公司不同
                if (this.companyId !== companyId) {
                    this.reset();
                    this.companyId = companyId;
                }
                return {
                    offset: this.offset,
                    limit: this.limit,
                    companyId: this.companyId
                }
            },
            setWelfareOfCompany: function(welfares) {
                this.offset += welfares.length;
                this.welfares = $(this.welfares).concat(welfares);
            },
            reset: function() {
                this.offset = offset;
                this.companyId = '';
                this.welfares = [];
            }
        },
        $scope.welfareHeads = [{
            title: '序号',
            field: 'index'
        }, {
            title: '发放时间',
            field: 'createTime',
            getValue: function(value) {
                return '<span>' + $filter('date')(value, 'yyyy.MM.dd HH:mm:ss') + '</span>';
            },
            show: true
        }, {
            title: '发放企业',
            field: 'companyName',
            show: true,
            getValue: function(v) {
                return '<span  style="width:180px;display:inline-block;">' + v + '</span>';
            }
        }, {
            title: '发放总金额',
            field: 'orderFee',
            show: true,
            getValue: function(value) {
                return '<span  style="width:180px;display:inline-block;">' + $filter('rmb')(value) + '</span>';
            }
        }, {
            title: '操作账号',
            field: 'companyManagerName'
        }, {
            title: '手机号',
            field: 'mobile'
        }, {
            title: '座机',
            field: 'tel'
        }, {
            title: '状态',
            field: 'orderState',
            getValue: function(value) {
                return '<span class="text text-' + $filter('style')(value, 'WELFARE_STATE') + ' state">' + $filter('desc')(value, 'WELFARE_STATE') + '</span>';
            }
        }, {
            title: '操作',
            field: 'command',
            getValue: function(v, record, index, scope, column) {
                return '<button class="btn btn-default btn-sm"  ng-click="showWelfareListOfCompany(' + "'" + record.companyId + "'" + ',$event)" ><span class="glyphicon glyphicon-list"></span></button>' +
                    '&nbsp&nbsp&nbsp' +
                    '<button class="btn btn-primary btn-sm" href="javascript:;" ng-disabled="(' + record.orderState + '!=CONSTANTS.WELFARE_STATE.WAIT_AUDIT)" ng-click="auditWelfare(' + "'" + record.orderId + "'" + ",'pass'" + ',$event)">通过</button>' +
                    '&nbsp&nbsp&nbsp' +
                    '<button class="btn btn-danger btn-sm" href="javascript:;" ng-disabled="(' + record.orderState + '!=CONSTANTS.WELFARE_STATE.WAIT_AUDIT)" ng-click="auditWelfare(' + "'" + record.orderId + "'" + ",'refuse'" + ',$event)">拒绝</button>';
            }
        }];

        $scope.welfareDetailTableHeads = [{
            title: '序号',
            field: 'index'
        }, {
            title: '手机号',
            field: 'mobile'
        }, {
            title: '备注名',
            field: 'remark'
        }, {
            title: '昵称',
            field: 'alias'
        }, {
            title: '金额',
            field: 'fee',
            getValue: function(value) {
                return '<span  style="width:180px;display:inline-block;">' + $filter('rmb')(value) + '</span>';
            }
        }];
        $scope.staffHeads = [{
            title: '序号',
            field: 'index'
        }, {
            title: '手机号',
            field: 'mobile'
        }, {
            title: '备注名',
            field: 'remark'
        }, {
            title: '昵称',
            field: 'alias'
        }, {
            title: '头像',
            field: 'avatar',
            getValue:function (v,record) {
                return '<img class="head-portrait" src='+record.avatar+'/>';
            }
        }, {
            title: '操作',
            field: 'command',
            getValue: function(v, record, index, scope, column) {
                return '<button class="btn btn-default btn-sm"  ng-click="openEditStaffWin(\'' + record.id + '\')" ><span class="glyphicon glyphicon-pencil"></span></button>' +
                    '&nbsp&nbsp&nbsp' +
                    '<button class="btn btn-danger btn-sm" href="javascript:;" ng-click="deleteStaff(\'' + record.id + '\')"><span class="glyphicon glyphicon-trash"></span></button>';
            }
        }];
        //零钱表格
        var welfareDetailModal;
        $scope.CONSTANTS = CONSTANTS;
        $scope.welfareList = [];
        $scope.welfareDetails = [];
        $scope.welfareDetailCompany = {};
        $scope.offset = offset;
        $scope.limit = limit;
        $scope.welfareTable = new NgTableParams({
            count: 25
        }, {
            counts: [],
            getData: function(params) {
                var pageParams = utilService.resetPagination($scope, $scope.limit * (params.page() - 1), limit);
                var p = $.extend(pageParams, { companyId: $scope.welfareDetailCompany.companyId });
                return welfareService.queryWelfareList(p).then(function(res) {
                    $scope.welfares = res.content;
                    params.total(res.totalElements);
                    return utilService.indexArray(res.content, $scope.offset + 1);
                });
            }
        });
        $scope.welfareDetailNote = '';
        $scope.welfareDetail = {
            remark: '',
            createTime: 0
        }
        $scope.welfareDetailTable = new NgTableParams({
            count: 10
        }, {
            counts: []
        });
        $scope.welfareDetailCtrl;
        $scope.selectWelfareCompany = function(company) {
            $scope.welfareDetailCompany = company;
            $scope.welfareTable.reload();
        };
        $scope.searchWelfareByKey = function() {
            //$scope.welfareTable.reload();
        };

        $scope.auditWelfare = function(orderId, type, e) {
            e.preventDefault();
            e.stopPropagation();
            var orderState = type == 'refuse' ? CONSTANTS.WELFARE_STATE.REFUSED : CONSTANTS.WELFARE_STATE.PASSED;
            welfareService.auditWelfare({
                orderId: orderId,
                orderState: orderState
            }).then(function() {
                $scope.welfareTable.reload();
                $mdSidenav('left').close();
            });
        };
        //公司零钱列表
        $scope.showWelfareListOfCompany = function(companyId, e) {
            //点击重置页码
            if (e) {
                $scope.welfareOfCompany.reset();
            }
            var params = $scope.welfareOfCompany.getQueryParams(companyId);
            welfareService.queryWelfareList(params).then(function(res) {
                $scope.welfareOfCompany.setWelfareOfCompany(res.content);
                if (e) {
                    $mdSidenav('left').toggle();
                }
            });
        };
        $element.find('md-list').on('scroll', _.debounce(function(e) {
            var height = $(this).height();
            var bottom = this.scrollHeight - this.scrollTop;
            if (height + 50 >= bottom) {
                $scope.showWelfareListOfCompany($scope.welfareOfCompany.companyId);
            }
        }, 300));
        //零钱详情

        $scope.showWelfareDetail = function(orderId, item) {
            $scope.welfareDetail.remark = item.remark;
            $scope.welfareDetail.createTime = item.createTime;
            welfareService.queryWelfareObjectList({
                orderId: orderId,
                offset: offset,
                limit: 100000
            }).then(function(res) {
                $scope.welfareDetails = res.content;
                $scope.welfareDetailTable.settings({
                    dataset: utilService.indexArray(res.content, 1)
                });
                $scope.$applyAsync(function() {
                    $scope.welfareDetailCtrl.showDialog($scope);
                });
            });
        };
        /*员工管理*/
        var staffEditModal;
        $scope.staffDetailCtrl;
        $scope.currentStaff = {
            mobile: '',
            alias: '',
            avatar: '',
            remark: ''
        };
        $scope.staff = {
            companyId: '',
            keyword: '',
            items: []
        };
        $scope.staffTable = new NgTableParams({
            count: 25
        }, {
            counts: [],
            getData: function(params) {
                if (!$scope.staff.companyId) {
                    return;
                }
                var pageParams = {
                    limit: $scope.limit,
                    offset: $scope.limit * (params.page() - 1)
                };
                var p = $.extend(pageParams, {
                    companyId: $scope.staff.companyId,
                    queryParam: $scope.staff.keyword
                });
                return staffService.queryStaffList(p).then(function(res) {
                    $scope.staff.items = res.content;
                    params.total(res.totalElements);
                return utilService.indexArray(res.content,  $scope.limit * (params.page() - 1) + 1);
                });
            }
        });
        $scope.searchStaffByKey = function(value) {
            $scope.staff.keyword = value;
            $scope.staffTable.reload();
        };
        $scope.selectStaffCompany = function(company) {
            $scope.staff.companyId = company.companyId;
            $scope.staffTable.reload();
        };
        $scope.showWelfareSendWin = function() {
            $mdSidenav('right').toggle();
        };
        $scope.getStaffList = function() {
            staffService.queryStaffList();
        };
        $scope.openEditStaffWin = function(staffId) {
            staffService.queryStaffDetail({
                staffId: staffId
            }).then(function(res) {
                $scope.currentStaff = res;
                staffEditModal = modalService.initModal({
                    appendTo: $element,
                    scope: $scope,
                    ok: $scope.editStaffConfirm
                });
            });
        };
        $scope.editStaffConfirm = function() {
            console.log($scope.currentStaff);
            return staffService.editStaff($scope.currentStaff).then(function() {
                $scope.staffTable.reload();
            });
        };
        $scope.importStaffExcel = function() {
            uploadService.uploadFile().then(function(file) {
                staffService.examinExcel({
                    companyId: $scope.staff.companyId,
                    file: file
                }).then(function(res) {
                    if (res.code == 200) {
                        $mdDialog.show($mdDialog.confirm()
                                .title('成功')
                                .textContent('excel校验成功，是否开始导入?')
                                .ok('确定')
                                .cancel('取消'))
                            .then(function() {
                                staffService.importStaffExcel({
                                    companyId: $scope.staff.companyId,
                                    file: file
                                }).then(function() {
                                    $scope.staffTable.reload();
                                    $mdDialog.show($mdDialog.alert()
                                        .clickOutsideToClose(true)
                                        .title('成功')
                                        .textContent('导入成功！')
                                        .ok('确定'));
                                });
                            })
                    } else {
                        $mdDialog.show(
                            $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('失败')
                            .textContent(res.consoleLog.join(';'))
                            .ok('确定')
                        );
                    }
                });
            });
        };
        $scope.exportStaffExcel=function(){
            window.open('http://res.kingxique.com/hollpin/crm/template/%E5%91%98%E5%B7%A5%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xls','_blank');
        };
        $scope.deleteStaff = function(staffId) {
            staffService.deleteStaff({
                staffId: staffId
            }).then(function() {
                $scope.staffTable.reload();
            });
        };
    });
};

},{}],37:[function(require,module,exports){
module.exports=[require("./controller/account.js"),require("./controller/app.js"),require("./controller/commentsManage.js"),require("./controller/company.js"),require("./controller/configurationInformation.js"),require("./controller/deadStock.js"),require("./controller/deliveryEdit.js"),require("./controller/finance.js"),require("./controller/goodsChooseHistory.js"),require("./controller/goodsChooseOrder.js"),require("./controller/holidayWelfare.js"),require("./controller/home.js"),require("./controller/inStorage.js"),require("./controller/information.js"),require("./controller/issueDynamic.js"),require("./controller/labelsManagement.js"),require("./controller/newProductRecommend.js"),require("./controller/order.js"),require("./controller/pickOrder.js"),require("./controller/positionManage.js"),require("./controller/product.js"),require("./controller/promotionOrder.js"),require("./controller/promotionProduct.js"),require("./controller/promotionSuite.js"),require("./controller/role.js"),require("./controller/salesStatistics.js"),require("./controller/shelf.js"),require("./controller/shelfDetail.js"),require("./controller/shelfManage.js"),require("./controller/suiteCfgManage.js"),require("./controller/suiteDistributionDynamic.js"),require("./controller/teaInformation.js"),require("./controller/template.js"),require("./controller/templateEdit.js"),require("./controller/welfare.js")]
},{"./controller/account.js":2,"./controller/app.js":3,"./controller/commentsManage.js":4,"./controller/company.js":5,"./controller/configurationInformation.js":6,"./controller/deadStock.js":7,"./controller/deliveryEdit.js":8,"./controller/finance.js":9,"./controller/goodsChooseHistory.js":10,"./controller/goodsChooseOrder.js":11,"./controller/holidayWelfare.js":12,"./controller/home.js":13,"./controller/inStorage.js":14,"./controller/information.js":15,"./controller/issueDynamic.js":16,"./controller/labelsManagement.js":17,"./controller/newProductRecommend.js":18,"./controller/order.js":19,"./controller/pickOrder.js":20,"./controller/positionManage.js":21,"./controller/product.js":22,"./controller/promotionOrder.js":23,"./controller/promotionProduct.js":24,"./controller/promotionSuite.js":25,"./controller/role.js":26,"./controller/salesStatistics.js":27,"./controller/shelf.js":28,"./controller/shelfDetail.js":29,"./controller/shelfManage.js":30,"./controller/suiteCfgManage.js":31,"./controller/suiteDistributionDynamic.js":32,"./controller/teaInformation.js":33,"./controller/template.js":34,"./controller/templateEdit.js":35,"./controller/welfare.js":36}],38:[function(require,module,exports){
module.exports = function(app) {
  app.directive('blockAdd', function() {
    return {
      restrict: 'AE',
      templateUrl: 'directive/blockAdd.html',
      transclude: true,
      scope: {  'addBlock': '&' },
      controller: function($scope, $element, $attrs, companyService) {
       $scope.blockSelectChoices=[{ desc: '商品名称', code: '0' }, {desc: '商品id',code: '1'}];
       $scope.type=0;
       $scope.productName="";
       $scope.add=function(){
          $scope.addBlock({
          productId:$scope.productId,
          reason:$scope.reason,
          callback:$scope.init
        })
       };
       $scope.init=function(){
           $scope.productName="";
           $scope.productId="";
           $scope.reason="";
       };
       $scope.$watch('productId',function(v){
       })
      $scope.typeSelect=function(item){
        $scope.type=item.code;
        console.log( $scope.type)
      }
      }
    };
  });
};
},{}],39:[function(require,module,exports){
module.exports = function(app) {
  app.directive('companySearcher', function() {
    return {
      restrict: 'E',
      templateUrl: 'directive/companySearcher.html',
      transclude: true,
      scope: { 'selectCompany': '&', 'subclass': '@', 'emptyCallback': '&' },
      controller: function($scope, $element, $attrs, companyService) {

        $scope.subclass ? $scope.rootClass = $scope.subclass : $scope.rootClass =
          'col-md-2';
        $scope.typeHeadConfigs = {
          debounce: {
            'default': 500,
            'blur': 250
          },
          getterSetter: true
        };
        $scope.changeValue = function(str) {
          if (!str) {
            $scope.emptyCallback();
          }
        };
        $scope.getTypeHeadOptions = function(value) { //搜索加载
          return companyService.queryCompanyList({
            offset: 0,
            limit: 5,
            delState: 0,
            companyName: value
          }).then(function(res) {
            return res.content;
          });
        };
        $scope.selectTypeHeadOptions = function(item) { //搜索选择
          $scope.selectCompany({ 'company': item });
        };
      }
    };
  });
};
},{}],40:[function(require,module,exports){
/*
 *编译html
 * compile-html
 */
module.exports = function(app) {
    app.directive('compileHtml', function() {
        return {
            restrict: 'A',
            transclude: true,
            scope: false,
            controller: function($scope, $element, $attrs, $compile) {
                $scope.$watch($attrs.compileHtml, function(html) {
                    var str = '';
                    if (Object.prototype.toString.call(html) == '[object Object]') { //数组
                        str = html.$$unwrapTrustedValue();
                    } else { //字符串
                        str = html && html.toString();
                    }
                    $element.append($compile('<span>' + str + '</span>')($scope));
                });
            }
        };
    });
};

},{}],41:[function(require,module,exports){
module.exports = function(app) {
    app.directive('count', function($mdPanel, $templateCache, $compile) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                num: '=',
                onChange: '=',
            },
            templateUrl: 'directive/count.html',
            link: function($scope, $element) {
                $scope.plusCount = function() {
                    $scope.num = $scope.num + 1;
                     event.stopPropagation();
                };
                $scope.minCount = function() {
                    $scope.num = $scope.num - 1;
                     event.stopPropagation();
                };
                $scope.dblclick = function() {
                   event.stopPropagation(); 
                };

                $scope.$watch('num', function() {
                    $scope.onChange.call(this);
                   
                });
            }
        };
    });
};

},{}],42:[function(require,module,exports){
module.exports = function(app) {
    app.directive('dateFormate', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {

                ctrl.$parsers.push(function(data) {
                    
                    //convert data from view format to model format
                    return data
                });
                ctrl.$formatters.push(function(data) {
                    
                    //convert data from model format to view format
                    return data; //converted
                });
            }
        };
    });
};

},{}],43:[function(require,module,exports){
module.exports = function(app) {
    app.directive('datePicker', function() {
        return {
            restrict: 'E',
            templateUrl: 'directive/datePicker.html',
            transclude: true,
            scope: {
                timeStamp: '=',
                ngModel:'='
            },
            link: function($scope) {
                $scope.dt = new Date(parseInt($scope.timeStamp));
                $scope.opened = false;
                /*                $scope.dateOptions = {
                                    dateDisabled: function(data) {
                                        var date = data.date,
                                            mode = data.mode;
                                        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
                                    },
                                    formatYear: 'yyyy',
                                    maxDate: new Date(2020, 5, 22),
                                    minDate: new Date(),
                                    startingDay: 1
                                };*/
                $scope.altInputFormats = ['M!/d!/yyyy'];
                $scope.open1 = function() {
                    $scope.opened = true;
                };
                $scope.$watch('timeStamp',function(){
                    $scope.dt = new Date(parseInt($scope.timeStamp));
                });
                $scope.$watch('dt', function(value) {
                    if(value!==undefined){
                        $scope.timeStamp = value.getTime();
                    }else{
                        $scope.timeStamp='';
                    }

                });
                /*$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];*/
                /*$scope.clearData = function() {
                    $scope.dt = '';
                };*/
            }
        };
    });
};

},{}],44:[function(require,module,exports){
module.exports = function(app) {
    app.directive('dialog', function($mdPanel, $templateCache, $compile) {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                title: '@',
                instance: '=instance'
            },
            controller: function($scope, $element) {
                var panel;
                console.log('controller');
                this.closeDialog = function(mdPanelRef) {
                    panel && panel.close();
                };
                this.showDialog = function(scope) {
                    var el = $element.children();
                    var tmp = $templateCache.get('directive/dialog.html');
                    var position = $mdPanel.newPanelPosition().absolute().center();
                    var config = {
                        attachTo: angular.element(document.body),
                        panelClass: 'dialog',
                        position: position,
                        template: tmp,
                        hasBackdrop: true,
                        clickOutsideToClose: true,
                        scope: $scope,
                        escapeToClose: true,
                        focusOnOpen: true,
                        zIndex: 1000001,
                        content: el,
                        origin: $element,
                        onDomAdded: function(doms) {
                            var dialog = doms[1];
                            dialog._panelEl.find('md-content').append(dialog._config.content);
                        },
                        onDomRemoved: function(doms) {
                            var dialog = doms[0];
                            dialog._config.origin.append(dialog._config.content)
                        }
                    };
                    $mdPanel.open(config).then(function(result) {
                        panel = result;
                    })
                };
                $scope.instance = this;
            }
        };
    });
};

},{}],45:[function(require,module,exports){
module.exports = function(app) {
  app.directive('dropDown', function() {
    return {
      restrict: 'E',
      templateUrl: 'directive/dropDown.html',
      transclude: true,
      scope: {
        'select': '&',
        'list': '@', //传入的选择项列表
        'descField': '@', //指定显示字段
        'defaultDesc': '@', //默认描述
        'defaultItem': '@', //默认选项 格式为{'code':'0','desc':'否'}(desc必须有,code自便)
        'btnStyle': '@', //btn-link:无框蓝色 btn-default:有框按钮
        'disabled': '@', //是否可用，true为不可用，false为可用
        'preventAutoSelected': '='
      },
      controller: function($scope, shelfService) {
        $scope.descField = $scope.descField || 'desc';
        $scope.$watch('defaultDesc', function(newValue, oldValue, scope) {
          if (newValue) {
            $scope.defaultDesc = newValue;
          }
        });
        $scope.selectItem = function(option) {
          $scope.defaultItem = option.item;

        };

        $scope.$watch('list', function(newValue, oldValue, scope) {
          if (!angular.isArray(newValue) && newValue != '') {
            $scope.list = JSON.parse(newValue);

          }
        });
      },
      link: function($scope) {
        var preventAutoSelected = $scope.preventAutoSelected;
        $scope.$watch('defaultItem', function(newValue, oldValue, scope) {
          var defaultItem;
          if ($scope.defaultItem && _.isString($scope.defaultItem)) {
            defaultItem = JSON.parse($scope.defaultItem);
          } else {
            defaultItem = scope.defaultItem || {};
          }
          $scope.defaultDesc = defaultItem[$scope.descField] ||
            $scope.defaultDesc;
          if (!preventAutoSelected) {
            $scope.select && $scope.select.call(this, {
              item: defaultItem
            });
          }
          preventAutoSelected = false;
        });
      }
    };
  });
};
},{}],46:[function(require,module,exports){
module.exports = function(app) {
    app.directive('echartsLine', function() {
        return {
            restrict: 'E',
            temlate: '<div style="height:100%;width:100%;"></div>',
            scope: {
                id: '@',
                xaxisdata: '=',
                seriesdata: '='
            },
            replace: true,
            link: function($scope) {
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '销量走势图'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: $scope.xaxisdata
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'line',
                        data: $scope.seriesdata
                    }]
                };
                var myChart = echarts.init(document.getElementById($scope.id));
                myChart.setOption(option);
            }
        }
    });
};

},{}],47:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 2016/11/22.
 */
module.exports = function (app) {
    /*app.directive('fixedTableHeaders', ['$timeout', function ($timeout) {
        return {
            link: function (scope, element, attrs) {
                $timeout(function () {
                    // debugger
                    container = element.parentsUntil(attrs.fixedTableHeaders);
                    element.stickyTableHeaders({scrollableArea: container, "fixedOffset": 2});

                }, 0);
            }
        }
    }]);*/
};

},{}],48:[function(require,module,exports){
module.exports = function(app) {
    app.directive('formRequired', function($compile) {
        return {
            restrict: 'A',
            compile: function($element, $attrs) {
                    var name = $attrs.formRequired;
                    $element.attr('ng-class', $attrs.class + ' {{' + name + '.$invalid&&!' + name + '.$pristine?' + "'" + 'has-error' + "'" + ':' + "''" + '}}');
                    return {
                        post: function(scope, elem, attrs) {
                            $compile(elem)(scope);
                        }
                    };
                }
                // link:function($scope, $element, $attrs){

            //     var str= $scope.$eval($attrs.formRequired);
            //     $element.addClass(str);
            //     $compile($element)($scope);

            // }
        };
    });
};

},{}],49:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 16/8/4.
 */
module.exports = function(app) {
    app.directive('labelsManagements', function() {
        return {
            restrict: 'EA',
            templateUrl: 'labelsManagements/labelsManagements.html',
            transclude: true,
            controller: function($scope, $element, $attrs) {

            }
        };
    });
};

},{}],50:[function(require,module,exports){
/*
 *Component login
 */
module.exports = function(app) {
    app.directive('login', function($location) {
        return {
            restrict: 'E',
            templateUrl: 'directive/login.html',
            transclude: true,
            replace: true,
            controller: function($scope, $element, $attrs, modalService, authService) {
                $scope.username = '';
                $scope.psw = '';
                $scope.isLogin = authService.isLogin();
                $scope.ok = function(scope) {
                    //登陆
                    authService.login({
                        username: scope.username,
                        psw: $.hex_md5(scope.psw)
                    }).then(function(res) {
                        //登陆成功视图变化
                        $scope.isLogin = true;
                        window.location.hash = '#home';
                    });
                };
                $element.ready(function() {
                    $('.login input[type=password]').val('');
                });
            }
        };
    });
};

},{}],51:[function(require,module,exports){
module.exports = function(app) {
  app.directive('mdImg', function($filter) {
    return {
      restrict: 'E',
      templateUrl: 'directive/mdImg.html',
      transclude: false,
      replace: true,
      scope: {
        bg: '@',
        path: '=',
        mdStyle: '@',
        imgClass: '@'
      },
      link: function($scope, $element, $attrs) {
        $scope.url = '';
        $scope.style = {};
        $scope.$watch('path', function(v) {
          $scope.url = $filter('img')(v);
          if ($scope.bg) {
            $scope.style.backgroundImage = 'url(' + $scope.url + ')';
          }
        });
      }
    };
  });
};

},{}],52:[function(require,module,exports){
module.exports = function(app) {
  app.directive('mdUploader', function(uploadService) {
    return {
      restrict: 'E',
      templateUrl: 'directive/mdUploader.html',
      transclude: false,
      replace: true,
      scope: {
        value: '=',
        ngModel: '=',
        index: '=',
        hideInput: '@', //是否隐藏输入框，默认不隐藏
        didUpload: '&', //完成上传回调事件
        sizeLimit: '@', //尺寸大小限制
        isUploadUpyun: '@' //是否需要上传又拍云，默认上传
      },
      link: function($scope, $element, $attrs) {
        $scope.filenames = '';
        $scope.files = [];
        $scope.path = $attrs.path;
        $scope.uploadTitle = $scope.uploadTitle || '上传';

        $scope.changeFile = function(dom) {
          var opts = {
            file_dom: dom,
            folder: angular.element(dom).attr('path'),
            size_limit: JSON.parse($scope.sizeLimit || '{}'),
            is_upload_upyun: $scope.isUploadUpyun || 'true'
          };
          var str_dom = angular.element(dom).next().find('input');
          uploadService.upload(opts).then(function(res) {
            $scope.value = res.path;
            $scope.filenames = res.path;
            var didUpload = $scope.didUpload || function() {};
            didUpload({
              file: res
            });
          });
        };
      }
    };
  });
};

},{}],53:[function(require,module,exports){
/*
 *Component login
 */
module.exports = function(app) {
    app.directive('module', function($filter) {
        return {
            restrict: 'E',
            templateUrl: 'directive/module.html',
            transclude: true,
            scope: {
                moduleLayout: '=',
                moduleIndex: '@',
                editContent: '=',
                isInTemplate: '@'
            },
            controller: function($scope, $element, $attrs, modalService, authService) {
                $scope.isArray = function(arry) {
                    return angular.isArray(arry);
                }
                $scope.col = _.range($scope.moduleLayout.width);
                $scope.row = _.range($scope.moduleLayout.height);
                $scope.cells = $scope.moduleLayout.contents;
                $scope.renderStyle = {};
                $scope.template = $scope.isInTemplate !== undefined ? true : false;
                $scope.hasContent = function(x, y) {
                    var content = _.find($scope.cells, function(item) {
                        return item.x == x && item.y == y;
                    });
                    if (content) {
                        $scope.renderStyle = {
                            width: content.width * 100 + '%',
                            height: content.height * 100 + '%'
                        };
                        
                        content.noBorder == 'true' ? $scope.renderStyle.border = 0 : '';
                        content.contentImage && content.contentImage[0] ? $scope.renderStyle
                            .backgroundImage =
                            'url(' + $filter('img')(content.contentImage[0]) + ')' : '';
                    }
                    return !!content;
                };
            }
        };
    });
};

},{}],54:[function(require,module,exports){
module.exports = function(app) {
    app.directive('msStepper', function() {
        return {
            restrict: 'A',
            require: ['form', 'msStepper'],
            priority: 1001,
            templateUrl: 'directive/msStepper.html',
            transclude: true,
            replace: false,
            scope: {
                model: "=ngModel"
            },
            controller: function($timeout) {
                var me = this;

                // Data
                me.mainForm = undefined;

                me.steps = [];
                me.currentStep = undefined;
                me.currentStepNumber = 1;

                // Methods
                me.registerMainForm = registerMainForm;
                me.registerStep = registerStep;
                me.setupSteps = setupSteps;
                me.resetForm = resetForm;

                me.setCurrentStep = setCurrentStep;

                me.gotoStep = gotoStep;
                me.gotoPreviousStep = gotoPreviousStep;
                me.gotoNextStep = gotoNextStep;
                me.gotoFirstStep = gotoFirstStep;
                me.gotoLastStep = gotoLastStep;

                me.isFirstStep = isFirstStep;
                me.isLastStep = isLastStep;

                me.isStepCurrent = isStepCurrent;
                me.isStepDisabled = isStepDisabled;
                me.isStepOptional = isStepOptional;
                me.isStepValid = isStepValid;
                me.isStepNumberValid = isStepNumberValid;

                me.isFormValid = isFormValid;

                //////////

                /**
                 * Register the main form
                 *
                 * @param form
                 */
                function registerMainForm(form) {
                    me.mainForm = form;
                }

                /**
                 * Register a step
                 *
                 * @param element
                 * @param scope
                 * @param form
                 */
                function registerStep(element, scope, form) {
                    var step = {
                        element: element,
                        scope: scope,
                        form: form,
                        stepNumber: scope.step || (me.steps.length + 1),
                        stepTitle: scope.stepTitle
                    };

                    // Push the step into steps array
                    me.steps.push(step);

                    // Sort steps by stepNumber
                    me.steps.sort(function(a, b) {
                        return a.stepNumber - b.stepNumber;
                    });
                }

                /**
                 * Setup steps for the first time
                 */
                function setupSteps() {
                    me.setCurrentStep(me.currentStepNumber);
                }

                /**
                 * Reset steps and the main form
                 */
                function resetForm() {
                    // Timeout is required here because we need to
                    // let form model to reset before setting the
                    // statuses
                    $timeout(function() {
                        // Reset all the steps
                        for (var x = 0; x < me.steps.length; x++) {
                            me.steps[x].form.$setPristine();
                            me.steps[x].form.$setUntouched();
                        }

                        // Reset the main form
                        me.mainForm.$setPristine();
                        me.mainForm.$setUntouched();

                        // Go to first step
                        gotoFirstStep();
                    })
                }

                /**
                 * Set current step
                 *
                 * @param stepNumber
                 */
                function setCurrentStep(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return;
                    }

                    // Update the current step number
                    me.currentStepNumber = stepNumber;

                    // Hide all steps
                    for (var i = 0; i < me.steps.length; i++) {
                        me.steps[i].element.addClass('hide');
                    }

                    // Show the current step
                    me.steps[me.currentStepNumber - 1].element.removeClass('hide');
                }

                /**
                 * Go to a step
                 *
                 * @param stepNumber
                 */
                function gotoStep(stepNumber) {
                    me.setCurrentStep(stepNumber);
                }

                /**
                 * Go to the previous step
                 */
                function gotoPreviousStep() {
                    me.setCurrentStep(me.currentStepNumber - 1);
                }

                /**
                 * Go to the next step
                 */
                function gotoNextStep() {
                    me.setCurrentStep(me.currentStepNumber + 1);
                }

                /**
                 * Go to the first step
                 */
                function gotoFirstStep() {
                    me.setCurrentStep(1);
                }

                /**
                 * Go to the last step
                 */
                function gotoLastStep() {
                    me.setCurrentStep(me.steps.length);
                }

                /**
                 * Check if the current step is the first step
                 *
                 * @returns {boolean}
                 */
                function isFirstStep() {
                    return me.currentStepNumber === 1;
                }

                /**
                 * Check if the current step is the last step
                 *
                 * @returns {boolean}
                 */
                function isLastStep() {
                    return me.currentStepNumber === me.steps.length;
                }

                /**
                 * Check if the given step is the current one
                 *
                 * @param stepNumber
                 * @returns {null|boolean}
                 */
                function isStepCurrent(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return null;
                    }

                    return me.currentStepNumber === stepNumber;
                }

                /**
                 * Check if the given step should be disabled
                 *
                 * @param stepNumber
                 * @returns {null|boolean}
                 */
                function isStepDisabled(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return null;
                    }

                    var disabled = false;

                    for (var i = 1; i < stepNumber; i++) {
                        if (!isStepValid(i)) {
                            disabled = true;
                            break;
                        }
                    }

                    return disabled;
                }

                /**
                 * Check if the given step is optional
                 *
                 * @param stepNumber
                 * @returns {null|boolean}
                 */
                function isStepOptional(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return null;
                    }

                    return me.steps[stepNumber - 1].scope.optionalStep;
                }

                /**
                 * Check if the given step is valid
                 *
                 * @param stepNumber
                 * @returns {null|boolean}
                 */
                function isStepValid(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return null;
                    }

                    // If the step is optional, always return true
                    if (isStepOptional(stepNumber)) {
                        return true;
                    }

                    return me.steps[stepNumber - 1].form.$valid;
                }

                /**
                 * Check if the given step number is a valid step number
                 *
                 * @param stepNumber
                 * @returns {boolean}
                 */
                function isStepNumberValid(stepNumber) {
                    return !(stepNumber < 1 || stepNumber > me.steps.length);
                }

                /**
                 * Check if the entire form is valid
                 *
                 * @returns {boolean}
                 */
                function isFormValid() {
                    return me.mainForm.$valid;
                }
            },
            compile: function(tElement) {
                tElement.addClass('ms-stepper');
                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];
                    MsStepperCtrl.registerMainForm(FormCtrl);
                    MsStepperCtrl.setupSteps();
                };

            }
        };
    });
};

},{}],55:[function(require,module,exports){
module.exports = function(app) {
    app.directive('msStepperStep', function() {
        return {
            restrict: 'E',
            require: ['form', '^msStepper'],
            priority: 1000,
            replace: false,
            scope: {
                step: '=?',
                stepTitle: '=?',
                optionalStep: '=?'
            },
            compile: function(tElement) {
                tElement.addClass('ms-stepper-step');
                return function postLink(scope, iElement, iAttrs, ctrls) {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];

                    // Is it an optional step?
                    scope.optionalStep = angular.isDefined(iAttrs.optionalStep);

                    // Register the step
                    MsStepperCtrl.registerStep(iElement, scope, FormCtrl);

                    // Hide the step by default
                    iElement.addClass('hide');
                };
            }
        };
    });
};

},{}],56:[function(require,module,exports){
module.exports = function(app) {
    app.directive('navigator', function() {
        return {
            restrict: 'E',
            templateUrl: 'directive/navigator.html',
            transclude: true,
            controller: function($scope, $element, $attrs) {
            	
            }
        };
    });
};

},{}],57:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 16/7/28.
 */
/*
 *编译html
 * compile-html
 */
module.exports = function (app) {
    app.directive('account', function () {
        return {
            restrict: 'EA',
            // templateUrl:'account/account.html',
            transclude: true,
            scope: false,
            controller: function ($scope, $element, $attrs, $compile) {

            }
        }
    });
};



},{}],58:[function(require,module,exports){
module.exports = function(app) {
    app.directive('onFinishRenderFilters', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                if (scope.$last === true) { //判断是否是最后一条数据  
                    $timeout(function() {
                        scope.$emit('ngRepeatFinished'); //向父级scope传送ngRepeatFinished命令 
                    });
                }
            }
        };
    });
};

},{}],59:[function(require,module,exports){
module.exports = function(app) {
    app.directive('panel', function($mdPanel, $templateCache, $compile) {
        return {
            restrict: 'A',
            replace: false,
            scope: {
                title: '@',
                instance: '=instance'
            },
            link: function($scope, $element) {
                var panel;
                var container = $('#container');
                console.log('controller');

                this.closeDialog = function(mdPanelRef) {
                    panel && panel.close();
                };
                this.showDialog = function(scope) {
                    var el = $compile($element.html())(scope);
                    var tmp = $templateCache.get('directive/dialog.html');
                    var position = $mdPanel.newPanelPosition().absolute().center();
                    var config = {
                        attachTo: container,
                        panelClass: 'dialog',
                        position: position,
                        template: tmp,
                        hasBackdrop: true,
                        clickOutsideToClose: true,
                        scope: $scope,
                        escapeToClose: true,
                        focusOnOpen: true,
                        zIndex: 2055,
                        content: el,
                        origin: $element,
                        onDomAdded: function(doms) {
                            var dialog = doms[1];
                            dialog._panelEl.find('md-content').append(dialog._config.content);
                        },
                        onDomRemoved: function() {
                            container.css({
                                overflow: 'scroll'
                            });
                        }
                    };
                    container.css({
                        overflow: 'hidden'
                    });
                    scope.$applyAsync(function() {
                        $mdPanel.open(config).then(function(result) {
                            panel = result;
                        });
                    });
                };
                $scope.instance = this;
                $scope.closeDialog=this.closeDialog;
            }
        };
    });
};

},{}],60:[function(require,module,exports){
module.exports = function(app) {
  app.directive('permissions', function() {
    return {
      restrict: 'E',
      templateUrl: 'directive/permissions.html',
      scope: {
        all: '=',
        checked: '='
      },
      controller: function($scope) {
        if (typeof($scope.checked) == 'undefined') {
          throw "<permissions> Missing attribute 'checked'.";
        }
        $scope.checkedPermissions = new CheckedPermissions($scope.all, $scope.checked);
      }
    }
  });
};

function CheckedPermissions(allPermissions, checkedIds) {
  var dict = {};
  var toId = function(permission) {
    return permission.id;
  };
  // 初始化已经选择的权限
  angular.forEach(allPermissions, function(group) {
    if(!group.permissions) return;
    dict[group.id] = group.permissions.map(toId).filter(function(id) {
      return checkedIds.indexOf(id) > -1;
    });
  });
  var isChecked = function(group, permission) {
    var groupId = group.id;
    return dict.hasOwnProperty(groupId) && dict[groupId].indexOf(permission.id) > -1;
  };
  var toggle = function(group, permission) {
    var groupId = group.id;
    var permissionId = permission.id;
    // 更新字典
    if (dict.hasOwnProperty(groupId)) {
      var checkedInGroup = dict[groupId];
      var index = checkedInGroup.indexOf(permissionId);
      if (index > -1) {
        checkedInGroup.splice(index, 1);
      } else {
        checkedInGroup.push(permissionId);
      }
    } else {
      dict[groupId] = [permissionId];
    }
    // 更新数组
    var index = checkedIds.indexOf(permissionId);
    if (index > -1) {
      checkedIds.splice(index, 1);
    } else {
      checkedIds.push(permissionId);
    }
  };
  var selectAll = function(group) {
    var ids = group.permissions.map(toId);
    // 更新字典
    dict[group.id] = ids;
    // 更新数组
    angular.forEach(group.permissions, function(permission) {
      if (checkedIds.indexOf(permission.id) < 0) {
        checkedIds.push(permission.id);
      }
    });
  };
  var inverseSelection = function(group) {
    var permissions = group.permissions
      .filter(function(permission) {
        return !isChecked(group, permission);
      });
    var ids = permissions.map(toId);
    var oldIds = dict[group.id];
    // 更新字典
    dict[group.id] = ids;
    // 更新数组
    angular.forEach(oldIds, function(oldId) {
      var index = checkedIds.indexOf(oldId);
      if (index > -1) {
        checkedIds.splice(index, 1);
      }
    });
    checkedIds = checkedIds.concat(ids);
  };
  this.isChecked = isChecked;
  this.toggle = toggle;
  this.selectAll = selectAll;
  this.inverseSelection = inverseSelection;
};

},{}],61:[function(require,module,exports){
module.exports = function(app) {
  app.directive('productSearcher', function() {
    return {
      restrict: 'AE',
      templateUrl: 'directive/productSearcher.html',
      transclude: true,
      replace:true,
      scope: {productId:"=",productName:"="},
      controller: function($scope, $element, $attrs, productService) {
        $scope.typeHeadConfigs = {
          debounce: {
            'default': 500,
            'blur': 250
          },
          getterSetter: true
        };
        $scope.changeValue = function(str) {
           
        };
        $scope.getTypeHeadOptions = function(value) { //搜索加载
          return productService.queryProductByKey({
            offset: 0,
            limit: 5,
            delState: 0,
            productName: value
          }).then(function(res) {
            return res.content;
          });
        };
        $scope.selectTypeHeadOptions = function(item) { //搜索选择

        $scope.productId=item.header.id;
          console.log($scope.productId)
         
        };
      }
    };
  });
};
},{}],62:[function(require,module,exports){
module.exports = function(app) {
    app.directive('promotionSearcher', function(utilService, CONSTANTS) {
        return {
            restrict: 'E',
            templateUrl: 'directive/promotionSearch.html',
            transclude: true,
            scope: {
                'search': '&',
                'showTimeSelect': '@',
                'isUpdateTimeChoices': '=',
                'searchChoices': '='
            },
            controller: function($scope) {
            	console.log($scope.searchChoices)
                $scope.showTimeSelect = $scope.showTimeSelect || 'true';
                $scope.queryParams = {searchSelect:1};
                if ($scope.showTimeSelect == 'true') {
                    $scope.queryParams.startTime = new Date(utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd') + ' 00:00:00');
                    $scope.queryParams.endTime = new Date(utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd') + " 23:59:59");
                }
              //$scope.isUpdateTimeChoices=[{ desc: '下单时间', code: '0' }, { desc: '预约送货时间', code: '1' }];
                //console.log($scope.isUpdateTimeChoices)
                $scope.selectIsUpadate = function(choice) {
                    $scope.queryParams.isUpateTime = parseInt(choice.code);
                };
                $scope.searchSelect = function(choice) {
                    $scope.queryParams.searchSelect = parseInt(choice.code);
                    $scope.queryParams.companyName = "";
                    console.log($scope.queryParams.searchSelect)
                };
                $scope.keyPressSearch = function(e, queryParams) {
                    if (e.keyCode == 13) { //回车键
                        $scope.search({
                            queryParams: queryParams
                        });
                    }
                };
                $scope.selectWelfareCompany = function(company) {
                         $scope.queryParams.companyName= company.companyId;

                 };


            }
        };
    });
};

},{}],63:[function(require,module,exports){
module.exports = function(app) {
    app.directive('requiredInput', function() {
        return function(scope, element, attrs) {
            element.on("keyup",function(ev){
                var val = ev.target.value;
                var pEle = element.parent();
                if(val.length==0&&!pEle.hasClass('has-error')){
                	pEle.addClass('has-error');
                }else{
                	pEle.removeClass('has-error');
                }
                
            });
            

        }
    });
}

},{}],64:[function(require,module,exports){
module.exports = function(app) {
    app.directive('searchGroup', function() {
        return {
            restrict: 'E',
            templateUrl: 'directive/searchGroup.html',
            transclude: true,
            replace: true,
            scope: {
                key: '=',
                searchFn: '=',
                placeholder: '@',
                class:'@'
            },
            link: function($scope) {
                $scope.search = function(value) {
                    $scope.searchFn && $scope.searchFn.call(this, value);
                };
            }
        };
    });
};

},{}],65:[function(require,module,exports){
module.exports = function(app) {
  app.directive('sidebar', function(authService) {
    return {
      restrict: 'E',
      templateUrl: 'directive/sidebar.html',
      transclude: false,
      replace: true,
      controller: function($scope, $element, $attrs) {
        var cur;
        var curNodex;
        $scope.isLogin = authService.isLogin();
        $scope.version = window.cfg.version;
        $scope.isFolded = true;
        $scope.ports = [{
          name: '企业库',
          parent: true,
          icon: 'company',
          children: [{
            name: '企业基础信息',
            route: 'company'
          }, {
            name: '信息收集',
            route: 'information'
          }]
        }, {
          name: '商品管理',
          parent: true,
          icon: 'product',
          children: [{
            name: '货架商品',
            route: 'product'
          }, {
            name: '商品标签管理',
            route: 'labelsManagement'
          }, {
            name: '仓位管理',
            route: 'positionManage'
          }, {
            name: '新品推荐',
            route: 'newProductRecommend'
          }, {
            name: '滞销商品库',
            route: 'deadStock'
          }]
        }, {
          name: '货架管理',
          parent: true,
          icon: 'shelf',
          children: [{
            name: '企业货架管理',
            route: 'shelfManage'
          }, {
            name: '货架巡查',
            route: 'shelf'
          }]
        }, {
          name: '业务流程管理',
          parent: true,
          icon: 'business-process',
          children: [{
            name: '拣货单',
            route: 'pickOrder'
          }, {
            name: '单据中心',
            route: 'order'
          }, {
            name: '回仓单',
            route: 'inStorage'
          }, {
            name: '财务管理',
            route: 'finance',
          }, ]
        }, {
          name: '企业服务',
          parent: true,
          icon: 'enterprise-service',
          children: [{
            name: '零花钱',
            route: 'welfare'
          }, {
            name: '企业选购单',
            route: 'goodsChooseOrder'
          }]
        }, {
          name: '增值服务',
          parent: true,
          icon: 'value-added',
          children: [{
            name: '下午茶',
            route: 'teaInformation',
          }, {
            name: '节假日福利',
            route: 'holidayWelfare',
          }, {
            name: '营销商品',
            route: 'promotionProduct'
          }, {
            name: '营销商品组合',
            route: 'promotionSuite'
          }, {
            name: '营销订单',
            route: 'promotionOrder'
          }]
        }, {
          name: 'B端功能管理',
          parent: true,
          icon: 'B-client',
          children: [{
            name: '首页配置',
            route: 'template',
            icon: 'template'
          }]
        }, {
          name: 'C端功能管理',
          parent: true,
          icon: 'C-client',
          children: [{
            name: '期号实时动态',
            route: 'issueDynamic',
            icon: 'issueDynamic'
          }, {
            name: '套餐配送动态',
            route: 'suiteDistributionDynamic',
            icon: 'suiteDistributionDynamic'
          }, {
            name: '套餐配置管理',
            route: 'suiteCfgManage',
            icon: 'suiteCfgManage'
          }, {
            name: '评论管理',
            route: 'commentsManage',
            icon: 'commentsManage'
          }]
        }, {
          name: '数据统计',
          parent: true,
          icon: 'data',
          children: [{
            name: '商品营销数据',
            route: 'salesStatistics'
          }]
        }, {
          name: '账号管理',
          route: 'account',
          icon: 'account'
        }, {
          name: '信息配置',
          route: 'configurationInformation',
          icon: 'configurationInformation'
        }, {
          name: '模板管理',
          route: 'template',
          icon: 'template'
        }];
        $scope.handleLoginBtnClick = function(isLogin) {
          isLogin ? authService.exit() : (window.location.hash =
            '#/login');
        };
        $scope.active = function(options, e) {
          e && e.stopPropagation();
          var indexs = options.indexs;
          var len = indexs.length;
          var hasChildren = options.hasChildren;
          if (curNodex) {
            curNodex.active = false;
          }
          if (len <= 1) {
            cur = indexs;
            if ($scope.ports[indexs[0]]) {
              $scope.ports[indexs[0]].active = true;
              curNodex = $scope.ports[indexs[0]];
            }
          } else {
            cur = indexs;
            $scope.ports[indexs[0]].active = true;
            if ($scope.ports[indexs[0]].children[indexs[1]]) {
              $scope.ports[indexs[0]].children[indexs[1]].active =
                true;
              curNodex = $scope.ports[indexs[0]].children[indexs[1]];
            }
          }
        };
        $scope.activeParent = function(options, e) {
          e && e.stopPropagation();
          var indexs = options.indexs;
          $scope.ports[indexs[0]].active = !$scope.ports[indexs[0]].active;
        };
        $scope.fold = function() {
          angular.element(document.body).toggleClass('folded');
          $scope.isFolded = !$scope.isFolded;
        };
        //事件
        $scope.$on('sidebar.active', function(e, route) {
          var index = [];
          angular.forEach($scope.ports, function(port, idx) {
            var hasChildren = port.parent;
            var childrenRouters;
            if (hasChildren) {
              childrenRouters = _.pluck(port.children, 'route');
              i = childrenRouters.indexOf(route);
              if (i !== -1) {
                index.push(idx);
                index.push(i);
              }
            } else {
              if (route == port.route) {
                index.push(idx);
              }
            }
          });
          $scope.active({ indexs: index });
        });
      }
    };
  });
};
},{}],66:[function(require,module,exports){
module.exports = function(app) {
  app.directive('sortButton', function() {
    return {
      restrict: 'E',
      templateUrl: 'directive/sortButton.html',
      transclude: true,
      scope: {
        'title': '@', //标题
        'ascSortCode': '@', //升序代码
        'descSortCode': '@', //降序代码
        'sortCallback': '&' //排序回调
      },
      controller: function($scope) {
        $scope.descSortCode = typeof $scope.descSortCode !=
          'undefined' ?
          $scope.descSortCode : -$scope.ascSortCode;
        $scope.sort = function() {
          $scope.sortCode = $scope.sortCode == $scope.ascSortCode ?
            $scope.descSortCode : $scope.ascSortCode;
          $scope.sortCallback({
            item: {
              sortCode: $scope.sortCode
            }
          })
        };
      }
    }
  })
};
},{}],67:[function(require,module,exports){
module.exports = function(app) {
    app.directive('teaSearcher', function(utilService, CONSTANTS) {
        return {
            restrict: 'E',
            templateUrl: 'directive/teaSearcher.html',
            transclude: true,
            scope: {
                'search': '&',
                'showTimeSelect': '@',
                'isUpdateTimeChoices': '='
            },
            controller: function($scope) {
                $scope.showTimeSelect = $scope.showTimeSelect || 'true';
                $scope.queryParams = {};
                if ($scope.showTimeSelect == 'true') {
                    $scope.queryParams.startTime = new Date(utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd') + ' 00:00:00');
                    $scope.queryParams.endTime = new Date(utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd') + " 23:59:59");
                }
              //$scope.isUpdateTimeChoices=[{ desc: '下单时间', code: '0' }, { desc: '预约送货时间', code: '1' }];
                //console.log($scope.isUpdateTimeChoices)
                $scope.selectIsUpadate = function(choice) {
                    $scope.queryParams.isUpateTime = parseInt(choice.code);
                };
                $scope.keyPressSearch = function(e, queryParams) {
                    if (e.keyCode == 13) { //回车键
                        $scope.search({
                            queryParams: queryParams
                        });
                    }
                };
                $scope.selectWelfareCompany = function(company) {
                         $scope.queryParams.companyName= company.companyId;

                 };


            }
        };
    });
};

},{}],68:[function(require,module,exports){
module.exports = function(app) {
    app.directive('topSearcher', function(utilService, CONSTANTS) {
        return {
            restrict: 'E',
            templateUrl: 'directive/topSearcher.html',
            transclude: true,
            scope: {
                'search': '&',
                'showTimeSelect': '@'
            },
            controller: function($scope) {
                $scope.showTimeSelect = $scope.showTimeSelect || 'true';
                $scope.queryParams = {};
                if ($scope.showTimeSelect == 'true') {
                    $scope.queryParams.startTime = new Date(utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd') + ' 00:00:00');
                    $scope.queryParams.endTime = new Date(utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd') + " 23:59:59");
                }
                $scope.isUpdateTimeChoices = CONSTANTS.getList('INVOICE_TIME_TYPE', false);
                console.log($scope.isUpdateTimeChoices)
                $scope.selectIsUpadate = function(choice) {
                    $scope.queryParams.isUpateTime = parseInt(choice.code);
                };
                $scope.keyPressSearch = function(e, queryParams) {
                    if (e.keyCode == 13) { //回车键
                        $scope.search({
                            queryParams: queryParams
                        });
                    }
                };
            }
        };
    });
};

},{}],69:[function(require,module,exports){
module.exports = function(app) {
  app.directive('uploader', function(uploadService) {
    return {
      restrict: 'E',
      templateUrl: 'directive/uploader.html',
      transclude: false,
      replace: false,
      scope: {
        value: '=',
        ngModel: '=',
        index: '=',
        uploadTitle: '@', //上传按钮的title,默认为'上传'
        hideInput: '@', //是否隐藏输入框，默认不隐藏
        didUpload: '&', //完成上传回调事件
        sizeLimit: '@', //尺寸大小限制
        isUploadUpyun: '@' //是否需要上传又拍云，默认上传
      },
      link: function($scope, $element, $attrs) {
        $scope.filenames = '';
        $scope.files = [];
        $scope.path = $attrs.path;
        $scope.uploadTitle = $scope.uploadTitle || '上传';

        $scope.changeFile = function(dom) {
          var opts = {
            file_dom: dom,
            folder: angular.element(dom).attr('path'),
            size_limit: JSON.parse($scope.sizeLimit || '{}'),
            is_upload_upyun: $scope.isUploadUpyun || 'true'
          }
          var str_dom = angular.element(dom).next().find('input');
          uploadService.upload(opts).then(function(res) {
            $scope.value = res.path;
            $scope.filenames = res.path;
            var didUpload = $scope.didUpload || function() {};
            didUpload({
              file: res
            });
          });
        };
      }
    };
  });
};
},{}],70:[function(require,module,exports){
module.exports = function(app) {
  app.directive('validFile', function() {
    return {
      require: 'ngModel',
      link: function(scope, el, attrs, ngModel) {
        el.bind('change', function() {
          scope.$apply(function() {
            ngModel.$setViewValue(el.val());
            ngModel.$render();
          });
        });
      }
    }
  });
};

},{}],71:[function(require,module,exports){
module.exports=[require("./directive/blockAdd.js"),require("./directive/companySearcher.js"),require("./directive/compileHtml.js"),require("./directive/count.js"),require("./directive/dateFormate.js"),require("./directive/datePicker.js"),require("./directive/dialog.js"),require("./directive/dropDown.js"),require("./directive/echartsLine.js"),require("./directive/fixedTableHeaders.js"),require("./directive/formRequired.js"),require("./directive/labelsManagements.js"),require("./directive/login.js"),require("./directive/mdImg.js"),require("./directive/mdUploader.js"),require("./directive/module.js"),require("./directive/msStepper.js"),require("./directive/msStepperStep.js"),require("./directive/navigator.js"),require("./directive/newUsers.js"),require("./directive/onFinishRenderFilters.js"),require("./directive/panel.js"),require("./directive/permissions.js"),require("./directive/productSearcher.js"),require("./directive/promotion.js"),require("./directive/requiredInput.js"),require("./directive/searchGroup.js"),require("./directive/sidebar.js"),require("./directive/sortButton.js"),require("./directive/teaSearcher.js"),require("./directive/topSearcher.js"),require("./directive/uploader.js"),require("./directive/validFileInput.js")]
},{"./directive/blockAdd.js":38,"./directive/companySearcher.js":39,"./directive/compileHtml.js":40,"./directive/count.js":41,"./directive/dateFormate.js":42,"./directive/datePicker.js":43,"./directive/dialog.js":44,"./directive/dropDown.js":45,"./directive/echartsLine.js":46,"./directive/fixedTableHeaders.js":47,"./directive/formRequired.js":48,"./directive/labelsManagements.js":49,"./directive/login.js":50,"./directive/mdImg.js":51,"./directive/mdUploader.js":52,"./directive/module.js":53,"./directive/msStepper.js":54,"./directive/msStepperStep.js":55,"./directive/navigator.js":56,"./directive/newUsers.js":57,"./directive/onFinishRenderFilters.js":58,"./directive/panel.js":59,"./directive/permissions.js":60,"./directive/productSearcher.js":61,"./directive/promotion.js":62,"./directive/requiredInput.js":63,"./directive/searchGroup.js":64,"./directive/sidebar.js":65,"./directive/sortButton.js":66,"./directive/teaSearcher.js":67,"./directive/topSearcher.js":68,"./directive/uploader.js":69,"./directive/validFileInput.js":70}],72:[function(require,module,exports){
module.exports = function(app) {
    app.filter('desc', function(CONSTANTS) {
        return function(value, field) {
            var f = CONSTANTS[field];
            var descs = f && f.DESC;
            return descs && descs[value] || '';
        }
    });
}

},{}],73:[function(require,module,exports){
module.exports = function(app) {
    app.filter('img', function(CONSTANTS) {
        return function(path) {
            return window.cfg.picUrl+path;
        }
    });
}

},{}],74:[function(require,module,exports){
module.exports = function(app) {
    app.filter('int', function() {
        return function(data, fields) {
    		var r=data;
    		angular.forEach(fields,function(field){
    			var fs=field.split('.');
    			var len=fs.length;
    			var lsf=fs[fs.length-1];
    			var t=data;
    			for(var i=0;i<len-1;i++){
    				t=t[fs[i]];
    			}
    			t[lsf]=parseInt(t[lsf]);
    		});
    		return r;
        }
    });
}

},{}],75:[function(require,module,exports){
module.exports = function(app) {
    app.filter('points', function() {
        return function(amt) {
            return parseInt((amt*100).toFixed(0)); 
        }
    });
}

},{}],76:[function(require,module,exports){
module.exports = function(app) {
	app.filter('rmb', function() {
		return function(amt) {
			if (isNaN(parseInt(amt))) {
				return amt
			} else {
				return amt ? (parseInt(amt / 100) + '.' + parseInt((amt / 10) % 10) +
					parseInt(amt % 10)) : '0';
			}

		}
	});
}

},{}],77:[function(require,module,exports){
module.exports = function(app) {
    app.filter('selection', function(CONSTANTS) {
        return function(field, hasDefault, codeKey, valueKey, defaultObj, isCodeNum) {
            if (Object.prototype.toString.call(field) == '[object Object]') {
                var codeKey = field.codeKey;
                var hasDefault = field.hasDefault;
                var valueKey = field.valueKey;
                var defaultObj = field.defaultObj;
                var isCodeNum = field.isCodeNuml;
                var clsOrName = field.clsOrName;
            } else {
                var clsOrName = field;
            }
            return CONSTANTS.getList(clsOrName, hasDefault, codeKey, valueKey, defaultObj, isCodeNum);
        }
    });
}

},{}],78:[function(require,module,exports){
module.exports = function(app) {
    app.filter('style', function(CONSTANTS) {
        return function(value, field) {
            var f = CONSTANTS[field];
            var descs = f && f.STYLE;
            return descs && descs[value] || '';
        }
    });
}

},{}],79:[function(require,module,exports){
module.exports = function(app) {
    app.filter('value', function(CONSTANTS) {
        return function(value, field, isValueNum) {
            var f = CONSTANTS[field];
            var descs = f && f.DESC;
            var result;
            angular.forEach(descs, function(va, key) {
                if (value == va) {
                    result = key;
                }
            });
            return parseInt(result);
        }
    });
}

},{}],80:[function(require,module,exports){
module.exports = function(app) {
    app.filter('week', function(CONSTANTS) {
        return function(value, field) {
            var f = CONSTANTS[field];
            var descs = f && f.STYLE;
            return descs && descs[value] || '';
        }
    });
}

},{}],81:[function(require,module,exports){
module.exports=[require("./filter/desc.js"),require("./filter/img.js"),require("./filter/int.js"),require("./filter/points.js"),require("./filter/rmb.js"),require("./filter/selection.js"),require("./filter/style.js"),require("./filter/value.js"),require("./filter/week.js")]
},{"./filter/desc.js":72,"./filter/img.js":73,"./filter/int.js":74,"./filter/points.js":75,"./filter/rmb.js":76,"./filter/selection.js":77,"./filter/style.js":78,"./filter/value.js":79,"./filter/week.js":80}],82:[function(require,module,exports){
;
(function() {
  var angular = window.angular;
  var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngTable',
    'templateBundle', 'ui.bootstrap', 'ui.router', 'ui.tree',
    'isteven-multi-select', 'ngAnimate', 'ngAria', 'ngMaterial',
    'ngSanitize', 'ngMessages', 'infinite-scroll'
  ]).config([
    '$compileProvider', '$mdThemingProvider',
    function($compileProvider, $mdThemingProvider) {
      $compileProvider.aHrefSanitizationWhitelist(
        /^\s*(https?|ftp|mailto|file|data):/);
      $mdThemingProvider.theme("default").primaryPalette("blue").accentPalette(
        "light-blue").warnPalette("deep-orange").backgroundPalette(
        "grey");
    }
  ]);
  var routers = require('./routers.js');
  var services = require('./services.js');
  var directives = require('./directives.js');
  var constants = require('./constants.js');
  var controllers = require('./controllers.js');
  var filters = require('./filters.js');
  //注册router
  app.config(['$routeProvider', function($routeProvider) {
    angular.forEach(routers, function(route) {
      $routeProvider.when('/' + route.path, route);
    });
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }]);
  // app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //     angular.forEach(routers, function(route) {
  //         var cfg = {
  //             url: '/' + route.path,
  //             views: {}
  //         };
  //         cfg.views[route.name] = {
  //             templateUrl: route.templateUrl
  //         };
  //         $stateProvider.state(route.name, cfg);
  //     });
  //     $urlRouterProvider.otherwise('/home');
  // }]);
  //注册constant
  angular.forEach(filters, function(fn) {
    fn.call(this, app);
  });
  //注册constant
  angular.forEach(constants, function(value, key) {
    app.constant(key, value);
  });
  //注册的service
  angular.forEach(services, function(fn) {
    fn.call(this, app);
  });
  //批量注册direcives
  angular.forEach(directives, function(fn) {
    fn.call(this, app);
  });
  //注册的controller
  angular.forEach(controllers, function(fn) {
    try {
      fn.call(this, app);
    } catch (e) {}

  });
}());
// app.run(function($rootScope) {
//     $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
//     });
// });
},{"./constants.js":1,"./controllers.js":37,"./directives.js":71,"./filters.js":81,"./routers.js":83,"./services.js":115}],83:[function(require,module,exports){
module.exports = [{
  name: 'home',
  path: 'home',
  templateUrl: 'home/home.html'
}, {
  name: 'company',
  path: 'company',
  templateUrl: 'company/company.html'
}, {
  name: 'shelf',
  path: 'shelf',
  templateUrl: 'shelf/shelfPatrol.html'
}, {
  name: 'shelfManage',
  path: 'shelfManage',
  templateUrl: 'shelfmanage/shelfManage.html'
}, {
  name: 'order',
  path: 'order',
  templateUrl: 'order/order.html'
}, {
  name: 'pickOrder',
  path: 'pickOrder',
  templateUrl: 'pickOrder/pickOrder.html'
}, {
  name: 'goodsChooseOrder',
  path: 'goodsChooseOrder',
  templateUrl: 'goodsChooseOrder/goodsChooseOrder.html'
}, {
  name: 'goodsChooseHistory',
  path: 'goodsChooseHistory',
  templateUrl: 'goodsChooseOrder/goodsChooseHistory.html'
}, {
  name: 'deliveryEdit',
  path: 'deliveryEdit/:orderId',
  templateUrl: 'pickOrder/deliveryEdit.html'
}, {
  name: 'deliveryEdit2',
  path: 'deliveryEdit/:orderId/:goodsChooseOrderId',
  templateUrl: 'pickOrder/deliveryEdit.html'
}, {
  name: 'account',
  path: 'account',
  templateUrl: 'account/account.html'
}, {
  name: 'role',
  path: 'role',
  templateUrl: 'account/role.html',
  controller: 'RoleCtrl'
}, {
  name: 'inStorage',
  path: 'inStorage',
  templateUrl: 'inStorage/inStorage.html'
}, {
  name: 'product',
  path: 'product',
  templateUrl: 'product/product.html'
}, {
  name: 'salesStatistics',
  path: 'salesStatistics',
  templateUrl: 'dataStatistics/salesStatistics.html'
}, {
  name: 'promotionProduct',
  path: 'promotionProduct',
  templateUrl: 'promotion/promotionProduct.html'
}, {
  name: 'promotionSuite',
  path: 'promotionSuite',
  templateUrl: 'promotion/promotionSuite.html'
}, {
  name: 'shelfdetail',
  path: 'shelf/:companyId',
  templateUrl: 'shelf/shelfDetail.html'
}, {
  name: 'information',
  path: 'information',
  templateUrl: 'information/information.html'
}, {
  name: 'labelsManagement',
  path: 'labelsManagement',
  templateUrl: 'labelsManagement/labelsManagement.html'
}, {
  name: 'welfare',
  path: 'welfare',
  templateUrl: 'welfare/welfare.html'
}, {
  name: 'positionManage',
  path: 'positionManage',
  templateUrl: 'positionManage/positionManage.html'
}, {
  name: 'finance',
  path: 'finance',
  templateUrl: 'finance/finance.html'
}, {
  name: 'configurationInformation',
  path: 'configurationInformation',
  templateUrl: 'configurationInformation/configurationInformation.html'
}, {
  name: 'holidayWelfare',
  path: 'holidayWelfare',
  templateUrl: 'holidayWelfare/holidayWelfare.html'
}, {
  name: 'teaInformation',
  path: 'teaInformation',
  templateUrl: 'teaInformation/teaInformation.html'
}, {
  name: 'promotionOrder',
  path: 'promotionOrder',
  templateUrl: 'promotion/promotionOrder.html'
}, {
  name: 'issueDynamic',
  path: 'issueDynamic',
  templateUrl: 'suite/issueDynamic.html'
}, {
  name: 'suiteDistributionDynamic',
  path: 'suiteDistributionDynamic',
  templateUrl: 'suite/suiteDistributionDynamic.html'
}, {
  name: 'suiteCfgManage',
  path: 'suiteCfgManage',
  templateUrl: 'suite/suiteCfgManage.html'
}, {
  name: 'commentsManage',
  path: 'commentsManage',
  templateUrl: 'suite/commentsManage.html'
}, {
  name: 'template',
  path: 'template',
  templateUrl: 'template/template.html'
}, {
  name: 'templateEdit',
  path: 'templateEdit',
  templateUrl: 'template/templateEdit.html'
}, {
  name: 'templateEdit',
  path: 'templateEdit/:templateId',
  templateUrl: 'template/templateEdit.html'
}, {
  name: 'deadStock',
  path: 'deadStock',
  templateUrl: 'deadStock/deadStock.html'
}, {
  name: 'newProductRecommend',
  path: 'newProductRecommend',
  templateUrl: 'product/newProductRecommend.html'
}];
},{}],84:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 16/6/27.
 */
module.exports = function(app) {
  app.service('accountService', ['xhrService', '$q', function(xhrService, $q) {

    this._parseAccountData = function(data) {
      //拷贝一份，保持数据源不变
      var temp = [];
      angular.forEach(data, function(item, index) {
        var t = angular.copy(item);
        t.index = index;
        temp.push(t);
      });
      return temp;
    };

    /*进入账户管理页时,显示所有数据*/
    this.findAllManager = function(params, offset, limit) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      var str = '?offset=' + offset + '&limit=' + limit;
      xhrService.Get({
        path: 'manager' + str,
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
    this.indexAccount = function(data, offset) {
      angular.forEach(data, function(item, index) {
        item.index = index + offset;
      });
      return data;
    };

    /*新增用户*/
    this.createManager = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'manager',
        /*原接口: manager/manage/createManager*/
        params: params,
        success: function(res) {
          deferred.resolve(res);
        },
        toastError: true // 用toast替代默认的dialog来显示错误消息
      });
      return promise;
    };

    /* 编辑用户*/
    this.modifyManager = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: "manager/" + params.id,
        /*原接口:manager/manage/modifyManager*/
        params: _.omit(params, 'id'), // _.omit :只过滤出除去keys(有效的键组成的数组)参数指定的属性值
        success: function(res) {
          deferred.resolve(res);
        },
        toastError: true
      });
      return promise;

    };

    /*删除用户*/
    this.deleteManager = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'manager/' + params.id,
        /*原接口:manager/manage/removeManager*/
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    this.loadSupervisors = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'manager/supervisors',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.loadSelf = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'manager/self',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.loadAccount = function(id) {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'manager/' + id,
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.searchName = function(name) {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'manager/search?name=' + name,
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.downloadExcel = function() {
      return $q(function(resolve) {
        xhrService.Get({
          headers: {
            Accept: 'application/octet-stream'
          },
          path: 'permission/export',
          responseType: 'arraybuffer',
          dataType: 'arraybuffer',
          success: function(res) {
            resolve(res);
          }
        });
      })
    };

    this.uploadPermissions = function(comment, file) {
      var fileEx = file.name.split('.').pop();
      var formData = new FormData();
      formData.append('comment', comment);
      formData.append('file', file);
      formData.append('workbookType', fileEx == 'xls' ? 'HSSF' : 'XSSF');
      return $q(function(resolve) {
        xhrService.Upload({
          path: 'permission',
          params: formData,
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.uploadPermissionGroups = function(comment, file) {
      var fileEx = file.name.split('.').pop();
      var formData = new FormData();
      formData.append('comment', comment);
      formData.append('file', file);
      formData.append('workbookType', fileEx == 'xls' ? 'HSSF' : 'XSSF');
      return $q(function(resolve) {
        xhrService.Upload({
          path: 'permission/group',
          params: formData,
          success: function(res) {
            resolve(res);
          }
        });
      });
    };
  }]);
};

},{}],85:[function(require,module,exports){
module.exports = function(app) {
    app.service('authService', ['xhrService', '$q', 'cacheService', function(xhrService, $q, cacheService) {
        //接口
        /*登陆
         *@Params
         *username
         *psw
         */
        this.login = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'auth/login',
                params: params,
                success: function(res, status, headers) {
                    var auth = headers('Authorization');
                    cacheService.setSession(auth);
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        this.exit = function() {
            cacheService.setSession('');
            window.location.reload();
        };
        this.isLogin = function() {
            return cacheService.getSession() ? true : false;
        };
    }]);
};

},{}],86:[function(require,module,exports){
/*
 *cacheService
 */
/*键
 *tk  token
 */

module.exports = function(app) {
    app.service('cacheService', function($cookies) {
        var CONSTANT = {
            SESSION: 'crm_s'
        };
        this.getItem = function(key) {
            return $cookies.get(key);
        };
        this.setItem = function(key, value) {
            return $cookies.put(key, value);
        };
        this.removeItem = function(key) {
            $cookies.remove(key);
        };
        this.getSession = function() {
            return this.getItem(CONSTANT.SESSION);
        };
        this.setSession = function(value) {
            this.setItem(CONSTANT.SESSION, value);
        };
    });
};

},{}],87:[function(require,module,exports){
/*
 *companyService
 */
module.exports = function(app) {
  app.service('companyService', ['xhrService', '$q', function(xhrService, $q) {
    var me = this;
    this.companyList = [];
    this.CompanyModel = [{
      name: 'companyId'
    }, {
      name: 'staffNum'
    }, {
      name: 'companyName'
    }, {
      name: 'shelfType'
    }, {
      name: 'des'
    }, {
      name: 'address'
    }, {
      name: 'limitFee'
    }, {
      name: 'contacts',
      model: 'ContactModel'
    }, {
      name: 'lng'
    }, {
      name: 'lat'
    }, {
      name: 'status'
    }, {
      name: 'followPeople'
    }, {
      name: 'sendWeek'
    }, {
      name: 'superAdmin'
    }, {
      name: 'pickingType'
    }, {
      name: 'pickingRemark'
    }, {
      name: 'customerType'
    }];
    this.ContactModel = [{
      name: 'id'
    }, {
      name: 'mobile'
    }, {
      name: 'companyId'
    }, {
      name: 'tel'
    }, {
      name: 'qq'
    }, {
      name: 'wechat'
    }, {
      name: 'contactName'
    }];
    this.formate = function(modelname, data) {
      var result;
      var me = this;
      me.recursion = arguments.callee;
      var u = function(item) {
        var obj = {};
        var temp = _.omit(item, function(value, key) {
          var mdname;
          var r = true;
          var index = _.pluck(me[modelname], 'name').indexOf(
            key);
          if (index !== -1) {
            mdname = me[modelname][index].model;
            mdname ? obj[key] = me.recursion(mdname, value) :
              false;
            r = false;
          }
          return r;
        });
        return angular.extend(temp, obj);
      };
      if (Object.prototype.toString.call(data) == '[object Array]') {
        result = [];
        angular.forEach(data, function(item) {
          result.push(u(item));
        });
      } else {
        result = u(data);
      }
      console.log(result);
      return result;
    };
    this.indexCompany = function(data, offset) {
      angular.forEach(data, function(item, index) {
        item.index = index + offset;
      });
      return data;
    };
    this.parseCompanyList = function(data, offset) {
      angular.forEach(data, function(item, index) {
        item.index = index + offset;
        item.lastContact = item.contacts[item.contacts.length -
          1];
      });
      return data;
    };
    //接口
    /*获取公司列表
    offset(条目偏移)
    limit(当前页显示数据个数)
    isDeleted(0:未删除 1:已删除 不传返回所有)
    companyName(无值可不传)
    address(无值可不传)
    */
    this.queryCompanyList = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      params.isDeleted = 0;
      xhrService.Post({
        path: 'company/_query',
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
    /*获取公司信息
     *@Params
     *companyId
     */
    this.queryCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/' + params.companyId,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*创建公司
     *@Params
     *companyName //公司名称
     *staffNum //企业员工数
     *shelfType //企业类型,1:企业总包；2:员工自费
     *address //企业地址
     *des //企业描述
     *limitFee//企业折扣上限
     *contacts {companyId,contactName,mobile,qq,wechat,tel}//企业联系人列表
     */
    this.createCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company',
        params: me.formate('CompanyModel', params),
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*修改公司
     *@Params
     *companyId
     *companyName
     *staffNum
     *shelfType
     *address
     *des
     */
    this.editCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;

      xhrService.Put({
        path: 'company',
        params: me.formate('CompanyModel', params),
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*获取企业溢价状态
     *companyId
     */
    this.queryCompanyPremiumState = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'premium/company/' + params.companyId,
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
    /*设置企业溢价
     *companyId
     */
    this.setCompanyPremium = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'premium',
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

    /*添加企业联系人
     *@Params
     *companyId
     *contactName
     *mobile
     *qq
     *wechat
     *tel
     */
    this.addCompanyContact = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/contact',
        params: me.formate('ContactModel', params),
        floatToString: true,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*修改企业联系人
     *@Params
     *id
     *companyId
     *contactName
     *mobile
     *qq
     *wechat
     *tel
     */
    this.editCompanyContact = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'company/contact',
        params: me.formate('ContactModel', params),
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*删除企业联系人
     *@Params
     *contactId
     */
    this.deleteCompanyContact = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'company/contact' + '?contactId=' + params.contactId,
        params: {},
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };

    /*新建企业信息
     *@Params
     *companyId
     *info
     */
    this.createCompanyInformation = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/survey',
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
    /*获取企业信息列表
     *@Params
     *companyId
     */
    this.queryCompanyInformation = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/survey',
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
    /*重置企业密码
     *@Params
     *companyId
     */
    this.resetCompanyPassword = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'company/manager',
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
    /*企业状态变更日志
     *companyId
     */
    this.queryCompanyStateChangeLog = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/status/log/find_list',
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
    /*获取公司情报概览
     *@Params
     *companyId
     */
    this.queryCompanyPreferSummary = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/survey/summary',
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
    /*创建公司情报概览
     *@Params
     *companyId
     *info
     */
    this.createCompanyPreferSummary = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/survey/summary',
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
    /*创建/修改企业坏账抵扣
     *companyId
     *change
     */
    this.setCompanyDeduction = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'deduction/company/' + params.companyId,
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
    /*查询企业坏账抵扣信息
     *companyId
     */
    this.queryCompanyDeduction = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'deduction/company/' + params.companyId,
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
    /*查询企业坏账余额流水
     *companyId
     *offset
     *limit
     */
    this.queryCompanyDeductionFlow = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'deduction/company/' + params.companyId + '/logs',
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
    // 黑名单列表
    this.getBlockCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/blacklist/' + params.companyId,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    this.getZeroProduct = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/zerosell/' + params.companyId,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    // 添加黑名单
    this.addBlockCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/blacklist/',
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
    // 修改黑名单
    this.modifyBlockCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'company/blacklist/',
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
    //删除黑名单
    this.deleteBlockCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'company/blacklist/' + params.id,
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
},{}],88:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 2016/10/19.
 */
module.exports = function (app) {
    app.service('configurationInformationService', ['xhrService', '$q', function (xhrService, $q) {

        /**
         * CRM信息配置 - 零花钱基数#
         * 接口名 /info/config/pocket_money
         * 请求方法 PUT
         * 请求参数 : totalFee  零花钱校验值   int类型
         */
        this.pocketMoneyAudit = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'info/config/pocket_money',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * CRM信息配置 - 零花钱基数 -- 获取默认的零花钱基数
         * 接口名 info/config/money_base
         * 请求方法 GET
         */
        this.getPocketMoneyAudit = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'info/config/money_base',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * CRM信息配置 - 想要商品爱心跳动时间配置
         * 接口名 /info/config/heart_show
         * 请求方法 PUT
         * 请求参数: showTime  int类型
         */
        this.wishListConfiguration = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'info/config/heart_show',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };


        /**
         * CRM信息配置 - 获取  想要商品爱心跳动时间配置
         * 接口名 info/config/heart_base
         * 请求方法 GET
         */
        this.getWishListConfiguration = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'info/config/heart_base',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         *  CRM信息配置 - 营销商品/组合定金额度
         *  接口名 company/promotion/config/deposit
         *  请求方法 Get
         */
        this.getMarketingActivitiesDepositInfo = function () {
            // debugger
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/promotion/config/deposit',
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        this.marketingActivitiesDepositInfo = function (params) {
            // debugger
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/promotion/config/deposit/' + params,
                // params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * CRM信息配置 - 获取选购单上限#
         * 接口名 /info/config/manager_order
         * 请求方法 GET
         */
        this.getChooseOrderInfoCeiling = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'info/config/manager_order',
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * CRM信息配置 - 创建/修改选购上限值#
         * 接口名 /info/config/manager_order
         * 请求方法 POST
         * 请求参数: id   limitNum   shelfNumType
         */
        this.createChooseOrderInfo = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'info/config/manager_order',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        }
    }]);
};

},{}],89:[function(require,module,exports){
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

},{}],90:[function(require,module,exports){
/*
 *dialogService
 */
module.exports = function(app) {
  app.service('dialogService', ['$mdDialog', '$q', function($mdDialog, $q) {
    this.alert = function() {};
    this.confirm = function() {};
  }]);
};
},{}],91:[function(require,module,exports){
/*
 *companyService
 */
module.exports = function(app) {
    app.service('financeService', ['xhrService', '$q', '$filter', function(xhrService, $q, $filter) {
        /*财务列表
         *companyId
         *financeStartTime
         *financeEndTime
         *orderStates
         *isInvoice
         *isUpdateTime
         */
        this.queryFinanceList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            params.financeStartTime && (params.financeStartTime = params.financeStartTime.getTime());
            params.financeEndTime && (params.financeEndTime = params.financeEndTime.getTime());
            xhrService.Get({
                path: 'logistics/order/settlement/finance/findList',
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
        /*财务结算单开票
         *
         */
        this.createInvoice = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            params.invoiceFee = $filter('points')(params.invoiceFee);
            params.expressCompany = params.expressCompany.desc || params.expressCompany;
            xhrService.Put({
                path: 'logistics/order/settlement/finance/invoice',
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
        /*结算单确认收款
         *
         */
        this.confirmPayment = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            params.receiveFee = $filter('points')(params.receiveFee);
            params.dueFee = $filter('points')(params.dueFee);
            params.badDebtFee = $filter('points')(params.badDebtFee);
            var d = new Date(params.receiveFeeTime);
            var s = new Date(params.receiveFeeTimeHour);
            d.setHours(s.getHours());
            d.setMinutes(s.getMinutes());
            d.setSeconds(s.getSeconds());
            params.receiveFeeTime = d.getTime();
            xhrService.Put({
                path: 'logistics/order/settlement/finance/confirmPayment',
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

},{}],92:[function(require,module,exports){
module.exports = function(app) {
    app.service('goodsChooseService', ['xhrService', '$q', function(xhrService, $q) {
        /*分页查询选购单列表
        *offset R
        limit R
        companyId
        startTime
        endTime
        orderStates
        */
        this.queryManagerOrderList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'managerorder/orders',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*查询行政选购单明细
         *orderId
         */
        this.queryManagerOrderDetail = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'managerorder/' + params.orderId,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*修改行政选购单状态
        *orderId
        *orderState
        */
        this.modifyOrderState = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'managerorder/'+params.orderId+'/state',
                params:{
                    orderState:params.orderState,
                    optRecord:params.optRecord
                },
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
}

},{}],93:[function(require,module,exports){
/**
 *
 */
module.exports = function (app) {
    app.service('holidayWelfareService', ['xhrService', '$q', '$filter', 'CONSTANTS', function (xhrService, $q, $filter, CONSTANTS) {

        /**
         * 显示待付款状态的订单 不显示支付方式
         */
        this.parseData = function (data) {
            // debugger
            var t = angular.copy(data);
            angular.forEach(t, function (order) {
                if (order.order.status == CONSTANTS.ORDER_STATUS.CANCEL) {
                    order.order.payChannel = '';
                }
                /*if (order.order.payChannel == CONSTANTS.PAYMENT_STATUS.WECHAT_PAY || order.order.payChannel == CONSTANTS.PAYMENT_STATUS.WECHAT_APP) {
                    order.order.status = CONSTANTS.ORDER_STATUS.WAITING_DISTRIBUTION;
                }*/
            });
            return t;
        };


        /**
         * 获取所有节假日福利订单
         */
        this.getAllWelfareOrders = function (params) {
            // debugger
            var deferred = $q.defer();
            var promise = deferred.promise;
            if(params.type){//获取默认
                // debugger
                params.endTime =  $filter('date')(params.endTime, 'yyyy-MM-dd HH:mm:ss');
                params.startTime = $filter('date')(params.startTime, 'yyyy-MM-dd HH:mm:ss');
                delete params.type;
            } else{
            }
            // params.limit=25;
            xhrService.Get({
                path: 'company/holiday/order/page',
                params: params,
                // remote:'holiday',
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /**
         * 明细 --> 备注 接口
         */
        this.setNotes = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/holiday/order/notes',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         *  取消订单
         *  params : id
         */
        this.cancelOrder = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/holiday/order/cancel',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 收到款项
         */
        this.receivePayment = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/holiday/order/confirm',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 完成配送
         */
        this.completeDelivery = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/holiday/order/finish',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 获取默认的(预定时间、热卖时间、结束时间)
         */
        this.getHolidayDefaultTime = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'holiday/period/default',
                // params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 更新(预定时间、热卖时间、结束时间)
         */
        this.updateHolidayTime = function (params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'holiday/period/update',
                params: params,
                success: function (res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
};
},{}],94:[function(require,module,exports){
//inStorageService
module.exports = function(app) {
    app.service('inStorageService', ['xhrService', '$q', function(xhrService, $q) {
        /*
         *获取回仓单列表
         */
        this.getInStorageList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                // path: 'company/stock/query?pageNo=' + params.pageNo,
                path: 'logistics/order/backstock/findList',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /**
         * 获取回仓单详情
         */
        this.getInStorageDetail = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                // path: 'company/stock/detail',
                path: 'logistics/order/backstock/' + params.orderId,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*
         * 获取管理员列表
         */
        this.getAllManager = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'manager',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /**
         * 修改回仓单信息
         */
        this.updateInStorageDetail = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'logistics/order/backstock',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
};
},{}],95:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 16/8/4.
 */
module.exports = function(app) {
    app.service('labelsManagementService', ['xhrService', '$q', function(xhrService, $q) {
        /*获取所有标签
        */
        this.getAllLabelList = function() {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/label/find_all_list',
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /**
         * 商品标签 - 列表查询
         * 接口名 /company/label
         * 请求方法 GET
         * 请求参数: labelName   offset  limit
         */
        this.getLabelsList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/label/find_name_list',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 创建商品标签名称
         * 接口名 /company/label/create_name
         * 请求方法 POST
         * 请求参数: type  name   remark
         */
        this.createLabelsName = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'company/label/create_name',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 查看商品标签名称明细
         * 接口名 /company/label/这里传labelId
         * 请求方法 GET
         * 请求参数: labelId
         */
        this.getLabelsDetails = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/label/' + params.labelId,
                /*params: params,*/
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 修改商品标签名称
         * 接口名 /company/label/modify_name
         * 请求方法 PUT
         * 请求参数: id  type   name   remark
         */
        this.modifylabelsName = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/label/modify_name',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 删除商品标签名称
         * 接口名 /company/label/delete_name/这里填写labelId
         * 请求方法 DELETE
         * 请求参数: id
         */
        this.deleteCommodityLabelName = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Delete({
                path: 'company/label/delete_name/' + params.id,
                /*params: params,*/
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 获取标签类型列表
         * 接口名 /company/label/find_type_list
         * 请求方法 GET
         * 请求参数 : 无
         */
        this.obtainLabelTypeList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/label/find_type_list',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 创建标签类型
         * 接口名 /company/label/create_type
         * 请求方法 POST
         * 请求参数: type
         */
        this.createLabelsType = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'company/label/create_type',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };


        /**
         * 商品标签 - 更新标签类型
         * 接口名 /company/label/modify_type
         * 请求方法 PUT
         * 请求参数: id  type
         */
        this.updateLabelType = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/label/modify_type',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };

        /**
         * 商品标签 - 删除标签类型
         * 接口名 /company/label/delete_type/这里填写labelId
         * 请求方法 DELETE
         * 请求参数: id
         */
        this.deleteLabelType = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Delete({
                path: 'company/label/delete_type/' + params.id,
                /*params: params,*/
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
};
},{}],96:[function(require,module,exports){
module.exports = function(app) {
    app.service('loaddingService', [ function() {
        var el = $('#loadding');
        el.on('click',function(e){
        	e.stopPropagation();
        	e.preventDefault();
        });
        this.show = function() {
            el.removeClass('hidden');
        };
        this.hide = function() {
            el.addClass('hidden');
        };
    }]);
};

},{}],97:[function(require,module,exports){
module.exports = function(app) {
  app.service('modalService', ['$uibModal', function($uibModal) {
    this.initModal = function(opts) {
      var config = angular.extend({
        templateUrl: opts.templateUrl || 'modelcontent', //指向上面创建的视图
        size: opts.size || '',
        backdrop: 'static',
        controller: function($scope) {
          //确定  取消
          $scope.confirm = function() {
            var me = this;
            if (opts.ok) { //关闭
              opts.ok.call(this, $scope).then(function() {
                me.$close() || me.modal.close();
              });
            } else if ($scope.ok) {
              $scope.ok.apply(this, [$scope]);
            } else { //不关闭

            }
          };
          $scope.cancel = function() {
            this.$close() || this.modal.close();
          };
        }
      }, opts);
      return $uibModal.open(config);
    };
  }]);
};
},{}],98:[function(require,module,exports){
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

},{}],99:[function(require,module,exports){
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
},{}],100:[function(require,module,exports){
module.exports = function(app) {
    app.service('positionService', ['xhrService', '$q', function(xhrService, $q) {
        /*新增仓位
        @Params
        row
        layer
        location
        */
        this.createPosition = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'product/position',
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
        /*修改仓位
        @Params
        id
        row
        layer
        location
        */
        this.modifyPosition = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'product/position',
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
        /*分页获取仓位
        @Params
        name
        sortType
        offset
        limit
        */
        this.queryPositionsByPage = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'product/position/_query',
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
        /*非分页获取仓位
        @Params
        name
         */
        this.queryAllPositions = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'product/position/_queryAll',
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
},{}],101:[function(require,module,exports){
/**
 * Created by lijinlong
 */
module.exports = function(app) {
    app.service('printService', function($mdDialog) {
        var LODOP;
        this.addHtml = function(html) {
            LODOP = window.getLodop();
            LODOP.SET_PRINT_MODE("POS_BASEON_PAPER", true);
            LODOP.SET_PRINT_COPIES(1);
            LODOP.SET_PRINT_STYLEA(0, "Horient", 0);
            LODOP.PRINT_INIT("");
            LODOP.ADD_PRINT_HTM(0, 0, "100%", "BottomMargin:10px", html);
        };
        this.preview = function(html) {
            this.addHtml(html)
            LODOP.PREVIEW();
        };
        this.selectAsDefaultPrinter = function() {
            LODOP = window.getLodop();
            LODOP.SELECT_PRINTER();
        };
        this.print = function(html) {
            this.addHtml(html);
            LODOP.PRINT();
        };
        this.printHtmls = function(htmls) {
            var me = this;
            if (_.isArray(htmls)) {
                angular.forEach(htmls, function(item) {
                    me.print(item);
                });
            } else {
                me.print(htmls);
            }
        };
        this.printByDefaultPrinter = function(htmls, needConfirm) {
            needConfirm = typeof needConfirm == 'undefined' ? true : needConfirm;
            var me = this;
            if (needConfirm) {
                $mdDialog.show($mdDialog.confirm({
                    title: '提示',
                    textContent: '请点击确认按钮打印！',
                    ok: '确认',
                    cancel: '取消'
                })).then(function() {
                    me.printHtmls(htmls);
                });
            } else {
                me.printHtmls(htmls);
            }

        };
    });
};

},{}],102:[function(require,module,exports){
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
},{}],103:[function(require,module,exports){
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

},{}],104:[function(require,module,exports){
module.exports = function(app) {
  app.service('roleService', function($q, xhrService) {
    /**
     * 获取所有角色
     */
    this.getRoles = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'role',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };
    /**
     * 添加角色
     */
    this.addRole = function(params) {
      return $q(function(resolve) {
        xhrService.Post({
          path: 'role',
          params: {
            parentId: params.parentId,
            name: params.name,
            permissions: params.permissionIds
          },
          success: function() {
            resolve();
          }
        });
      });
    };
    /**
     * 编辑角色
     */
    this.editRole = function(roleId, params) {
      return $q(function(resolve) {
        xhrService.Put({
          path: 'role/' + roleId,
          params: {
            name: params.name,
            permissions: params.permissionIds
          },
          success: function() {
            resolve();
          }
        });
      });
    };
    /**
     * 删除角色
     */
    this.removeRole = function(roleId) {
      return $q(function(resolve) {
        xhrService.Delete({
          path: 'role/' + roleId,
          success: function() {
            resolve();
          }
        });
      });
    };
    /**
     * 获取所有普通权限
     */
    this.getNormalPermissions = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'permission/2',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };
    /**
     * 获取所有特殊权限
     */
    this.getCriticalPermissions = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'permission/3',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };
  });
};

},{}],105:[function(require,module,exports){
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
},{}],106:[function(require,module,exports){
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
},{}],107:[function(require,module,exports){
module.exports = function(app) {
    app.service('staffService', function($q, xhrService) {
        /*列表对象查询
         *queryParam
         *companyId
         *offset
         *limit
         */
        this.queryStaffList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/staff/find_list',
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
        /*零花钱对象详情查看
         *staffId
         */
        this.queryStaffDetail = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/staff/' + params.staffId,
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
        /*零花钱对象添加
         *mobile
         *alias
         *remark
         */
        this.addStaff = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'company/staff',
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

        /*零花钱对象修改
         *id
         *mobile
         *alias
         *remark
         *avatar  
         */
        this.editStaff = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/staff',
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
        /*零花钱对象删除
         *staffId
         */
        this.deleteStaff = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Delete({
                path: 'company/staff/' + params.staffId,
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
        /*零花钱对象 - excel校验
         *
         */
        this.examinExcel = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var formData = new FormData();
            formData.append('file', params.file);
            formData.append('companyId', params.companyId);
            xhrService.Upload({
                path: 'company/staff/excel_check',
                params: formData,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
        /*零花钱对象导入
         *filePath
         */
        this.importStaffExcel = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var formData = new FormData();
            formData.append('file', params.file);
            formData.append('companyId', params.companyId);

            xhrService.Upload({
                path: 'company/staff/excel_import',
                params: formData,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };

    });
};

},{}],108:[function(require,module,exports){
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
},{}],109:[function(require,module,exports){
module.exports = function(app) {
    app.service('templateService', ['xhrService', '$q', 'cacheService', function(
        xhrService, $q, cacheService) {
        var me = this;
        this.query = function(path, type, params, needAll) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var params = params || {};
            xhrService[type].call(this, {
                path: path,
                params: params,
                success: function(res, data) {
                    deferred.resolve(res);
                },
                error: function(res, data) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
        /*获取模版列表
         *dest_id
         */
        this.queryTemplateList = function(params) {
            return me.query('template/helper/pageable', 'Post', params);
        };
        /*添加模板
         *name
         *version
         *dest_id
         */
        this.addTemplate = function(params) {
            return me.query('template/add', 'Post', params);
        };
        /*创建模板
        
         */
        this.createTemplate = function(params) {
            return me.query('template/helper', 'Post', params);
        };
        /*修改模板
         *id
         *type
         *name
         *status   
         *module
         */
        this.editTemplate = function(params) {
            // params.module = JSON.stringify(params.module);
            return me.query('template/helper', 'Put', params);
        };

        /*删除模板
         *id
         */
        this.deleteTemplate = function(params) {
            return me.query('template/helper/1/'+params.id, 'Delete', params);
        };
        /*获取模板详情
         */
        this.queryTemplateDetail = function(params) {
            return me.query('template/helper/' + params.id, 'Get', params);
        };
        /*模板发布
        type
        id
        status
         */
        this.publishTemplate=function(params){
            return me.query('template/helper/modify_status', 'Put', params);
        }


    }]);
};

},{}],110:[function(require,module,exports){
module.exports = function(app) {
  app.service('uploadService', ['xhrService', 'utilService', '$q', function(
    xhrService, utilService, $q) {
    var picFormApiSecret = window.cfg.picSecret;
    //建立一個可存取到該file的url
    this.getObjectURL = function(file) {
      var url = null;
      if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    };
    this.getGuid = function() {
      var guid = "";
      for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
          guid += "";
      }
      return guid;
    };
    this.upload = function(opts) {
      var file_dom = opts.file_dom,
        folder = opts.folder,
        str_dom = opts.str_dom,
        size_limit = opts.size_limit || {},
        is_upload_upyun = typeof opts.is_upload_upyun != 'undefined' ?
        opts.is_upload_upyun : true;
      var deferred = $q.defer();
      var promise = deferred.promise;
      var me = this;
      var file = file_dom.files[0];

      var myDate = new Date();
      var img = new Image();
      img.src = me.getObjectURL(file);
      img.onload = function() {
        if (file.size > size_limit.size && size_limit.size) {
          utilService.alertError('该图片已超过' + utilService.parseKByBytes(
              size_limit.size) +
            'k的限制');
          return;
        }
        if (img.width > size_limit.width && size_limit.width) {
          utilService.alertError('该图片宽已超过' + size_limit.width +
            '的限制');
          return;
        }
        if (img.height > size_limit.height && size_limit.height) {
          utilService.alertError('该图片高已超过' + size_limit.height +
            '的限制');
          return;
        }
        if (is_upload_upyun == 'true') { //需要上传又拍云
          var ext = '.' + file.name.split('.').pop();
          var config = {
            bucket: window.cfg.picBucket,
            expiration: parseInt((new Date().getTime() + 3600000) /
              1000),
            // 尽量不要使用直接传表单 API 的方式，以防泄露造成安全隐患
            form_api_secret: picFormApiSecret
          };
          var instance = new Sand(config);
          var path = '/' + folder + '/' + myDate.getFullYear() +
            '/' +
            myDate.getMonth() + '/' + me.getGuid() + '_' + file.size +
            '_' + img.width +
            'X' + img.height + ext;
          instance.upload(path, file_dom, function(res) {
            if (!str_dom) {
              deferred.resolve(res);
            } else {
              angular.element(str_dom).val(res.path);
            }
          });
        } else { //不需上传又拍云
          var res = {
            file_size: file.size,
            image_width: img.width,
            image_height: img.height,
            path: img.src
          }
          deferred.resolve(res);
        }

      };
      return promise;
    };
    this.uploadFile = function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      var input = angular.element('<input type="file"/>');
      input.bind('change', function(e) {
        var file = e.currentTarget.files[0];
        deferred.resolve(file);
      });
      input[0].click();
      return promise;
    };
  }]);
};
},{}],111:[function(require,module,exports){
/*
 *shelfService
 */
module.exports = function(app) {

  app.service('utilService', function($sce, CONSTANTS, $mdDialog, $filter) {
    /*
     *格式化表格头
     */
    this.transformHead = function(heads, config) {
      var temp = [];
      angular.forEach(heads, function(item) {
        if (!item.getValue) {
          item.getValue = function(value, record, index, scope) {
            var v = '<span>' + record[item.field] + '</span>';
            if (!(config && config.needCompile)) { //不需要编译
              v = $sce.trustAsHtml(v);
            }
            return v;
          };
        }
        temp.push(item);
      });
      return temp;
    };
    this.parseDateByTimeStamp = function(t, pattern) {
      return $filter('date')(t, 'yyyy-MM-dd HH:mm:ss');
    };
    /*
    *格式化时间
    d:date类型
    fmt
    */
    this.parseTimeByDate = function(d, fmt) {
      var f = fmt || 'yyyy-MM-dd hh:mm:ss',
        o = {
          "M+": d.getMonth() + 1, //月份
          "d+": d.getDate(), //日
          "h+": d.getHours(), //小时
          "m+": d.getMinutes(), //分
          "s+": d.getSeconds(), //秒
          "q+": Math.floor((d.getMonth() + 3) / 3), //季度
          "S": d.getMilliseconds() //毫秒
        };
      if (/(y+)/.test(f)) {
        f = f.replace(RegExp.$1, (d.getFullYear() + "").substr(4 -
          RegExp.$1.length));
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(f)) {
          f = f.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (
            ("00" + o[k]).substr(("" + o[k]).length)));
        }
      }
      return f;
    };
    /*
    *格式化时间
    *l:long类型
    fmt
    */
    this.parseTimeByLong = function(l, fmt) {
      var d = new Date(parseInt(l));
      return this.parseTimeByDate(d, fmt);
    };
    this.parseTimeByDateDis = function(d, dis, fmt) {
      var f = fmt || 'yyyy-MM-dd hh:mm:ss';
      var beginTime = d.getTime();
      var endTime = d.getTime() + dis * 24 * 60 * 60 * 1000;
      d.setTime(endTime);
      return this.parseTimeByDate(new Date(d), fmt);
    };
    this.parseLongTimeByDateDis = function(d, dis) {
      var beginTime = d.getTime();
      var endTime = d.getTime() + dis * 24 * 60 * 60 * 1000;
      return endTime;
    };
    this.getConstantJsonValue = function(key) {
      var values = CONSTANTS.SHELF_STATE.DESC;
      var result = [];
      angular.forEach(values, function(v, k) {
        result.push({
          value: k,
          desc: v
        });
      });
      console.log(result);
      return result;
    };
    this.indexArray = function(data, offset, keyname) {
      if (!keyname) {
        keyname = 'index';
      }
      angular.forEach(data, function(item, index) {
        item[keyname] = index + offset;
      });
      return data;
    };
    //获取查询请求的参数
    this.getSearchParams = function(params, value, key) {
      if (value) {
        params[key] = value;
      }
      return params;
    };
    //重置分页参数
    this.resetPagination = function(scope, offset, limit) {
      scope.offset = offset;
      scope.limit = limit;
      return {
        offset: scope.offset,
        limit: scope.limit
      };
    };
    //弹出错误警告
    this.alertError = function(errorMessage) {
      $mdDialog.show($mdDialog.alert({
        title: '失败',
        textContent: errorMessage,
        ok: '关闭',
        zIndex: 99999999999999
      }).clickOutsideToClose(true));
    };
    //弹出成功提示
    this.alertSuccess = function(msg) {
      $mdDialog.show($mdDialog.alert({
        title: '成功',
        textContent: msg,
        ok: '关闭',
        zIndex: 99999999999999
      }).clickOutsideToClose(true));
    };
    //将字节转换为K
    this.parseKByBytes = function(bytes) {
      return Math.round((bytes /
        1024 * 100) / 100);
    };
    //获取人民币
    this.getRMBStr = function(amt) {

      return amt ? (parseInt(amt / 100) + '.' + parseInt((amt / 10) %
        10) + parseInt(amt % 10)) : '0';
    };
    //获取分
    this.getPointInt = function(value) {
      return parseInt((value * 100).toFixed(0));
    };
    this.getPointDouble = function(value) {
      return (value * 100).toFixed(2);
    };
  });
};
},{}],112:[function(require,module,exports){
/**
 * Created by taoxiaofeng on 16/6/27.
 */
module.exports = function(app) {
    app.service('welfareService', ['xhrService', '$q', function(xhrService, $q) {
        /*零花钱工单列表分页查询
         *companyId
         *offset
         *limit
         */
        this.queryWelfareList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'welfare/pocketmoney/pageable',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*查询零钱发放列表
         *orderId
         *offset
         *limit
         */
        this.queryWelfareObjectList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'welfare/pocketmoney/order/' + params.orderId + '/items',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*零钱审核
         *orderId
         *orderState
         *optRecord
         */
        this.auditWelfare = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'welfare/pocketmoney/order/state',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        /*发放零钱
        *
        */
    }]);
};

},{}],113:[function(require,module,exports){
module.exports = function(app) {
    app.service('wishlistService', ['xhrService', '$q', function(xhrService, $q) {
        this._parseWishlist = function(data) {
            var temp = [];
            var shelfCount = data.shelfCount;
            angular.forEach(data.items, function(item, i) {
                var t = angular.copy(item);
                t.excess = i + 1 > 20 * shelfCount;//大于20*货架数斜体显示
                temp.push(t);
            });
            return temp;
        };
        /*查询企业心愿商品列表
         *companyId
         */
        this.queryWishlist = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'wishlist/company/' + params.companyId + '/reached',
                success: function(res) {
                    deferred.resolve(res);
                }
            });
            return promise;
        };
    }]);
}

},{}],114:[function(require,module,exports){
module.exports = function(app) {
  app.service('xhrService', ['$http', 'cacheService', '$mdDialog', '$mdToast',
    'loaddingService',
    function($http, cacheService, $mdDialog, $mdToast, loaddingService) {
      var _request = function(path, type, opts) {
        var config = { responseType: opts.responseType };
        config.url = (path ? window.cfg[path] : window.cfg.biz) + opts.path;
        config.method = type;
        config.data = {};
        config.timeout = 30000;
        config.headers = angular.extend(config.headers || {}, opts.headers);
        var pageConfig = {};
        if (type !== 'GET' && opts.params && opts.params.offset !==
          undefined && opts.params.limit !== undefined) {
          pageConfig.offset = opts.params.offset;
          pageConfig.limit = opts.params.limit;
          opts.params = _.omit(opts.params, 'offset');
          opts.params = _.omit(opts.params, 'limit');

          if (config.url.indexOf('?') == -1) {
            config.url = config.url + '?';
          } else {
            config.url = config.url + '&';
          }
          config.url = config.url + 'offset=' + pageConfig.offset +
            '&limit=' + pageConfig.limit;
        }
        type == 'GET' ? config.params = opts.params : config.data =
          opts.params;
        var dataType = opts.dataType ? opts.dataType : 'text';
        var authorization = cacheService.getSession();
        config.transformResponse = function(res) {
          if (dataType == 'text' && res) {
            res = res.replace(/\":(\d{16,})/g, "\":\"$1\""); //long型转string
            try {
              res = JSON.parse(res);
            } catch (e) {
              res = res;
            }

          }
          return res;
        };
        config.headers = angular.extend(config.headers || {}, {
          'Authorization': authorization,
          'X-Request-With': null
        });
        if (authorization) {
          config.headers = angular.extend(config.headers || {}, {
            'Authorization': authorization
          });
        }
        //loadding start
        loaddingService.show();

        $http(config).success(function(res, status, headers, config) {
          //loadding end
          loaddingService.hide();
          opts.success.call(this, res.data || res, status, headers,
            config);

        }).error(function(res, status, headers, config) {
          //loadding end
          loaddingService.hide();
          var error = opts.error;
          if (status == 403) {
            cacheService.setSession('');
            window.location.hash = '#/home';
            window.location.reload();
            return;
          }
          var errorMessage = res && (res.message || res.msg || res.error);
          if (opts.toastError) {
            $mdToast.show($mdToast.simple()
              .textContent("失败: " + errorMessage)
              .position('bottom right')
              .hideDelay(3000));
          } else {
            $mdDialog.show($mdDialog.alert({
              title: '失败',
              textContent: errorMessage,
              ok: '关闭',
              zIndex: 99999999999999
            }).clickOutsideToClose(true));
          }
          //res && window.alert(res.message);
          error && error.call(this, res);

        });
      };
      this.Get = function(opts) {
        _request(opts.host || 'biz', 'GET', opts);
      };
      this.Post = function(opts) {
        _request(opts.host || 'biz', 'POST', opts);
      };
      this.Put = function(opts) {
        _request(opts.host || 'biz', 'PUT', opts);
      };
      this.Delete = function(opts) {
        _request(opts.host || 'biz', 'DELETE', opts);
      };
      this.Upload = function(opts) {
        opts.headers = angular.extend({
          'Content-Type': undefined
        }, opts.headers || {});
        opts.transformRequest = angular.identity;
        _request(opts.host || 'biz', 'POST', opts);
      };
    }
  ]);
};
},{}],115:[function(require,module,exports){
module.exports=[require("./service/accountService.js"),require("./service/authService.js"),require("./service/cacheService.js"),require("./service/companyService.js"),require("./service/configurationInformationService.js"),require("./service/deadStockService.js"),require("./service/dialogService.js"),require("./service/financeService.js"),require("./service/goodsChooseService.js"),require("./service/holidayWelfareService.js"),require("./service/inStorageService.js"),require("./service/labelsManagementsService.js"),require("./service/loaddingService.js"),require("./service/modalService.js"),require("./service/newProductService.js"),require("./service/orderService.js"),require("./service/positionService.js"),require("./service/printService.js"),require("./service/productService.js"),require("./service/promotionService.js"),require("./service/roleService.js"),require("./service/salesService.js"),require("./service/shelfService.js"),require("./service/staffService.js"),require("./service/suiteService.js"),require("./service/templateService.js"),require("./service/uploadService.js"),require("./service/utilService.js"),require("./service/welfareService.js"),require("./service/wishlistService.js"),require("./service/xhrService.js")]
},{"./service/accountService.js":84,"./service/authService.js":85,"./service/cacheService.js":86,"./service/companyService.js":87,"./service/configurationInformationService.js":88,"./service/deadStockService.js":89,"./service/dialogService.js":90,"./service/financeService.js":91,"./service/goodsChooseService.js":92,"./service/holidayWelfareService.js":93,"./service/inStorageService.js":94,"./service/labelsManagementsService.js":95,"./service/loaddingService.js":96,"./service/modalService.js":97,"./service/newProductService.js":98,"./service/orderService.js":99,"./service/positionService.js":100,"./service/printService.js":101,"./service/productService.js":102,"./service/promotionService.js":103,"./service/roleService.js":104,"./service/salesService.js":105,"./service/shelfService.js":106,"./service/staffService.js":107,"./service/suiteService.js":108,"./service/templateService.js":109,"./service/uploadService.js":110,"./service/utilService.js":111,"./service/welfareService.js":112,"./service/wishlistService.js":113,"./service/xhrService.js":114}]},{},[82])