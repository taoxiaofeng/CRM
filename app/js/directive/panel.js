module.exports = function(app) {
    app.directive('panel', function($mdPanel, $templateCache, $compile) {
        return {
            restrict: 'A',
            replace: false,
            scope: {
                title: '@',
                instance: '=instance'
            },
            link: function($scope, $element) {
                var panel;
                var container = $('#container');
                console.log('controller');

                this.closeDialog = function(mdPanelRef) {
                    panel && panel.close();
                };
                this.showDialog = function(scope) {
                    var el = $compile($element.html())(scope);
                    var tmp = $templateCache.get('directive/dialog.html');
                    var position = $mdPanel.newPanelPosition().absolute().center();
                    var config = {
                        attachTo: container,
                        panelClass: 'dialog',
                        position: position,
                        template: tmp,
                        hasBackdrop: true,
                        clickOutsideToClose: true,
                        scope: $scope,
                        escapeToClose: true,
                        focusOnOpen: true,
                        zIndex: 2055,
                        content: el,
                        origin: $element,
                        onDomAdded: function(doms) {
                            var dialog = doms[1];
                            dialog._panelEl.find('md-content').append(dialog._config.content);
                        },
                        onDomRemoved: function() {
                            container.css({
                                overflow: 'scroll'
                            });
                        }
                    };
                    container.css({
                        overflow: 'hidden'
                    });
                    scope.$applyAsync(function() {
                        $mdPanel.open(config).then(function(result) {
                            panel = result;
                        });
                    });
                };
                $scope.instance = this;
                $scope.closeDialog=this.closeDialog;
            }
        };
    });
};
