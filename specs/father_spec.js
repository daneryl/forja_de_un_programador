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

  describe('when hears "Bua-Bua-Bua-Bua"', function(){
    it('should do "Alimentar - Alimentar - Alimentar - Alimentar"', function(){
      var crying = 'Bua-Bua-Bua-Bua';
      var expected_action = 'Alimentar - Alimentar - Alimentar - Alimentar';

      father.hear(crying).should.be.exactly(expected_action);
    });
  });

  describe('when hears "Mua-Gua-Mua-Bua"', function(){
    it('should do "Pañal - Chupón - Pañal - Alimentar"', function(){
      var crying = 'Mua-Gua-Mua-Bua';
      var expected_action = 'Pañal - Chupón - Pañal - Alimentar';

      father.hear(crying).should.be.exactly(expected_action);
    });
  });

});
