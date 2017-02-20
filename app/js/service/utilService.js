/*
 *shelfService
 */
module.exports = function(app) {

  app.service('utilService', function($sce, CONSTANTS, $mdDialog, $filter) {
    /*
     *格式化表格头
     */
    this.transformHead = function(heads, config) {
      var temp = [];
      angular.forEach(heads, function(item) {
        if (!item.getValue) {
          item.getValue = function(value, record, index, scope) {
            var v = '<span>' + record[item.field] + '</span>';
            if (!(config && config.needCompile)) { //不需要编译
              v = $sce.trustAsHtml(v);
            }
            return v;
          };
        }
        temp.push(item);
      });
      return temp;
    };
    this.parseDateByTimeStamp = function(t, pattern) {
      return $filter('date')(t, 'yyyy-MM-dd HH:mm:ss');
    };
    /*
    *格式化时间
    d:date类型
    fmt
    */
    this.parseTimeByDate = function(d, fmt) {
      var f = fmt || 'yyyy-MM-dd hh:mm:ss',
        o = {
          "M+": d.getMonth() + 1, //月份
          "d+": d.getDate(), //日
          "h+": d.getHours(), //小时
          "m+": d.getMinutes(), //分
          "s+": d.getSeconds(), //秒
          "q+": Math.floor((d.getMonth() + 3) / 3), //季度
          "S": d.getMilliseconds() //毫秒
        };
      if (/(y+)/.test(f)) {
        f = f.replace(RegExp.$1, (d.getFullYear() + "").substr(4 -
          RegExp.$1.length));
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(f)) {
          f = f.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (
            ("00" + o[k]).substr(("" + o[k]).length)));
        }
      }
      return f;
    };
    /*
    *格式化时间
    *l:long类型
    fmt
    */
    this.parseTimeByLong = function(l, fmt) {
      var d = new Date(parseInt(l));
      return this.parseTimeByDate(d, fmt);
    };
    this.parseTimeByDateDis = function(d, dis, fmt) {
      var f = fmt || 'yyyy-MM-dd hh:mm:ss';
      var beginTime = d.getTime();
      var endTime = d.getTime() + dis * 24 * 60 * 60 * 1000;
      d.setTime(endTime);
      return this.parseTimeByDate(new Date(d), fmt);
    };
    this.parseLongTimeByDateDis = function(d, dis) {
      var beginTime = d.getTime();
      var endTime = d.getTime() + dis * 24 * 60 * 60 * 1000;
      return endTime;
    };
    this.getConstantJsonValue = function(key) {
      var values = CONSTANTS.SHELF_STATE.DESC;
      var result = [];
      angular.forEach(values, function(v, k) {
        result.push({
          value: k,
          desc: v
        });
      });
      console.log(result);
      return result;
    };
    this.indexArray = function(data, offset, keyname) {
      if (!keyname) {
        keyname = 'index';
      }
      angular.forEach(data, function(item, index) {
        item[keyname] = index + offset;
      });
      return data;
    };
    //获取查询请求的参数
    this.getSearchParams = function(params, value, key) {
      if (value) {
        params[key] = value;
      }
      return params;
    };
    //重置分页参数
    this.resetPagination = function(scope, offset, limit) {
      scope.offset = offset;
      scope.limit = limit;
      return {
        offset: scope.offset,
        limit: scope.limit
      };
    };
    //弹出错误警告
    this.alertError = function(errorMessage) {
      $mdDialog.show($mdDialog.alert({
        title: '失败',
        textContent: errorMessage,
        ok: '关闭',
        zIndex: 99999999999999
      }).clickOutsideToClose(true));
    };
    //弹出成功提示
    this.alertSuccess = function(msg) {
      $mdDialog.show($mdDialog.alert({
        title: '成功',
        textContent: msg,
        ok: '关闭',
        zIndex: 99999999999999
      }).clickOutsideToClose(true));
    };
    //将字节转换为K
    this.parseKByBytes = function(bytes) {
      return Math.round((bytes /
        1024 * 100) / 100);
    };
    //获取人民币
    this.getRMBStr = function(amt) {

      return amt ? (parseInt(amt / 100) + '.' + parseInt((amt / 10) %
        10) + parseInt(amt % 10)) : '0';
    };
    //获取分
    this.getPointInt = function(value) {
      return parseInt((value * 100).toFixed(0));
    };
    this.getPointDouble = function(value) {
      return (value * 100).toFixed(2);
    };
  });
};