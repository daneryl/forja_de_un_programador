'use strict';

module.exports = {
  followers_lost: function(minutes_of_sleep) {
    //if(minutes_of_sleep < 270) { return 1200; }
    if(minutes_of_sleep < 300) { return 1000; }
    if(minutes_of_sleep < 330) { return 800; }
    if(minutes_of_sleep < 360) { return 600; }
    if(minutes_of_sleep < 390) { return 400; }
    if(minutes_of_sleep < 420) { return 300; }
    if(minutes_of_sleep < 450) { return 200; }
    return 100;
  }
};
