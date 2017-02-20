/*销售数据统计*/
module.exports = function (app) {
  app.controller('salesCtrl', function ($scope, productService, utilService, salesService, NgTableParams, $element, $compile, $templateCache) {
    $scope.intervalHide = false;
    $scope.utilService = utilService;
    $scope.yearHide = true;
    $scope.monthHide = true;
    $scope.weekHide = true;
    $scope.levelOneCategoryList = [];

    $scope.years = [];
    $scope.months = [];
    $scope.weekList = [];//{startDate,endDate,weekNum}
    $scope.intervalList = [{ value: 1, interval: "昨日" }, {
      value: 2,
      interval: "最近7天"
    }, { value: 3, interval: "最近30天" }, { value: 4, interval: "最近90天" }];

    $scope.selectYear = '';
    $scope.selectWeek = '';
    $scope.selectMonth = 1;
    $scope.selectInterval = $scope.intervalList[0];

    $scope.productName = "";
    $scope.searchType = 1;
    $scope.salesList = [];
    var categoryId = 0;
    var sortType = 0;

    // 下面代码为导出Excel做准备
    var excelTemplate = $compile($templateCache.get(
      'dataStatistics/salesStatisticsTableTemplate.html'))($scope);
    angular.element(document.getElementById(
      'exportExcelWrap')).append(excelTemplate);

    $scope.setInterval = function () {//区间统计
      $scope.intervalHide = false;
      $scope.yearHide = true;
      $scope.monthHide = true;
      $scope.weekHide = true;
      $scope.searchType = 1;
    };
    $scope.setMonths = function () {
      $scope.yearHide = false;
      $scope.monthHide = false;
      $scope.intervalHide = true;
      $scope.weekHide = true;
      $scope.searchType = 2;

    };
    $scope.setWeeks = function () {
      $scope.yearHide = false;
      $scope.weekHide = false;
      $scope.monthHide = true;
      $scope.intervalHide = true;
      $scope.searchType = 3;

    };
    $scope.onYearChange = function () {
      $scope.months = $scope.selectYear.month;
      $scope.selectMonth = $scope.months[0];
      $scope.weekList = $scope.selectYear.week;
      $scope.selectWeek = $scope.weekList[0];
    };
    $scope.offset = 0;
    $scope.limit = 20;
    $scope.tableParams = new NgTableParams({
      count: $scope.limit
    }, {
      counts: [],
      paginationMaxBlocks: 20,
      paginationMinBlocks: 2,
      getData: function (params) {
        var searchParams = getQueryParams();
        $scope.offset = $scope.limit * (params.page() - 1);
        searchParams.offset = $scope.offset;
        searchParams.limit = $scope.limit;
        return salesService.getQuerySalesList(searchParams).then(function (res) {
          params.total(res.totalElements);

          return res.content;
        });
      }

    });

    $scope.onSearch = function () {//查询按钮
      $scope.tableParams.settings({
        dataset: []
      });
    };
    $scope.onProductNameSearch = function () {
      $scope.tableParams.settings({
        dataset: []
      });
    };
    $scope.exportExcel = function () {//导出excel

      if (!$scope.salesList.length) {
        utilService.alertError('请先选择需导出的数据');
        return;
      }
      var dom = angular.element('<a></a>');
      dom[0].href = $('#export-sales-table').excelexportjs({
        containerid: 'export-sales-table',
        datatype: 'table',
        returnUri: 'true'
      });
      dom[0].download = '商品销售数据.xls';
      dom[0].click();

    };
    //回车键查询
    $scope.productKeyup = function (e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.onSearch();
      }
    };
    ////勾选
    //$scope.updateSelection = function (e, item) {
    //  var isChecked;
    //  if (_.isObject(e)) {
    //    isChecked = e.currentTarget.checked;
    //  } else {
    //    isChecked = e;
    //  }
    //  item.checked = isChecked;
    //  if (isChecked) {
    //    $scope.salesList.push(item);
    //  } else {
    //    $scope.salesList = _.without($scope.salesList,
    //      item);
    //  }
    //};
    //$scope.selectAllOrder = function(e, data, checkall) {
    //  var st = e.currentTarget.checked;
    //  angular.forEach(data, function(item) {
    //    if (item.checked !== st) {
    //      $scope.updateSelection(e.currentTarget.checked, item);
    //    }
    //  });
    //};
    $scope.checkAllCfg = {
      flag: false
    };
    //勾选
    $scope.updateSelection = function(e, item) {
      var isChecked;
      if (_.isObject(e)) {
        isChecked = e.currentTarget.checked;
      } else {
        isChecked = e;
      }
      item.checked = isChecked;
      if (isChecked) {
        $scope.salesList.push(item);
      } else {
        $scope.checkAllCfg.flag = false;
        $scope.salesList = _.without($scope.salesList, item);
      }
    };
    $scope.selectAllOrder = function(e, data, checkall) {
      var st = e.currentTarget.checked;
      angular.forEach(data, function(item) {
        if (item.checked !== st) {
          $scope.updateSelection(e.currentTarget.checked, item);
        }
      });
    };


    $scope.unsalableClick = function (item) {//加入滞销商品库
      if (item.isUnsalable == 1) {
        salesService.delUnsalable({
          id: item.id
        }).then(function (res) {
        });
      } else {
        var params = { productIds: [item.id] };
        salesService.addUnsalable(params).then(function (res) {
        });
      }
      $scope.tableParams.reload();
    };
    //新品推荐
    $scope.recommendClick = function (item) {
      var params = { productIds: [item.id] };
      if (item.isNew == 1) {
        salesService.delRecommend({
          id: item.id
        }).then(function (res) {

        });
      } else {
        salesService.addCommend(params).then(function (res) {

        });
      }
      $scope.tableParams.reload();

    }
    //组装参数
    var getQueryParams = function () {
      var queryParams = {};
      switch ($scope.searchType) {
        case 1:
          queryParams.range = $scope.selectInterval.value;
          break;
        case 2:
          queryParams.year = $scope.selectYear.year;
          queryParams.month = $scope.selectMonth;
          break;
        case 3:
          queryParams.startTime = utilService.parseTimeByLong($scope.selectWeek.startDate, "yyyy-MM-dd");
          queryParams.endTime = utilService.parseTimeByLong($scope.selectWeek.endDate, "yyyy-MM-dd");
          break;
      }
      ;
      queryParams.productName = $scope.productName;
      queryParams.type = $scope.searchType;
      queryParams.sortType = sortType;
      if (categoryId > 0) {
        queryParams.categoryId = categoryId;
      }
      return queryParams;
    };

    //初始化品类
    var categoryInit = function () {
      loadCategoryList(0);
    };
    //加载品类
    var loadCategoryList = function (parentCategoryId) {
      productService.queryProductCategoryList({
        parentCategoryId: parentCategoryId
      }).then(function (res) {
        if (!parentCategoryId) { //一级品类
          $scope.levelOneCategoryList = angular.copy(res);
          $scope.levelOneCategoryFilter.setList(res);
          if ($scope.levelOneCategoryList.length > 0) {
            $scope.selectedLevelOneCategory = $scope.levelOneCategoryList[0];
            loadCategoryList($scope.selectedLevelOneCategory.id);
          }
        }
      });
    };
    $scope.levelOneCategoryManageList = function (item) {
      return item.id != '0';
    };
    categoryInit();
    //一级品类 筛选
    $scope.levelOneCategoryFilter = {
      list: [],
      defaultItem: {
        categoryName: '全部品类'
      },
      setList: function (list) {
        productService.queryProductCategoryList({
          parentCategoryId: 0
        })
        this.list = angular.copy(list);
        this.list.unshift(this.defaultItem);
      },
      selectItem: function (item) {//一级品类选中后
        if (item.id) {
          categoryId = item.id;
        } else {
          categoryId = 0;
        }
        $scope.categoryName = item.categoryName;
        $scope.onSearch();
      }
    };
    /**
     * 一星期毫秒数
     * @returns {number}
     */
    var getWeekTime = function weekTime() {
      return 7 * 24 * 3600000;
    };
    /**
     * 获取星期数组
     * @param year
     * @returns {Array}
     */
    var getWeekList = function (startDay, endDay) {
      var date = startDay;
      var endDate = endDay;
      // 取得这个日期对象 date 的长整形时间 time
      var time = date.getTime();
      var weekday = date.getDay();//新年的第 一天是星期几
      if (weekday == 0) {
        weekday = 7;
      }
      var list = [];
      var i = 0;
      while (time < endDate.getTime()) {
        var weekItem = {};
        weekItem.weekNum = (i + 1);
        if (i == 0) {
          weekItem.startDate = time;
          time = time + (7 - weekday) * 24 * 3600000;
        } else {
          weekItem.startDate = time + (24 * 3600000);
          time = time + getWeekTime();
        }
        weekItem.endDate = time;
        if (time >= endDate.getTime()) {
          weekItem.endDate = endDate.getTime();
        }
        weekItem.selectOption = "第" + weekItem.weekNum + "周(" + utilService.parseTimeByLong(weekItem.startDate, "MM月dd日") + "-" + utilService.parseTimeByLong(weekItem.endDate, "MM月dd日") + ")";
        list.push(weekItem);
        i++;
      }
      return list;
    };
    /**
     * 开始时间
     * @returns {Date}
     */
    var getStartDate = function () {
      salesService.getStartTime().then(function (res) {
        var val = Date.parse(res.startTimeStr);
        var newDate = new Date(val);
        var list = getSelectTimeList(newDate);
        $scope.years = list;
        $scope.selectYear = $scope.years[0];
        $scope.months = $scope.selectYear.month;
        $scope.weekList = $scope.selectYear.week;
        $scope.selectWeek = $scope.weekList[0];
        $scope.selectMonth = $scope.months[0];
      });
    };
    /**
     * 获取选择某年的月份
     * @param startMonth
     * @param endMonth
     * @returns {Array}
     */
    var getMonthList = function (startMonth, endMonth) {
      var list = [];
      for (var i = startMonth; i <= endMonth; i++) {
        list.push(i + 1);
      }
      return list;
    };
    /**
     * 获取时间数组
     * @param startDate
     * @returns {Array}
     */
    var getSelectTimeList = function (startDate) {
      var today = new Date();
      var startYear = startDate.getFullYear();
      var endYear = today.getFullYear();
      var yearList = [];
      for (var i = startYear; i <= endYear; i++) {
        var yearItem = { year: '', week: [], month: [] };
        var startDay;
        var endDay;
        if (i == startYear) {
          startDay = startDate;
          endDay = new Date(startYear, "11", "31");
        } else if (i == endYear) {
          startDay = new Date(endYear, "0", "1");
          endDay = today;
        } else {
          startDay = new Date(i, "0", "1");
          endDay = new Date(i, "11", "31");
        }
        yearItem.week = getWeekList(startDay, endDay);
        yearItem.month = getMonthList(startDay.getMonth(), endDay.getMonth());
        yearItem.year = i;
        yearList.push(yearItem);
      }
      return yearList;
    };
    $scope.sortByPosition = function (item) {
      sortType = item.sortCode;
      $scope.tableParams.settings({
        dataset: []
      });
    };

    getStartDate();
  });
}