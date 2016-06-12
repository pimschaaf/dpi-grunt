module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/functions.js',
                    'js/ready.js'
                ],
                dest: '../assets/js/main.concat.js'
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
                tasks: ['jshint', 'concat']
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

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['jshint', 'concat']); //alias
};
