/**
 * Created by taoxiaofeng on 2016/11/24.
 */
module.exports = function (app) {
    app.controller('suiteCfgManage', function ($scope, NgTableParams, $uibModal,
                                               modalService, suiteService, utilService, CONSTANTS, productService,
                                               orderService) {

        $scope.ORDER_STATUS = CONSTANTS.ORDER_STATUS; //订单状态
        $scope.SUITE_TYPE = CONSTANTS.SUITE_TYPE; // 套餐类型
        $scope.ISSUE_STATUS = CONSTANTS.ISSUE_STATUS; //期号状态
        $scope.SUITE_STATUS = CONSTANTS.SUITE_STATUS; //套餐状态
        $scope.imgPrefix = window.cfg.picUrl;
        $scope.picUrl = window.cfg.picUrl;
        $scope.utilService = utilService;
        $scope.imgSizeLimit = {
            // size: 500 * 1024,
            width: 750,
            // height: 420
        };
        $scope.iss = {};
        $scope._suite = {};
        $scope.cSuite = {};

        //清空时间
        $scope.clearData = function () {
            $scope.queryIssueParams = {
                from: '',
                to: ''
            };
        };

        // 定义期号对象，组合创建期号数据
        $scope.q = {
            suites: [],
            reset: function () {
                this.suites = [];
                this.from = undefined;
                this.to = undefined;
            }
        };
        $scope.t = {};
        $scope.queryIssueParams = {
            from: '',
            to: '',
            sortType: ''
        };
        //创建期号 -->存储套餐的table
        $scope.issueTableData = [];
        $scope.suiteOfIssueTable = new NgTableParams({
            count: 10000
        }, {
            counts: [],
            dataset: $scope.issueTableData
        });
        //创建套餐 -->存储商品的table
        $scope.productTableData = [];
        $scope.productTable = new NgTableParams({
            count: 10000
        }, {
            counts: [],
            dataset: $scope.productTableData
        });

        $scope._suiteType = {};
        $scope._suiteStatus = {};

        //导出excel选择的数据
        $scope.suiteSelectedArray = [];
        $scope.suiteCheckAllCfg = {
            flag: false
        };
        $scope.suiteExportTableParams = new NgTableParams({
            count: 25
        }, {
            counts: [],
            dataset: $scope.suiteSelectedArray
        });


        // 获取期号列表: [GET] backend/issue?offset=0&limit=20&status=0&from=1480521600000&to=1481328000000
        $scope.issueCfgManageList = function (queryParams) {
            queryParams = queryParams || $scope.queryIssueParams;
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.issueTableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                paginationMaxBlocks: 20,
                paginationMinBlocks: 2,
                getData: function (params) {
                    var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit
                    };
                    p = angular.extend(p, queryParams || {});
                    if (!p.from) {
                        p = _.omit(p, 'from');
                    }
                    if (!p.to) {
                        p = _.omit(p, 'to');
                    }
                    return suiteService.getAllIssueList(angular.copy(p)).then(function (res) {
                        params.total(res.totalElements);
                        return checkInfo(utilService.indexArray(res.content, $scope.limit *
                            (params.page() - 1) + 1));
                    });
                }
            });
        };


        // 期号订单状态
        $scope.issueStatusList = CONSTANTS.getList({
            clsOrName: 'ISSUE_STATUS',
            defaultObj: {
                '': '全部'
            }
        });
        $scope.exportExcel = function (containerId, title, arrayStr) {
            if ($scope[arrayStr].length) {
                orderService.formExcel(containerId, title);
            } else {
                window.alert('请选择导出项');
            }

        };
        $scope.createIssueModal;
        $scope.resetIssueForm = function () {
            $scope.iss = {};
            $scope.suiteOfIssueTable.settings().dataset = [];
        };
        // 创建期号
        $scope.createIssue = function (iss) {
            $scope.resetIssueForm();
            $scope.createIssueModal = modalService.initModal({
                appendTo: angular.element(document.getElementById('suiteCfgManage')),
                scope: $scope,
                templateUrl: 'suite/createIssueTemplate.html'
            });

        };
        // 打印单据列表
        $scope.issueSelectedArray = [];
        $scope.issueExportTableParams = new NgTableParams({
            count: 25
        }, {
            counts: [],
            dataset: $scope.issueSelectedArray
        });

        //创建期号 --> 添加套餐
        $scope.addSuiteOfIssue = function (addIssue) {
            if (addIssue != null && addIssue != undefined &&
                addIssue != '') {

                var params = {id: addIssue.suiteId};
                suiteService.getSuite(params).then(function (res) {
                    // 802007417859604480
                    if (res == "" || res == undefined || res == null) {
                        alert('套餐不存在或者套餐ID有误，请更换套餐ID。');
                        return
                    }
                    res.active = true;
                    res.suite.active = true;
                    res.suite.suiteId = res.suite.id;
                    //数据源 $data  dataset
                    $scope.suiteOfIssueTable.settings().dataset.splice(0, 0, res);
                    // $scope.suiteOfIssueTable.settings().dataset.push(res);
                    $scope.suiteOfIssueTable.reload();
                    addIssue.suiteId = '';
                    // 数据源 q.suites
                    /*suiteId
                     *active: boolean
                     */
                });
            } else {
                alert('请输入套餐ID!');
            }
        };

        // 创建期号 --> 变更已添加的套餐状态

        $scope.changeSuiteOfIssueStatus = function (iss) {
            iss.active = !iss.active;
            if ($scope.iss.issue) {
                suiteService.updateIssue($scope.iss.issue).then(function () {
                });
            }
        };

        // 创建期号 --> 删除已添加的套餐 iss
        $scope.deleteSuiteOfIssue = function (index) {
            this.suiteOfIssueTable.settings().dataset.splice(index, 1);
            this.suiteOfIssueTable.reload();
        };

        // 期号配置--> 编辑 --> 删除已添加的套餐 iss
        $scope.deleteEditorSuiteOfIssue = function (iss, index) {
            var delSuiteId = iss.suiteId;
            $scope.iss.issue.suites = _.reject($scope.iss.issue.suites, function (item) {
                return item.suiteId == delSuiteId;
            });
            suiteService.updateIssue($scope.iss.issue).then(function () {
                $scope.issueCfgManageList();
                $scope.suiteOfIssueTable.settings().dataset = $scope.iss.suite.suites;
            });
            this.suiteOfIssueTable.settings().dataset.splice(index, 1);
            this.suiteOfIssueTable.reload();
        };
        $scope.issueStatus = function (item) {
            $scope.issueCfgManageList({
                status: item.code
            });
        };
        var checkInfo = function (data) {
            angular.forEach(data, function (item) {
                var t = _.findWhere($scope.issueSelectedArray, {
                    id: item.issue.id
                });
                if (t) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            });
            return data;
        };
        $scope.issueCheckAllCfg = {
            flag: false
        };

        $scope.updateIssueExportTable = function () {
            $scope.issueExportTableParams.settings().dataset = $scope.issueSelectedArray;
            $scope.issueExportTableParams.reload();
        };
        // 勾选
        $scope.updateSelection = function (e, item, selectedArrayStr, checkAllCfg,
                                           callback) {
            var isChecked;
            if (_.isObject(e)) {
                isChecked = e.currentTarget.checked;
            } else {
                isChecked = e;
            }
            item.checked = isChecked;
            if (isChecked) {
                $scope[selectedArrayStr].push(item);
            } else {
                checkAllCfg.flag = false;
                $scope[selectedArrayStr] = _.without($scope[selectedArrayStr], item);
            }
            callback && callback.call();
        };
        $scope.selectAllOrder = function (e, data, selectedArrayStr, flag, callback) {
            var st = e.currentTarget.checked;
            angular.forEach(data, function (item) {
                if (item.checked !== st) {
                    $scope.updateSelection(e.currentTarget.checked, item,
                        selectedArrayStr,
                        flag, callback);
                }
            });
        };
        //编辑期号
        $scope.editIssue = function (iss) {
            $scope.resetIssueForm();
            $scope.iss = iss;
            suiteService.getIssue({
                id: iss.issue.id
            }).then(function (res) {
                $scope.iss.issue = res;
                $scope.modal = modalService.initModal({
                    appendTo: angular.element(document.getElementById('suiteCfgManage')),
                    scope: $scope,
                    templateUrl: 'suite/createIssueTemplate.html'
                });

            });
        };
        // 创建期号 --> 保存
        $scope.saveIssue = function (iss, active) {
            var suites = [];
            angular.forEach($scope.suiteOfIssueTable.settings().dataset, function (suite) {
                suites.push({
                    suiteId: suite.suite.id,
                    active: suite.suite.active
                });
            });
            suiteService.createIssue({
                startTime: $scope.q.startTime,
                endTime: $scope.q.endTime + 86399000,
                suites: suites,
                publishImmediately: active
            }).then(function (res) {
                if (res.suites.length < 1) {
                    alert('不可以创建空的期号，请添加套餐。');
                    return
                }
                $scope.createIssueModal.close();
                $scope.issueCfgManageList();
                $scope.q.reset();
            });
        };

        $scope.issueCfgManageList();

        //期号配置 --> 排序
        $scope.sortByIssue = function (item) {
            $scope.queryIssueParams.sortType = item.sortCode;
            $scope.issueCfgManageList();
        };

        /*************************************套餐*****************************************/

        $scope.suiteQueryParams = {
            sortType: '',
            type: '',
            status: '',
            // id: ''
        };
        $scope.disableEdit = false; //默认不允许操作
        /**
         * 获取套餐列表(SuiteWithStatistics[]): [GET] /backend/suite?offset=0&limit=20&type=0&status=0&id={id}
         * [Filter Params: type(NONE,0,1), status(NONE,0,1), id(NONE,{id})]
         */
        $scope.suiteCfgManageList = function (suiteQueryParams) {
            $scope.offset = 0;
            $scope.limit = 20;
            $scope.suiteOfIssueTableParams = new NgTableParams({
                count: $scope.limit
            }, {
                counts: [],
                getData: function (params) {
                    var p = {
                        offset: $scope.limit * (params.page() - 1),
                        limit: $scope.limit,
                        sortType: $scope.suiteQueryParams.sortType,
                        type: $scope._suiteType.code,
                        status: $scope._suiteStatus.code,
                        id: $scope.suiteQueryParams.suiteId
                    };
                    return suiteService.getAllSuiteList(angular.copy(p)).then(function (res) {
                        params.total(res.totalElements);
                        return checkSuiteInfo(utilService.indexArray(res.content, $scope
                                .limit *
                            (params.page() - 1) + 1));
                    });
                }
            })
        };
        $scope.suiteCfgManageList();

        $scope.updateSuiteExportTable = function () {
            $scope.suiteExportTableParams.settings().dataset = $scope.suiteSelectedArray;
            $scope.suiteExportTableParams.reload();
        };
        var checkSuiteInfo = function (data) {
            angular.forEach(data, function (item) {
                var t = _.findWhere($scope.suiteSelectedArray, {
                    id: item.suiteId
                });
                if (t) {
                    item.checked = true;
                } else {
                    item.checked = false;
                }
            });
            return data;
        };
        // 创建套餐
        $scope._createSuite = function (_suite) {
            $scope.images.imgDetails=[];
            $scope.disableEdit = false;
            $scope.productTable.settings().dataset = [];
            if (_suite) { //复制
                //拿到转换后的 images.imgDetails
                $scope.images.imgDetails = suiteService._getImageDetails(_suite.suite.images);
                $scope.cSuite = {
                    banner: _suite.suite.banner,
                    type: _suite.suite.type,
                    title: _suite.suite.title,
                    des: _suite.suite.des,
                    showProducts: !_suite.suite.showProducts
                };
                if (_suite.suite.type == "0") {
                    $scope.cSuite.features = true;
                }
                if (_suite.suite.type == "1") {
                    $scope.cSuite.standard = true;
                }
                angular.forEach(_suite.suite.productIds, function (id) {
                    $scope.addByProductId({
                        productId: id
                    });
                });
            } else { //新增
                $scope.cSuite = {};
            }
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementById('suiteCfgManage')),
                scope: $scope,
                templateUrl: 'suite/createSuiteTemplate.html'
            });
        };
        //添加图片
        $scope.images = {
            imgDetails: [],
            desImgDetails: []
        };
        var getImgs = function (type) {
            var imgs = type == 1 ? $scope.images.imgDetails : $scope.images
                .desImgDetails;
            return imgs;
        };
        //上传完图片
        $scope.didUploadImg = function (file, type) {
            var imgs = getImgs(type);
            file.index = imgs.length ? _.max(imgs, function (img) {
                return img.index;
            }).index + 1 : 1;
            imgs.push(file);
        };
        //轮播图排序
        $scope.sortImgs = function (type) {
            var imgs = getImgs(type);
            imgs = _.sortBy(imgs, function (img) {
                return img.index;
            });
            if (type == 1) {
                $scope.images.imgDetails = imgs;
            } else {
                $scope.images.desImgDetails = imgs;
            }
        };
        //预览图片
        $scope.imgPreview = function(img) {
            $scope.previewImg = img;
            modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName(
                    'suiteCfgManage')),
                templateUrl: 'imgPreviewer',
                scope: $scope,
                size: 'lg'
            });
        };
        //删除图片
        $scope.deleteImg = function(i, type) {
            var imgs = getImgs(type);
            imgs.splice(i, 1);
        };
        //验证保存商品有效性
        var checkSaveProductImg = function (images) {
            var errorMsg = '';
            if (images.length == 0) { //未上传商品轮播图
                // errorMsg = '请上传商品轮播图';
                alert('请添加图片');
                return
            }
            if (errorMsg.length) {
                utilService.alertError(errorMsg);
                return false;
            }
            return true;
        };
        //创建套餐 --> 添加 SkuCode
        $scope.addBySkuCode = function (addProduct) {
            if ($scope.productTable.settings().dataset.length >= 15) {
                alert('商品数量过多,请酌情添加。(可添加商品数量最多不能大于15个)');
                return;
            }
            //查找数组下面某个属性的值
            // var t = _.find(productData, function (item) {
            //     return item.header.id == addProduct.productId;
            // });
            /*if (t) {
             alert('该SKU ID已存在!');
             return;
             }*/
            if (addProduct == null || addProduct == undefined && addProduct == '') {
                alert('商品编码 不能为空！！！');
                return;
            }
            var params = {skuCode: addProduct.skuCode};
            productService.queryProductByKey(params).then(function (res) {
                // 数据源 $data  dataset
                if (res.totalElements != 1) {
                    alert('请输入正确的商品编码');
                    return;
                }
                $scope.productTable.settings().dataset.splice(0, 0, res.content[0]);
                // $scope.productTable.settings().dataset.push(res.content[0]);
                $scope.productTable.reload();
            });
            //添加成功后清空input
            addProduct.skuCode = "";
        };
        $scope.addByProductId = function (id) {
            var params = {id: id.productId};
            productService.getProductById(params).then(function (res) {
                // 数据源 $data  dataset
                $scope.productTable.settings().dataset.push(res);
                $scope.productTable.reload();
            });
        };
        //创建套餐 --> 删除商品
        $scope._deleteProduct = function (index) {
            //根据元素位置 删除当前行
            this.productTable.settings().dataset.splice(index, 1);
            //根据ID 删除商品
            /*this.productTable.settings().dataset = _.reject(productData, function (item) {
             return item.header.id == id;
             });*/
            this.productTable.reload();
        };
        //发布套餐
        $scope._publishSuite = function (_suite) {
            var params = {id: _suite.suite.id};
            suiteService.publishSuite(params).then(function (res) {
                $scope.suiteCfgManageList();
            })
        };
        // 套餐类型
        $scope.suiteTypeList = CONSTANTS.getList({
            clsOrName: 'SUITE_TYPE',
            defaultObj: {
                '': '全部类型'
            }
        });
        $scope.suiteType = function (item) {
            $scope._suiteType = item;
            $scope.suiteCfgManageList();
        };
        // 套餐状态
        $scope.suiteStatusList = CONSTANTS.getList({
            clsOrName: 'SUITE_STATUS',
            defaultObj: {
                '': '全部状态'
            }
        });
        $scope.suiteStatus = function (item) {
            $scope._suiteStatus = item;
            $scope.suiteCfgManageList();
        };
        //创建套餐 --> 保存
        $scope.saveSuite = function (cSuite) {
            /*if (!checkSaveProductImg($scope.images.imgDetails)) {
                return;
            }*/
            var images =  _.pluck($scope.images.imgDetails, 'path');
            console.log(images);
            var me = this;
            var productIds = [];
            var productData = $scope.productTable.settings().dataset;
            angular.forEach(productData, function (item) {
                productIds.push(item.header.id);
            });
            var params = {
                banner: cSuite.banner,
                // type:cSuite.type,
                title: cSuite.title,
                des: cSuite.des,
                productIds: productIds,
                images:images,
            };
            if (cSuite.showProducts == undefined || cSuite.showProducts == null || cSuite.showProducts == '') {
                params.showProducts = true
            } else {
                params.showProducts = !cSuite.showProducts
            }
            if (cSuite.features) {
                params.type = '0';
            }
            if (cSuite.standard) {
                params.type = '1';
            }
            if (cSuite.features && cSuite.standard) {
                alert('套餐类型选择有误(单选)。');
            }
            if (cSuite.title.length > 10) {
                alert('主标题字符数不能大于10个字符。');
                return;
            }
            if ($scope.productTable.settings().dataset.length < 1) {
                alert('请添加商品！！！');
            } else {
                suiteService.createSuite(params).then(function (res) {
                    $scope.suiteCfgManageList();
                    alert('添加成功！！！');
                    me.$close();
                });
            }
        };
        //删除套餐
        $scope._deleteSuite = function (id) {
            $scope.id = id;
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementsByClassName(
                    'suiteCfgManage')),
                scope: $scope,
                templateUrl: 'deleteSuiteModel'
            });
        };
        $scope._deleteSuiteOk = function () {
            var me = this;
            suiteService.deleteSuite({id: $scope.id}).then(function (res) {
                $scope.suiteCfgManageList();
                me.$close();
            });
        };
        //查看详情
        $scope.suiteDetails = function (_suite) {
            // $scope.images.imgDetails=[];
            //拿到转换后的 images.imgDetails
            $scope.images.imgDetails = suiteService._getImageDetails(_suite.suite.images);

            $scope.productTable.settings().dataset = [];
            $scope.disableEdit = true;
            $scope.cSuite = {
                banner: _suite.suite.banner,
                type: _suite.suite.type,
                title: _suite.suite.title,
                des: _suite.suite.des,
                // images: _suite.suite.images,
                showProducts: !_suite.suite.showProducts,
            };
            if (_suite.suite.type == "0") {
                $scope.cSuite.features = true;
            }
            if (_suite.suite.type == "1") {
                $scope.cSuite.standard = true;
            }
            angular.forEach(_suite.suite.productIds, function (id) {
                $scope.addByProductId({
                    productId: id
                });
            });
            $scope.modal = modalService.initModal({
                appendTo: angular.element(document.getElementById('suiteCfgManage')),
                scope: $scope,
                templateUrl: 'suite/createSuiteTemplate.html'
            });

        };
        //排序
        $scope._sortSuite = function (item) {
            $scope.suiteQueryParams.sortType = item.sortCode;
            $scope.suiteCfgManageList();
            /*$scope.suiteCfgManageList(
             $scope.sortType = item.sortCode //通过参数传给服务端
             );*/
        };
    })
};
