(function(angular) {
	'use strict';

	angular.module('xpsui:controllers')
	/**
	* Controller used to handele the "Remember me" function.
	* 
	*/
	.controller('xpsui:remembermeCtrl', [ '$scope', function($scope) {
		$scope.checkboxModel = {
			value : 'YES'
		};

	}]);

}(window.angular));
