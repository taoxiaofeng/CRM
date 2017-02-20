/*
 *总控
 *appContrller
 */
module.exports = function(app) {
    app.controller('app', function($scope) {
        //开始路由回调
        //成功路由回调
        $scope.$on('$routeChangeSuccess', function(e,r) {
            var route=r.$$route;
            var path=route.name;
            $scope.$emit('sidebar.active',path);
        });

        $scope.tabs = [{
                title: 'Dynamic Title 1',
                content: ''
            },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2' }
        ];
        $scope.selectEvent = function(item) {

        };
        //添加tab 
        $scope.$on('AddTab', function(e, obj) {
            var id = obj.id;
            if (!_.findWhere(id, { id: id })) {
                $scope.tabs.push({
                    title: obj.name,
                    id: id,
                    content: '<div ui-view="' + id + '"></div>'
                });
            }
        });

    });
};
