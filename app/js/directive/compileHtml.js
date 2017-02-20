/*
 *编译html
 * compile-html
 */
module.exports = function(app) {
    app.directive('compileHtml', function() {
        return {
            restrict: 'A',
            transclude: true,
            scope: false,
            controller: function($scope, $element, $attrs, $compile) {
                $scope.$watch($attrs.compileHtml, function(html) {
                    var str = '';
                    if (Object.prototype.toString.call(html) == '[object Object]') { //数组
                        str = html.$$unwrapTrustedValue();
                    } else { //字符串
                        str = html && html.toString();
                    }
                    $element.append($compile('<span>' + str + '</span>')($scope));
                });
            }
        };
    });
};
