module.exports = function(app) {
    app.directive('topSearcher', function(utilService, CONSTANTS) {
        return {
            restrict: 'E',
            templateUrl: 'directive/topSearcher.html',
            transclude: true,
            scope: {
                'search': '&',
                'showTimeSelect': '@'
            },
            controller: function($scope) {
                $scope.showTimeSelect = $scope.showTimeSelect || 'true';
                $scope.queryParams = {};
                if ($scope.showTimeSelect == 'true') {
                    $scope.queryParams.startTime = new Date(utilService.parseTimeByDateDis(new Date(), -7, 'yyyy-MM-dd') + ' 00:00:00');
                    $scope.queryParams.endTime = new Date(utilService.parseTimeByDate(new Date(), 'yyyy-MM-dd') + " 23:59:59");
                }
                $scope.isUpdateTimeChoices = CONSTANTS.getList('INVOICE_TIME_TYPE', false);
                console.log($scope.isUpdateTimeChoices)
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
            }
        };
    });
};
