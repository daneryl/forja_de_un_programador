'use strict';

var actions = {
  'Bua': 'Alimentar',
  'Mua': 'Pañal',
  'Gua': 'Chupón'
};

module.exports = {
  hear: function(baby) {

    var result_action = [];

    baby.when_cry(function(crying) {
      result_action.push(actions[crying]);
    });

    return result_action.join(' - ');
  }
};
