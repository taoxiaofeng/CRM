module.exports = function(app) {
  app.service('modalService', ['$uibModal', function($uibModal) {
    this.initModal = function(opts) {
      var config = angular.extend({
        templateUrl: opts.templateUrl || 'modelcontent', //指向上面创建的视图
        size: opts.size || '',
        backdrop: 'static',
        controller: function($scope) {
          //确定  取消
          $scope.confirm = function() {
            var me = this;
            if (opts.ok) { //关闭
              opts.ok.call(this, $scope).then(function() {
                me.$close() || me.modal.close();
              });
            } else if ($scope.ok) {
              $scope.ok.apply(this, [$scope]);
            } else { //不关闭

            }
          };
          $scope.cancel = function() {
            this.$close() || this.modal.close();
          };
        }
      }, opts);
      return $uibModal.open(config);
    };
  }]);
};