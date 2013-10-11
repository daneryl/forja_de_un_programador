'use strict';

var actions = {
  'Bua':'Alimentar',
  'Mua':'Pañal',
  'Gua':'Chupón'
};

module.exports = {
  hear: function(crying) {
    return actions[crying];
  }
};
