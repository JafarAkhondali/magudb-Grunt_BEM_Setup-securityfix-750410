angular.module("app.component.list", ['app.services']).directive("list", function(userService, $log){
	
	var controller = function($scope){
		
	};

	var link = function($scope){
		userService.getUsersInRole('adminstrator').then(function (response) {
			$log.debug('LIST');
			
			$scope.template = response.template.data;
			$scope.items = response.items;
			$log.debug($scope.items);
		});
	};

	return {
		templateUrl:"app/components/list/views/list.html",
		controller: controller,
		link: link,
		controllerAs :"ctrl",
		restrict: 'EA',

	}
});