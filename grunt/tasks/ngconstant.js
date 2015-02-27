'use strict';
module.exports = function(grunt) {
	// Load task
	grunt.loadNpmTasks("grunt-ng-constant");
	
	// Options
	return {
		options: {
			name: 'app.environment',
			dest: 'app/app.environment.js',
			constants: {
				package: grunt.file.readJSON('package.json')
			},
			values: {				
				version: "1.0.0.0"
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
				
			}
		}
	};
};