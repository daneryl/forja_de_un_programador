/*jshint expr: true*/
'use strict';
require('should');

describe('night (Integration tests)', function(){

  var night = require('../scripts/night.js');

  describe('when baby cryes "Bua-Bua-Bua-Bua"', function(){
    it('should report "Alimentar - Alimentar - Alimentar - Alimentar (4 horas 0 minutos) 0 followers menos"', function(){
      var input = 'Bua-Bua-Bua-Bua';
      var expected = 'Alimentar - Alimentar - Alimentar - Alimentar (4 horas 0 minutos) 0 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

  describe('when baby cryes "Mua-Gua-Mua-Gua"', function(){
    it('should report "Pañal - Chupón - Pañal - Chupón (6 horas 40 minutos) 0 followers menos"', function(){
      var input = 'Mua-Gua-Mua-Gua';
      var expected = 'Pañal - Chupón - Pañal - Chupón (6 horas 40 minutos) 0 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

  describe('when baby cryes "Bua-Mua-Bua-Bua"', function(){
    it('should report "Alimentar - Pañal Alimentar - Alimentar (4 horas 45 minutos) 0 followers menos"', function(){
      var input = 'Bua-Mua-Bua-Bua';
      var expected = 'Alimentar - Pañal Alimentar - Alimentar (4 horas 45 minutos) 0 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

  describe('when baby cryes "Bua-Mua-Bua-Mua-Bua"', function(){
    it('should report "Alimentar - Pañal Alimentar - Pañal Alimentar (4 horas 30 minutos) 0 followers menos"', function(){
      var input = 'Bua-Mua-Bua-Mua-Bua';
      var expected = 'Alimentar - Pañal Alimentar - Pañal Alimentar (4 horas 30 minutos) 0 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

  describe('when baby cryes "Mua-Bua-Gua"', function(){
    it('should report "Pañal Alimentar - Chupón (6 horas 35 minutos) 0 followers menos"', function(){
      var input = 'Mua-Bua-Gua';
      var expected = 'Pañal Alimentar - Chupón (6 horas 35 minutos) 0 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

  describe('when baby cryes "Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua"', function(){
    it('should report "Pañal Alimentar - Alimentar Chupón - Pañal Alimentar - Chupón - Alimentar (3 horas 15 minutos) 200 followers menos"', function(){
      var input = 'Mua-Bua-Bua-Gua-Mua-Bua-Gua-Bua';
      var expected = 'Pañal Alimentar - Alimentar Chupón - Pañal Alimentar - Chupón - Alimentar (3 horas 15 minutos) 200 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

  describe('when baby cryes "Bua-Gua-Bua-Mua"', function(){
    it('should report "Alimentar - Chupón Alimentar Pañal (5 horas 45 minutos) 0 followers menos"', function(){
      var input = 'Bua-Gua-Bua-Mua';
      var expected = 'Alimentar - Chupón Alimentar Pañal (5 horas 45 minutos) 0 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

  describe('when baby cryes "Bua-Mua-Gua-Bua-Mua-Bua-Bua"', function(){
    it('should report "Alimentar - Pañal - Chupón Alimentar Pañal - Alimentar - Alimentar (3 horas 15 minutos) 200 followers menos"', function(){
      var input = 'Bua-Mua-Gua-Bua-Mua-Bua-Bua';
      var expected = 'Alimentar - Pañal - Chupón Alimentar Pañal - Alimentar - Alimentar (3 horas 15 minutos) 200 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

  describe('when baby cryes "Bua-Mua-Gua-Bua-Mua-Bua-Bua-Mua-Gua-Bua"', function(){
    it('should report "Alimentar - Pañal - Chupón Alimentar Pañal - Alimentar - Alimentar - Pañal - Chupón - Alimentar (1 horas 35 minutos) 600 followers menos"', function(){
      var input = 'Bua-Mua-Gua-Bua-Mua-Bua-Bua-Mua-Gua-Bua';
      var expected = 'Alimentar - Pañal - Chupón Alimentar Pañal - Alimentar - Alimentar - Pañal - Chupón - Alimentar (1 horas 35 minutos) 600 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

  describe('when baby cryes "Bua-Bua-Bua-Bua-Bua-Bua-Bua-Bua"', function(){
    it('should report "Alimentar - Alimentar - Alimentar - Alimentar - Alimentar - Alimentar - Alimentar - Alimentar (0 horas 0 minutos) 1200 followers menos"', function(){
      var input = 'Bua-Bua-Bua-Bua-Bua-Bua-Bua-Bua';
      var expected = 'Alimentar - Alimentar - Alimentar - Alimentar - Alimentar - Alimentar - Alimentar - Alimentar (0 horas 0 minutos) 1200 followers menos';
      night(input).should.be.exactly(expected);
    });
  });

});
