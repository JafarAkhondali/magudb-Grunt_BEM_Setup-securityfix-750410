(function(){
	angular.module("app.services.user", []).provider(function(){
		this.$get = (function($http, $log){
			var exports = this;

			exports.getUsersInRole = function(role){
				return $http.get("/serviceMocks/userService.json", function(data){
					$log.debug(data);
					return data;
				})();

			return exports;
		})();

		return this;
	});
})();