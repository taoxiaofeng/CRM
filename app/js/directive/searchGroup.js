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
