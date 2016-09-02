module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

      //cssmin
        cssmin: {
            target: {
                files: {
                    'minicss.css': ['foo.css', 'bar.css']
                }
            }
        },

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Default task(s).
    grunt.registerTask('default', ['cssmin']);

};
