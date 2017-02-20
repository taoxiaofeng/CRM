module.exports = function(app) {
    app.service('staffService', function($q, xhrService) {
        /*列表对象查询
         *queryParam
         *companyId
         *offset
         *limit
         */
        this.queryStaffList = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/staff/find_list',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }

            });
            return promise;
        };
        /*零花钱对象详情查看
         *staffId
         */
        this.queryStaffDetail = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Get({
                path: 'company/staff/' + params.staffId,
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }

            });
            return promise;
        };
        /*零花钱对象添加
         *mobile
         *alias
         *remark
         */
        this.addStaff = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Post({
                path: 'company/staff',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };

        /*零花钱对象修改
         *id
         *mobile
         *alias
         *remark
         *avatar  
         */
        this.editStaff = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Put({
                path: 'company/staff',
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
        /*零花钱对象删除
         *staffId
         */
        this.deleteStaff = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            xhrService.Delete({
                path: 'company/staff/' + params.staffId,
                params: params,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
        /*零花钱对象 - excel校验
         *
         */
        this.examinExcel = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var formData = new FormData();
            formData.append('file', params.file);
            formData.append('companyId', params.companyId);
            xhrService.Upload({
                path: 'company/staff/excel_check',
                params: formData,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };
        /*零花钱对象导入
         *filePath
         */
        this.importStaffExcel = function(params) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var formData = new FormData();
            formData.append('file', params.file);
            formData.append('companyId', params.companyId);

            xhrService.Upload({
                path: 'company/staff/excel_import',
                params: formData,
                success: function(res) {
                    deferred.resolve(res);
                },
                error: function(res) {
                    deferred.reject(res);
                }
            });
            return promise;
        };

    });
};
