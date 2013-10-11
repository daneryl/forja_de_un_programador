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

  describe('when hears "Mua-Gua-Mua-Bua"', function(){
    it('should do "Pañal - Chupón - Pañal - Alimentar"', function(){
      baby.awake('Mua-Gua-Mua-Bua');
      var expected_action = 'Pañal - Chupón - Pañal - Alimentar';

      father.hear(baby).should.be.exactly(expected_action);
    });
  });

  //describe('when hears "Bua-Mua-Bua-Bua"', function(){
    //it('should do "Alimentar - Pañal Alimentar - Alimentar"', function(){
      //baby.awake('Bua-Mua-Bua-Bua');
      //var expected_action = 'Alimentar - Pañal Alimentar - Alimentar';

      //father.hear(baby).should.be.exactly(expected_action);
    //});
  //});

});
