module.exports = function(app) {
    app.filter('selection', function(CONSTANTS) {
        return function(field, hasDefault, codeKey, valueKey, defaultObj, isCodeNum) {
            if (Object.prototype.toString.call(field) == '[object Object]') {
                var codeKey = field.codeKey;
                var hasDefault = field.hasDefault;
                var valueKey = field.valueKey;
                var defaultObj = field.defaultObj;
                var isCodeNum = field.isCodeNuml;
                var clsOrName = field.clsOrName;
            } else {
                var clsOrName = field;
            }
            return CONSTANTS.getList(clsOrName, hasDefault, codeKey, valueKey, defaultObj, isCodeNum);
        }
    });
}
