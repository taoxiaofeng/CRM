/*
 *companyService
 */
module.exports = function(app) {
  app.service('companyService', ['xhrService', '$q', function(xhrService, $q) {
    var me = this;
    this.companyList = [];
    this.CompanyModel = [{
      name: 'companyId'
    }, {
      name: 'staffNum'
    }, {
      name: 'companyName'
    }, {
      name: 'shelfType'
    }, {
      name: 'des'
    }, {
      name: 'address'
    }, {
      name: 'limitFee'
    }, {
      name: 'contacts',
      model: 'ContactModel'
    }, {
      name: 'lng'
    }, {
      name: 'lat'
    }, {
      name: 'status'
    }, {
      name: 'followPeople'
    }, {
      name: 'sendWeek'
    }, {
      name: 'superAdmin'
    }, {
      name: 'pickingType'
    }, {
      name: 'pickingRemark'
    }, {
      name: 'customerType'
    }];
    this.ContactModel = [{
      name: 'id'
    }, {
      name: 'mobile'
    }, {
      name: 'companyId'
    }, {
      name: 'tel'
    }, {
      name: 'qq'
    }, {
      name: 'wechat'
    }, {
      name: 'contactName'
    }];
    this.formate = function(modelname, data) {
      var result;
      var me = this;
      me.recursion = arguments.callee;
      var u = function(item) {
        var obj = {};
        var temp = _.omit(item, function(value, key) {
          var mdname;
          var r = true;
          var index = _.pluck(me[modelname], 'name').indexOf(
            key);
          if (index !== -1) {
            mdname = me[modelname][index].model;
            mdname ? obj[key] = me.recursion(mdname, value) :
              false;
            r = false;
          }
          return r;
        });
        return angular.extend(temp, obj);
      };
      if (Object.prototype.toString.call(data) == '[object Array]') {
        result = [];
        angular.forEach(data, function(item) {
          result.push(u(item));
        });
      } else {
        result = u(data);
      }
      console.log(result);
      return result;
    };
    this.indexCompany = function(data, offset) {
      angular.forEach(data, function(item, index) {
        item.index = index + offset;
      });
      return data;
    };
    this.parseCompanyList = function(data, offset) {
      angular.forEach(data, function(item, index) {
        item.index = index + offset;
        item.lastContact = item.contacts[item.contacts.length -
          1];
      });
      return data;
    };
    //接口
    /*获取公司列表
    offset(条目偏移)
    limit(当前页显示数据个数)
    isDeleted(0:未删除 1:已删除 不传返回所有)
    companyName(无值可不传)
    address(无值可不传)
    */
    this.queryCompanyList = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      params.isDeleted = 0;
      xhrService.Post({
        path: 'company/_query',
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
    /*获取公司信息
     *@Params
     *companyId
     */
    this.queryCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/' + params.companyId,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*创建公司
     *@Params
     *companyName //公司名称
     *staffNum //企业员工数
     *shelfType //企业类型,1:企业总包；2:员工自费
     *address //企业地址
     *des //企业描述
     *limitFee//企业折扣上限
     *contacts {companyId,contactName,mobile,qq,wechat,tel}//企业联系人列表
     */
    this.createCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company',
        params: me.formate('CompanyModel', params),
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*修改公司
     *@Params
     *companyId
     *companyName
     *staffNum
     *shelfType
     *address
     *des
     */
    this.editCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;

      xhrService.Put({
        path: 'company',
        params: me.formate('CompanyModel', params),
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*获取企业溢价状态
     *companyId
     */
    this.queryCompanyPremiumState = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'premium/company/' + params.companyId,
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
    /*设置企业溢价
     *companyId
     */
    this.setCompanyPremium = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'premium',
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

    /*添加企业联系人
     *@Params
     *companyId
     *contactName
     *mobile
     *qq
     *wechat
     *tel
     */
    this.addCompanyContact = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/contact',
        params: me.formate('ContactModel', params),
        floatToString: true,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*修改企业联系人
     *@Params
     *id
     *companyId
     *contactName
     *mobile
     *qq
     *wechat
     *tel
     */
    this.editCompanyContact = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'company/contact',
        params: me.formate('ContactModel', params),
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    /*删除企业联系人
     *@Params
     *contactId
     */
    this.deleteCompanyContact = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'company/contact' + '?contactId=' + params.contactId,
        params: {},
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };

    /*新建企业信息
     *@Params
     *companyId
     *info
     */
    this.createCompanyInformation = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/survey',
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
    /*获取企业信息列表
     *@Params
     *companyId
     */
    this.queryCompanyInformation = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/survey',
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
    /*重置企业密码
     *@Params
     *companyId
     */
    this.resetCompanyPassword = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'company/manager',
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
    /*企业状态变更日志
     *companyId
     */
    this.queryCompanyStateChangeLog = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/status/log/find_list',
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
    /*获取公司情报概览
     *@Params
     *companyId
     */
    this.queryCompanyPreferSummary = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/survey/summary',
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
    /*创建公司情报概览
     *@Params
     *companyId
     *info
     */
    this.createCompanyPreferSummary = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/survey/summary',
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
    /*创建/修改企业坏账抵扣
     *companyId
     *change
     */
    this.setCompanyDeduction = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'deduction/company/' + params.companyId,
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
    /*查询企业坏账抵扣信息
     *companyId
     */
    this.queryCompanyDeduction = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'deduction/company/' + params.companyId,
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
    /*查询企业坏账余额流水
     *companyId
     *offset
     *limit
     */
    this.queryCompanyDeductionFlow = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'deduction/company/' + params.companyId + '/logs',
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
    // 黑名单列表
    this.getBlockCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/blacklist/' + params.companyId,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    this.getZeroProduct = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Get({
        path: 'company/zerosell/' + params.companyId,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };
    // 添加黑名单
    this.addBlockCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Post({
        path: 'company/blacklist/',
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
    // 修改黑名单
    this.modifyBlockCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Put({
        path: 'company/blacklist/',
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
    //删除黑名单
    this.deleteBlockCompany = function(params) {
      var deferred = $q.defer();
      var promise = deferred.promise;
      xhrService.Delete({
        path: 'company/blacklist/' + params.id,
        success: function(res) {
          deferred.resolve(res);
        },
        error: function(res) {
          deferred.reject(res);
        }
      });
      return promise;
    };

  }]);
};