module.exports = function(app) {
    app.directive('requiredInput', function() {
        return function(scope, element, attrs) {
            element.on("keyup",function(ev){
                var val = ev.target.value;
                var pEle = element.parent();
                if(val.length==0&&!pEle.hasClass('has-error')){
                	pEle.addClass('has-error');
                }else{
                	pEle.removeClass('has-error');
                }
                
            });
            

        }
    });
}
