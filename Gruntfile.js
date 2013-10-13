'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-mocha-cov');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    mochacov: {
      options: {
        reporter: '<%= reporter  %>'
      },
      all: ['<%= tests_to_launch  %>']
    },

    jshint: {
      files: ['GruntFile.js', 'specs/*.js', 'classes/*.js'],
      options: {
        jshintrc: './.jshintrc',
      }
    },

    watch: {
      scripts: {
        files: ['specs/*.js', 'scripts/*.js'],
        tasks: ['test'],
        options: {
          spawn: false,
        },
      },
    },

  });

  grunt.config.set('tests_to_launch', './specs/*.js');
  grunt.config.set('reporter', 'Nyan');

  grunt.registerTask('default', 'test');
  grunt.registerTask('test', ['jshint', 'mochacov']);
  grunt.registerTask('integration', function() {
    grunt.config.set('tests_to_launch', './specs/night_spec.js');
    grunt.config.set('reporter', 'spec');
    grunt.task.run(['mochacov']);
  });

};
