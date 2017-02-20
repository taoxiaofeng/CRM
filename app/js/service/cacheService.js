/*
 *cacheService
 */
/*键
 *tk  token
 */

module.exports = function(app) {
    app.service('cacheService', function($cookies) {
        var CONSTANT = {
            SESSION: 'crm_s'
        };
        this.getItem = function(key) {
            return $cookies.get(key);
        };
        this.setItem = function(key, value) {
            return $cookies.put(key, value);
        };
        this.removeItem = function(key) {
            $cookies.remove(key);
        };
        this.getSession = function() {
            return this.getItem(CONSTANT.SESSION);
        };
        this.setSession = function(value) {
            this.setItem(CONSTANT.SESSION, value);
        };
    });
};
