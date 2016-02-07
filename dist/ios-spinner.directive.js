(function() {
    'use strict';
	
var app = angular.module('iosSpinner', []);

	app.directive('iosSpinner', iosSpinner);
    
    iosSpinner.$inject = [];
    
    function iosSpinner () {

		function link(scope, element, attrs) {

			element.css({
				width: (attrs.width ||  '20')+'px', 
				height: (attrs.height || '20')+'px',
				position: 'absolute',
				padding: '10px'
			})

			attrs.color = attrs.color || '#FFF'

			for (var i = 1 ; i <= 12 ; i ++) {
				element.append('<div class="bar'+i+'" style="background-color:'+attrs.color+'"></div>')	
			}

		};	

		return {
			restrict: 'E',
			scope: false,
			link: link
		};

    };
	
})();