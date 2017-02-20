module.exports = function(app) {
  app.directive('blockAdd', function() {
    return {
      restrict: 'AE',
      templateUrl: 'directive/blockAdd.html',
      transclude: true,
      scope: {  'addBlock': '&' },
      controller: function($scope, $element, $attrs, companyService) {
       $scope.blockSelectChoices=[{ desc: '商品名称', code: '0' }, {desc: '商品id',code: '1'}];
       $scope.type=0;
       $scope.productName="";
       $scope.add=function(){
          $scope.addBlock({
          productId:$scope.productId,
          reason:$scope.reason,
          callback:$scope.init
        })
       };
       $scope.init=function(){
           $scope.productName="";
           $scope.productId="";
           $scope.reason="";
       };
       $scope.$watch('productId',function(v){
       })
      $scope.typeSelect=function(item){
        $scope.type=item.code;
        console.log( $scope.type)
      }
      }
    };
  });
};