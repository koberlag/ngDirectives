var app = angular.module('ngSignup', []);

app.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'opt-in-template.html',
        replace: true
    };
});