module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 9000,
					hostname: 'localhost',
					base: '.',
					livereload: true
				}
			}
		},

		open: {
			all: {
				path: 'http://localhost:<%= connect.server.options.port %>'
			}
		},

		watch: {
			all: {
				//files: ['**/*.html', '*.*', '**/*.*'],
				files: ['*.*'],
				options: { 
					livereload: true 
				}
			}
			
		},

		jshint: {
			all: ['*.js']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');	

	grunt.registerTask('default', [
		'connect:server',
		'open:all',
		'watch:all',
		'jshint'
	]);
};

