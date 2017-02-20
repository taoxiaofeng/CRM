module.exports = function(app) {
    app.filter('int', function() {
        return function(data, fields) {
    		var r=data;
    		angular.forEach(fields,function(field){
    			var fs=field.split('.');
    			var len=fs.length;
    			var lsf=fs[fs.length-1];
    			var t=data;
    			for(var i=0;i<len-1;i++){
    				t=t[fs[i]];
    			}
    			t[lsf]=parseInt(t[lsf]);
    		});
    		return r;
        }
    });
}
