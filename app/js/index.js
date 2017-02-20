;
(function() {
  var angular = window.angular;
  var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngTable',
    'templateBundle', 'ui.bootstrap', 'ui.router', 'ui.tree',
    'isteven-multi-select', 'ngAnimate', 'ngAria', 'ngMaterial',
    'ngSanitize', 'ngMessages', 'infinite-scroll'
  ]).config([
    '$compileProvider', '$mdThemingProvider',
    function($compileProvider, $mdThemingProvider) {
      $compileProvider.aHrefSanitizationWhitelist(
        /^\s*(https?|ftp|mailto|file|data):/);
      $mdThemingProvider.theme("default").primaryPalette("blue").accentPalette(
        "light-blue").warnPalette("deep-orange").backgroundPalette(
        "grey");
    }
  ]);
  var routers = require('./routers.js');
  var services = require('./services.js');
  var directives = require('./directives.js');
  var constants = require('./constants.js');
  var controllers = require('./controllers.js');
  var filters = require('./filters.js');
  //注册router
  app.config(['$routeProvider', function($routeProvider) {
    angular.forEach(routers, function(route) {
      $routeProvider.when('/' + route.path, route);
    });
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }]);
  // app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //     angular.forEach(routers, function(route) {
  //         var cfg = {
  //             url: '/' + route.path,
  //             views: {}
  //         };
  //         cfg.views[route.name] = {
  //             templateUrl: route.templateUrl
  //         };
  //         $stateProvider.state(route.name, cfg);
  //     });
  //     $urlRouterProvider.otherwise('/home');
  // }]);
  //注册constant
  angular.forEach(filters, function(fn) {
    fn.call(this, app);
  });
  //注册constant
  angular.forEach(constants, function(value, key) {
    app.constant(key, value);
  });
  //注册的service
  angular.forEach(services, function(fn) {
    fn.call(this, app);
  });
  //批量注册direcives
  angular.forEach(directives, function(fn) {
    fn.call(this, app);
  });
  //注册的controller
  angular.forEach(controllers, function(fn) {
    try {
      fn.call(this, app);
    } catch (e) {}

  });
}());
// app.run(function($rootScope) {
//     $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
//     });
// });