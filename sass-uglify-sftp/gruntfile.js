module.exports = function(grunt) {

    var cfg= {
        local: require('./local.json')
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cfg: cfg,
        'sftp-deploy': {
            'css': {
                auth: cfg.local.sftpAuth,
                cache: 'sftpCache-css.json',
                src: '../assets/css/', //local CSS folder
                dest: '/var/www/httpdocs/css/', //remote CSS folder
                exclusions: [],
                serverSep: '/',
                concurrency: 4,
                progress: true
            },
            'js': {
                auth: cfg.local.sftpAuth,
                cache: 'sftpCache-js.json',
                src: '../assets/js/', //local JS folder
                dest: '/var/www/httpdocs/js/', //remote JS folder
                exclusions: [],
                serverSep: '/',
                concurrency: 4,
                progress: true
            }
        },
        sass: { //task
            options: { // Target options
                outputStyle: 'compressed',
                sourceMap: true
            },
            dist: { // Target
                files: { // Dictionary of files
                    '../assets/css/main.min.css': 'sass/main.scss' //target: source
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
        watch: {
            css: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['sass']
            },
            js: {
              files: ['<%= jshint.files %>'],
              tasks: ['jshint', 'uglify']
            },
            cssdeploy: {
                files: ['../assets/css/main.min.css'],
                tasks: ['sftp-deploy:css'],
                options: { livereload: true }
            },
            jsdeploy: {
                files: ['../assets/js/main.min.js'],
                tasks: ['sftp-deploy:js'],
                options: { livereload: true }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sftp-deploy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass', 'jshint', 'uglify', 'sftp-deploy']); //alias
};
