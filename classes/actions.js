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

      if(result[index+1] && action === 'Pañal' && result[index+1] === 'Alimentar'){
        result[index] += ' Alimentar';
        result.splice(index+1, 1);
      }

      if(result[index+1] && action === 'Alimentar' && result[index+1] === 'Chupón'){
        result[index] += ' Chupón';
        result.splice(index+1, 1);
      }

      if(result[index+1] && result[index+2] && action === 'Chupón' && result[index+1] === 'Alimentar' && result[index+2] === 'Pañal'){
        result[index] += ' Alimentar Pañal';
        result.splice(index+1, 2);
      }

    }.bind(this));

    console.log(result.join(' - '));

    return result.join(' - ');
  }

};

module.exports = {
  new: function() {
    actions.actions = [];
    return actions;
  }
};
