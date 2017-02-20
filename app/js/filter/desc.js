module.exports = function(app) {
    app.filter('desc', function(CONSTANTS) {
        return function(value, field) {
            var f = CONSTANTS[field];
            var descs = f && f.DESC;
            return descs && descs[value] || '';
        }
    });
}
