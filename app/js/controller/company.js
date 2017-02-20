/*
 *企业库控制器
 *companyController
 */
module.exports = function(app) {
  app.controller('company', function($scope, $mdSidenav, $mdDialog, $sce,
    $element, $compile, $templateCache, $filter, NgTableParams,
    printService, utilService,
    modalService, companyService, CONSTANTS) {
    $scope.CONSTANTS = CONSTANTS;
    $scope.queryParams = {}; //企业查询参数
    $scope.selectedCompanyList = []; //选中的企业列表

    // 下面代码为导出Excel做准备
    var excelTemplate = $compile($templateCache.get(
      'company/companyTableTemplate.html'))($scope);
    angular.element(document.getElementById(
      'exportExcelWrap')).append(excelTemplate);

    /*定义*/
    $scope.companyCreateModal;
    var getRecordById = function(record) {
      var value;
      angular.forEach($scope.company.contacts, function(item) {
        if (record.id == item.id) {
          value = item;
        }
      });
      return value;
    };
    var defaultConcat = {
      mobile: '',
      tel: '',
      qq: '',
      wechat: '',
      command: '',
      contactName: '',
      isEditing: true
    };
    $scope.companys = [];
    $scope.contactTableData = [];
    $scope.company = {
      companyId: '',
      companyManagerId: '',
      staffNum: '',
      companyName: '',
      shelfType: '',
      pickingType: CONSTANTS.PICKING_TYPE.RANDOM,
      pickingRemark: '',
      des: '',
      address: '',
      limitFee: '',
      lng: '',
      lat: '',
      change: '',
      followPeople: '',
      status: '',
      isPremium: false,
      contacts: [],
      sendWeek: [],
      balance: 0,
      superAdmin: '',
      customerType: '',
      reset: function() {
        this.companyId = '';
        this.companyManagerId = '';
        this.staffNum = '';
        this.companyName = '';
        this.shelfType = '';
        this.pickingType = CONSTANTS.PICKING_TYPE.RANDOM;
        this.pickingRemark = '';
        this.des = '';
        this.address = '';
        this.limitFee = '';
        this.contacts = [];
        this.sendWeek = [];
        this.lng = '';
        this.lat = '';
        this.isPremium = false;
        this.followPeople = '';
        this.status = '';
        this.change = '';
        this.balance = 0;
        this.superAdmin = '';
        this.customerType = '';
      }, //CompanyContactInfo[]  企业联系人列表
      viewFormate: function() {
        this.limitFee = this.limitFee >= 0 ? parseInt(this.limitFee /
          100) : '';
      }
    };
    //客户货架类型 设置
    $scope.formConfig = {
      getList: function() {
        return CONSTANTS.getList({
          clsOrName: 'COMPANY_TYPE',
          hasDefault: false,
          codeKey: 'value',
          valueKey: 'desc'
        });
      },
      getDefaultItem: function(value) {
        var options = this.getList();
        return _.findWhere(options, {
          value: value
        }) || options[1];
      },
      selectItem: function(record) {
        this.defaultItem = record;
        $scope.company.shelfType = record.value;
      }
    };
    //客户类别(如企业，网吧等)
    $scope.customerType = {
      getList: function(mode) {
        var listOpts = {
          clsOrName: 'CUSTOMER_TYPE',
          codeKey: 'customerType',
          valueKey: 'name'
        };
        if (mode == 1) { //筛选模式
          listOpts.defaultObj = {
            '-1': '所有客户类别'
          };
        } else {
          listOpts.hasDefault = false;
        }
        return CONSTANTS.getList(listOpts);
      },
      getDefaultItem: function(mode, value) {
        var options = this.getList(mode);
        return _.findWhere(options, {
          customerType: value
        }) || options[0];
      },
      selectItem: function(mode, record) {
        if (mode == 1) { //筛选模式
          if (record.customerType != -1) {
            $scope.queryParams.customerType = record.customerType;
          } else {
            delete $scope.queryParams.customerType;
          }
          $scope.searchCompany();
        } else { //设置模式
          this.defaultItem = record;
          $scope.company.customerType = record.customerType;
        }
      }
    };
    //客户状态
    $scope.customerStatus = {
      getList: function(mode) {
        var listOpts = {
          clsOrName: 'CUSTOMER_STATUS',
          codeKey: 'customerStatus',
          valueKey: 'name'
        };
        if (mode == 1) { //筛选模式
          listOpts.defaultObj = {
            '-1': '所有企业状态'
          };
        } else {
          listOpts.hasDefault = false;
        }
        return CONSTANTS.getList(listOpts);
      },
      getDefaultItem: function(mode, value) {
        var options = this.getList(mode);
        return _.findWhere(options, {
          customerStatus: value
        }) || options[0];
      },
      selectItem: function(mode, record) {
        if (mode == 1) { //筛选模式
          if (record.customerStatus != -1) {
            $scope.queryParams.status = record.customerStatus;
          } else {
            delete $scope.queryParams.status;
          }
          $scope.searchCompany();
        } else {
          this.defaultItem = record;
          $scope.company.status = record.customerStatus;
        }
      }
    };
    //客户查询类别 设置
    $scope.queryCompanyTypeConfig = {
      nameTypeData: [{
        markId: 'companyName',
        desc: '名称'
      }, {
        markId: 'address',
        desc: '地址'
      }],
      selectItem: function(item) {
        $scope.queryParams["markId"] = item.markId;
        $scope.queryTypeName = item.desc;
      }
    };
    //回车键查询 
    $scope.companyKeyup = function(e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.searchCompany();
      }
    };
    //表格设置
    $scope.offset = 0;
    $scope.limit = 20;
    $scope.companyTable = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function(params) {
        $scope.offset = $scope.limit * (params.page() - 1);
        var p = getParams();
        p.offset = $scope.offset;
        p.limit = $scope.limit;
        return companyService.queryCompanyList(p).then(function(res) {
          params.total(res.totalElements);
          return companyService.parseCompanyList(res.content,
            $scope.offset);
        });
      }
    });
    var getParams = function() {
      var temp = $scope.queryParams;
      _.each($scope.queryCompanyTypeConfig.nameTypeData, function(item) {
        delete temp[item.markId];
      });
      temp[temp.markId] = temp.queryName;
      return _.omit(temp, 'markId', 'queryName');
    };
    //勾选
    $scope.updateSelection = function(e, company) {
      var isChecked;
      if (_.isObject(e)) {
        isChecked = e.currentTarget.checked;
      } else {
        isChecked = e;
      }
      company.checked = isChecked;
      if (isChecked) {
        $scope.selectedCompanyList.push(company);
      } else {
        $scope.selectedCompanyList = _.without($scope.selectedCompanyList,
          company);
      }
    };

    // 选择星期
    var weekChoics = $filter('selection')('WEEK_TYPE', null, 'value',
      'desc', '', true);
    $scope.weekConfig = {
      choices: weekChoics,
      defaultItem: {
        value: '-1',
        desc: '选择星期'
      },
      getOptionByValue: function(value) {
        var options = this.choices;
        return _.findWhere(options, {
          value: value
        });
      },
      selectItem: function(record) {
        if (record.value == this.defaultItem.value) {
          return;
        } else {
          $scope.company.sendWeek = _.sortBy(_.union($scope.company.sendWeek, [
            record.value
          ]));
        }
      },
      delWeek: function(chip) {
        var value = $filter('value')(chip, 'WEEK_TYPE', true);
        $scope.company.sendWeek = _.without($scope.company.sendWeek,
          value);
      }
    };
    //查询企业列表
    $scope.searchCompany = function() {
      $scope.companyTable.settings({
        dataset: []
      });
    };
    //导出企业列表
    $scope.exportCompanyTableExcel = function() {
      if (!$scope.selectedCompanyList.length) {
        utilService.alertError('请先选择需导出的企业');
        return;
      }
      var dom = angular.element('<a></a>');
      dom[0].href = $('#export-company-table').excelexportjs({
        containerid: 'export-company-table',
        datatype: 'table',
        returnUri: 'true'
      });
      dom[0].download = '企业列表.xls';
      dom[0].click();
    };
    //打开企业 新增 编辑
    $scope.openCreateEditCompanyWin = function(companyId) {
      $scope.company.reset();
      if (!companyId) { //新增模式
        $scope.contactTable.settings({
          dataset: []
        });
        $scope.companyCreateModal = initModal('modelcontent', 'middle');
      } else {
        companyService.queryCompanyPremiumState({
          companyId: companyId
        }).then(function(res) {
          $scope.company.isPremium = !!parseInt(res.enable);
        });
        companyService.queryCompanyDeduction({
          companyId: companyId
        }).then(function(res) {
          $scope.company.balance = res.balance;
        });
        companyService.queryCompany({
          companyId: companyId
        }).then(function(res) {
          $scope.company = angular.extend($scope.company, res);
          $scope.company.viewFormate();
          $scope.contactTableData = angular.copy(res.contacts);
          $scope.contactTable.settings({
            dataset: $scope.contactTableData
          });
          $scope.companyCreateModal = initModal('modelcontent',
            'middle');
        });
      }

    };
    //Modal
    var initModal = function(templateUrl, size, appendToElement) {
      return modalService.initModal({
        appendTo: appendToElement || $element,
        templateUrl: templateUrl,
        scope: $scope,
        size: size
      });
    };
    //确定提交企业信息
    $scope.submitCompanyConfirm = function(company) {
      var errorMsg = '';
      if (!company.contacts.length) {
        errorMsg = '请添加联系方式';
      } else if (company.pickingType == CONSTANTS.PICKING_TYPE.OTHER) {
        if (!company.pickingRemark) {
          errorMsg = '请填写其他拣货类型';
        }
      }
      if (errorMsg.length) {
        utilService.alertError(errorMsg);
        return;
      }
      var companyParams = angular.copy(company);
      if (companyParams.pickingType != CONSTANTS.PICKING_TYPE.OTHER) {
        companyParams.pickingRemark = '';
      }
      if (companyParams.limitFee == '') {
        companyParams.limitFee = -1;
      } else {
        companyParams.limitFee = utilService.getPointInt(
          companyParams.limitFee || 0);
      }
      if (!company.companyId) { //新增模式
        $scope.createCompanyConfirm(companyParams);
      } else { //修改模式
        $scope.editCompanyConfirm(companyParams);
      }
    };
    //确认创建企业
    $scope.createCompanyConfirm = function(companyParams) {
      return companyService.createCompany(companyParams).then(function(
        res) {
        if (parseInt($scope.company.change)) {
          companyService.setCompanyDeduction({
            companyId: res.companyId,
            change: $filter('points')($scope.company.change)
          });
        }
        $scope.companyCreateModal.close();
        $scope.companyTable.reload();
      });
    };
    //确认编辑企业
    $scope.editCompanyConfirm = function(companyParams) {
      var promise = companyService.editCompany(companyParams)
        .then(function() {
          if (parseInt($scope.company.change)) {
            companyService.setCompanyDeduction({
              companyId: $scope.company.companyId,
              change: $filter('points')($scope.company.change)
            });
          }
          $scope.companyCreateModal.close();
          $scope.companyTable.reload();
        }, function() {});
      return promise;
    };
    //添加联系人
    $scope.confirmAdd = function() {
      $scope.contactTable.settings().dataset.push(angular.copy(
        defaultConcat));
      $scope.contactTable.reload();
    };

    //修改联系人
    $scope.confirmEdit = function(row, rowForm, scope) {
      row.isEditing = false;
      rowForm.$setPristine();

      if (row.id) { //修改联系人
        companyService.editCompanyContact(row).then(function(res) { //成功
          $scope.companyTable.reload();
        }, function() { //失败
          row = angular.extend(row, getRecordById(row));
        });
      } else { //添加联系人
        if (scope.company.companyId) { //修改企业时添加联系人
          row.companyId = scope.company.companyId;
          companyService.addCompanyContact(row).then(function(res) { //成功
            companyService.queryCompany({
              companyId: scope.company.companyId
            }).then(function(res) {
              $scope.company = angular.extend($scope.company,
                res);
              $scope.company.formate();
              $scope.contactTableData = angular.copy(res.contacts);
              $scope.contactTable.settings({
                dataset: $scope.contactTableData
              }); /*$scope.companyTable.reload();*/
            });
          }, function(error) { //失败
            $scope.contactTableData = _.without($scope.contactTableData,
              row);
            $scope.contactTable.settings({
              dataset: $scope.contactTableData
            });
            $scope.contactTable.reload();
          });
        } else { //创建企业时添加联系人
          $scope.company.contacts.push(row);
        }
      }
    };
    $scope.startEdit = function(row, rowForm) {
      row.isEditing = true;
      //rowForm.originRow = angular.copy(row);
    };
    //取消修改联系人
    $scope.cancelEdit = function(row, rowForm) {
      row.isEditing = false;
      rowForm.$setPristine();
      if (row.id) { //修改
        row = angular.extend(row, getRecordById(row));
      } else { //删除
        $scope.contactTable.settings().dataset = _.without($scope.contactTable
          .settings().dataset, row);
        $scope.contactTable.reload();
      }
    };
    //删除联系人
    $scope.confirmDelete = function(row) {
      if ($scope.contactTable.data.length == 1) {
        $mdDialog.show($mdDialog.alert({
          title: '失败',
          textContent: '无法删除,必须有1位联系人!',
          ok: '关闭'
        }));
        return;
      }
      companyService.deleteCompanyContact({
        contactId: row.id
      }).then(function() {
        $scope.contactTable.settings().dataset = _.without($scope.contactTable
          .settings().dataset, row);
        $scope.contactTable.reload();
      });
    };
    //重置密码
    $scope.resetPWD = function() {
      companyService.resetCompanyPassword({
        companyId: $scope.company.companyId
      }).then(function() {
        $mdDialog.show($mdDialog.alert({
          title: '成功',
          textContent: '重置密码成功',
          ok: '关闭'
        }));
      }, function() {
        $mdDialog.show($mdDialog.alert({
          title: '请求失败',
          textContent: '重置密码失败',
          ok: '关闭'
        }));
      });
    };

    //状态更改日志
    $scope.companyChangeLogCrl;
    $scope.companyChangeLogTableHeads = [{
      title: '序号',
      field: 'index'
    }, {
      title: '操作时间',
      field: 'optTime',
      getValue: function(value) {
        return '<span>' + $filter('date')(value, 'yyyy.MM.dd') +
          '</span>';
      },
      show: true
    }, {
      title: '姓名',
      field: 'optName',
      show: true,
      getValue: function(v) {
        return '<span  style="width:180px;display:inline-block;">' +
          v + '</span>';
      }
    }, {
      title: '操作前状态',
      field: 'preStatusAlias',
      show: true
    }, {
      title: '操作后状态',
      field: 'sufStatusAlias',
      show: true
    }];
    $scope.companyChangeLogTable = new NgTableParams({
      counts: 10
    }, {
      counts: [],
      paginationMaxBlocks: 13,
      paginationMinBlocks: 2,
      dataset: []
    });
    $scope.getCompanyStateChangeLog = function(companyId) {
      companyService.queryCompanyStateChangeLog({
        companyId: companyId
      }).then(function(res) {
        $scope.companyChangeLogTable.settings({
          dataset: utilService.indexArray(res, 1)
        });
        $scope.$applyAsync(function() {
          $scope.companyChangeLogCtrl.showDialog($scope);
        });
      });
    };
    $scope.changeCompanyPremiumState = function(company) {
        var state = company.isPremium;
        var companyId = company.companyId;
        if (state) {
          $mdDialog.show($mdDialog.confirm()
            .title('提示')
            .textContent('企业溢价功能开启后无法关闭，确定要开启？')
            .ok('确定')
            .cancel('取消')
          ).then(function(f) {
            companyService.setCompanyPremium({
              companyId: companyId
            }).then(function() {}, function() {
              company.isPremium = false;
            });
          }, function() {
            company.isPremium = false;
          });
        } else {
          $mdDialog.show($mdDialog.alert()
            .clickOutsideToClose(true)
            .title('提示')
            .textContent('企业溢价不支持关闭功能！')
            .ok('确定'));
          company.isPremium = true;
        }
      }
      //坏账抵扣
    $scope.companyDeductionCtrl;
    $scope.companyDeductionFlow = [];
    $scope.companyDeductionTableHeads = [{
      title: '坏账抵扣余额',
      field: 'balance',
      show: true,
      getValue: function(value) {
        return '<span>' + $filter('rmb')(value) + '</span>';
      }
    }, {
      title: '变化金额',
      field: 'change',
      show: true,
      getValue: function(value) {
        return '<span>' + $filter('rmb')(value) + '</span>';
      },
    }, {
      title: '类型',
      field: 'optType',
      show: true,
      getValue: function(value) {
        return '<span>' + $filter('desc')(value,
          'COMPANY_DEDUCTION_TYPE') + '</span>';
      }
    }, {
      title: '操作人',
      field: 'managerName',
      show: true
    }, {
      title: '操作时间',
      field: 'createTime',
      show: true,
      getValue: function(value) {
        return '<span>' + $filter('date')(value,
          'yyyy.MM.dd HH:mm:ss') + '</span>';
      },
    }];
    $scope.companyDeductionOffset = $scope.offset;
    $scope.companyDeductionTable;
    $scope.getCompanyDeductionList = function() {
      $scope.companyDeductionTable = new NgTableParams({
        count: $scope.limit
      }, {
        counts: [],
        getData: function(params) {
          var p = {};
          $scope.companyDeductionOffset = $scope.limit * (params.page() -
            1);
          p = {
            offset: $scope.companyDeductionOffset,
            limit: $scope.limit,
            companyId: $scope.company.companyId
          };
          return companyService.queryCompanyDeductionFlow(p).then(
            function(res) {
              $scope.companyDeductionFlow = res.content;
              params.total(res.totalElements);
              return companyService.indexCompany(res.content,
                $scope.companyDeductionOffset + 1);
            });
        }
      });
      $scope.$applyAsync(function() {
        $scope.companyDeductionCtrl.showDialog($scope);
      });
      /*            $scope.companyDeductionTable.reload().then(function() {
                      $scope.$applyAsync(function() {
                          $scope.companyDeductionCtrl.showDialog($scope);
                      });
                  });*/
    };
    //联系方式相关
    $scope.contactHeads = [{
      title: '联系人',
      field: 'contactName',
      dataType: 'text',
      required: true
    }, {
      title: '手机',
      field: 'mobile',
      dataType: 'text',
      required: true,
      relatedField: 'tel'
    }, {
      title: '座机',
      field: 'tel',
      dataType: 'text',
      required: true,
      relatedField: 'mobile'
    }, {
      title: 'QQ',
      field: 'qq',
      dataType: 'text'
    }, {
      title: '微信号',
      field: 'wechat',
      dataType: 'text'
    }, {
      title: '操作',
      field: 'command',
      dataType: 'command'
    }];
    $scope.block = {
      companyId: "",
      productId: "",
      reason: "",
      modifyReason: "",
      productName: "",
      modifyId: "",
      addBox: ""
    };
    $scope.getBlockList = function() {
      return companyService.getBlockCompany({
        companyId: $scope.block.companyId
      }).then(function(res) {
        $scope.blockConpanyList = res;
      });
    };
    $scope.seeBlock = function(companyId) {
      $scope.block.addBox = false;
      $scope.block.companyId = companyId;
      companyService.getZeroProduct({
        companyId: '714987242665279488'
      }).then(function(res) {
        $scope.blockZeroProduct = res;
      });
      $scope.getBlockList().then(function() {
        $scope.companyBlockModal = modalService.initModal({
          appendTo: $element,
          scope: $scope,
          templateUrl: "blockManage",
          backdrop: 'static',
          size: 'lg'
        });
      })

    };
    $scope.showAddBox = function() {
      $scope.block.addBox = true;
    }
    $scope.addBlock = function(productId, reason, callback) {
      companyService.addBlockCompany({
        companyId: $scope.block.companyId,
        productId: productId,
        reason: reason
      }).then(function(res) {
        $scope.getBlockList().then(function() {
          callback();
        })
      });

    };
    $scope.modifyBlock = function(id, name, reason) {
      $scope.block.modifyId = id;
      $scope.block.name = name;
      $scope.block.modifyReason = reason;
      $scope.deleteBlockModal = modalService.initModal({
        appendTo: $element,
        scope: $scope,
        templateUrl: "modifyDialog",
        backdrop: 'static',
        size: 'sm'
      });
    };
    $scope.modifyBlockSure = function() {
      var me = this;
      companyService.modifyBlockCompany({
        id: $scope.block.modifyId,
        reason: $scope.block.modifyReason
      }).then(function(res) {
        $scope.getBlockList().then(function() {
          me.$close();
        })
      });
    };
    $scope.deleteCancel = function() {
      var me = this;
      companyService.deleteBlockCompany({
        id: $scope.blockDeleteId,
      }).then(function(res) {

        $scope.getBlockList().then(function() {
          me.$close()
        })
      });
    };

    $scope.deleteBlock = function(id) {
      $scope.blockDeleteId = id;
      $scope.deleteBlockModal = modalService.initModal({
        appendTo: $element,
        scope: $scope,
        templateUrl: "blockDelete",
        backdrop: 'static',
        size: 'sm'
      });


    };
    $scope.contactTable = new NgTableParams({
      count: 5
    }, {
      counts: [],
      dataset: $scope.contactTableData
    });
  });
};