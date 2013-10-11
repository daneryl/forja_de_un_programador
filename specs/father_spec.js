/*jshint expr: true*/
'use strict';
require('should');

describe('Father', function(){

  var father = require('../classes/father.js');
  var baby = require('../classes/baby.js');

  describe('when hears anything', function(){
    it('should return actions', function(){
      baby.awake('Bua-Mua');
      father.hear(baby).should.be.exactly('Alimentar - Pañal');
    });
  });

});
