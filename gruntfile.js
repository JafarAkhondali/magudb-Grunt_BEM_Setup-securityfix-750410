
module.exports = function (grunt) {
	var path = require('path');
	require('time-grunt')(grunt);

	require('grunt-config-dir')(grunt, {
		configDir: path.resolve('grunt/tasks'),
		verbose: true
	}, (function (err) { grunt.log.error(err); throw err;  }));



	grunt.registerTask('default', ['less:development', "ngconstant:development", "ngAnnotate:development", "ngtemplates" ,"uglify:development"]);

	grunt.registerTask('development', ['less:development',"ngconstant:development", "ngAnnotate:development", "ngtemplates" ,"uglify:development"]);

	grunt.registerTask('production', ['less:production',"ngconstant:production", "ngAnnotate:production", "ngtemplates" ,"uglify:production"]);




};