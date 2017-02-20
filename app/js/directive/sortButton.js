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