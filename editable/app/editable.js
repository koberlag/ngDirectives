angular.module('editable', []).
	directive('makeEditable', function($sce) {
		return {
			restrict: 'A',
			templateUrl: 'editable.html',
			scope: true,
			transclude: true,
			replace:true, //Why isn't this replacing??????????????
			link: function(scope, element, attrs) {
				
				scope.toggleEditable = function(){
					var button = angular.element(element[0].querySelector(".btn-toggle-edit")),
					content = angular.element(element[0].querySelector(".content"));

					//Check that the contenteditable attribute exists
					if(content.attr('contenteditable') === undefined){
						content.attr("contenteditable", "true");
					}

					//toggle the attribute/classes
					if(content.attr("contenteditable") === "true" || content.attr("contenteditable") === ""){
						content.attr("contenteditable", "false");
						button.text("Edit");
						element.removeClass("editable");
					}
					else{
						content.attr("contenteditable", "true");
						button.text("Save");
						element.addClass("editable");
					}
				};
			}
		};
	});