module.exports = function(app) {
    app.directive('dialog', function($mdPanel, $templateCache, $compile) {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                title: '@',
                instance: '=instance'
            },
            controller: function($scope, $element) {
                var panel;
                console.log('controller');
                this.closeDialog = function(mdPanelRef) {
                    panel && panel.close();
                };
                this.showDialog = function(scope) {
                    var el = $element.children();
                    var tmp = $templateCache.get('directive/dialog.html');
                    var position = $mdPanel.newPanelPosition().absolute().center();
                    var config = {
                        attachTo: angular.element(document.body),
                        panelClass: 'dialog',
                        position: position,
                        template: tmp,
                        hasBackdrop: true,
                        clickOutsideToClose: true,
                        scope: $scope,
                        escapeToClose: true,
                        focusOnOpen: true,
                        zIndex: 1000001,
                        content: el,
                        origin: $element,
                        onDomAdded: function(doms) {
                            var dialog = doms[1];
                            dialog._panelEl.find('md-content').append(dialog._config.content);
                        },
                        onDomRemoved: function(doms) {
                            var dialog = doms[0];
                            dialog._config.origin.append(dialog._config.content)
                        }
                    };
                    $mdPanel.open(config).then(function(result) {
                        panel = result;
                    })
                };
                $scope.instance = this;
            }
        };
    });
};
