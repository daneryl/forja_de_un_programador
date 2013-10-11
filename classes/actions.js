'use strict';

var actions_for_cryings = {
  'Bua': 'Alimentar',
  'Mua': 'Pañal',
  'Gua': 'Chupón'
};

var actions = {

  actions: [],

  add: function(crying) {
    this.actions.push(actions_for_cryings[crying]);
  },

  toString: function() {
    return this.actions.join(' - ');
  }

};

module.exports = {
  new: function() {
    actions.actions = [];
    return actions;
  }
};
