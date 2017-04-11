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
                    '../assets/css/main.min.css': 'assets/sass/main.scss' //target: source
                }
            }
        },
        uglify: {
          dist: {
            options: {
              sourceMap: true
            },
            files: {
              '../assets/js/main.min.js':
                [
                  'assets/js/functions.js',
                  'assets/js/ready.js'
                ]
            }
          }
        },
        jshint: {
            // define the files to lint
            files: ['assets/js/**/*.js'],
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
            css: {
                files: ['assets/sass/**/*.scss'], //watch pattern
                tasks: ['sass'] //task
            },
            js: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'uglify']
            },
            livereload: {
	            // We use this target to watch files that will trigger the livereload
                files: [
                    // Anytime css is edited or compiled by sass, trigger the livereload on those files
                    '../assets/css/*.css',
                    // Or a js file
                    '../assets/js/*.js'
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
