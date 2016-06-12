module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { //task
            options: { // Target options
                outputStyle: 'expanded',
                sourceMap: true
            },
            dist: { // Target
                files: { // Dictionary of files
                    'css/main.css': 'sass/main.scss' //target: source
                }
            }
        },
        watch: { //watch task
            css: {
                files: ['../css/**/*.scss'], //watch pattern
                tasks: ['sass'] //task
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('build', ['sass']); //alias
};
