/*jshint expr: true*/
'use strict';
require('should');

describe('actions', function(){

  var actions;

  beforeEach(function(){
    actions = require('../scripts/actions.js').new();
  });

  describe('when adding "Bua" cry', function(){
    it('should add corresponding "Alimentar" action', function(){
      actions.add('Bua');

      actions.should.have.lengthOf(1);
      actions.should.include('Alimentar');
    });
  });

  describe('when adding "Mua" cry', function(){
    it('should add corresponding "Pañal" action', function(){
      actions.add('Mua');

      actions.should.have.lengthOf(1);
      actions.should.include('Pañal');
    });
  });

  describe('when adding "Gua" cry', function(){
    it('should add corresponding "Chupón" action', function(){
      actions.add('Gua');

      actions.should.have.lengthOf(1);
      actions.should.include('Chupón');
    });
  });

  describe('when adding "Mua-Bua" cry', function(){
    it('should add special case "Pañal Alimentar" action', function(){
      actions.add('Mua');
      actions.add('Bua');
      actions.should.have.lengthOf(1);
      actions.should.include('Pañal Alimentar');
    });
  });

  describe('when adding "Bua-Gua" cry', function(){
    it('should add special case "Alimentar Chupón" action', function(){
      actions.add('Bua');
      actions.add('Gua');

      actions.should.have.lengthOf(1);
      actions.should.include('Alimentar Chupón');
    });
  });

  describe('when adding "Bua-Gua-Bua-Mua" cry', function(){
    it('should add special case "Alimentar - Chupón Alimentar Pañal" action', function(){
      actions.add('Bua');
      actions.add('Gua');
      actions.add('Bua');
      actions.add('Mua');

      actions.should.have.lengthOf(2);
      actions.toString().should.be.exactly('Alimentar - Chupón Alimentar Pañal');
    });
  });

  describe('when adding "Gua-Bua-Mua" cry', function(){
    it('should add special case "Chupón Alimentar Pañal" action', function(){
      actions.add('Gua');
      actions.add('Bua');
      actions.add('Mua');

      actions.should.have.lengthOf(1);
      actions.should.include('Chupón Alimentar Pañal');
    });
  });

  describe('when transforming actions to string', function(){
    it('should concatenate actions like "Action - Action2"', function(){
      actions.push('Action');
      actions.push('Action2');
      actions.toString().should.be.exactly('Action - Action2');
    });
  });

  describe('when actions time()', function(){
    it('should return 60 minutes for Alimentar action', function(){
      actions.push('Alimentar');
      actions.time().should.be.exactly(60);
    });
    it('should return the total time for all actions', function(){
      actions.push('Alimentar');
      actions.push('Pañal');
      actions.push('Chupón');
      actions.push('Pañal Alimentar');
      actions.push('Alimentar Chupón');
      actions.push('Chupón Alimentar Pañal');
      actions.time().should.be.exactly(315);
    });
  });
});
