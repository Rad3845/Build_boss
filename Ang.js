(function () {
	'use strict';

	angular.module('DIApp', [])
	.controller('DIController', DIController);

	 function DIController ($scope) {
	 	$scope.name = "Richard";


	 	$scope.upper = function () { 
	 		var upCase = $filter('uppercase');
	 		$scope.name = upCase($scope.name)
	 	};
	 }
	 
})();