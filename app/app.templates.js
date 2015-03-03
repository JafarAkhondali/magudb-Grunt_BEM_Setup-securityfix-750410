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
    "\t\t <span ng-if=\"!isArray(details.value)\">\r" +
    "\n" +
    "\t\t{{details.value}}\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t<span ng-if=\"isArray(details.value)\">\r" +
    "\n" +
    "\t\t<p ng-repeat=\"str in details.value\">\r" +
    "\n" +
    "\t\t\t<a href=\"/{{details.name}}/{{str}}\">{{str}}</a>\r" +
    "\n" +
    "\t\t</p>\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t\t</td>\r" +
    "\n" +
    "\t\t<td>\r" +
    "\n" +
    "\t\t\t<a ng-repeat=\"link in item.links\" href=\"{{link.href}}\">\r" +
    "\n" +
    "\t\t\t\t{{link.prompt}}\r" +
    "\n" +
    "\t\t\t</a>\r" +
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


  $templateCache.put('app/views/user/user.html',
    "<div class=\"user\">\r" +
    "\n" +
    "\t<form class=\"form-horizontal\">\r" +
    "\n" +
    "\t<fieldset>\r" +
    "\n" +
    "\t\t\t<!-- Form Name -->\r" +
    "\n" +
    "\t\t\t<legend>Edit {{user.data[0].value}}</legend>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t<!-- Text input-->\r" +
    "\n" +
    "\t\t\t<div class=\"form-group\" ng-repeat=\"detail in user.data\">\r" +
    "\n" +
    "\t\t\t\t<label class=\"col-md-4 control-label\" for=\"textinput\">{{detail.prompt}}</label>  \r" +
    "\n" +
    "\t\t\t\t<div class=\"col-md-4\">\r" +
    "\n" +
    "\t\t\t\t\t<input ng-if=\"!isArray(detail.value)\" id=\"{{detail.name}}\" name=\"{{detail.name}}\" type=\"text\" placeholder=\"{{detail.prompt}}\" value=\"{{detail.value}}\" class=\"form-control input-md\" required=\"\">\r" +
    "\n" +
    "\t\t\t\t\t<select ng-if=\"isArray(detail.value)\" id=\"{{detail.name}}\" name=\"{{detail.name}}\" class=\"form-control\">\r" +
    "\n" +
    "\t\t\t\t\t\t<option ng-repeat=\"str in detail.value\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t{{str}}\r" +
    "\n" +
    "\t\t\t\t\t\t</option>\r" +
    "\n" +
    "\t\t\t\t\t</select>\r" +
    "\n" +
    "\t\t\t\t\t<span class=\"help-block\">help</span>  \r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"form-group\" >\r" +
    "\n" +
    "\t\t\t\t<button ng-repeat=\"link in user.links\" type=\"button\" class=\"btn  btn-lg\" ng-class=\"{ 'btn-primary' : (link.method === 'POST'), 'btn-danger' : link.method !== 'POST' }\" ng-click=\"userCtrl.handle(link, user.data)\">{{link.prompt}}</button>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</fieldset>\r" +
    "\n" +
    "\t</form>\r" +
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
