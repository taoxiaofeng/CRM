/*
 *Component login
 */
module.exports = function(app) {
    app.directive('module', function($filter) {
        return {
            restrict: 'E',
            templateUrl: 'directive/module.html',
            transclude: true,
            scope: {
                moduleLayout: '=',
                moduleIndex: '@',
                editContent: '=',
                isInTemplate: '@'
            },
            controller: function($scope, $element, $attrs, modalService, authService) {
                $scope.isArray = function(arry) {
                    return angular.isArray(arry);
                }
                $scope.col = _.range($scope.moduleLayout.width);
                $scope.row = _.range($scope.moduleLayout.height);
                $scope.cells = $scope.moduleLayout.contents;
                $scope.renderStyle = {};
                $scope.template = $scope.isInTemplate !== undefined ? true : false;
                $scope.hasContent = function(x, y) {
                    var content = _.find($scope.cells, function(item) {
                        return item.x == x && item.y == y;
                    });
                    if (content) {
                        $scope.renderStyle = {
                            width: content.width * 100 + '%',
                            height: content.height * 100 + '%'
                        };
                        
                        content.noBorder == 'true' ? $scope.renderStyle.border = 0 : '';
                        content.contentImage && content.contentImage[0] ? $scope.renderStyle
                            .backgroundImage =
                            'url(' + $filter('img')(content.contentImage[0]) + ')' : '';
                    }
                    return !!content;
                };
            }
        };
    });
};
