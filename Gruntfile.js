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
                files: ['assets/js/*.js'],
                tasks: ['browserify']
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



      // browserify
      browserify: {
            build: {
              // src: 'views/js/learnjs.js',
              // dest: 'views/js/output.js',
              // expand: true,
              // cwd: 'assets/js/',
              src: 'assets/js/main.js',
              dest: 'assets/js/output.js'
            }
      },



        //打包用
        compress: {
            main: {
                options: {
                    archive: function() {
                        return 'online/' + 'project' + (new Date()).getDate() + (new Date()).getHours() + (new Date()).getMinutes() + '.zip'
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'assets/css/mini',
                    src: ['*.css'],
                    dest: 'assets/css/'
                }, {
                    expand: true,
                    cwd: 'assets/img/',
                    src: ['*'],
                    dest: 'assets/img/'
                }, {
                    expand: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: '/'
                }, {
                    expand: true,
                    cwd: 'assets/js/',
                    src: ['*.js'],
                    dest: 'assets/js/'
                }]
            }
        },
        //
        // copy: {
        //     main: {
        //         files: [
        //             // includes files within path
        //             {
        //                 expand: true,
        //                 cwd: 'assets/css/',
        //                 src: ['main.css'],
        //                 dest: 'online/css'
        //             }, {
        //                 expand: true,
        //                 cwd: 'assets/js/',
        //                 src: ['*.js'],
        //                 dest: 'online/js'
        //             }, {
        //                 expand: true,
        //                 cwd: 'assets/img/',
        //                 src: ['*'],
        //                 dest: 'online/img'
        //             }, {
        //                 expand: true,
        //                 src: ['*.html'],
        //                 dest: 'online/'
        //             },
        //             // includes files within path and its sub-directories
        //             //  {expand: true, src: ['path/**'], dest: 'dest/'},
        //
        //             // makes all src relative to cwd
        //             //  {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
        //
        //             // flattens results to a single level
        //             //  {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        //         ],
        //     },
        // },



    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-jade');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // define default task
    // grunt.registerTask('default', ['browserSync','browserify', 'watch', 'jade', 'jshint']);
    grunt.registerTask('default', ['browserSync', 'browserify', 'watch']);
    // grunt.registerTask('mini', ['cssmin']);
    // grunt.registerTask('build', ['compress']);
    // grunt.registerTask('copy', ['copy']);


};
