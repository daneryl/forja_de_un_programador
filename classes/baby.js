'use strict';

var cryings = [];

module.exports = {

  awake: function(crying) {
    cryings = crying.split(/\s?-\s?/);
  },

  when_cry: function(action) {
    cryings.forEach(function(crying) {
      action(crying);
    });
  }

};
