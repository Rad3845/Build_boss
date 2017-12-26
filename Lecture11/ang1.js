(function() {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
	$scope.name = "Yaakov";
	$scope.stateOfBeing = "3";

	$scope.sayMessage = function () {
		return "Yaakov likes to eat healthy snacks";

	};

	$scope.feedYaakov = function () {
		$scope.stateOfBeing = "2";

	};

}

})();