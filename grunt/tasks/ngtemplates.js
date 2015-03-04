'use strict';
module.exports = function (grunt) {
	// Load task
	grunt.loadNpmTasks('grunt-angular-templates');
	
	// Options
	return {
        options:{
            module:"app"
        },
        app:        {
            src:      'app/**/*.html',
            dest:     'scripts/main.templates.js'          
        }
        
    };
};