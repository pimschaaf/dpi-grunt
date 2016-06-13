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
        watch: {
            css: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['sass']
            },
            cssdeploy: {
                files: ['../assets/css/main.min.css'],
                tasks: ['sftp-deploy:css'],
                options: { livereload: true }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sftp-deploy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass', 'sftp-deploy']);
};
