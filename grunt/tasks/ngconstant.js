'use strict';
module.exports = function(grunt) {
	// Load task
	grunt.loadNpmTasks("grunt-ng-constant");
	
	// Options
	return {
		options: {
			name: 'app.environment',
			dest: 'scripts/main.environment.js',			
			values: {				
				version: grunt.file.readJSON('package.json').version,
				productname: grunt.file.readJSON('package.json').name,
				debug:true,
			}
		},
		development: {
			options: {
				
			},
			constants: {
				'ENV': {
					key1: 123,
					key2: 'value2',
					foobar: false
				}
			},
			values: {
				debug: true,
				
			}
		},
		production: {
			options: {
				
			},			
			constants: {
				'ENV': {
					key1: 123,
					key2: 'value2',
					foobar: false
				}
			},
			values: {
				debug: false,
				version: grunt.file.readJSON('package.json').version,
				productname: grunt.file.readJSON('package.json').name
				
			}
		}
	};
};