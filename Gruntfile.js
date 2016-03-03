module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            // wiredep: {
            //     target: {
            //         src: 'index.html'
            //     },
            //     options: {
            //         exclude: ['app/components/requirejs/require.js']
            //     }
            // },

            // jshint: {
            //     options: {
            //         "asi": false,
            //         "bitwise": true,
            //         "boss": false,
            //         "curly": true,
            //         "debug": false,
            //         "devel": false,
            //         "eqeqeq": true,
            //         "evil": false,
            //         "expr": true,
            //         "forin": false,
            //         "immed": true,
            //         "latedef": false,
            //         "laxbreak": false,
            //         "multistr": true,
            //         "newcap": true,
            //         "noarg": true,
            //         "node": true,
            //         "browser": true,
            //         "noempty": false,
            //         "nonew": true,
            //         "onevar": false,
            //         "plusplus": false,
            //         "regexp": false,
            //         "strict": false,
            //         "sub": false,
            //         "trailing": true,
            //         "undef": true,
            //         globals: {
            //             jQuery: true,
            //             Backbone: true,
            //             _: true,
            //             $: true,
            //             require: true,
            //             define: true
            //         }
            //     },
            //     js: ['app/js/**/*.js']
            // },

            watch:{
                script: {
                    files: ['app/**/*/*.js', 'app/**/*/*.css'],
                        options: {
                        livereload: true,
                    },
                }
            }
        }
    );

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-wiredep');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

d
    // Default task(s).
    // grunt.registerTask('default', ['wiredep', 'jshint']);

};