/**
 * Created by taoxiaofeng on 2016/11/22.
 */
!function (a, b) {
    "use strict";
    function c(c, g) {
        var h = this;
        h.$el = a(c), h.el = c, h.id = e++, h.$window = a(b), h.$document = a(document), h.$el.bind("destroyed", a.proxy(h.teardown, h)), h.$clonedHeader = null, h.$originalHeader = null, h.isSticky = !1, h.hasBeenSticky = !1, h.leftOffset = null, h.topOffset = null, h.init = function () {
            h.$el.each(function () {
                var b = a(this);
                b.css("padding", 0), h.$originalHeader = a("thead:first", this), h.$clonedHeader = h.$originalHeader.clone(), b.trigger("clonedHeader." + d, [h.$clonedHeader]), h.$clonedHeader.addClass("tableFloatingHeader"), h.$clonedHeader.css("display", "none"), h.$originalHeader.addClass("tableFloatingHeaderOriginal"), h.$originalHeader.after(h.$clonedHeader), h.$printStyle = a('<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}</style>'), a("head").append(h.$printStyle)
            }), h.setOptions(g), h.updateWidth(), h.toggleHeaders(), h.bind()
        }, h.destroy = function () {
            h.$el.unbind("destroyed", h.teardown), h.teardown()
        }, h.teardown = function () {
            h.isSticky && h.$originalHeader.css("position", "static"), a.removeData(h.el, "plugin_" + d), h.unbind(), h.$clonedHeader.remove(), h.$originalHeader.removeClass("tableFloatingHeaderOriginal"), h.$originalHeader.css("visibility", "visible"), h.$printStyle.remove(), h.el = null, h.$el = null
        }, h.bind = function () {
            h.$scrollableArea.on("scroll." + d, h.toggleHeaders), h.isWindowScrolling || (h.$window.on("scroll." + d + h.id, h.setPositionValues), h.$window.on("resize." + d + h.id, h.toggleHeaders)), h.$scrollableArea.on("resize." + d, h.toggleHeaders), h.$scrollableArea.on("resize." + d, h.updateWidth)
        }, h.unbind = function () {
            h.$scrollableArea.off("." + d, h.toggleHeaders), h.isWindowScrolling || (h.$window.off("." + d + h.id, h.setPositionValues), h.$window.off("." + d + h.id, h.toggleHeaders)), h.$scrollableArea.off("." + d, h.updateWidth)
        }, h.toggleHeaders = function () {
            h.$el && h.$el.each(function () {
                var b, c = a(this), d = h.isWindowScrolling ? isNaN(h.options.fixedOffset) ? h.options.fixedOffset.outerHeight() : h.options.fixedOffset : h.$scrollableArea.offset().top + (isNaN(h.options.fixedOffset) ? 0 : h.options.fixedOffset), e = c.offset(), f = h.$scrollableArea.scrollTop() + d, g = h.$scrollableArea.scrollLeft(), i = h.isWindowScrolling ? f > e.top : d > e.top, j = (h.isWindowScrolling ? f : 0) < e.top + c.height() - h.$clonedHeader.height() - (h.isWindowScrolling ? 0 : d);
                i && j ? (b = e.left - g + h.options.leftOffset, h.$originalHeader.css({
                    position: "fixed",
                    "margin-top": 0,
                    left: b,
                    "z-index": 3
                }), h.leftOffset = b, h.topOffset = d, h.$clonedHeader.css("display", ""), h.isSticky || (h.isSticky = !0, h.updateWidth()), h.setPositionValues()) : h.isSticky && (h.$originalHeader.css("position", "static"), h.$clonedHeader.css("display", "none"), h.isSticky = !1, h.resetWidth(a("td,th", h.$clonedHeader), a("td,th", h.$originalHeader)))
            })
        }, h.setPositionValues = function () {
            var a = h.$window.scrollTop(), b = h.$window.scrollLeft();
            !h.isSticky || 0 > a || a + h.$window.height() > h.$document.height() || 0 > b || b + h.$window.width() > h.$document.width() || h.$originalHeader.css({
                top: h.topOffset - (h.isWindowScrolling ? 0 : a),
                left: h.leftOffset - (h.isWindowScrolling ? 0 : b)
            })
        }, h.updateWidth = function () {
            if (h.isSticky) {
                h.$originalHeaderCells || (h.$originalHeaderCells = a("th,td", h.$originalHeader)), h.$clonedHeaderCells || (h.$clonedHeaderCells = a("th,td", h.$clonedHeader));
                var b = h.getWidth(h.$clonedHeaderCells);
                h.setWidth(b, h.$clonedHeaderCells, h.$originalHeaderCells), h.$originalHeader.css("width", h.$clonedHeader.width())
            }
        }, h.getWidth = function (c) {
            var d = [];
            return c.each(function (c) {
                var e, f = a(this);
                if ("border-box" === f.css("box-sizing")) e = f.outerWidth(); else {
                    var g = a("th", h.$originalHeader);
                    if ("collapse" === g.css("border-collapse"))if (b.getComputedStyle) e = parseFloat(b.getComputedStyle(this, null).width); else {
                        var i = parseFloat(f.css("padding-left")), j = parseFloat(f.css("padding-right")), k = parseFloat(f.css("border-width"));
                        e = f.outerWidth() - i - j - k
                    } else e = f.width()
                }
                d[c] = e
            }), d
        }, h.setWidth = function (a, b, c) {
            b.each(function (b) {
                var d = a[b];
                c.eq(b).css({"min-width": d, "max-width": d})
            })
        }, h.resetWidth = function (b, c) {
            b.each(function (b) {
                var d = a(this);
                c.eq(b).css({"min-width": d.css("min-width"), "max-width": d.css("max-width")})
            })
        }, h.setOptions = function (c) {
            h.options = a.extend({}, f, c), h.$scrollableArea = a(h.options.scrollableArea), h.isWindowScrolling = h.$scrollableArea[0] === b
        }, h.updateOptions = function (a) {
            h.setOptions(a), h.unbind(), h.bind(), h.updateWidth(), h.toggleHeaders()
        }, h.init()
    }

    var d = "stickyTableHeaders", e = 0, f = {fixedOffset: 0, leftOffset: 0, scrollableArea: b};
    a.fn[d] = function (b) {
        return this.each(function () {
            var e = a.data(this, "plugin_" + d);
            e ? "string" == typeof b ? e[b].apply(e) : e.updateOptions(b) : "destroy" !== b && a.data(this, "plugin_" + d, new c(this, b))
        })
    }
}($, window);