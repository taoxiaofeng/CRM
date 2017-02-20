module.exports = function(app) {
    app.directive('echartsLine', function() {
        return {
            restrict: 'E',
            temlate: '<div style="height:100%;width:100%;"></div>',
            scope: {
                id: '@',
                xaxisdata: '=',
                seriesdata: '='
            },
            replace: true,
            link: function($scope) {
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '销量走势图'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: $scope.xaxisdata
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'line',
                        data: $scope.seriesdata
                    }]
                };
                var myChart = echarts.init(document.getElementById($scope.id));
                myChart.setOption(option);
            }
        }
    });
};
