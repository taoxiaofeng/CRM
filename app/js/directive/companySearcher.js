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