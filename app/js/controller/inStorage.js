module.exports = function(app) {
	app.controller('inStorage', function($scope, $compile, $templateCache, CONSTANTS, modalService, NgTableParams, inStorageService, utilService, companyService, productService, accountService,orderService) {
		$scope.utilService = utilService;
		$scope.CONSTANTS = CONSTANTS;
		$scope.ticketType = CONSTANTS.IN_STORAGE_ORDER_TYPE;
		$scope.profitLevel = CONSTANTS.PROFIT_LEVEL;
		$scope.queryParams = {};
		$scope.offset = 0;
		$scope.limit = 25;
		$scope.queryParams.startTime = new Date(utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd') + ' 00:00:00');
		$scope.queryParams.endTime = new Date(utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd') + " 23:59:59");
		var initView = function() {
			var excelTemplate1 = $compile($templateCache.get('inStorage/deliveryInStorageTemplate.html'))($scope);
			angular.element(document.getElementById('exportExcelWrap')).append(excelTemplate1);
			var excelTemplate2 = $compile($templateCache.get('inStorage/refundInStorageTemplate.html'))($scope);
			angular.element(document.getElementById('exportExcelWrap')).append(excelTemplate2);
		};
		initView();
		//查询
		$scope.searchInStorage = function(params) {
			var startTime = params.startTime.getTime(),
				endTime = params.endTime.getTime();
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};
		$scope.getParams = function() {
			var params = {
				// pageNo: $scope.pageNo,
				offset: $scope.offset,
				limit: $scope.limit,
				startTime: $scope.queryParams.startTime.getTime(),
				endTime: $scope.queryParams.endTime.getTime(),
				companyName: $scope.queryParams.companyName,
				orderTypes: $scope.queryParams.orderType,
				creatorId: $scope.queryParams.creatorId,
				orderStates: $scope.queryParams.orderStates,
				updateStatus: $scope.queryParams.updateStatus,
				companyId: $scope.queryParams.companyId,
				confirmId: $scope.queryParams.confirmId,
				modified: $scope.queryParams.modified
			};

			angular.forEach(params, function(v, k) {
				if (v == '-1') {
					delete params[k];
				}
			});
			if (!params.companyName) {
				delete params['companyId'];
			}
			return params;
		};
		$scope.typeHeadConfigs = {
			//不知道什么意思
			debounce: {
				'default': 500,
				'blur': 250
			},
			getterSetter: true
		};
		//搜索加载
		$scope.getTypeHeadOptions = function(value) {
			$scope.queryParams.companyId = '';
			return companyService.queryCompanyList({
				pageNo: 0,
				delState: 0,
				companyName: value
			}).then(function(res) {
				return res.content;
			});
		};
		//搜索选择
		$scope.selectTypeHeadOptions = function(item, model, label, event) {
			$scope.queryParams.companyId = item.companyId;
			$scope.tableParams.settings({
				dataset: []
			});
		};

		$scope.tableParams = new NgTableParams({
			count: $scope.limit
		}, {
			counts: [],
			paginationMaxBlocks: 25,
			paginationMinBlocks: 2,
			getData: function(params) {
				$scope.offset = (params.page() - 1) * $scope.limit;
				var params1 = $scope.getParams();
				return inStorageService.getInStorageList(params1).then(function(res) {
					params.total(res.totalElements);
					$scope.inStorageData = res.content;
					return accountService.indexAccount($scope.inStorageData, $scope.offset + 1);
				});
			}
		});
		//单据类型
		$scope.ticketData = [{
			markId: '-1',
			name: '全部单据类型'
		}, {
			markId: '1',
			name: '送货修改确认单'
		}, {
			markId: '2',
			name: '退货确认单'
		}];
		$scope.curTicketData = $scope.ticketData[0];
		$scope.localLang = {
			selectAll: "全选",
			selectNone: "全不选",
			reset: "重置",
			search: "请输入搜索内容...",
			nothingSelected: "12312"
		};
		$scope.orderTypeSelect = function(data) {
			$scope.offset = 0;
			$scope.limit = 25;
			$scope.queryParams.orderType = data.markId;
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};

		//单据操作人
		$scope.opeaterData = [{
			managerId: '-1',
			name: '全部单据操作人'
		}];
		$scope.curOpeaterData = $scope.opeaterData[0];
		$scope.opeaterDataFun = function() {
			inStorageService.getAllManager().then(function(res) {
				$scope.opeaterData = _.union($scope.opeaterData, res.content);
				$scope.stockManagerData = angular.copy($scope.opeaterData);
				$scope.stockManagerData[0].name = '全部入库确认人';
			});
		}();

		$scope.managerSelect = function(data) {
			$scope.queryParams.creatorId = data.managerId;
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};
		//状态
		$scope.orderStateData = [{
			markId: '-1',
			name: '全部状态'
		}, {
			markId: '0',
			name: '未入库'
		}, {
			markId: '1',
			name: '已入库'
		}];
		$scope.curOrderStateData = {
			markId: '-1',
			name: '全部状态'
		};
		$scope.orderStatusSelect = function(data) {
			$scope.queryParams.orderStates = data.markId;
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};
		//入库确认人
		$scope.stockManagerData = angular.copy($scope.opeaterData);
		$scope.stockManagerSelect = function(data) {

			$scope.queryParams.confirmId = data.managerId;
			// $scope.tableParams.reload();
			$scope.tableParams.settings({
				dataset: []
			});
		};
		$scope.stockManagerData[0].name = '全部入库确认人';
		$scope.curStockManagerData = $scope.stockManagerData[0];
		//是否修改

		$scope.modifiedData = [{
			markId: '-1',
			name: '全部修改状态'
		}, {
			markId: '0',
			name: '否'
		}, {
			markId: '1',
			name: '是'
		}];
		$scope.curModifiedData = $scope.modifiedData[0];
		$scope.modifiedSelect = function(data) {
			$scope.queryParams.modified = data.markId;
			$scope.tableParams.settings({
				dataset: []
			});
		};

		/**
		查看明细
		*/
		$scope.stockOrderInfoData = {};
		$scope.productItems = [];
		$scope.viewDetail = function(obj) {
			var orderType = obj.orderType,
				orderState = obj.orderState;
			$scope.selectedObj = [];
			inStorageService.getInStorageDetail({
				orderId: obj.orderId
			}).then(function(res) {
				$scope.stockOrderInfoData = res;
				$scope.productItems = angular.copy(res.items);
				_.each($scope.productItems, function(v, k) {
					v.positionItem = v.positions[0] && v.positions[0].name;
					if ($scope.stockOrderInfoData.orderType == 1) {
						v.oldConfirmNum = parseInt(v.refItemNum) - parseInt(v.refConfirmNum);
					}
				});
				$scope.productItems = _.sortBy($scope.productItems, 'positionItem');

				if (orderType == 2) {
					//退货确认单详情Modal
					$scope.inStorageInitModal('modal-refund-confirm-ticket');
				} else if (orderType == 1) {

					$scope.inStorageInitModal('modal-delivery-modify-confirm-ticket');
				}
			});
		};
		$scope.getPositions = function(data) {
			var arr = [];
			_.each(data, function(v, k) {
				arr.push("'"+v.name);
			});
			return arr.join('<br/>');
		};

		$scope.errorTypeData = [{
			markId: 'A',
			name: '单据录错',
			selected: false
		}, {
			markId: 'B',
			name: '仓库错发',
			selected: false
		}, {
			markId: "C",
			name: "仓库漏发",
			selected: false
		}, {
			markId: "D",
			name: "仓库多发",
			selected: false
		}, {
			markId: "E",
			name: "客户不要",
			selected: false
		}, {
			markId: "F",
			name: "产品破损",
			selected: false
		}, {
			markId: "G",
			name: "产品临期",
			selected: false
		}, {
			markId: "H",
			name: "产品过期",
			selected: false
		}, {
			markId: "I",
			name: "其它",
			selected: false
		}];
		//打开库存修改框
		$scope.stockQueryParams = {};
		$scope.stockDeltaWin = function(item, index) {
			if ($scope.stockOrderInfoData.orderState == 0) {
				$scope.errorTypeSelectMarkId = '';
				_.each($scope.errorTypeData, function(v, k, obj) {
					v.selected = false;
				});
				$scope.stockQueryParams = {
					mode: item.confirmNum >= 0 ? 'add' : 'minus',
					confirmRecord: item.confirmRecord
				};
				$scope.inStorageInitModal('modal-modifystock', 'sm', 'row');
				$scope.stockDeltaWinItem = item;
			}
		};
		$scope.localLang = {
			selectAll: "全选",
			selectNone: "全不选",
			reset: "重置",
			search: "Type here to search...",
			nothingSelected: "无"
		};

		$scope.errorTypeSelectMarkId = '';
		$scope.stockDeltaWinConfirm = function(params) {
			if (params.typeOutPutData.length == 0) {
				alert('请选择原因！');
				return;
			}
			var index = _.findIndex($scope.productItems, $scope.stockDeltaWinItem);
			$scope.stockDeltaWinItem.confirmRecord = params.confirmRecord;
			$scope.stockDeltaWinItem.oldConfirmNum = $scope.stockDeltaWinItem.confirmNum;
			$scope.stockDeltaWinItem.confirmNum = params.mode == 'add' ? params.number : '-' + params.number;
			this.$close();
		};
		//选择错误类型
		$scope.errorTypeSelect = function(item) {
			$scope.errorTypeSelectMarkId = item.markId;
			if (item.markId == 'I') {
				$scope.stockQueryParams.confirmRecord = '';
			} else {
				$scope.stockQueryParams.confirmRecord = item.name;
			}

		};
		$scope.inStorageInitModal = function(templateUrl, size, parentClass) {
			parentClass = parentClass ? parentClass : 'inStorage';
			size = size ? size : 'lg';
			modalService.initModal({
				appendTo: angular.element(document.getElementsByClassName(parentClass)),
				templateUrl: templateUrl,
				scope: $scope,
				size: size
			});
		};
		/*新增商品*/
		var tmpPutSaleProductList = [],
			tmpPutSaleProductIdList = [];
		var getProductParams = function(params) {
			return _.pick(params, function(value, key) {
				// return value >= 0 && value != -1;
				return value != -1;
			});
		};
		$scope.productOffset = 0;
		$scope.productLimit = 5;
		var setNewProductsTable = function() {
			$scope.newProdcutsTable = new NgTableParams({
				count: $scope.productLimit
			}, {
				counts: [],
				paginationMaxBlocks: 13,
				paginationMinBlocks: 2,
				getData: function(params) {
					$scope.productOffset = $scope.productLimit * (params.page() - 1);
					var search = getProductParams($scope.productQueryParams);
					search.offset = $scope.productOffset;
					search.limit = $scope.productLimit;
					return productService.queryProductByKey(search).then(function(res) {
						params.total(res.totalElements);
						var data = [];
						angular.forEach(res.content, function(d, i, a) {
							d.header.category = d.category;
							d.header.positions = d.positions;
							data.push(d.header);
						});
						angular.forEach($scope.productItems, function(v, k) {

							index = _.findIndex(data, {
								id: v.id || v.productId
							});

							if (index >= 0) {
								data[index].select = true;
								data[index].isAddSelect = 'isAddSelect';
								// data.splice(index, 1);
							}
						});

						return data;
					});

				}
			});
		};

		var queryProductCategoryList = function() {
			$scope.categoryList = [{
				id: '-1',
				categoryName: '全部品类'
			}];
			$scope.curCateotyList = $scope.categoryList[0];
			productService.queryProductCategoryList().then(function(res) {
				angular.forEach(res, function(category, index) {
					$scope.categoryList.push(category);
				});
			});
		};
		/*
		 * 利润等级
		 */
		$scope.profitLevelData = [{
			profitLevel: -1,
			name: '全部利润等级'
		}, {
			profitLevel: 1,
			name: '低利润等级'
		}, {
			profitLevel: 5,
			name: '中等利润等级'
		}, {
			profitLevel: 9,
			name: '高利润等级'
		}, {
			profitLevel: 0,
			name: '未知'
		}];

		$scope.curProfitLevelData = {
			profitLevel: '-1',
			name: '全部利润等级'
		};

		//打开 新品新增商品
		$scope.addProductWin = function() {
			$scope.productQueryParams = {};
			queryProductCategoryList();
			$scope.inStorageInitModal('modalProductList', '', 'row');
		};

		//品类选择
		$scope.selectCategoryCallback = function(item) {
			if (item.id) {
				$scope.productQueryParams.categoryId = item.id;
				setNewProductsTable();
			}
		};
		//利润等级选择
		$scope.profitSelectCallback = function(item) {
			$scope.productQueryParams.profitLevel = item.profitLevel;
			setNewProductsTable();
		};
		//搜索商品
		$scope.searchProduct = function(queryParams) {
			$scope.productQueryParams.productName = queryParams.productName;
			setNewProductsTable();
		};
		$scope.keyPressSearchProduct = function(e, queryParams) {
			if (e.keyCode == 13) { //回车键
				$scope.searchProduct(queryParams);
			}
		};
		$scope.selected = [];
		$scope.selectedObj = [];
		var updateSelected = function(action, id, name) {
			if (action == 'add' && $scope.selected.indexOf(id) == -1) {
				$scope.selected.push(id);
				$scope.selectedObj.push(name);
			}
			if (action == 'remove' && $scope.selected.indexOf(id) != -1) {
				var idx = $scope.selected.indexOf(id);
				$scope.selected.splice(idx, 1);
				$scope.selectedObj.splice(idx, 1);
			}
		};

		//商品选择
		$scope.chkboxChange = function(product, $event) {

			var checkbox = $event.target;
			var action = (checkbox.checked ? 'add' : 'remove');
			updateSelected(action, product.id, product);
		};
		//新增商品 确认
		$scope.oldSelectedObj = [];
		$scope.confirmPutSale = function() {
			var pItems = $scope.productItems;
			var sObj = $scope.selectedObj;
			var vId, v1Id, elem;
			if (pItems.length > 0) {
				_.each(sObj, function(v, k, obj) {
					vId = v.id || v.productId;
					elem = _.findWhere(pItems, {
						productId: vId
					});
					if (!elem) {
						elem = angular.copy(v);
						elem.productId = elem.id;
						elem.itemId = '';
						elem.confirmNum = 0;
						elem.confirmRecord = '';

						$scope.productItems.push(elem);
					}
				});
			} else {
				$scope.productItems = angular.copy($scope.selectedObj);

			}
			$scope.selectedObj = [];
			$scope.selected = [];

			this.$close();
		};

		//新增商品 删除
		$scope.removePutSaleProduct = function(i, item) {
			var id = item.id || item.productId;
			var index = _.findWhere($scope.selectedObj, {
				id: id
			});
			$scope.productItems.splice(i, 1);
		};
		//修改明细
		$scope.stockConfirmDetail = function() {
			var orderDetail = $scope.stockOrderInfoData,
				newItems = [],
				me = this;
			angular.forEach($scope.productItems, function(v, k) {
				newItems.push({
					itemId: v.itemId || '',
					confirmNum: v.confirmNum,
					confirmRecord: v.confirmRecord,
					productId: v.id || v.productId
				});
			});
			inStorageService.updateInStorageDetail({
				orderId: orderDetail.orderId,
				orderState: 1,
				items: newItems,
			}).then(function() {
				me.$close();
				$scope.tableParams.reload();
			});
		};
		//导出Excel
		$scope.exportExcel = function(order) {
			var orderType = order.orderType;
			var containerid;
			switch (orderType) {
				case $scope.ticketType.DELIVERY_MODIFY_CONFIRM:
					containerid = 'delivery-in-storage-table';
					break;
				case $scope.ticketType.REFUND_CONFIRM:
					containerid = 'refund-in-storage-table';
					break;
			}
			var dom = angular.element('<a></a>');
			dom[0].href = $("#" + containerid).excelexportjs({
				containerid: containerid,
				datatype: 'table',
				returnUri: 'true'
			});
			dom[0].download = $scope.ticketType.DESC[orderType] + '-' + order.companyName + '-' + order.shelfName + '(' + utilService.parseTimeByLong(order.createTime, 'yyyyMMddhhmmss') + ').xls';
			dom[0].click();
		};
		//查看关联送货单
		$scope.checkDeliveryOrder = function(refId){
            orderService.queryDeliveryDetail({'orderId': refId}).then(function(res) {
                $scope.deliveryOrder = res;
                $scope.deliveryOrder.name = '送货单' + '-' + $scope.deliveryOrder.companyName + '-' + $scope.deliveryOrder.shelfName + 
                                            '(' + utilService.parseTimeByLong($scope.deliveryOrder.createTime, 'yyyyMMddhhmmss') + ')';
                $scope.deliveryOrder.putSaleProductList = [];
                $scope.deliveryOrder.supplementProductList = [];
                $scope.deliveryOrder.pullSaleProductList = [];

                angular.forEach($scope.deliveryOrder.items, function(item, i) {
                    switch (item.itemType) {
                        case 1:
                            $scope.deliveryOrder.putSaleProductList.push(item);
                            break;
                        case 2:
                            $scope.deliveryOrder.supplementProductList.push(item);
                            break;
                        case 3:
                            $scope.deliveryOrder.pullSaleProductList.push(item);
                            break;
                    }
                });
                $scope.deliveryOrderModal = modalService.initModal({
                    appendTo: angular.element(document.getElementsByClassName('inStorage')),
                    scope: $scope,
                    templateUrl: 'order/deliveryOrderTemplate.html'
                });
            });
		};
	});
};