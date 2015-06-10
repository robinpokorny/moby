

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
      }
  });

  grunt.registerTask('serve', [
    'shell:jekyllServe'
  ]);

  grunt.registerTask('build', [
    'shell:jekyllBuild',
    'sass'
  ]);

  grunt.registerTask('default', 'build');
};