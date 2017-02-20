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
