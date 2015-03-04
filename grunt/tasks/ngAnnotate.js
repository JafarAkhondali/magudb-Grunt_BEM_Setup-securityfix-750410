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
				'scripts/main.services.modules.js':["app/services/services.module.js"],
				'scripts/main.services.js':["app/services/**/*.js", "!app/services/services.module.js"],
				'scripts/main.components.modules.js':[  "app/**/*.module.js", "!app/app.module.js", "!app/components/components.module.js", "!app/services/services.module.js", "!app/views/views.module.js"],
				'scripts/main.components.js':["app/components/**/*.js", "!app/app.module.js", "!app/**/*.module.js"],								
				'scripts/main.modules.js':[  "app/components/components.module.js",  "app/views/views.module.js", "app/app.module.js"],
				'scripts/main.environment.config.js': ["scripts/main.environment.js"],
				'scripts/main.config.js': ["app/app.run.js", "app/app.config.js", "app/app.router.js"],               
				'scripts/main.views.js':["app/views/**/*.js", "!app/app.module.js", "!app/**/*.module.js"]
			}
		},
		production: {
			options: {
				
			},			
			files: {
				'scripts/main.services.modules.js':["app/services/services.module.js"],
				'scripts/main.services.js':["app/services/**/*.js"],
				'scripts/main.components.js':["app/components/**/*.js", "!app/app.module.js", "!app/**/*.module.js"], 
				'scripts/main.components.modules.js':[  "app/**/*.module.js", "!app/app.module.js", "!app/components/components.module.js", "!app/services/services.module.js", "!app/views/views.module.js"],				
				'scripts/main.modules.js':[  "app/components/components.module.js",  "app/views/views.module.js", "app/app.module.js"],
				'scripts/main.environment.config.js': ["scripts/main.environment.js"],
				'scripts/main.config.js': ["app/app.run.js", "app/app.config.js", "app/app.router.js"],               
				'scripts/main.views.js':["app/views/**/*.js", "!app/app.module.js", "!app/**/*.module.js"]
			}
		}
	}
};
