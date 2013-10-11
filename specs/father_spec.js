/*jshint expr: true*/
'use strict';
require('should');

describe('Father', function(){

  var father = require('../classes/father.js');
  var baby = require('../classes/baby.js');

  describe('when hears anything', function(){
    it('should return actions', function(){
      baby.awake('Bua-Mua');
      father.hear(baby).should.be.exactly('Alimentar - Pañal');
    });
  });

  describe('when doing "Chupón" action', function(){
    it('should sleep 10m less', function(){
      var actions = 'Chupón';
      father.do(actions).should.be.exactly('7 horas 50 minutos');
    });
  });

  describe('when doing "Pañal" action', function(){
    it('should sleep 30m less', function(){
      var actions = 'Pañal';
      father.do(actions).should.be.exactly('7 horas 30 minutos');
    });
  });

  describe('when doing "Alimentar" action', function(){
    it('should sleep 60m less', function(){
      var actions = 'Alimentar';
      father.do(actions).should.be.exactly('7 horas 0 minutos');
    });
  });

  //describe('when doing "Alimentar - Alimentar" action', function(){
    //it('should sleep 120m less', function(){
      //var actions = 'Alimentar - Alimentar';
      //father.do(actions).should.be.exactly('6 horas 0 minutos');
    //});
  //});

});
