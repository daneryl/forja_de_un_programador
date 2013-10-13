'use strict';

module.exports = {
  followers_lost: function(minutes_of_sleep) {
    if(minutes_of_sleep < 30) { return 1200; }
    if(minutes_of_sleep < 60) { return 1000; }
    if(minutes_of_sleep < 90) { return 800; }
    if(minutes_of_sleep < 120) { return 600; }
    if(minutes_of_sleep < 150) { return 400; }
    if(minutes_of_sleep < 180) { return 300; }
    if(minutes_of_sleep < 210) { return 200; }
    if(minutes_of_sleep < 240) { return 100; }
    return 0;
  }
};
