/*jshint expr: true*/
'use strict';
require('should');

describe('Twitter account', function(){

  var twitter_account = require('../scripts/twitter_account.js');

  describe('in the first 4 hours', function(){
    it('should not loose any follower', function(){
      twitter_account.followers_lost(450).should.be.exactly(0);
      twitter_account.followers_lost(420).should.be.exactly(0);
      twitter_account.followers_lost(240).should.be.exactly(0);
    });
  });

  describe('in the first two hours after 4 hours for every block of 1 to 30 minutes', function(){
    it('should loose 100 followers', function(){
      twitter_account.followers_lost(239).should.be.exactly(100);
      twitter_account.followers_lost(209).should.be.exactly(200);
      twitter_account.followers_lost(179).should.be.exactly(300);
      twitter_account.followers_lost(149).should.be.exactly(400);
    });
  });

  describe('from the first two hours for every block of 1 to 30 minutes', function(){
    it('should loose 200 followers', function(){
      twitter_account.followers_lost(119).should.be.exactly(600);
      twitter_account.followers_lost(89).should.be.exactly(800);
      twitter_account.followers_lost(59).should.be.exactly(1000);
      twitter_account.followers_lost(29).should.be.exactly(1200);
    });
  });

});
