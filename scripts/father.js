'use strict';

var action_times_in_minutes = {
  'Chupón': 10,
  'Pañal': 30,
  'Alimentar': 60,
  'Pañal Alimentar': 75,
  'Alimentar Chupón': 65,
  'Chupón Alimentar Pañal': 75
};

var sleep_time_factory = require('./sleep_time.js');
var actions_factory = require('./actions.js');

module.exports = {

  hear: function(baby) {
    var actions = actions_factory.new();
    baby.each_cry(actions.add.bind(actions));
    return actions;
  },

  do: function(actions) {
    var sleep_time = sleep_time_factory.new();

    var time;
    actions.forEach(function(action) {
      time = sleep_time.extract(action_times_in_minutes[action]);
    });

    return time;
  }

};
