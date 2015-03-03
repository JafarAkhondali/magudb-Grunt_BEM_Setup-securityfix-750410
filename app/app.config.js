(function(){
	'use strict';
	angular.module("app").config(function ( $httpProvider ,$locationProvider ,$routeProvider) {                 
         $httpProvider.defaults.cache = true;
         $locationProvider.html5Mode(true);  
        
          $routeProvider.
		      when('/', {
		        templateUrl: 'app/views/home/home.html',
		        controller: 'homeController'
		      }).when('/users', {
		        templateUrl: 'app/views/users/users.html',
		        controller: 'usersController',
		        controllerAs : "users"
		      }).when('/users/:user', {
		        templateUrl: 'app/views/user/user.html',
		        controller: 'userController',
		        controllerAs : "userCtrl"
		      }).when('/users/:user/delete', {
		        templateUrl: 'app/views/users/users.html',
		        controller: 'usersController'
		      }).when('/roles', {
		        templateUrl: 'app/views/roles/roles.html',
		        controller: 'rolesController'
		      }).when('/roles/:role', {
		         templateUrl: 'app/views/roles/roles.html',
		        controller: 'rolesController'
		      }).otherwise({
		        redirectTo: '/'
		      });
    });
})();