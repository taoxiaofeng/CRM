module.exports = function(app) {
  app.service('xhrService', ['$http', 'cacheService', '$mdDialog', '$mdToast',
    'loaddingService',
    function($http, cacheService, $mdDialog, $mdToast, loaddingService) {
      var _request = function(path, type, opts) {
        var config = { responseType: opts.responseType };
        config.url = (path ? window.cfg[path] : window.cfg.biz) + opts.path;
        config.method = type;
        config.data = {};
        config.timeout = 30000;
        config.headers = angular.extend(config.headers || {}, opts.headers);
        var pageConfig = {};
        if (type !== 'GET' && opts.params && opts.params.offset !==
          undefined && opts.params.limit !== undefined) {
          pageConfig.offset = opts.params.offset;
          pageConfig.limit = opts.params.limit;
          opts.params = _.omit(opts.params, 'offset');
          opts.params = _.omit(opts.params, 'limit');

          if (config.url.indexOf('?') == -1) {
            config.url = config.url + '?';
          } else {
            config.url = config.url + '&';
          }
          config.url = config.url + 'offset=' + pageConfig.offset +
            '&limit=' + pageConfig.limit;
        }
        type == 'GET' ? config.params = opts.params : config.data =
          opts.params;
        var dataType = opts.dataType ? opts.dataType : 'text';
        var authorization = cacheService.getSession();
        config.transformResponse = function(res) {
          if (dataType == 'text' && res) {
            res = res.replace(/\":(\d{16,})/g, "\":\"$1\""); //long型转string
            try {
              res = JSON.parse(res);
            } catch (e) {
              res = res;
            }

          }
          return res;
        };
        config.headers = angular.extend(config.headers || {}, {
          'Authorization': authorization,
          'X-Request-With': null
        });
        if (authorization) {
          config.headers = angular.extend(config.headers || {}, {
            'Authorization': authorization
          });
        }
        //loadding start
        loaddingService.show();

        $http(config).success(function(res, status, headers, config) {
          //loadding end
          loaddingService.hide();
          opts.success.call(this, res.data || res, status, headers,
            config);

        }).error(function(res, status, headers, config) {
          //loadding end
          loaddingService.hide();
          var error = opts.error;
          if (status == 403) {
            cacheService.setSession('');
            window.location.hash = '#/home';
            window.location.reload();
            return;
          }
          var errorMessage = res && (res.message || res.msg || res.error);
          if (opts.toastError) {
            $mdToast.show($mdToast.simple()
              .textContent("失败: " + errorMessage)
              .position('bottom right')
              .hideDelay(3000));
          } else {
            $mdDialog.show($mdDialog.alert({
              title: '失败',
              textContent: errorMessage,
              ok: '关闭',
              zIndex: 99999999999999
            }).clickOutsideToClose(true));
          }
          //res && window.alert(res.message);
          error && error.call(this, res);

        });
      };
      this.Get = function(opts) {
        _request(opts.host || 'biz', 'GET', opts);
      };
      this.Post = function(opts) {
        _request(opts.host || 'biz', 'POST', opts);
      };
      this.Put = function(opts) {
        _request(opts.host || 'biz', 'PUT', opts);
      };
      this.Delete = function(opts) {
        _request(opts.host || 'biz', 'DELETE', opts);
      };
      this.Upload = function(opts) {
        opts.headers = angular.extend({
          'Content-Type': undefined
        }, opts.headers || {});
        opts.transformRequest = angular.identity;
        _request(opts.host || 'biz', 'POST', opts);
      };
    }
  ]);
};