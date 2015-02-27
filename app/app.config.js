(function(){
	'use strict';
	angular.module("app").config(function ($httpProvider ,$locationProvider ,$routeProvider) {                 
         $httpProvider.defaults.cache = true;
         $locationProvider.html5Mode(true);  

          $routeProvider.
		      when('/', {
		        templateUrl: 'app/views/home/home.html',
		        controller: 'homeController'
		      }).
		        when('/users', {
		        templateUrl: 'app/views/users/users.html',
		        controller: 'usersController'
		      }).
		       when('/users/roles', {
		        templateUrl: 'app/views/roles/roles.html',
		        controller: 'rolesController'
		      }).
		      when('/users/roles/:role', {
		         templateUrl: 'app/views/roles/roles.html',
		        controller: 'rolesController'
		      }).		     
		      otherwise({
		        redirectTo: '/'
		      });
    });
})();