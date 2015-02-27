(function(){
	"use strict";
	angular.module("app").run(function (version, $log) {
        $log.debug("Running grunt.bem - version " + version);     
     
    });
})();