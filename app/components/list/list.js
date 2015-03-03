angular.module("app.component.list", ['app.services']).directive("list", function(userService){
	
	var controller = function($scope, $log){
		var exports = {};
		 $scope.isArray = function  (val) {			
			return angular.isArray(val);
		}
		return exports;
	};

	var link = function($scope){
		//$scope.isArray = angular.isArray
		userService.getUsersInRole('adminstrator').then(function (response) {
			$scope.template = response.template.data;
			$scope.items = response.items;
			
		});
	};

	return {
		templateUrl:"app/components/list/views/list.html",
		controller: controller,
		link: link,
		controllerAs :"list",
		restrict: 'EA',

	}
});