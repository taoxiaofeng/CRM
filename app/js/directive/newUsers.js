/**
 * Created by taoxiaofeng on 16/7/28.
 */
/*
 *编译html
 * compile-html
 */
module.exports = function (app) {
    app.directive('account', function () {
        return {
            restrict: 'EA',
            // templateUrl:'account/account.html',
            transclude: true,
            scope: false,
            controller: function ($scope, $element, $attrs, $compile) {

            }
        }
    });
};


