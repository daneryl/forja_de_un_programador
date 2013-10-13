'use strict';

var father = require('./father.js');
var baby = require('./baby.js');
var twitter_account = require('./twitter_account.js');

module.exports = function(cryings) {

  baby.awake(cryings);
  var actions = father.hear(baby);
  var sleep_time = father.do(actions);
  var followers_lost = twitter_account.followers_lost(sleep_time.minutes);

  return actions + ' ('+sleep_time+') ' + followers_lost + ' followers menos';

};
