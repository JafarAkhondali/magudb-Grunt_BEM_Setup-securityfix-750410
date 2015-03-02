(function(){
	'use strict';
	angular.module("app.services.user", []).provider("userService", function(){

		return {
			$get: function($http, $log){
				var exports = this;

				exports.getUsersInRole = function(role){
					return $http.get("/serviceMocks/userService.json").then(function(response){
						$log.debug(response.data.collection);
						return response.data.collection;
					});
				};

				return exports;
			}
		}
	});
})();