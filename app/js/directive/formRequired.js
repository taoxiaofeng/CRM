module.exports = function(app) {
    app.directive('formRequired', function($compile) {
        return {
            restrict: 'A',
            compile: function($element, $attrs) {
                    var name = $attrs.formRequired;
                    $element.attr('ng-class', $attrs.class + ' {{' + name + '.$invalid&&!' + name + '.$pristine?' + "'" + 'has-error' + "'" + ':' + "''" + '}}');
                    return {
                        post: function(scope, elem, attrs) {
                            $compile(elem)(scope);
                        }
                    };
                }
                // link:function($scope, $element, $attrs){

            //     var str= $scope.$eval($attrs.formRequired);
            //     $element.addClass(str);
            //     $compile($element)($scope);

            // }
        };
    });
};
