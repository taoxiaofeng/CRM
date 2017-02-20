module.exports = function(app) {
  app.directive('uploader', function(uploadService) {
    return {
      restrict: 'E',
      templateUrl: 'directive/uploader.html',
      transclude: false,
      replace: false,
      scope: {
        value: '=',
        ngModel: '=',
        index: '=',
        uploadTitle: '@', //上传按钮的title,默认为'上传'
        hideInput: '@', //是否隐藏输入框，默认不隐藏
        didUpload: '&', //完成上传回调事件
        sizeLimit: '@', //尺寸大小限制
        isUploadUpyun: '@' //是否需要上传又拍云，默认上传
      },
      link: function($scope, $element, $attrs) {
        $scope.filenames = '';
        $scope.files = [];
        $scope.path = $attrs.path;
        $scope.uploadTitle = $scope.uploadTitle || '上传';

        $scope.changeFile = function(dom) {
          var opts = {
            file_dom: dom,
            folder: angular.element(dom).attr('path'),
            size_limit: JSON.parse($scope.sizeLimit || '{}'),
            is_upload_upyun: $scope.isUploadUpyun || 'true'
          }
          var str_dom = angular.element(dom).next().find('input');
          uploadService.upload(opts).then(function(res) {
            $scope.value = res.path;
            $scope.filenames = res.path;
            var didUpload = $scope.didUpload || function() {};
            didUpload({
              file: res
            });
          });
        };
      }
    };
  });
};