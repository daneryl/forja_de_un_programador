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
    var result = this.actions;

    result.forEach(function(action, index) {

      if(action === 'Pañal' && result[index+1] === 'Alimentar'){
        result[index] += ' Alimentar';
        result.splice(index+1, 1);
      }

      if(action === 'Alimentar' && result[index+1] === 'Chupón'){
        result[index] += ' Chupón';
        result.splice(index+1, 1);
      }

      if(action === 'Chupón' && result[index+1] === 'Alimentar' && result[index+2] === 'Pañal'){
        result[index] += ' Alimentar Pañal';
        result.splice(index+1, 2);
      }

    }.bind(this));

    return result.join(' - ');
  }

};

module.exports = {
  new: function() {
    actions.actions = [];
    return actions;
  }
};
