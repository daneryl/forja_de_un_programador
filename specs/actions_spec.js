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
      actions.actions.should.have.lengthOf(1);
      actions.actions[0].should.be.exactly('Alimentar');
    });
  });

  describe('when adding "Mua" cry', function(){
    it('should add corresponding "Pañal" action', function(){
      actions.add('Mua');
      actions.actions.should.have.lengthOf(1);
      actions.actions[0].should.be.exactly('Pañal');
    });
  });

  describe('when adding "Gua" cry', function(){
    it('should add corresponding "Chupón" action', function(){
      actions.add('Gua');
      actions.actions.should.have.lengthOf(1);
      actions.actions[0].should.be.exactly('Chupón');
    });
  });

  describe('when transforming actions to string', function(){
    it('should concatenate actions like "Action - Action2"', function(){
      actions.actions = ['Action', 'Action2'];
      actions.toString().should.be.exactly('Action - Action2');
    });

    describe('with "Mua-Bua" special case', function(){
      it('should concatenate like "Pañal Alimentar"', function(){
        actions.add('Bua');
        actions.add('Mua');
        actions.add('Bua');
        actions.toString().should.be.exactly('Alimentar - Pañal Alimentar');
      });
    });

    describe('with "Bua-Gua" special case', function(){
      it('should concatenate like "Alimentar Chupón"', function(){
        actions.add('Bua');
        actions.add('Gua');
        actions.add('Bua');
        actions.toString().should.be.exactly('Alimentar Chupón - Alimentar');
      });
    });

    describe('with "Gua-Bua-Mua" special case', function(){
      it('should concatenate like "Chupón Alimentar Pañal"', function(){
        actions.add('Gua');
        actions.add('Gua');
        actions.add('Bua');
        actions.add('Mua');
        actions.toString().should.be.exactly('Chupón - Chupón Alimentar Pañal');
      });
    });
  });


});
