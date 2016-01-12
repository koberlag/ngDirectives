angular.module('editable', []).
	directive('makeEditable', function($sce) {
		return {
			restrict: 'A',
			templateUrl: 'editable.html',
			scope: true,
			transclude: true
		};
	});