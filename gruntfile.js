'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt); // Show elapsed time after tasks run to visualize performance
    require('load-grunt-tasks')(grunt); // Load all Grunt tasks that are listed in package.json automagically

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllServe: { command: 'jekyll serve' },
            jekyllBuild: { command: 'jekyll build' }

        },

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['_scss/**/*.{scss,sass}'],
                tasks: ['sass'],
                options: { livereload: true } //using the browserextension
            }
        },

        // sass (libsass) config
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: '_scss',
                cssDir: '_site/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_scss/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_site/css',
                    ext: '.css'
                }]
            }
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'sass',
                'watch',
                'shell:jekyllServe'
            ],
            options: { logConcurrentOutput: true }
        },
    });

    // Register the grunt serve task
    grunt.registerTask('serve', [ 'concurrent:serve' ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'sass'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');
};
