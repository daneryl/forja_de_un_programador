/*jshint expr: true*/
'use strict';
require('should');

describe('Baby', function(){

  var baby = require('../classes/baby.js');

  describe('when crying', function(){
    it('should execute callback passed for each cry', function(){
      baby.awake('cry1- cry2 -cry3-cry4');

      var expected_crys = [];

      baby.each_cry(function(crying) {
        expected_crys.push(crying);
      });

      expected_crys.should.have.lengthOf(4);
      expected_crys.should.include('cry1');
      expected_crys.should.include('cry2');
      expected_crys.should.include('cry3');
      expected_crys.should.include('cry4');
    });
  });
});
