'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-mocha-cov');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    mochacov: {
      options: {
        //reporter: 'Nyan'
        reporter: 'spec'
      },
      all: ['specs/*.js']
    },

    jshint: {
      files: ['GruntFile.js', 'specs/*.js', 'classes/*.js'],
      options: {
        jshintrc: './.jshintrc',
      }
    },
    watch: {
      scripts: {
        files: ['specs/*.js', 'classes/*.js'],
        tasks: ['test'],
        options: {
          spawn: false,
        },
      },
    },

  });

  grunt.registerTask('default', 'test');
  grunt.registerTask('test', ['jshint', 'mochacov']);

};
