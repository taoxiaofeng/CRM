module.exports = function(app) {
    app.directive('dateFormate', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ctrl) {

                ctrl.$parsers.push(function(data) {
                    
                    //convert data from view format to model format
                    return data
                });
                ctrl.$formatters.push(function(data) {
                    
                    //convert data from model format to view format
                    return data; //converted
                });
            }
        };
    });
};
