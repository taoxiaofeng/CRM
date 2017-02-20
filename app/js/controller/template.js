module.exports = function(app) {
  app.controller('template', function($scope, $mdDialog, $filter,
    NgTableParams, templateService, CONSTANTS, cacheService, utilService) {
    $scope.template = {
      name: ''
    };
    $scope.queryTemplateParams = {
      type: '',
      name: '',
      status: ''
    };
    $scope.queryTemplateConfig = {
      selectCompanyType: function(item) {
        $scope.queryTemplateParams.type = item.code;
        $scope.queryTemplateList();
      },
      selectTemplateStatus: function(item) {
        $scope.queryTemplateParams.status = item.code;
        $scope.queryTemplateList();
      },
      companyTypes: CONSTANTS.getList({
        clsOrName: 'TEMPLATE_TYPE',
        defaultObj: {
          '': '全部类型'
        }
      }),
      templateStatuses: CONSTANTS.getList({
        clsOrName: 'TEMPLATE_STATUS',
        defaultObj: {
          '': '全部状态'
        }
      })
    };

    $scope.limit = 25;
    $scope.templateList = [];
    $scope.templateTableHead = [];
    $scope.templateTable = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      getData: function(params) {
        var p = {};
        $scope.offset = $scope.limit * (params.page() - 1);
        p = {
          offset: $scope.offset,
          limit: $scope.limit
        };
        return templateService.queryTemplateList(angular.extend(p, $scope.queryTemplateParams))
          .then(function(res) {
            $scope.templateList = res.content;
            params.total(res.totalElements);
            return utilService.indexArray(res.content, $scope.offset +
              1);
          });
      }
    });
    $scope.queryTemplateList = function() {
      $scope.templateTable.reload();
      $scope.templateTable.page(1);
    };
    $scope.createTemplate = function() {
      window.location.hash = '#/templateEdit';
    };
    $scope.editTemplate = function(t) {
      window.location.hash = '#/templateEdit/' + t.id;
    };
    $scope.publishTemplate = function(t) {
      templateService.publishTemplate({
        id: t.id,
        type: t.type,
        status: CONSTANTS.TEMPLATE_STATUS.PUBLIC,
      }).then(function(res) {
        $scope.queryTemplateList();
      });
    };
    $scope.deleteTemplate = function(t) {
      templateService.deleteTemplate({
        id: t.id
      }).then(function() {
        $scope.templateTable.reload();
        $scope.templateTable.page(1);
      });
    };
  });
};
