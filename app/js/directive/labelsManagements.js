/**
 * Created by taoxiaofeng on 16/8/4.
 */
module.exports = function(app) {
    app.directive('labelsManagements', function() {
        return {
            restrict: 'EA',
            templateUrl: 'labelsManagements/labelsManagements.html',
            transclude: true,
            controller: function($scope, $element, $attrs) {

            }
        };
    });
};
