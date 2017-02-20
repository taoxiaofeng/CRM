module.exports = function(app) {
    app.service('authService', ['xhrService', '$q', 'cacheService', function(xhrService, $q, cacheService) {
        //接口
        /*登陆
         *@Params
         *username
         *psw
         */
        this.login = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'auth/login',
                params: params,
                success: function(res, status, headers) {
                    var auth = headers('Authorization');
                    cacheService.setSession(auth);
                    deferred.resolve(res);
                }
            });
            return promise;
        };
        this.exit = function() {
            cacheService.setSession('');
            window.location.reload();
        };
        this.isLogin = function() {
            return cacheService.getSession() ? true : false;
        };
    }]);
};
