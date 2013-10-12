'use strict';

var cryings = [];

module.exports = {

  awake: function(crying) {
    cryings = crying.split(/\s?-\s?/);
  },

  each_cry: function(action) {
    cryings.forEach(function(crying) {
      action(crying);
    });
  }

};
