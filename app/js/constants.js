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