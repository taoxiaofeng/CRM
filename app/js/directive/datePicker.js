module.exports = function(app) {
    app.directive('datePicker', function() {
        return {
            restrict: 'E',
            templateUrl: 'directive/datePicker.html',
            transclude: true,
            scope: {
                timeStamp: '=',
                ngModel:'='
            },
            link: function($scope) {
                $scope.dt = new Date(parseInt($scope.timeStamp));
                $scope.opened = false;
                /*                $scope.dateOptions = {
                                    dateDisabled: function(data) {
                                        var date = data.date,
                                            mode = data.mode;
                                        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
                                    },
                                    formatYear: 'yyyy',
                                    maxDate: new Date(2020, 5, 22),
                                    minDate: new Date(),
                                    startingDay: 1
                                };*/
                $scope.altInputFormats = ['M!/d!/yyyy'];
                $scope.open1 = function() {
                    $scope.opened = true;
                };
                $scope.$watch('timeStamp',function(){
                    $scope.dt = new Date(parseInt($scope.timeStamp));
                });
                $scope.$watch('dt', function(value) {
                    if(value!==undefined){
                        $scope.timeStamp = value.getTime();
                    }else{
                        $scope.timeStamp='';
                    }

                });
                /*$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];*/
                /*$scope.clearData = function() {
                    $scope.dt = '';
                };*/
            }
        };
    });
};
