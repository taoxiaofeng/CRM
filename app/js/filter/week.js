module.exports = function(app) {
    app.filter('week', function(CONSTANTS) {
        return function(value, field) {
            var f = CONSTANTS[field];
            var descs = f && f.STYLE;
            return descs && descs[value] || '';
        }
    });
}
