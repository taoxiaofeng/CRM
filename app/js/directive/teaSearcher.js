module.exports = function(app) {
    app.directive('teaSearcher', function(utilService, CONSTANTS) {
        return {
            restrict: 'E',
            templateUrl: 'directive/teaSearcher.html',
            transclude: true,
            scope: {
                'search': '&',
                'showTimeSelect': '@',
                'isUpdateTimeChoices': '='
            },
            controller: function($scope) {
                $scope.showTimeSelect = $scope.showTimeSelect || 'true';
                $scope.queryParams = {};
                if ($scope.showTimeSelect == 'true') {
                    $scope.queryParams.startTime = new Date(utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd') + ' 00:00:00');
                    $scope.queryParams.endTime = new Date(utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd') + " 23:59:59");
                }
              //$scope.isUpdateTimeChoices=[{ desc: '下单时间', code: '0' }, { desc: '预约送货时间', code: '1' }];
                //console.log($scope.isUpdateTimeChoices)
                $scope.selectIsUpadate = function(choice) {
                    $scope.queryParams.isUpateTime = parseInt(choice.code);
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
