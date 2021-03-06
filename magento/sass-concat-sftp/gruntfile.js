module.exports = function(grunt) {

    var cfg= {
        local: require('./local.json'),
        package: '',
        theme: 'default'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cfg: cfg,
        'sftp-deploy': {
            'css': {
                auth: cfg.local.sftpAuth,
                cache: 'sftpCache-css.json',
                src: '../../../Source/www/httpdocs/skin/frontend/' + cfg.package + '/' + cfg.theme + '/css', //local CSS folder
                dest: '/var/www/httpdocs/skin/frontend/' + cfg.package + '/' + cfg.theme + '/css', //remote CSS folder
                exclusions: [],
                serverSep: '/',
                concurrency: 4,
                progress: true
            },
            'js': {
                auth: cfg.local.sftpAuth,
                cache: 'sftpCache-js.json',
                src: '../../../Source/www/httpdocs/skin/frontend/' + cfg.package + '/' + cfg.theme + '/js', //local JS folder
                dest: '/var/www/httpdocs/skin/frontend/' + cfg.package + '/' + cfg.theme + '/js', //remote JS folder
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
                    '../../../Source/www/httpdocs/skin/frontend/<package>/<theme>/css/main.min.css': 'sass/main.scss' //target: source
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'js/functions.js',
                    'js/ready.js'
                ],
                dest: '../../../Source/www/httpdocs/skin/frontend/' + cfg.package + '/' + cfg.theme + '/js/main.concat.js'
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
                tasks: ['jshint', 'concat']
            },
            cssdeploy: {
                files: ['../../../Source/www/httpdocs/skin/frontend/' + cfg.package + '/' + cfg.theme + '/css/main.min.css'],
                tasks: ['sftp-deploy:css'],
                options: { livereload: true }
            },
            jsdeploy: {
                files: ['../../../Source/www/httpdocs/skin/frontend/' + cfg.package + '/' + cfg.theme + '/js/main.concat.js'],
                tasks: ['sftp-deploy:js'],
                options: { livereload: true }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sftp-deploy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass', 'jshint', 'concat', 'sftp-deploy']);
};
