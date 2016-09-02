# minicss

Minify css files with minicss

>npm install grunt-contrib-cssmin --save-dev

<pre><code>

grunt.initConfig({
    cssmin: {
        target: {
            files: {
                'minicss.css': ['foo.css', 'bar.css']
            }
        }
    }


});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-cssmin');

// Default task(s).
grunt.registerTask('default', ['cssmin']);




</code></pre>
