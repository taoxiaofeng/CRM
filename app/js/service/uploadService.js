module.exports = function(app) {
  app.service('uploadService', ['xhrService', 'utilService', '$q', function(
    xhrService, utilService, $q) {
    var picFormApiSecret = window.cfg.picSecret;
    //建立一個可存取到該file的url
    this.getObjectURL = function(file) {
      var url = null;
      if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    };
    this.getGuid = function() {
      var guid = "";
      for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
          guid += "";
      }
      return guid;
    };
    this.upload = function(opts) {
      var file_dom = opts.file_dom,
        folder = opts.folder,
        str_dom = opts.str_dom,
        size_limit = opts.size_limit || {},
        is_upload_upyun = typeof opts.is_upload_upyun != 'undefined' ?
        opts.is_upload_upyun : true;
      var deferred = $q.defer();
      var promise = deferred.promise;
      var me = this;
      var file = file_dom.files[0];

      var myDate = new Date();
      var img = new Image();
      img.src = me.getObjectURL(file);
      img.onload = function() {
        if (file.size > size_limit.size && size_limit.size) {
          utilService.alertError('该图片已超过' + utilService.parseKByBytes(
              size_limit.size) +
            'k的限制');
          return;
        }
        if (img.width > size_limit.width && size_limit.width) {
          utilService.alertError('该图片宽已超过' + size_limit.width +
            '的限制');
          return;
        }
        if (img.height > size_limit.height && size_limit.height) {
          utilService.alertError('该图片高已超过' + size_limit.height +
            '的限制');
          return;
        }
        if (is_upload_upyun == 'true') { //需要上传又拍云
          var ext = '.' + file.name.split('.').pop();
          var config = {
            bucket: window.cfg.picBucket,
            expiration: parseInt((new Date().getTime() + 3600000) /
              1000),
            // 尽量不要使用直接传表单 API 的方式，以防泄露造成安全隐患
            form_api_secret: picFormApiSecret
          };
          var instance = new Sand(config);
          var path = '/' + folder + '/' + myDate.getFullYear() +
            '/' +
            myDate.getMonth() + '/' + me.getGuid() + '_' + file.size +
            '_' + img.width +
            'X' + img.height + ext;
          instance.upload(path, file_dom, function(res) {
            if (!str_dom) {
              deferred.resolve(res);
            } else {
              angular.element(str_dom).val(res.path);
            }
          });
        } else { //不需上传又拍云
          var res = {
            file_size: file.size,
            image_width: img.width,
            image_height: img.height,
            path: img.src
          }
          deferred.resolve(res);
        }

      };
      return promise;
    };
    this.uploadFile = function() {
      var deferred = $q.defer();
      var promise = deferred.promise;
      var input = angular.element('<input type="file"/>');
      input.bind('change', function(e) {
        var file = e.currentTarget.files[0];
        deferred.resolve(file);
      });
      input[0].click();
      return promise;
    };
  }]);
};