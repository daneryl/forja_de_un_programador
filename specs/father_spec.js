/*jshint expr: true*/
'use strict';
require('should');

describe('Father', function(){

  var father = require('../classes/father.js');

  describe('when hears "Bua"', function(){
    it('should do "Alimentar"', function(){
      father.hear('Bua').should.be.exactly('Alimentar');
    });
  });

  describe('when hears "Mua"', function(){
    it('should do "Pañal"', function(){
      father.hear('Mua').should.be.exactly('Pañal');
    });
  });

  describe('when hears "Gua"', function(){
    it('should do "Chupón"', function(){
      father.hear('Gua').should.be.exactly('Chupón');
    });
  });

});
