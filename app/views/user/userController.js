(function(){
	angular.module("app.views").controller("userController", function ($scope, userService, $routeParams, $log) {
		var exports = {};
		userService.getUser($routeParams.user).then(function  (response) {
			$scope.user = response;
		});
		 $scope.isArray = function  (val) {			
			return angular.isArray(val);
		}
		exports.handle = function(link, user){
			$log.debug(link, user);
		};
		return exports;		
	});
})();