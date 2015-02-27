'use strict';
module.exports = function less(grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-contrib-less');
	
	// Options
	return {
		options: {				
			sourceMapFilename: 'content/css/main.min.css.map'
		},
		development: {
			options: {
				cleancss: false,
				sourceMap: true,
				compress: false,
				sourceMapFilename: 'content/css/main.min.css.map'
			},
			plugins: [
			new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})			
			],
			files: {
				"content/css/main.min.css": ["content/less/main.less", "app/**/*.less"]
			}
		},
		production: {
			options: {
				cleancss: true,
				sourceMap: true,
				compress: true,
				sourceMapFilename: 'content/css/main.min.css.map'
			},
			plugins: [
			new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})			
			],
			files: {
				"content/css/main.min.css": ["content/less/main.less", "app/**/*.less"]
			}
		}
	};
};