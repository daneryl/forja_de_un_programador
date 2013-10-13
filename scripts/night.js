'use strict';

var father = require('./father.js');
var baby = require('./baby.js');

module.exports = function(cryings) {

  baby.awake(cryings);
  var actions = father.hear(baby);
  var sleep_time = father.do(actions);

  var followers_lost = 0;

  if(sleep_time.minutes < 240){
    followers_lost = 200;
  }

  return actions + ' ('+sleep_time+') ' + followers_lost + ' followers menos';

};
