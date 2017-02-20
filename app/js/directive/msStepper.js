module.exports = function(app) {
    app.directive('msStepper', function() {
        return {
            restrict: 'A',
            require: ['form', 'msStepper'],
            priority: 1001,
            templateUrl: 'directive/msStepper.html',
            transclude: true,
            replace: false,
            scope: {
                model: "=ngModel"
            },
            controller: function($timeout) {
                var me = this;

                // Data
                me.mainForm = undefined;

                me.steps = [];
                me.currentStep = undefined;
                me.currentStepNumber = 1;

                // Methods
                me.registerMainForm = registerMainForm;
                me.registerStep = registerStep;
                me.setupSteps = setupSteps;
                me.resetForm = resetForm;

                me.setCurrentStep = setCurrentStep;

                me.gotoStep = gotoStep;
                me.gotoPreviousStep = gotoPreviousStep;
                me.gotoNextStep = gotoNextStep;
                me.gotoFirstStep = gotoFirstStep;
                me.gotoLastStep = gotoLastStep;

                me.isFirstStep = isFirstStep;
                me.isLastStep = isLastStep;

                me.isStepCurrent = isStepCurrent;
                me.isStepDisabled = isStepDisabled;
                me.isStepOptional = isStepOptional;
                me.isStepValid = isStepValid;
                me.isStepNumberValid = isStepNumberValid;

                me.isFormValid = isFormValid;

                //////////

                /**
                 * Register the main form
                 *
                 * @param form
                 */
                function registerMainForm(form) {
                    me.mainForm = form;
                }

                /**
                 * Register a step
                 *
                 * @param element
                 * @param scope
                 * @param form
                 */
                function registerStep(element, scope, form) {
                    var step = {
                        element: element,
                        scope: scope,
                        form: form,
                        stepNumber: scope.step || (me.steps.length + 1),
                        stepTitle: scope.stepTitle
                    };

                    // Push the step into steps array
                    me.steps.push(step);

                    // Sort steps by stepNumber
                    me.steps.sort(function(a, b) {
                        return a.stepNumber - b.stepNumber;
                    });
                }

                /**
                 * Setup steps for the first time
                 */
                function setupSteps() {
                    me.setCurrentStep(me.currentStepNumber);
                }

                /**
                 * Reset steps and the main form
                 */
                function resetForm() {
                    // Timeout is required here because we need to
                    // let form model to reset before setting the
                    // statuses
                    $timeout(function() {
                        // Reset all the steps
                        for (var x = 0; x < me.steps.length; x++) {
                            me.steps[x].form.$setPristine();
                            me.steps[x].form.$setUntouched();
                        }

                        // Reset the main form
                        me.mainForm.$setPristine();
                        me.mainForm.$setUntouched();

                        // Go to first step
                        gotoFirstStep();
                    })
                }

                /**
                 * Set current step
                 *
                 * @param stepNumber
                 */
                function setCurrentStep(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return;
                    }

                    // Update the current step number
                    me.currentStepNumber = stepNumber;

                    // Hide all steps
                    for (var i = 0; i < me.steps.length; i++) {
                        me.steps[i].element.addClass('hide');
                    }

                    // Show the current step
                    me.steps[me.currentStepNumber - 1].element.removeClass('hide');
                }

                /**
                 * Go to a step
                 *
                 * @param stepNumber
                 */
                function gotoStep(stepNumber) {
                    me.setCurrentStep(stepNumber);
                }

                /**
                 * Go to the previous step
                 */
                function gotoPreviousStep() {
                    me.setCurrentStep(me.currentStepNumber - 1);
                }

                /**
                 * Go to the next step
                 */
                function gotoNextStep() {
                    me.setCurrentStep(me.currentStepNumber + 1);
                }

                /**
                 * Go to the first step
                 */
                function gotoFirstStep() {
                    me.setCurrentStep(1);
                }

                /**
                 * Go to the last step
                 */
                function gotoLastStep() {
                    me.setCurrentStep(me.steps.length);
                }

                /**
                 * Check if the current step is the first step
                 *
                 * @returns {boolean}
                 */
                function isFirstStep() {
                    return me.currentStepNumber === 1;
                }

                /**
                 * Check if the current step is the last step
                 *
                 * @returns {boolean}
                 */
                function isLastStep() {
                    return me.currentStepNumber === me.steps.length;
                }

                /**
                 * Check if the given step is the current one
                 *
                 * @param stepNumber
                 * @returns {null|boolean}
                 */
                function isStepCurrent(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return null;
                    }

                    return me.currentStepNumber === stepNumber;
                }

                /**
                 * Check if the given step should be disabled
                 *
                 * @param stepNumber
                 * @returns {null|boolean}
                 */
                function isStepDisabled(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return null;
                    }

                    var disabled = false;

                    for (var i = 1; i < stepNumber; i++) {
                        if (!isStepValid(i)) {
                            disabled = true;
                            break;
                        }
                    }

                    return disabled;
                }

                /**
                 * Check if the given step is optional
                 *
                 * @param stepNumber
                 * @returns {null|boolean}
                 */
                function isStepOptional(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return null;
                    }

                    return me.steps[stepNumber - 1].scope.optionalStep;
                }

                /**
                 * Check if the given step is valid
                 *
                 * @param stepNumber
                 * @returns {null|boolean}
                 */
                function isStepValid(stepNumber) {
                    // If the stepNumber is not a valid step number, bail...
                    if (!isStepNumberValid(stepNumber)) {
                        return null;
                    }

                    // If the step is optional, always return true
                    if (isStepOptional(stepNumber)) {
                        return true;
                    }

                    return me.steps[stepNumber - 1].form.$valid;
                }

                /**
                 * Check if the given step number is a valid step number
                 *
                 * @param stepNumber
                 * @returns {boolean}
                 */
                function isStepNumberValid(stepNumber) {
                    return !(stepNumber < 1 || stepNumber > me.steps.length);
                }

                /**
                 * Check if the entire form is valid
                 *
                 * @returns {boolean}
                 */
                function isFormValid() {
                    return me.mainForm.$valid;
                }
            },
            compile: function(tElement) {
                tElement.addClass('ms-stepper');
                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];
                    MsStepperCtrl.registerMainForm(FormCtrl);
                    MsStepperCtrl.setupSteps();
                };

            }
        };
    });
};
