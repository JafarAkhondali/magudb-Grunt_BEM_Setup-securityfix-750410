(function(){
	"use strict";
	angular.module("app").run(function (version, productname, $log) {
        $log.debug("Running "+productname+" v" + version);     
     
    });
})();