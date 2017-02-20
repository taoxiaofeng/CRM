module.exports = function(app) {
    app.directive('promotionSearcher', function(utilService, CONSTANTS) {
        return {
            restrict: 'E',
            templateUrl: 'directive/promotionSearch.html',
            transclude: true,
            scope: {
                'search': '&',
                'showTimeSelect': '@',
                'isUpdateTimeChoices': '=',
                'searchChoices': '='
            },
            controller: function($scope) {
            	console.log($scope.searchChoices)
                $scope.showTimeSelect = $scope.showTimeSelect || 'true';
                $scope.queryParams = {searchSelect:1};
                if ($scope.showTimeSelect == 'true') {
                    $scope.queryParams.startTime = new Date(utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd') + ' 00:00:00');
                    $scope.queryParams.endTime = new Date(utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd') + " 23:59:59");
                }
              //$scope.isUpdateTimeChoices=[{ desc: '下单时间', code: '0' }, { desc: '预约送货时间', code: '1' }];
                //console.log($scope.isUpdateTimeChoices)
                $scope.selectIsUpadate = function(choice) {
                    $scope.queryParams.isUpateTime = parseInt(choice.code);
                };
                $scope.searchSelect = function(choice) {
                    $scope.queryParams.searchSelect = parseInt(choice.code);
                    $scope.queryParams.companyName = "";
                    console.log($scope.queryParams.searchSelect)
                };
                $scope.keyPressSearch = function(e, queryParams) {
                    if (e.keyCode == 13) { //回车键
                        $scope.search({
                            queryParams: queryParams
                        });
                    }
                };
                $scope.selectWelfareCompany = function(company) {
                         $scope.queryParams.companyName= company.companyId;

                 };


            }
        };
    });
};
