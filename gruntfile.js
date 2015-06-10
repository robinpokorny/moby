

'use strict';

module.exports = function (grunt) {

  // Show elapsed time after tasks run to visualize performance
  require('time-grunt')(grunt);
  // Load all Grunt tasks that are listed in package.json automagically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      shell: {
        jekyllBuild: {
          command: 'jekyll build'
        },
        jekyllServe: {
          command: 'jekyll serve'
        }
      },

      watch: {
        sass: {
          files: ['_scss/**/*.{scss, sass}'],
          task: ['sass']
        }
      },

      sass: {
        options: {
          sourceMap: true,
          realtiveAssets: false,
          outputStyle: 'expanded',
          sassDir: '_scss',
          cssDir: '_site/css'
        },
        build: {
          files: [{
            expand: true,
            cwd: '_scss',
            src: ['**/*.{scss, sass}'],
            dest: '_site/css',
            ext: '.css'
          }]
        }
      },

      concurrent: {
        serve: [
          'sass',
          'watch',
          'shell:jekyllServe'
        ],
        options: {
          logConcurrentOutpu: true
        }
      }
  });

  grunt.registerTask('serve', [
    'concurrent:serve'
  ]);

  grunt.registerTask('build', [
    'shell:jekyllBuild',
    'sass'
  ]);

  grunt.registerTask('default', 'build');
};