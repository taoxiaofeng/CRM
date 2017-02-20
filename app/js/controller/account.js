module.exports = function(app) {
  app.controller('account', function($scope, $mdDialog, modalService,
    utilService, accountService, NgTableParams, roleService) {
    $scope.searchName = "";
    $scope.heads = [{
      title: '序号',
      width: '6%',
      field: 'index',
    }, {
      title: '用户名',
      width: '16%',
      field: 'name',
    }, {
      title: '手机号',
      width: '24%',
      field: 'mobile',
    }, {
      title: '创建者',
      width: '16%',
      field: 'creator',
      getValue: function(creator) {
        return creator.name;
      }
    }, {
      title: '创建时间',
      width: '16%',
      field: 'createTime',
      getValue: function(createTime) {
        return utilService.parseTimeByLong(createTime,
          'yyyy-MM-dd hh:mm');
      }
    }, {
      title: '管理者',
      width: '16%',
      field: 'supervisor',
      getValue: function(supervisor) {
        return supervisor.name;
      }
    }, {
      title: '操作',
      width: '6%',
      getValue: function() {
        return '<button class="btn btn-default btn-sm" ng-click="editAccount(row)" ><span class="glyphicon glyphicon-pencil"></span></button>' +
          '&nbsp&nbsp&nbsp' +
          '<button class="btn btn-danger btn-sm" ng-click="deleteClick(row)"><span class="glyphicon glyphicon-trash"></span></button>';
      },
    }];
    $scope.createAccount = function() {
      $mdDialog.show(addOrEditAccountModalOptions($scope)).then(update);
    };

    $scope.manageRoles = function() {
      window.location.hash = "#/role"
    };

    /* 编辑*/
    $scope.editAccount = function(account) {
      $mdDialog.show(addOrEditAccountModalOptions($scope, account)).then(
        update);
    };

    /*删除*/
    $scope.deleteClick = function(account) {
      $scope.account = angular.copy(account);
      $scope.modal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'account')),
        scope: $scope,
        templateUrl: 'deleteUserModel'
      });
    };

    /*删除用户确认*/
    $scope.deleteUser = function(account) {
      accountService.deleteManager({
        id: $scope.account.managerId
      }).then(function(res) {
        update();
        $scope.modal.close();
      });
    };

    /*给table赋值*/
    var findAll = function() {
      if ($scope.searchName) {
        $scope.tableParams = new NgTableParams({}, {
          counts: [],
          getData: function(params) {
            return accountService.searchName($scope.searchName).then(
              function(res) {
                params.total(res.lenght);
                return accountService.indexAccount(res, 1);
              });
          }
        });
        $scope.offset = 0; // 重置
      } else {
        if (!$scope.offset) {
          $scope.offset = 0;
        }
        $scope.limit = 15;
        $scope.tableParams = new NgTableParams({
          count: $scope.limit
        }, {
          counts: [],
          paginationMaxBlocks: 25,
          paginationMinBlocks: 2,
          getData: function(params) {
            $scope.offset = $scope.limit * (params.page() - 1);
            return accountService.findAllManager({}, $scope.offset,
              $scope.limit).then(function(res) {
              params.total(res.totalElements);
              return accountService.indexAccount(res.content,
                $scope.offset + 1);
            });
          }
        });
      }
    };
    // 当前登陆账户
    $scope.currentAccount = {};
    // 特殊权限
    $scope.critialPermissions = [];
    // 所有管理者
    $scope.supervisors = [];
    // 所有角色
    $scope.role = {};

    function update() {
      findAll();
      accountService.loadSupervisors().then(function(res) {
        $scope.supervisors = res;
      });
    }

    (function() {
      accountService.loadSelf().then(function(res) {
        angular.extend($scope.currentAccount, res);
      });
      roleService.getCriticalPermissions().then(function(res) {
        angular.extend($scope.critialPermissions, res);
      });
      roleService.getRoles().then(function(res) {
        angular.extend($scope.role, res);
      });
      update();
    })();

    $scope.search = function() {
      $scope.searchName = $scope.searchName.trim();
      if ($scope.searchName) {
        findAll();
      }
    };
    $scope.clear = function() {
      $scope.searchName = "";
      findAll();
    };
    $scope.downloadExcel = function() {
      accountService.downloadExcel().then(function(data) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var blob = new Blob([data], {
            type: "octet/stream"
          }),
          url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = "permissions.xls";
        a.click();
        window.URL.revokeObjectURL(url);
      });
    };
    $scope.uploadPermissions = function() {
      uploadExcel(accountService.uploadPermissions);
    };
    $scope.uploadPermissionGroups = function() {
      uploadExcel(accountService.uploadPermissionGroups);
    };
    var uploadExcel = function(uploader) {
      $mdDialog.show(uploadExcelModalOptions(uploader)).then(function(
        data) {
        $mdDialog.show(
          $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('上传成功')
          .textContent(data.runMsg)
          .ok('确定')
        );
      });
    };
  });
};

function addOrEditAccountModalOptions(scope, account) {
  return {
    templateUrl: 'views/account/addOrEditAccountModal.html',
    controller: AddOrEditAccountCtrl,
    locals: {
      account: account,
      context: scope
    }
  };
};

function AddOrEditAccountCtrl($scope, $mdDialog, $mdPanel, accountService,
  context, account) {
  var currentAccount = context.currentAccount;
  var editMode = typeof(account) != 'undefined';
  $scope.editMode = editMode;
  $scope.allPermissions = [{
    id: "自定义",
    name: "特殊权限",
    permissions: context.critialPermissions
  }];
  $scope.account = account ? angular.copy(account) : {
    creator: currentAccount,
    supervisor: currentAccount,
  };
  if (!$scope.account.permissionIds) $scope.account.permissionIds = [];
  $scope.picUrl = window.cfg.picUrl;
  $scope.creatorName = $scope.account.creator.name;
  $scope.pickedSupervisor = $scope.account.supervisor;
  $scope.supervisors = [$scope.pickedSupervisor].concat(context.supervisors.filter(
    function(supervisor) {
      // 从管理者列表中过滤掉当前编辑的用户（如果有的话）和 pickedSupervisor（已放在第一位）
      var id = supervisor.managerId;
      return id !== $scope.account.managerId && id !== $scope.pickedSupervisor
        .managerId;
    }));
  $scope.ok = function() {
    var result = $scope.account;
    var checkRoleIds = $scope.checkedRoles.map(function(role) {
      return role.id;
    });
    if (editMode) {
      accountService.modifyManager({
          id: result.managerId,
          name: result.name,
          psw: result.password ? $.hex_md5(result.password) : null,
          supervisorId: $scope.pickedSupervisor.managerId,
          permissionIds: result.permissionIds,
          roleIds: checkRoleIds,
          avatar: result.avatar
        })
        .then(function() {
          $mdDialog.hide();
        });
    } else {
      accountService.createManager({
          name: result.name,
          mobile: result.mobile,
          psw: $.hex_md5(result.password),
          supervisorId: $scope.pickedSupervisor.managerId,
          permissionIds: result.permissionIds,
          roleIds: checkRoleIds,
          avatar: result.avatar
        })
        .then(function() {
          $mdDialog.hide();
        });
    }
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.pickRole = function() {
    $mdPanel.open(pickRoleOptions($mdPanel, context.role, $scope.checkedRoles,
      currentAccount));
  };
  $scope.checkedRoles = [];
  var checkedRoleIds = $scope.account.roleIds;
  if (checkedRoleIds) {
    findCheckedRoles(context.role);
  }

  function findCheckedRoles(role) {
    if (checkedRoleIds.indexOf(role.id) > -1) {
      $scope.checkedRoles.push(role);
    }
    angular.forEach(role.children, function(child) {
      findCheckedRoles(child);
    });
  };
};

function pickRoleOptions($mdPanel, role, checkedRoles, currentAccount) {
  return {
    attachTo: angular.element(document.body),
    controller: PanelDialogCtrl,
    controllerAs: 'ctrl',
    templateUrl: 'views/account/pickRolePanel.html',
    hasBackdrop: true,
    panelClass: 'pick-role-panel',
    position: $mdPanel.newPanelPosition().absolute().center(),
    trapFocus: true,
    zIndex: 10002,
    escapeToClose: true,
    focusOnOpen: true,
    locals: {
      role: role,
      checkedRoles: checkedRoles,
      currentAccount: currentAccount
    }
  };
};

function PanelDialogCtrl($scope, mdPanelRef, role, checkedRoles, currentAccount) {
  var checkedInfos = [];
  var currentRoleInfos = [];
  (function() {
    var ids = checkedRoles.map(function(role) {
      return role.id
    });

    function wrap(role, parentInfo) {
      var info = {
        _enabled: 0,
        role: role,
        parent: parentInfo,
      }
      info.children = !role.children ? [] : role.children.map(function(child) {
        return wrap(child, info);
      })
      if (ids.indexOf(role.id) > -1) checkedInfos.push(info);
      if (currentAccount.roleIds.indexOf(role.id) > -1) currentRoleInfos.push(
        info);
      return info;
    }
    $scope.roleInfo = wrap(role, null);
  }());
  var root = role;
  var result = [];
  var checkedRoleIds = [];
  var self = this;
  self.ok = function() {
    checkedRoles.splice(0, checkedRoles.length);
    angular.forEach(result, function(role) {
      checkedRoles.push(role);
    });
    self.closePanel();
  };
  self.closePanel = function() {
    mdPanelRef.close().then(function() {
      mdPanelRef.destroy();
    });
  };
  self.pickable = function(info) {
    var role = info.role;
    return role !== root && info._enabled == 0;
  };
  self.isChecked = function(info) {
    return checkedRoleIds.indexOf(info.role.id) > -1;
  };
  self.toggle = function(info) {
    var role = info.role;
    var index = checkedRoleIds.indexOf(role.id);
    if (index < 0) {
      checkedRoleIds.push(role.id);
      result.push(role);
      setParentEnable(info, false);
      setChildrenEnable(info, false);
    } else {
      checkedRoleIds.splice(index, 1);
      result.splice(index, 1);
      setParentEnable(info, true);
      setChildrenEnable(info, true);
    }
  };

  function setParentEnable(info, disable) {
    if (info.parent) {
      var parent = info.parent;
      var delta = disable ? -1 : 1;
      parent._enabled = parent._enabled + delta;
      setParentEnable(parent, disable);
    }
  };

  function setChildrenEnable(info, disable) {
    var children = info.children;
    if (children) {
      angular.forEach(children, function(child) {
        var delta = disable ? -1 : 1;
        child._enabled = child._enabled + delta;
        setChildrenEnable(child, disable);
      });
    }
  };
  // 1. 先将所有节点禁止
  setChildrenEnable($scope.roleInfo, false);
  // 2. 再开放当前账户所拥有角色的子角色
  angular.forEach(currentRoleInfos, function(currentRoleInfo) {
    setChildrenEnable(currentRoleInfo, true);
  });
  angular.forEach(checkedInfos, function(checkedInfo) {
    self.toggle(checkedInfo); // 选中已选角色
  });
}

function uploadExcelModalOptions(uploader) {
  return {
    templateUrl: 'views/account/uploadExcelModal.html',
    controller: UploadExcelCtrl,
    locals: {
      uploader: uploader
    }
  };
};

function UploadExcelCtrl($scope, $mdDialog, $timeout, accountService, uploader) {
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.ok = function() {
    var comment = $scope.comment;
    var file = $("#file_input")[0].files[0];
    uploader(comment, file).then(function(data) {
      $mdDialog.hide(data);
    });
  };
};