'use strict';
module.exports = function(grunt) {
	// Load task
	grunt.loadNpmTasks("grunt-ng-annotate");
	
	// Options
	return {
		options: {
			
		},
		development: {
			options: {
				
			},
			files: {
				'scripts/main.modules.annotated.js':[  "app/**/*.module.js", "!app/app.module.js", "!app/components/components.module.js", "!app/services/services.module.js", "!app/views/views.module.js"],
				'scripts/main.basemodules.annotated.js':[  "app/components/components.module.js", "app/services/services.module.js", "app/views/views.module.js", "app/app.module.js"],
                'scripts/main.enviroment.annotated.js': ["app/app.environment.js"],
                'scripts/main.config.annotated.js': ["app/app.run.js", "app/app.config.js", "app/app.router.js"],
                'scripts/main.code.annotated.js':["app/services/**/*.js","app/components/**/*.js", "app/views/**/*.js", "!app/app.module.js", "!app/**/*.module.js"]
            }
		},
		production: {
			options: {
				
			},			
			files: {
                'scripts/main.modules.annotated.js':[ "app/app.module.js", "app/**/*.module.js"],
                'scripts/main.enviroment.annotated.js': ["app/app.environment.js"],
                'scripts/main.config.annotated.js': ["app/app.run.js", "app/app.config.js", "app/app.router.js"],
                'scripts/main.code.annotated.js':["app/components/**/*.js", "app/services/**/*.js", "app/views/**/*.js", "!app/app.module.js", "!app/**/*.module.js"]
            }
		}
	};
};