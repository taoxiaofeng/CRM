;
(function(w) {
    w._ = require('./lib/underscore.js');
    w.async = require('./lib/async.js');
    w.SparkMD5 = require('./lib/spark-md5.js');
    require('./lib/moment.js');
    require('./lib/angular.js');
    require('./lib/angular.route.js');
    require('./lib/angular-ui-router.js');
    require('./lib/angular-cookies.js');
    require('./lib/angular-infinite-scroll.js');
    require('./lib/ui-bootstrap-tpls-1.3.3.js');
    require('./lib/zepto.js');
    require('./lib/md6.js');
    require('./lib/base64x-1.1.js');
    require('./lib/ng-table.js');
    require('./lib/jsrsasign-latest-all-min.js');
    require('./lib/lodop.js');
    require('./lib/isteven-multi-select.js');
    require('./lib/jquery.toexcel.js');
    require('./lib/angular-animate.js');
    require('./lib/angular-aria.js');
    require('./lib/angular-material.js');
    require('./lib/angular-messages.js');
    require('./lib/upyun-mu.js');
    //通过在应用中引入 "angular-santize.js" 模块，使用 ngSanitize 函数来检测代码的安全性
    require('./lib/angular-sanitize.min.js');
    /*//table冻结表头滑动文件
    require('./lib/ui-grid.min.js');*/
    //fileinput
    // require('./lib/fileinput.js');
    w.echarts = require('./lib/echarts.simple.min.js');
    require('../../node_modules/angular-ui-tree/dist/angular-ui-tree.min.js');
}(window));
