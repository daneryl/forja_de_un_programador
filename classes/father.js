'use strict';

var action_times_in_minutes = {
  'Chupón': 10,
  'Pañal': 30,
  'Alimentar': 60
};

var sleep_time = require('./sleep_time.js');

module.exports = {
  hear: function(baby) {
    var actions = require('./actions.js').new();

    baby.when_cry(function(crying) {
      actions.add(crying);
    });

    return actions.toString();
  },
  do: function(actions) {
    var current_sleep_time = sleep_time.new();

    var time;
    actions.split(/\s-\s/).forEach(function(action) {
      time = current_sleep_time.extract(action_times_in_minutes[action]);
    });

    return time;
  }
};
