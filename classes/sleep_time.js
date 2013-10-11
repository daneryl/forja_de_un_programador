'use strict';

var minutes_remaining = {
  minutes: 8*60,
  toString: function() {
    var hours = Math.floor(this.minutes / 60);
    var minutes = this.minutes % 60;
    return hours+' horas '+minutes+' minutos';
  }
};

var sleep_time = {
  extract: function(minutes_to_extract) {
    minutes_remaining.minutes -= minutes_to_extract;
    return minutes_remaining;
  }
};

module.exports = {
  new: function() {
    minutes_remaining.minutes = 8*60;
    return sleep_time;
  }
};
