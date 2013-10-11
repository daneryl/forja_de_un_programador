'use strict';

module.exports = {
  hear: function(baby) {
    var actions = require('./actions.js').new();

    baby.when_cry(function(crying) {
      actions.add(crying);
    });

    return actions.toString();
  }
};
