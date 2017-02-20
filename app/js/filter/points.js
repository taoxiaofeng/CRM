module.exports = function(app) {
    app.filter('points', function() {
        return function(amt) {
            return parseInt((amt*100).toFixed(0)); 
        }
    });
}
