/*
 * 角色管理 Controller
 */
module.exports = function(app) {
  app.controller('RoleCtrl', function($scope, $uibModal, roleService) {
    var loadRoles = function() {
      roleService.getRoles().then(function(res) {
        $scope.role = res;
      });
    };
    $scope.roleService = roleService;
    $scope.role = null;
    $scope.editable = function(role) {
      // 只有非根节点节点才可以编辑
      return $scope.role !== role;
    };
    $scope.addRole = function(scope, parent) {
      $uibModal.open(addOrEditModalOptionFactory($scope.permissions))
        .result.then(function(res) {
          res.parentId = parent.id;
          roleService.addRole(res).then(loadRoles);
        });
    };
    $scope.editRole = function(scope, role) {
      $uibModal.open(addOrEditModalOptionFactory($scope.permissions, role))
        .result.then(function(res) {
          roleService.editRole(role.id, res).then(loadRoles);
        });
    };
    $scope.removeRole = function(scope, role) {
      $uibModal.open(removeModalOptionFactory(role))
        .result.then(function(roleToRemove) {
          roleService.removeRole(roleToRemove.id).then(function() {
            scope.remove();
          });
        });
    };
    loadRoles();
    roleService.getNormalPermissions().then(function(res) {
      $scope.permissions = res;
    });
  });

  function addOrEditModalOptionFactory(permissions, roleToEdit) {
    return {
      templateUrl: 'views/account/addOrEditRoleModal.html',
      resolve: {
        roleToEdit: function() {
          return roleToEdit;
        },
        allPermissions: function() {
          return permissions
        }
      },
      controller: AddOrEditModalController
    };
  };

  /**
   * 新增/添加角色对话框 Controller
   */
  function AddOrEditModalController($scope, $uibModalInstance, roleToEdit, allPermissions) {
    $scope.allPermissions = allPermissions;
    $scope.addRoleMode = !roleToEdit;
    $scope.result = {
      name: roleToEdit ? roleToEdit.name : "",
      permissionIds: roleToEdit ? roleToEdit.permissions.map(function(permission) {
        return permission.id
      }) : []
    };
    $scope.ok = function() {
      $uibModalInstance.close($scope.result);
    };
    $scope.cancel = function() {
      $uibModalInstance.dismiss();
    };
  };
};

function removeModalOptionFactory(roleToRemove) {
  return {
    templateUrl: 'views/account/removeRoleModal.html',
    size: 'sm',
    resolve: {
      roleToRemove: roleToRemove
    },
    controller: function($scope, $uibModalInstance, roleToRemove) {
      $scope.roleToRemove = roleToRemove;
      $scope.ok = function() {
        $uibModalInstance.close(roleToRemove);
      };
      $scope.cancel = function() {
        $uibModalInstance.dismiss();
      };
    }
  };
};
