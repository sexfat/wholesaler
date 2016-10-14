module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //jade
        jade: {
            compile: {
                options: {
                    pretty: true,
                    expand: true,
                },
                files: {
                    "jade_template.html": ["assets/app/main.jade"]
                },

            }
        },


        //watch
        watch: {
            css: {
                files: ['assets/sass/*.scss', 'assets/sass/**/*.scss'],
                tasks: ['sass']
            },
            styles: {
                files: ['assets/css/main.css'],
                tasks: ['cssmin']
            },
            html: {
                files: ['*.html']
            },
            js: {
                files: ['assets/js/*.js'],
                tasks: ['browserify']
            },
            jade: {
              files: ['assets/app/*.jade' , 'assets/app/**/*.jade' ],
              tasks: ['jade']
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
                    cwd: 'assets/sass/views',
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
                    'assets/css/main.min.css': ['assets/css/main.css']
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
                // src: 'assets/js/all.js',
                // dest: 'assets/js/output_01.js'
                // expand: true,
                // cwd: 'assets/js/',
                src: 'assets/js/main.js',
                dest: 'assets/js/output.js'
            }
        },



        //打包用
        replace: {
            dist: {
                options: {
                    patterns: [{
                        match: 'main.css',
                        replacement: 'main.min.css'
                    }],

                    //接受使用字串
                    usePrefix: false
                },
                files: [{
                    expand: true,
                    flatten: true,
                    overwrite: true,
                    src: ['index.html'],
                    dest: 'online/'
                }]
            }
        },
        // replace: {
        //     dist: {
        //         options: {
        //             patterns: [{
        //                 match: 'timestamp',
        //                 replacement: '<%= new Date().getTime() %>'
        //             }]
        //         },
        //         files: [{
        //             src: ['index.html'],
        //             dest: 'online/index.html'
        //         }]
        //     }
        // },
        compress: {
            main: {
                options: {
                    archive: function() {
                        return 'online/' + 'project' + (new Date()).getDate() + (new Date()).getHours() + (new Date()).getMinutes() + '.zip'
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'assets/css/',
                    src: ['minicss.css'],
                    dest: 'assets/css/'
                }, {
                    expand: true,
                    cwd: 'assets/font-awesome/',
                    src: ['css/*', 'fonts/*'],
                    dest: 'assets/font-awesome/'
                }, {
                    expand: true,
                    cwd: 'assets/simple-line-icons/',
                    src: ['fonts/*', '*'],
                    dest: 'assets/simple-line-icons/'
                }, {
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['*'],
                    dest: 'assets/images/'
                }, {
                    expand: true,
                    cwd: 'assets/css/',
                    src: ['main.css' , 'main.min.css'],
                    dest: 'assets/css/'
                }, {
                    expand: true,
                    cwd: './',
                    src: ['login.html'],
                    dest: '/'
                }, {
                    expand: true,
                    cwd: 'assets/js/',
                    src: ['output.js' ,'jquery.slimscroll.min.js','app.min.js','layout.min.js' ],
                    dest: 'assets/js/'
                }]
            }
        }

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
    grunt.loadNpmTasks('grunt-contrib-jade');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-replace');


    // define default task
    // grunt.registerTask('default', ['browserSync','browserify', 'watch', 'jade', 'jshint']);
    grunt.registerTask('default', ['browserSync', 'browserify', 'watch','cssmin']);
    // grunt.registerTask('mini', ['cssmin']);
    grunt.registerTask('build', ['cssmin', 'compress']);
    // grunt.registerTask('copy', ['copy']);


};
