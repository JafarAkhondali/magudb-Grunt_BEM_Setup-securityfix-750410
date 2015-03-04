'use strict';
module.exports = function (grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// Options
	return {
		options:{
			 sourceMap: true,
		},
		development: {
			 options: {               
                compress: false,
                mangle: false,
                sourceMap: true,
                beautify: true
            },
            files: {
                'scripts/main.min.js': [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'scripts/main.environment.config.js',
                    'scripts/main.services.js',
                    'scripts/main.services.modules.js',
                    'scripts/main.components.js',
                    'scripts/main.components.modules.js',
                    'scripts/main.modules.js',           
                    'scripts/main.templates.js',         
                    'scripts/main.views.js',                    
                    'scripts/main.config.js']
            }
		},
		production: {
			options: {
                compress: {
                    drop_console: true
                },
                mangle: true
            },			
            files: {
                'scripts/main.min.js': [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'scripts/main.environment.config.js',
                    'scripts/main.services.js',
                    'scripts/main.services.modules.js',
                    'scripts/main.components.js',
                    'scripts/main.components.modules.js',
                    'scripts/main.modules.js',           
                    'scripts/main.templates.js',         
                    'scripts/main.views.js',                    
                    'scripts/main.config.js']
            }         
            
		}
	};
};