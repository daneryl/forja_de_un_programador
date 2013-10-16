'use strict';

var sleep_time = require('./sleep_time.js');
var actions_factory = require('./actions.js');

module.exports = {

  hear: function(baby) {
    var actions = actions_factory.new();
    baby.each_cry(actions.add.bind(actions));
    return actions;
  },

  do: function(actions) {
    return sleep_time.new().extract(actions.time());
  }

};
