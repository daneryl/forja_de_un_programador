'use strict';

var actions_for_cryings = {
  'Bua': 'Alimentar',
  'Mua': 'Pañal',
  'Gua': 'Chupón'
};

var panal_alimentar_case = function(current_action, actions, current_action_index) {
  if(current_action === 'Pañal' && actions[current_action_index+1] === 'Alimentar'){
    actions[current_action_index] += ' Alimentar';
    actions.splice(current_action_index+1, 1);
  }
};

var alimentar_chupon_case = function(current_action, actions, current_action_index) {
  if(current_action === 'Alimentar' && actions[current_action_index+1] === 'Chupón'){
    actions[current_action_index] += ' Chupón';
    actions.splice(current_action_index+1, 1);
  }
};

var chupon_alimentar_panal_case = function(current_action, actions, current_action_index) {
  if(current_action === 'Chupón' && actions[current_action_index+1] === 'Alimentar' && actions[current_action_index+2] === 'Pañal'){
    actions[current_action_index] += ' Alimentar Pañal';
    actions.splice(current_action_index+1, 2);
  }
};
 

var actions = {

  actions: [],

  add: function(crying) {
    this.actions.push(actions_for_cryings[crying]);
  },

  toString: function() {
    var result = this.actions;

    result.forEach(function(action, index) {
      chupon_alimentar_panal_case(action, result, index);
    });

    result.forEach(function(action, index) {
      alimentar_chupon_case(action, result, index);
      panal_alimentar_case(action, result, index);
    });

    return result.join(' - ');
  }

};

module.exports = {
  new: function() {
    actions.actions = [];
    return actions;
  }
};
