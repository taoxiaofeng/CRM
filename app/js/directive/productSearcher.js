module.exports = function(app) {
  app.directive('productSearcher', function() {
    return {
      restrict: 'AE',
      templateUrl: 'directive/productSearcher.html',
      transclude: true,
      replace:true,
      scope: {productId:"=",productName:"="},
      controller: function($scope, $element, $attrs, productService) {
        $scope.typeHeadConfigs = {
          debounce: {
            'default': 500,
            'blur': 250
          },
          getterSetter: true
        };
        $scope.changeValue = function(str) {
           
        };
        $scope.getTypeHeadOptions = function(value) { //搜索加载
          return productService.queryProductByKey({
            offset: 0,
            limit: 5,
            delState: 0,
            productName: value
          }).then(function(res) {
            return res.content;
          });
        };
        $scope.selectTypeHeadOptions = function(item) { //搜索选择

        $scope.productId=item.header.id;
          console.log($scope.productId)
         
        };
      }
    };
  });
};