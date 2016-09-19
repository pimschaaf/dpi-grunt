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
                    '../assets/css/main.css': 'sass/main.scss' //target: source
                }
            }
        },
        watch: { //watch task
            css: {
                files: ['../css/**/*.scss'], //watch pattern
                tasks: ['sass'] //task
            },
            livereload: {
	            // We use this target to watch files that will trigger the livereload
                files: [
                    // Anytime css is edited or compiled by sass, trigger the livereload on those files
                    '../assets/css/*.css'
                ],
                options: { livereload: true }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass']); //alias
};
