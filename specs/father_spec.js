/*jshint expr: true*/
'use strict';
require('should');

describe('Father', function(){

  var father = require('../classes/father.js');
  var baby = require('../classes/baby.js');

  describe('when hears "Bua"', function(){
    it('should do "Alimentar"', function(){
      baby.awake('Bua');
      father.hear(baby).should.be.exactly('Alimentar');
    });
  });

  describe('when hears "Mua"', function(){
    it('should do "Pañal"', function(){
      baby.awake('Mua');
      father.hear(baby).should.be.exactly('Pañal');
    });
  });

  describe('when hears "Gua"', function(){
    it('should do "Chupón"', function(){
      baby.awake('Gua');
      father.hear(baby).should.be.exactly('Chupón');
    });
  });

  describe('when hears "Bua-Bua-Bua-Bua"', function(){
    it('should do "Alimentar - Alimentar - Alimentar - Alimentar"', function(){
      baby.awake('Bua-Bua-Bua-Bua');
      var expected_action = 'Alimentar - Alimentar - Alimentar - Alimentar';

      father.hear(baby).should.be.exactly(expected_action);
    });
  });

  describe('when hears "Bua-Mua-Bua-Bua"', function(){
    it('should do "Alimentar - Pañal Alimentar - Alimentar"', function(){
      baby.awake('Bua-Mua-Bua-Bua');
      var expected_action = 'Alimentar - Pañal Alimentar - Alimentar';

      father.hear(baby).should.be.exactly(expected_action);
    });
  });

  describe('when hears "Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua"', function(){
    it('should do "Pañal Alimentar - Alimentar Chupón - Pañal Alimentar - Chupón - Alimentar"', function(){
      baby.awake('Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua');
      var expected_action = 'Pañal Alimentar - Alimentar Chupón - Pañal Alimentar - Chupón - Alimentar';

      father.hear(baby).should.be.exactly(expected_action);
    });
  });

});
