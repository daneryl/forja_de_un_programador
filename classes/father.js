'use strict';

var actions = {
  'Bua': 'Alimentar',
  'Mua': 'Pañal',
  'Gua': 'Chupón'
};

module.exports = {
  hear: function(crying) {

    var cryings = crying.split('-');

    var result_action = [];

    cryings.forEach(function(crying) {
      result_action.push(actions[crying]);
    });

    return result_action.join(' - ');
  }
};
