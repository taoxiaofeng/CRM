/*货架管理*/
module.exports = function(app) {
  app.controller('shelfManageCtrl', function($scope, $compile, $templateCache,
    shelfService, NgTableParams, modalService, companyService,
    utilService, CONSTANTS) {
    $scope.PROFIT_LEVEL = CONSTANTS.PROFIT_LEVEL;
    $scope.paths = [{
      name: '首页',
      root: '#home'
    }, {
      name: '企业货架管理',
      active: true
    }];
    $scope.picUrl = window.cfg.picUrl;
    var defaultShelf = { desc: '暂无货架' };
    $scope.curShelf = defaultShelf;
    $scope.company;
    $scope.shelfList = [];
    $scope.shelfTypeList = CONSTANTS.getList('SHELF_TYPE', false, '', '',
      null, true);
    var salesChartDays = 14;

    var initView = function() {
      var excelTemplate = $compile($templateCache.get(
        'shelfmanage/shelfProductsTemplate.html'))($scope);
      angular.element(document.getElementById('exportExcelWrap')).append(
        excelTemplate);
    };
    initView();
    $scope.selectCompanyCallback = function(company) {
      $scope.company = company;
      $scope.queryShelfListByCompany(company);
    };
    $scope.queryShelfListByCompany = function(company) {
      $scope.shelfList = [];
      var queryParams = { companyId: company.companyId };
      shelfService.queryShelfListByCompanyId(queryParams).then(function(
        res) {
        if (res.length > 0) {
          angular.forEach(res, function(item, i) {
            var t = item;
            t.desc = item.shelfName;
            $scope.shelfList.push(t);
            if (i == 0) {
              $scope.curShelf = t;
            }

          });
        } else {
          $scope.curShelf = defaultShelf;
          $scope.shelfProducts = [];
        }
      });
    };
    $scope.selectShelfCallback = function(item) {
      $scope.curShelf = item;
      if (typeof item.id == 'undefined') {
        return;
      }
      var queryParams = { shelfId: item.id };
      shelfService.queryShelfProducstsByShelfId(queryParams).then(
        function(res) {
          var shelfProducts = shelfService._parseShelfProductsData(
            res);
          $scope.shelfProducts = shelfProducts;
        });
    };

    //获取位置信息
    $scope.getPositionName = function(shelfProduct) {
      var curShelfType = $scope.curShelf.shelfType;
      var marks = ['A', 'B', 'C', 'D', 'E'];
      var positionName = shelfProduct.header.row == 5 && curShelfType ==
        CONSTANTS.SHELF_TYPE.SNACKS ?
        '饮料栏/' + shelfProduct.header.col :
        '第' + shelfProduct.header.row + '层/' + marks[shelfProduct.header
          .row - 1] + shelfProduct.header.col;
      return positionName;
    };

    /*管理货架 modal相关*/
    //管理货架
    $scope.manageShelf = function() {
      $scope.createShelfObj = {};
      $scope.queryShelfListByCompany($scope.company);
      $scope.modal = modalService.initModal({
        appendTo: angular.element(document.getElementsByClassName(
          'shelf-manage')),
        scope: $scope
      });
    };
    $scope.getDefaultShelfType = function(shelf) {
      if (typeof shelf != 'undefined') {
        return _.findWhere($scope.shelfTypeList, { code: shelf.shelfType }) ||
          $scope.shelfTypeList[0];
      } else {
        return $scope.shelfTypeList[0];
      }
    };
    $scope.selectShelfTypeCallback = function(item, shelf) {
      if (typeof shelf != 'undefined') {
        shelf.shelfType = item.code;
      } else {
        $scope.createShelfObj.shelfType = item.code;
      }

    };
    //新建货架
    $scope.createShelf = function(e) {
      var shelf = $scope.createShelfObj;
      var params = {
        shelfName: shelf.shelfName,
        companyId: $scope.company.companyId,
        shelfType: shelf.shelfType
      };
      shelfService.createShelf(params).then(function(res) {
        $scope.queryShelfListByCompany($scope.company);
        e.target.reset();
      });
    };
    //更新货架
    $scope.modifyShelf = function(shelf) {
      if (shelf.number == 0) {
        alert('货架编号需为大于0的整数');
        return;
      }
      var params = {
        shelfName: shelf.shelfName,
        shelfId: shelf.id,
        shelfType: shelf.shelfType,
        number: shelf.number
      };
      shelfService.modifyShelf(params).then(function(res) {
        $scope.queryShelfListByCompany($scope.company);
        shelf.inEdit = !shelf.inEdit;
      });
    };


    /*销量走势图 modal相关*/
    $scope.checkSalesChart = function(shelfProductId) {
      var params = { shelfProductId: shelfProductId, days: salesChartDays };
      shelfService.queryShelfProductTrend(params).then(function(res) {
        var xAxisDataTmp = [];
        var seriesDataTmp = [];
        angular.forEach(res.content, function(item, i) {
          xAxisDataTmp.push(item.date.substring(5, item.date.length));
          seriesDataTmp.push(item.sales);
        });
        $scope.xAxisData = xAxisDataTmp;
        $scope.seriesData = seriesDataTmp;
        $scope.modal = modalService.initModal({
          appendTo: angular.element(document.getElementsByClassName(
            'shelf-manage')),
          scope: $scope,
          templateUrl: 'modalSalesLine',
          size: 'lg'
        });
      });

    };

    /*商品详情 modal相关*/
    $scope.checkProductDetail = function(shelfProduct) {
      var params = { shelfProductId: shelfProduct.header.id };
      shelfService.queryShelfProductDetail(params).then(function(res) {
        $scope.curProduct = res;
        $scope.modal = modalService.initModal({
          appendTo: angular.element(document.getElementsByClassName(
            'shelf-manage')),
          scope: $scope,
          templateUrl: 'modalProductDetail',
          size: 'lg'
        });
      });
    };
    //货架信息导出Excel
    $scope.exportShelfProducts = function() {
      $scope.$applyAsync(function() {
        var dom = angular.element('<a></a>');
        dom[0].href = $('#shelf-products-table').excelexportjs({
          containerid: "shelf-products-table",
          datatype: 'table',
          returnUri: 'true'
        });
        dom[0].download = $scope.company.companyName + '-' + $scope
          .curShelf.shelfName + '-' + utilService.parseTimeByDate(
            new Date(), 'yyyyMMddhhmmss') + '.xls';
        dom[0].click();
      });
    };

  });
};