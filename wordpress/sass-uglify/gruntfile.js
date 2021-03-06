module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { //task
            options: { // Target options
                outputStyle: 'compressed',
                sourceMap: true
            },
            dist: { // Target
                files: { // Dictionary of files
                    '../../../Source/www/httpdocs/wp-content/themes/<theme>/assets/css/main.min.css': 'sass/main.scss' //target: source
                }
            }
        },
        uglify: {
          dist: {
            options: {
              sourceMap: true
            },
            files: {
              '../../../Source/www/httpdocs/wp-content/themes/<theme>/assets/js/main.min.js':
                [
                  'js/functions.js',
                  'js/ready.js'
                ]
            }
          }
        },
        jshint: {
            // define the files to lint
            files: ['js/**/*.js'],
            options: {
//                ignores: [''],
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        watch: { //watch task
            js: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'uglify']
            },
            livereload: {
	            // We use this target to watch files that will trigger the livereload
                files: [
                    // Anytime css is edited or compiled by sass, trigger the livereload on those files
                    '../../../Source/www/httpdocs/wp-content/themes/<theme>/assets/css/*.css',
                    // Or a js file
                    '../../../Source/www/httpdocs/wp-content/themes/<theme>/assets/js/*.js'
                ],
                options: { livereload: true }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['jshint', 'uglify', 'sass']); //alias
};
