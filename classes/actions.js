'use strict';

var actions_for_cryings = {
  'Bua': 'Alimentar',
  'Mua': 'Pañal',
  'Gua': 'Chupón'
};


var actions = {

  actions: [],

  add: function(crying) {
    var action = actions_for_cryings[crying];
    if(this.actions[this.actions.length-2] === 'Chupón' && this.actions[this.actions.length-1] === 'Alimentar' && action === 'Pañal'){
      this.actions[this.actions.length-2] += ' '+this.actions[this.actions.length-1]+' '+action;
      this.actions.splice(this.actions.length-1, 1);
      return;
    }
    if(this.actions[this.actions.length-2] === 'Alimentar Chupón' && this.actions[this.actions.length-1] === 'Alimentar' && action === 'Pañal'){
      this.actions[this.actions.length-2] = 'Alimentar';
      this.actions[this.actions.length-1] = 'Chupón Alimentar Pañal';
      return;
    }
    if(is_alimentar_chupon_case(action) || is_panal_alimentar_case(action)){
      add_action_to_previous(action);
      return;
    }
    this.actions.push(action);
  },

  toString: function() {
    return this.actions.join(' - ');
  }

};

function is_alimentar_chupon_case(action) {
  return (actions.actions[actions.actions.length-1] === 'Alimentar' && action === 'Chupón');
}

function is_panal_alimentar_case(action) {
  return (actions.actions[actions.actions.length-1] === 'Pañal' && action === 'Alimentar');
}

function add_action_to_previous(action){
  actions.actions[actions.actions.length-1] += ' '+action;
}

module.exports = {
  new: function() {
    actions.actions = [];
    return actions;
  }
};
