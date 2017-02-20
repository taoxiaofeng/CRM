module.exports = function(app) {
    app.directive('msStepperStep', function() {
        return {
            restrict: 'E',
            require: ['form', '^msStepper'],
            priority: 1000,
            replace: false,
            scope: {
                step: '=?',
                stepTitle: '=?',
                optionalStep: '=?'
            },
            compile: function(tElement) {
                tElement.addClass('ms-stepper-step');
                return function postLink(scope, iElement, iAttrs, ctrls) {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];

                    // Is it an optional step?
                    scope.optionalStep = angular.isDefined(iAttrs.optionalStep);

                    // Register the step
                    MsStepperCtrl.registerStep(iElement, scope, FormCtrl);

                    // Hide the step by default
                    iElement.addClass('hide');
                };
            }
        };
    });
};
