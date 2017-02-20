module.exports = function(app) {
    app.service('loaddingService', [ function() {
        var el = $('#loadding');
        el.on('click',function(e){
        	e.stopPropagation();
        	e.preventDefault();
        });
        this.show = function() {
            el.removeClass('hidden');
        };
        this.hide = function() {
            el.addClass('hidden');
        };
    }]);
};
