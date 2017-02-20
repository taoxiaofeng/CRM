module.exports = function(app) {
  app.service('roleService', function($q, xhrService) {
    /**
     * 获取所有角色
     */
    this.getRoles = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'role',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };
    /**
     * 添加角色
     */
    this.addRole = function(params) {
      return $q(function(resolve) {
        xhrService.Post({
          path: 'role',
          params: {
            parentId: params.parentId,
            name: params.name,
            permissions: params.permissionIds
          },
          success: function() {
            resolve();
          }
        });
      });
    };
    /**
     * 编辑角色
     */
    this.editRole = function(roleId, params) {
      return $q(function(resolve) {
        xhrService.Put({
          path: 'role/' + roleId,
          params: {
            name: params.name,
            permissions: params.permissionIds
          },
          success: function() {
            resolve();
          }
        });
      });
    };
    /**
     * 删除角色
     */
    this.removeRole = function(roleId) {
      return $q(function(resolve) {
        xhrService.Delete({
          path: 'role/' + roleId,
          success: function() {
            resolve();
          }
        });
      });
    };
    /**
     * 获取所有普通权限
     */
    this.getNormalPermissions = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'permission/2',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };
    /**
     * 获取所有特殊权限
     */
    this.getCriticalPermissions = function() {
      return $q(function(resolve) {
        xhrService.Get({
          path: 'permission/3',
          success: function(res) {
            resolve(res);
          }
        });
      });
    };
  });
};
