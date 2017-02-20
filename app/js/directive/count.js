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
