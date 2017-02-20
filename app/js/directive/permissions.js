module.exports = function(app) {
  app.directive('permissions', function() {
    return {
      restrict: 'E',
      templateUrl: 'directive/permissions.html',
      scope: {
        all: '=',
        checked: '='
      },
      controller: function($scope) {
        if (typeof($scope.checked) == 'undefined') {
          throw "<permissions> Missing attribute 'checked'.";
        }
        $scope.checkedPermissions = new CheckedPermissions($scope.all, $scope.checked);
      }
    }
  });
};

function CheckedPermissions(allPermissions, checkedIds) {
  var dict = {};
  var toId = function(permission) {
    return permission.id;
  };
  // 初始化已经选择的权限
  angular.forEach(allPermissions, function(group) {
    if(!group.permissions) return;
    dict[group.id] = group.permissions.map(toId).filter(function(id) {
      return checkedIds.indexOf(id) > -1;
    });
  });
  var isChecked = function(group, permission) {
    var groupId = group.id;
    return dict.hasOwnProperty(groupId) && dict[groupId].indexOf(permission.id) > -1;
  };
  var toggle = function(group, permission) {
    var groupId = group.id;
    var permissionId = permission.id;
    // 更新字典
    if (dict.hasOwnProperty(groupId)) {
      var checkedInGroup = dict[groupId];
      var index = checkedInGroup.indexOf(permissionId);
      if (index > -1) {
        checkedInGroup.splice(index, 1);
      } else {
        checkedInGroup.push(permissionId);
      }
    } else {
      dict[groupId] = [permissionId];
    }
    // 更新数组
    var index = checkedIds.indexOf(permissionId);
    if (index > -1) {
      checkedIds.splice(index, 1);
    } else {
      checkedIds.push(permissionId);
    }
  };
  var selectAll = function(group) {
    var ids = group.permissions.map(toId);
    // 更新字典
    dict[group.id] = ids;
    // 更新数组
    angular.forEach(group.permissions, function(permission) {
      if (checkedIds.indexOf(permission.id) < 0) {
        checkedIds.push(permission.id);
      }
    });
  };
  var inverseSelection = function(group) {
    var permissions = group.permissions
      .filter(function(permission) {
        return !isChecked(group, permission);
      });
    var ids = permissions.map(toId);
    var oldIds = dict[group.id];
    // 更新字典
    dict[group.id] = ids;
    // 更新数组
    angular.forEach(oldIds, function(oldId) {
      var index = checkedIds.indexOf(oldId);
      if (index > -1) {
        checkedIds.splice(index, 1);
      }
    });
    checkedIds = checkedIds.concat(ids);
  };
  this.isChecked = isChecked;
  this.toggle = toggle;
  this.selectAll = selectAll;
  this.inverseSelection = inverseSelection;
};
