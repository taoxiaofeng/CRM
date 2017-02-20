/**
 * Created by taoxiaofeng on 16/6/27.
 */
module.exports = function(app) {
  app.service('accountService', ['xhrService', '$q', function(xhrService, $q) {

    this._parseAccountData = function(data) {
      //拷贝一份，保持数据源不变
      var temp = [];
      angular.forEach(data, function(item, index) {
        var t = angular.copy(item);
        t.index = index;
        temp.push(t);
      });
      return temp;
    };

    /*进入账户管理页时,显示所有数据*/
    this.findAllManager = function(params, offset, limit) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      var str = '?offset=' + offset + '&limit=' + limit;
      xhrService.Get({
        path: 'manager' + str,
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };
    this.indexAccount = function(data, offset) {
      angular.forEach(data, function(item, index) {
        item.index = index + offset;
      });
      return data;
    };

    /*新增用户*/
    this.createManager = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'manager',
        /*原接口: manager/manage/createManager*/
        params: params,
        success: function(res) {
          deferred.resolve(res);
        },
        toastError: true // 用toast替代默认的dialog来显示错误消息
      });
      return promise;
    };

    /* 编辑用户*/
    this.modifyManager = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: "manager/" + params.id,
        /*原接口:manager/manage/modifyManager*/
        params: _.omit(params, 'id'), // _.omit :只过滤出除去keys(有效的键组成的数组)参数指定的属性值
        success: function(res) {
          deferred.resolve(res);
        },
        toastError: true
      });
      return promise;

    };

    /*删除用户*/
    this.deleteManager = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'manager/' + params.id,
        /*原接口:manager/manage/removeManager*/
        params: params,
        success: function(res) {
          deferred.resolve(res);
        }
      });
      return promise;
    };

    this.loadSupervisors = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'manager/supervisors',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.loadSelf = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'manager/self',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.loadAccount = function(id) {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'manager/' + id,
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.searchName = function(name) {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'manager/search?name=' + name,
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.downloadExcel = function() {
      return $q(function(resolve) {
        xhrService.Get({
          headers: {
            Accept: 'application/octet-stream'
          },
          path: 'permission/export',
          responseType: 'arraybuffer',
          dataType: 'arraybuffer',
          success: function(res) {
            resolve(res);
          }
        });
      })
    };

    this.uploadPermissions = function(comment, file) {
      var fileEx = file.name.split('.').pop();
      var formData = new FormData();
      formData.append('comment', comment);
      formData.append('file', file);
      formData.append('workbookType', fileEx == 'xls' ? 'HSSF' : 'XSSF');
      return $q(function(resolve) {
        xhrService.Upload({
          path: 'permission',
          params: formData,
          success: function(res) {
            resolve(res);
          }
        });
      });
    };

    this.uploadPermissionGroups = function(comment, file) {
      var fileEx = file.name.split('.').pop();
      var formData = new FormData();
      formData.append('comment', comment);
      formData.append('file', file);
      formData.append('workbookType', fileEx == 'xls' ? 'HSSF' : 'XSSF');
      return $q(function(resolve) {
        xhrService.Upload({
          path: 'permission/group',
          params: formData,
          success: function(res) {
            resolve(res);
          }
        });
      });
    };
  }]);
};
