angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/list/views/list.html',
    "<table class=\"user-role\">\r" +
    "\n" +
    "\t<tr>\r" +
    "\n" +
    "\t\t<th ng-repeat=\"head in template\" >{{head.prompt}}</th>\r" +
    "\n" +
    "\t\t<th></th>\r" +
    "\n" +
    "\t</tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<tr ng-repeat=\"item in items\" >\r" +
    "\n" +
    "\t\t<td ng-repeat=\"details in item.data\">\r" +
    "\n" +
    "\t\t{{details.value}}\r" +
    "\n" +
    "\t\t</td>\r" +
    "\n" +
    "\t\t<td>\r" +
    "\n" +
    "\t\t\t<a ng-repeat=\"link in item.links\" href=\"{{link.href}}\">{{link.prompt}}</a>\r" +
    "\n" +
    "\t\t</td>\r" +
    "\n" +
    "\t</tr>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</table>"
  );


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
    "\r" +
    "\n" +
    "<list></list>\r" +
    "\n" +
    "</div>"
  );

}]);
