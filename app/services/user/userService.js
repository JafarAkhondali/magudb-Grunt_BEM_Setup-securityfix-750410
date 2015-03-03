(function(){
	'use strict';
	angular.module("app.services.user", []).provider("userService", function(){

		return {
			$get: function($http, $log){
				var exports = this;

				exports.getUsersInRole = function(role){
					return $http.get("/serviceMocks/userService.json").then(function(response){						
						return response.data.collection;
					});
				};
				exports.getUser = function(id){
					return $http.get("/serviceMocks/user-"+id+".json").then(function(response){						
						return response.data.collection.items[0];
					});
				} ;

				return exports;
			}
		}
	});
})();