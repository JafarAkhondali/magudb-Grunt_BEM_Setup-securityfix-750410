angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/views/home/home.html',
    "<div class=\"jumbotron home\">\r" +
    "\n" +
    "<h1>Home</h1>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/roles/roles.html',
    "<div class=\"roles\">\r" +
    "\n" +
    "<h1>Roles</h1>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/views/users/users.html',
    "<div class=\"users\">\r" +
    "\n" +
    "<h1>Users</h1>\r" +
    "\n" +
    "</div>"
  );

}]);
