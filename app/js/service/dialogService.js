/*
 *dialogService
 */
module.exports = function(app) {
  app.service('dialogService', ['$mdDialog', '$q', function($mdDialog, $q) {
    this.alert = function() {};
    this.confirm = function() {};
  }]);
};