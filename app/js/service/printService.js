/**
 * Created by lijinlong
 */
module.exports = function(app) {
    app.service('printService', function($mdDialog) {
        var LODOP;
        this.addHtml = function(html) {
            LODOP = window.getLodop();
            LODOP.SET_PRINT_MODE("POS_BASEON_PAPER", true);
            LODOP.SET_PRINT_COPIES(1);
            LODOP.SET_PRINT_STYLEA(0, "Horient", 0);
            LODOP.PRINT_INIT("");
            LODOP.ADD_PRINT_HTM(0, 0, "100%", "BottomMargin:10px", html);
        };
        this.preview = function(html) {
            this.addHtml(html)
            LODOP.PREVIEW();
        };
        this.selectAsDefaultPrinter = function() {
            LODOP = window.getLodop();
            LODOP.SELECT_PRINTER();
        };
        this.print = function(html) {
            this.addHtml(html);
            LODOP.PRINT();
        };
        this.printHtmls = function(htmls) {
            var me = this;
            if (_.isArray(htmls)) {
                angular.forEach(htmls, function(item) {
                    me.print(item);
                });
            } else {
                me.print(htmls);
            }
        };
        this.printByDefaultPrinter = function(htmls, needConfirm) {
            needConfirm = typeof needConfirm == 'undefined' ? true : needConfirm;
            var me = this;
            if (needConfirm) {
                $mdDialog.show($mdDialog.confirm({
                    title: '提示',
                    textContent: '请点击确认按钮打印！',
                    ok: '确认',
                    cancel: '取消'
                })).then(function() {
                    me.printHtmls(htmls);
                });
            } else {
                me.printHtmls(htmls);
            }

        };
    });
};
