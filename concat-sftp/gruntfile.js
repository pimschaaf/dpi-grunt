module.exports = function(grunt) {

    var cfg= {
        local: require('./local.json')
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cfg: cfg,
        'sftp-deploy': {
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
        watch: {
            js: {
              files: ['<%= jshint.files %>'],
              tasks: ['jshint', 'concat']
            },
            jsdeploy: {
                files: ['../assets/js/main.concat.js'],
                tasks: ['sftp-deploy:js'],
                options: { livereload: true }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sftp-deploy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['jshint', 'concat', 'sftp-deploy']);
};
