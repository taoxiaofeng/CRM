module.exports = function(app) {
  app.controller('templateEdit', function($scope, $routeParams,
    $mdSidenav, uploadService, utilService, CONSTANTS,
    NgTableParams, templateService, $filter, $mdDialog) {
    var templateId = $routeParams.templateId || '';
    $scope.CONSTANTS = CONSTANTS;
    $scope.picUrl = window.cfg.picUrl;
    $scope.templateDefault = {
      name: '',
      creatTime: '',
      updateTime: '',
      type: '',
      status: '',
      module: []
    };
    $scope.template = {
      name: '',
      creatTime: '',
      updateTime: '',
      type: '',
      status: '',
      module: []
    };
    $scope.modules = $scope.template.module || [];
    $scope.fullWidth = 4;
    $scope.defaultModule = {
      width: '',
      height: '',
      mergeNext: false,
      isHide: false,
      contents: [{
        x: '',
        y: '',
        width: '',
        height: '',
        contentType: '',
        contentLink: [],
        contentImage: []
      }]
    };
    //侧边栏选中的内容元素
    $scope.newContent = {
      contentType: '',
      disableAlert: '',
      isDisable: false,
      isPop: false,
      noBorder: false,
      contentLink: [],
      contentImage: []
    };
    //所有模块类型及其布局
    $scope.allModules = [
      //1行
      {
        width: $scope.fullWidth,
        height: 1,
        contents: [{
          x: 0,
          y: 0,
          width: $scope.fullWidth,
          height: 1
        }]
      },
      //1行2列
      {
        width: $scope.fullWidth,
        height: 1,
        contents: [{
          x: 0,
          y: 0,
          width: 2,
          height: 1
        }, {
          x: 2,
          y: 0,
          width: 2,
          height: 1
        }]
      },
      //1行4列
      {
        width: $scope.fullWidth,
        height: 1,
        contents: [{
          x: 0,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 1,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 2,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 3,
          y: 0,
          width: 1,
          height: 1
        }]
      },
      //2行
      {
        width: $scope.fullWidth,
        height: 2,
        contents: [{
          x: 0,
          y: 0,
          width: $scope.fullWidth,
          height: 2
        }]
      },
      //2行2列
      {
        width: $scope.fullWidth,
        height: 2,
        contents: [{
          x: 0,
          y: 0,
          width: 2,
          height: 2
        }, {
          x: 2,
          y: 0,
          width: 2,
          height: 2
        }]
      },
      //2行，口田
      {
        width: $scope.fullWidth,
        height: 2,
        contents: [{
          x: 0,
          y: 0,
          width: 2,
          height: 2
        }, {
          x: 2,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 2,
          y: 1,
          width: 1,
          height: 1
        }, {
          x: 3,
          y: 0,
          width: 1,
          height: 1
        }, {
          x: 3,
          y: 1,
          width: 1,
          height: 1
        }]
      }
    ];
    $scope.allContentTypes = CONSTANTS.getList('CONTENT_TYPE', false);
    $scope.allTemplateTypes = CONSTANTS.getList('TEMPLATE_TYPE', false);
    $scope.allTemplateStatuses = CONSTANTS.getList('TEMPLATE_STATUS',
      false);
    $scope.disableChoices = [{
      name: '允许',
      value: false
    }, {
      name: '禁止',
      value: true
    }];
    $scope.popChoices = [{
      name: '无',
      value: false
    }, {
      name: '有',
      value: true
    }];
    $scope.borderChoices = [{
      name: '否',
      value: false
    }, {
      name: '是',
      value: true
    }];
    $scope.currentEditContent = $scope.newContent;

    var init = function() {
      //获取模板详情
      if (templateId) {
        templateService.queryTemplateDetail({
          id: templateId
        }).then(function(res) {
          $scope.template = res;
        });
      }
    };
    $scope.saveTemplate = function() {
      var params = angular.copy($scope.template);
      var fn = '';
      if (params.id) {
        fn = 'editTemplate';
      } else {
        fn = 'createTemplate';
      }
      if (!params.name || !params.type || !params.status) {
        $mdDialog.show($mdDialog.alert({
          title: '提示',
          textContent: '请完整填写模版信息',
          ok: '确认',
          cancel: '取消'
        }));
        return;
      }
      templateService[fn](params).then(function(res) {
        window.location.hash = '#template';
      });
    };
    $scope.resetEditTemplate = function() {
      if (templateId) {
        init();
      } else {
        $scope.template = angular.copy($scope.templateDefault);
        $scope.modules = $scope.template.module;
      }
    };
    //模块
    //delete module
    $scope.deleteModule = function(index) {
      $scope.modules.splice(index, 1);
    };
    $scope.moveModule = function(index, isUp) {
      var beforeIndex = isUp ? index - 1 : index;
      if ((isUp && !index) || (!isUp && index == $scope.modules.length -
          1)) {
        return;
      }
      $scope.modules[beforeIndex] = $scope.modules.splice(beforeIndex +
        1, 1,
        $scope.modules[beforeIndex])[0];
    };
    $scope.toggleModuleConfigWin = function() {
      $mdSidenav('right').toggle();
    };
    $scope.selectModule = function(m) {
      var module = angular.extend(angular.copy($scope.defaultModule),
        angular.copy(
          m));
      $scope.modules.push(module);
      $scope.toggleModuleConfigWin();
    };
    //内容
    $scope.editContent = function(moduleIndex, x, y) {
      $scope.currentEditModule = $scope.modules[moduleIndex];
      angular.forEach($scope.currentEditModule.contents, function(
        content,
        index) {
        if (content.x == x && content.y == y) {
          $scope.currentEditContentIndex = index;
          $scope.currentEditContent = angular.extend(angular.copy(
              $scope.newContent),
            angular.copy(content));
        }
      });
      console.log($scope.currentEditContent);
      $scope.toggleEditContentWin();
    };
    $scope.toggleEditContentWin = function() {
      $mdSidenav('left').toggle();
    };
    $scope.bannerContentElementPanel;
    $scope.bannerContent = {
      link: '',
      image: '',
      isEdit: false,
      index: '',
      reset: function() {
        this.link = '';
        this.image = '';
        this.isEdit = false;
        this.index = '';
      }
    };
    $scope.addBannerElement = function() {
      $scope.bannerContent.reset();
      $scope.bannerContentElementPanel.showDialog($scope);
    };
    $scope.editBannerElement = function(index) {
      $scope.bannerContent.isEdit = true;
      $scope.bannerContent.index = index;
      $scope.bannerContent.image = $scope.currentEditContent.contentImage[
        index];
      $scope.bannerContent.link = $scope.currentEditContent.contentLink[
        index];
      $scope.bannerContentElementPanel.showDialog($scope);
    };
    $scope.confirmBannerContent = function() {
      $scope.bannerContentElementPanel.closeDialog($scope);
      var index = $scope.bannerContent.index;
      if ($scope.bannerContent.isEdit) {
        $scope.currentEditContent.contentLink[index] =
          $scope.bannerContent.link;
        $scope.currentEditContent.contentImage[index] =
          $scope.bannerContent.image;
      } else {
        $scope.currentEditContent.contentLink.push($scope.bannerContent
          .link);
        $scope.currentEditContent.contentImage.push($scope.bannerContent
          .image);
      }
    };
    $scope.confirmEditContent = function() {
      $scope.currentEditModule.contents[$scope.currentEditContentIndex] =
        $scope.currentEditContent;
      $scope.toggleEditContentWin();
    };
    $scope.cancelEditContent = function() {
      $scope.toggleEditContentWin();
    };
    $scope.deleteCurrentEditContent = function(index) {
      $mdDialog.show($mdDialog.confirm({
        title: '提示',
        textContent: '删除后无法恢复，确认删除？',
        ok: '确认',
        cancel: '取消'
      })).then(function() {
        $scope.currentEditContent.contentImage.splice(index, 1);
        $scope.currentEditContent.contentLink.splice(index, 1);
      });
    };
    $scope.changeMergeNext = function(module) {
      if (module.mergeNext == 'true' || module.mergeNext == true) {
        module.mergeNext = false;
      } else {
        module.mergeNext = true;
      }
    };
    $scope.$watch('template', function(v) {
      $scope.modules = v.module || [];
    })
    init();
  });
};