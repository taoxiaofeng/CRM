module.exports = function(app) {
    app.filter('value', function(CONSTANTS) {
        return function(value, field, isValueNum) {
            var f = CONSTANTS[field];
            var descs = f && f.DESC;
            var result;
            angular.forEach(descs, function(va, key) {
                if (value == va) {
                    result = key;
                }
            });
            return parseInt(result);
        }
    });
}
