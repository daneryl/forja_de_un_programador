/*jshint expr: true*/
'use strict';
require('should');

describe('actions', function(){

  var actions;

  beforeEach(function(){
    actions = require('../classes/actions.js').new();
  });

  describe('when adding "Bua" cry', function(){
    it('should add corresponding "Alimentar" action', function(){
      actions.add('Bua');
      actions.should.have.lengthOf(1);
      actions[0].should.be.exactly('Alimentar');
    });
  });

  describe('when adding "Mua" cry', function(){
    it('should add corresponding "Pañal" action', function(){
      actions.add('Mua');
      actions.should.have.lengthOf(1);
      actions[0].should.be.exactly('Pañal');
    });
  });

  describe('when adding "Gua" cry', function(){
    it('should add corresponding "Chupón" action', function(){
      actions.add('Gua');
      actions.should.have.lengthOf(1);
      actions[0].should.be.exactly('Chupón');
    });
  });

  describe('when adding "Mua-Bua" cry', function(){
    it('should add special case "Pañal Alimentar" action', function(){
      actions.add('Mua');
      actions.add('Bua');
      actions.should.have.lengthOf(1);
      actions[0].should.be.exactly('Pañal Alimentar');
    });
  });

  describe('when adding "Bua-Gua" cry', function(){
    it('should add special case "Alimentar Chupón" action', function(){
      actions.add('Bua');
      actions.add('Gua');
      actions.should.have.lengthOf(1);
      actions[0].should.be.exactly('Alimentar Chupón');
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
      actions[0].should.be.exactly('Chupón Alimentar Pañal');
    });
  });

  describe('when transforming actions to string', function(){
    it('should concatenate actions like "Action - Action2"', function(){
      actions.push('Action');
      actions.push('Action2');
      actions.toString().should.be.exactly('Action - Action2');
    });

    //describe('with "Bua-Gua-Bua-Mua" special case', function(){
      //it('should concatenate like "Alimentar - Chupón Alimentar Pañal"', function(){
        //actions.add('Bua');
        //actions.add('Gua');
        //actions.add('Bua');
        //actions.add('Mua');
        //actions.toString().should.be.exactly('Alimentar - Chupón Alimentar Pañal');
      //});
    //});
  });
});
