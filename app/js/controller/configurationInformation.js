/**
 * Created by taoxiaofeng on 2016/10/18.
 * 信息配置
 * configurationInformation
 */
module.exports = function(app) {
  app.controller('configurationInformation', function($scope,
    configurationInformationService, $filter, holidayWelfareService,
    utilService) {


    $scope.queryParams = {};
    $scope.totalFee = [];
    $scope.showTime;
    $scope.depositAmount = [];
    $scope.welfareTime = {};


    /**
     * 获取零花钱审核基数默认值
     */
    $scope.getPocketMoneyAudit = function() {
      configurationInformationService.getPocketMoneyAudit().then(
        function(res) {
          $scope.totalFee = $filter('rmb')(res);
        });
    };
    $scope.getPocketMoneyAudit();


    /**
     * 零花钱审核基数
     */
    $scope.pocketMoneyAudit = function(totalFee) {
      configurationInformationService.pocketMoneyAudit($filter('points')
        (totalFee)).then(function() {
        alert("恭喜你,设置成功!!!");
      });
    };


    /**
     * 获取心愿单商检标识显示时效配置
     */
    $scope.getAging = function() {
      configurationInformationService.getWishListConfiguration().then(
        function(res) {
          $scope.showTime = res;
        });
    };
    $scope.getAging();

    /**
     * 心愿单上架标识显示时效配置
     */
    $scope.showTimeList = {
      showTimeArr: [{
        showTime: 0,
        name: '10天'
      }, {
        showTime: 1,
        name: '5分钟'
      }, {
        showTime: 2,
        name: '15分钟'
      }, {
        showTime: 3,
        name: '1天'
      }, {
        showTime: 4,
        name: '3天'
      }, {
        showTime: 5,
        name: '5天'
      }],
      getDefaultItem: function(showTime) {
        var s = parseInt(showTime);
        var options = this.showTimeArr;
        return _.findWhere(options, {
          showTime: s
        }) || options[0];
      },
      wishListLimitation: function(item) {
        var params = item.showTime;
        configurationInformationService.wishListConfiguration(params)
          .then(function() {

          });
      }
    };
    /***
     * 获取默认的(预定时间、热卖时间、结束时间)
     */
    $scope._getHolidayDefaultTime = function(scope) {
      holidayWelfareService.getHolidayDefaultTime().then(function(res) {
        // debugger
        console.log($scope.welfareTime.scheduledTimeDate = res.preSale);
        console.log($scope.welfareTime.scheduledTime = utilService.parseTimeByLong(
          res.preSale));
        console.log($scope.welfareTime.sellingTimeDate = res.hotSale);
        console.log($scope.welfareTime.sellingTime = utilService.parseTimeByLong(
          res.hotSale));
        console.log($scope.welfareTime.overTimeDate = res.endSale);
        console.log($scope.welfareTime.overTime = utilService.parseTimeByLong(
          res.endSale));
      })
    };
    $scope._getHolidayDefaultTime($scope);


    /***
     * 设置  更新节假日福利 活动时间
     * 截止时间到小时
     */

    //时间戳转换成八位日期 例如:2014-5-5
    function convertDate(cData) {
      var myDate = new Date(cData);
      var year = myDate.getFullYear();
      var month = myDate.getMonth() + 1;
      var day = myDate.getDate();
      return year + '-' + month + '-' + day;
    }

    //时间戳转换成四位时间 例如: 10:10:00
    function convertTime(cTime) {
      var myDate = new Date(cTime);
      var hours = myDate.getHours();
      var minutes = myDate.getMinutes();
      var second = myDate.getSeconds();
      return hours + ':' + minutes + ':' + second;
    }

    $scope.setWelfareTime = function(welfareTime) {
      // var scheduledConversion = new Date();
      var scheduledTimeDate = convertDate(welfareTime.scheduledTimeDate);
      var sellingTimeDate = convertDate(welfareTime.sellingTimeDate);
      var overTimeDate = convertDate(welfareTime.overTimeDate);
      var scheduledTime = convertTime(Date.parse((welfareTime.scheduledTime)));
      var sellingTime = convertTime(Date.parse((welfareTime.sellingTime)));
      var overTime = convertTime(Date.parse((welfareTime.overTime)));
      var preSale = Date.parse(scheduledTimeDate + ' ' + scheduledTime);
      var hotSale = Date.parse(sellingTimeDate + ' ' + sellingTime);
      var endSale = Date.parse(overTimeDate + ' ' + overTime);
      console.log(preSale);
      if (welfareTime.scheduledTime == "" || welfareTime.sellingTime ==
        "" || welfareTime.overTime == "") {
        alert("时间格式有误,请设置准确时间!!!")
      } else {
        var params = { preSale: preSale, hotSale: hotSale, endSale: endSale };
        holidayWelfareService.updateHolidayTime(params).then(function(
          res) {
          alert("设置成功。");
        });
      }
    };

    /**
     *营销商品/组合定金额度
     */
    //获取默认的营销商品/组合定金额度
    $scope._getMarketingActivitiesDepositInfo = function() {
      // debugger
      configurationInformationService.getMarketingActivitiesDepositInfo()
        .then(function(res) {
          $scope.depositAmount = $filter('rmb')(res);
        });
    };
    $scope._getMarketingActivitiesDepositInfo();

    $scope.marketingActivitiesDeposit = function(depositAmount) {
      // debugger
      configurationInformationService.marketingActivitiesDepositInfo(
        $filter('points')(depositAmount)).then(function(res) {
        alert('设置成功！！！');
      });
    };
    /**
     * 获取选购单选购上限配置设置
     */
    var limitNumConstant = {
      oneShelf: '1',
      twoShelf: '2',
      threeShelf: '3',
      fourShelf: '4',
      allShelf: '5'
    };
    $scope._getChooseOrderInfoCeiling = function() {
      configurationInformationService.getChooseOrderInfoCeiling().then(
        function(res) {
          $scope.limitNumConfig = {};
          var limitNumConstatInvert = _.invert(limitNumConstant);
          _.each(res, function(item) {
            var temp = {
              id: item.id,
              limitNum: item.limitNum
            };
            $scope.limitNumConfig[limitNumConstatInvert[item.shelfNumType]] =
              temp;
          });

        })
    };
    $scope._getChooseOrderInfoCeiling();
    /**
     * 选购单选购上限配置设置
     */
    $scope.chooseOrderInfo = function(limitNumConfig) {
      var params = _.map(_.pairs(limitNumConfig), function(item) {
        return {
          id: item[1].id || null,
          shelfNumType: limitNumConstant[item[0]],
          limitNum: item[1].limitNum
        }
      });

      configurationInformationService.createChooseOrderInfo(params).then(
        function(res) {
          utilService.alertSuccess('配置成功!');
        })
    }
  });
};