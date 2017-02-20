/*
 *Component login
 */
module.exports = function(app) {
    app.directive('login', function($location) {
        return {
            restrict: 'E',
            templateUrl: 'directive/login.html',
            transclude: true,
            replace: true,
            controller: function($scope, $element, $attrs, modalService, authService) {
                $scope.username = '';
                $scope.psw = '';
                $scope.isLogin = authService.isLogin();
                $scope.ok = function(scope) {
                    //登陆
                    authService.login({
                        username: scope.username,
                        psw: $.hex_md5(scope.psw)
                    }).then(function(res) {
                        //登陆成功视图变化
                        $scope.isLogin = true;
                        window.location.hash = '#home';
                    });
                };
                $element.ready(function() {
                    $('.login input[type=password]').val('');
                });
            }
        };
    });
};
