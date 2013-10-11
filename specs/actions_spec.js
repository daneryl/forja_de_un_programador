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

});
