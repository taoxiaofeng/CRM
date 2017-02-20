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