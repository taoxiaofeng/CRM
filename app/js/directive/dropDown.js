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