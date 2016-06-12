module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          dist: {
            options: {
              sourceMap: true
            },
            files: {
              '../assets/js/main.min.js': 
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['jshint', 'uglify']); //alias
};
