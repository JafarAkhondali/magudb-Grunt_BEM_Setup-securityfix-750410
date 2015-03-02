angular.module("app.component.list", ['app.services']).directive("list", function(userService){
	
	var controller = function(){
		
	};

	var link = function($scope){
		userService.getUsersinRole('adminstrator').then(function (data) {
			$scope.data = data;
		});
	};

	return {
		templateUrl:"/components/list/views/list.html",
		controller: controller,
		link: link,
		controllerAs :"ctrl",
		restrict: 'EA',

	}
});