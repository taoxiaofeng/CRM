module.exports = function(app) {
    app.filter('img', function(CONSTANTS) {
        return function(path) {
            return window.cfg.picUrl+path;
        }
    });
}
