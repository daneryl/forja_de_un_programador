/*jshint expr: true*/
'use strict';
require('should');

describe('Baby', function(){

  var baby = require('../classes/baby.js');

  describe('when crying', function(){
    it('should execute callback passed for each cry', function(){
      baby.awake('cry1- cry2 -cry3');

      var expected_crys = [];

      baby.when_cry(function(crying) {
        expected_crys.push(crying);
      });

      expected_crys.should.have.lengthOf(3);
      expected_crys[0].should.be.exactly('cry1');
      expected_crys[1].should.be.exactly('cry2');
      expected_crys[2].should.be.exactly('cry3');

    });
  });

});
