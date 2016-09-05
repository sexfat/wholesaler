module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //watch
        watch: {
            css: {
                files: ['assets/sass/*.scss', 'assets/sass/**/*.scss'],
                tasks: ['sass']
            },
            styles: {
                files: ['assets/css/mini/minicss.css'],
                tasks: ['cssmin']
            },
            html: {
                files: ['*.html']
            },
            js: {
                files: ['assets/js/*.js']
            }
        },
        //sass
        sass: {
            build: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'assets/sass/views/',
                    src: ['*.scss'],
                    dest: 'assets/css/',
                    ext: '.css'
                }]
            }
        },
        //cssmin
        cssmin: {
            target: {
                files: {
                    'assets/css/mini/minicss.css': ['assets/css/*.css']
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'assets/css/*.css',
                        '*.html',
                        'assets/css/**/*.css',
                        'assets/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './',
                        index: 'index.html'
                    }
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-jade');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-browserify');
    // grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // define default task
    // grunt.registerTask('default', ['browserSync','browserify', 'watch', 'jade', 'jshint']);
    grunt.registerTask('default', ['browserSync', 'watch', 'cssmin']);
    grunt.registerTask('mini', ['cssmin']);

};
