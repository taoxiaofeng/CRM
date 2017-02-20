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