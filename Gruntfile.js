module.exports = function(grunt) {

	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		meta: {
			banner: '/*!\n' + 
				'* <%= pkg.name %> - v<%= pkg.version %>\n' + 
				'* \n' + 
				'* Copyright (c) <%= new Date().getFullYear() %> <%= pkg.author.name %>\n' +  
				'* Licensed <%= pkg.licenses[0].type %>\n' +
				'*/\n' 
		},

		jshint: {
			src: ['src/canjs-hello-world.js'],
			options: {
				jshintrc: true
			}
		},

		jsbeautifier: {
			files: ['src/canjs-hello-world.js'],
			options: {
				config: ".jsbeautifyrc"
			}
		},

		concat: {
			options: {
				banner: '<%= meta.banner %>',
				stripBanners: true
			},
			dist: {
				src: ['src/<%= pkg.name %>.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {				
				banner: '<%= meta.banner %>'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 8000,
					base: '.'
				}
			}
		},

		qunit: {
			all: {
				options: {
					urls: ['http://localhost:8000/test/qunit.html']
				}
			}
		},

		clean: {
			build: ['dist/']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('quality', [ 'jsbeautifier', 'jshint']);
	grunt.registerTask('test', ['connect', 'qunit']);
	grunt.registerTask('build', ['clean', 'jshint', 'test', 'concat', 'uglify']);

	grunt.registerTask('default', ['build']);

};