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
                    'scripts/main.modules.annotated.js',
                    'scripts/main.basemodules.annotated.js',
                    'scripts/main.enviroment.annotated.js',
                    'scripts/main.code.annotated.js',
                    'app/app.templates.js',
                    'scripts/main.config.annotated.js']
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
                    'scripts/main.modules.annotated.js',
                    'scripts/main.basemodules.annotated.js',
                    'scripts/main.enviroment.annotated.js',
                    'scripts/main.code.annotated.js',
                    'app/app.templates.js',
                    'scripts/main.config.annotated.js']
            }         
            
		}
	};
};