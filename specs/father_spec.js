/*jshint expr: true*/
'use strict';
require('should');

describe('Father', function(){

  var father = require('../scripts/father.js');
  var baby = require('../scripts/baby.js');

  describe('when hears anything', function(){
    it('should return actions', function(){
      baby.awake('Bua-Mua');
      var actions = father.hear(baby);

      actions.should.have.lengthOf(2);
      actions.should.include('Alimentar');
      actions.should.include('Pañal');
    });
  });

  describe('when doing "Chupón" action', function(){
    it('should sleep 10m less', function(){
      var actions = ['Chupón'];
      father.do(actions).toString().should.be.exactly('7 horas 50 minutos');
    });
  });

  describe('when doing "Pañal" action', function(){
    it('should sleep 30m less', function(){
      var actions = ['Pañal'];
      father.do(actions).toString().should.be.exactly('7 horas 30 minutos');
    });
  });

  describe('when doing "Alimentar" action', function(){
    it('should sleep 1h less', function(){
      var actions = ['Alimentar'];
      father.do(actions).toString().should.be.exactly('7 horas 0 minutos');
    });
  });

  describe('when doing "Pañal - Chupón - Pañal - Chupón" action', function(){
    it('should sleep 1h 20m less', function(){
      var actions = ['Pañal', 'Chupón', 'Pañal', 'Chupón'];
      father.do(actions).toString().should.be.exactly('6 horas 40 minutos');
    });
  });

  describe('when doing "Pañal Alimentar" action', function(){
    it('should sleep 1h 15m less', function(){
      var actions = ['Pañal Alimentar'];
      father.do(actions).toString().should.be.exactly('6 horas 45 minutos');
    });
  });

  describe('when doing "Alimentar Chupón" action', function(){
    it('should sleep 1h 5m less', function(){
      var actions = ['Alimentar Chupón'];
      father.do(actions).toString().should.be.exactly('6 horas 55 minutos');
    });
  });

  describe('when doing "Chupón Alimentar Pañal" action', function(){
    it('should sleep 1h 5m less', function(){
      var actions = ['Chupón Alimentar Pañal'];
      father.do(actions).toString().should.be.exactly('6 horas 45 minutos');
    });
  });
});
