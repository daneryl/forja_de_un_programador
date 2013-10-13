/*jshint expr: true*/
'use strict';
require('should');

describe('Sleep time', function(){

  var sleep_time;

  beforeEach(function(){
    sleep_time = require('../scripts/sleep_time.js').new();
  });

  describe('when extracting minutes', function(){
    it('should return 480 minutes (8h) minus minutes extracted', function(){
      sleep_time.extract(10).minutes.should.be.exactly(470);
      sleep_time.extract(10).minutes.should.be.exactly(460);
      sleep_time.extract(15).minutes.should.be.exactly(445);
    });
  });

  describe('when converting to string', function(){
    it('should return format like "7 horas 30 minutos"', function(){
      var time = sleep_time.extract(30);
      time.toString().should.be.exactly('7 horas 30 minutos');
    });
  });
});

