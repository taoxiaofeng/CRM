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
