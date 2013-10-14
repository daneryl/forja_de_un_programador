'use strict';

var actions_for_cryings = {
  'Bua': 'Alimentar',
  'Mua': 'Pañal',
  'Gua': 'Chupón'
};

var actions = [];
actions.add = function(crying) {
  var action = actions_for_cryings[crying];
  if(this[this.length-2] === 'Chupón' && this[this.length-1] === 'Alimentar' && action === 'Pañal'){
    this[this.length-2] += ' '+this[this.length-1]+' '+action;
    this.splice(this.length-1, 1);
    return;
  }
  if(this[this.length-2] === 'Alimentar Chupón' && this[this.length-1] === 'Alimentar' && action === 'Pañal'){
    this[this.length-2] = 'Alimentar';
    this[this.length-1] = 'Chupón Alimentar Pañal';
    return;
  }
  if(is_alimentar_chupon_case(action) || is_panal_alimentar_case(action)){
    add_action_to_previous(action);
    return;
  }
  this.push(action);
};

actions.toString = function(){
  return this.join(' - ');
};

function is_alimentar_chupon_case(action) {
  return (actions[actions.length-1] === 'Alimentar' && action === 'Chupón');
}

function is_panal_alimentar_case(action) {
  return (actions[actions.length-1] === 'Pañal' && action === 'Alimentar');
}

function add_action_to_previous(action){
  actions[actions.length-1] += ' '+action;
}

function empty_actions(){
  actions.splice(0, actions.length);
}

exports.new = function() {
  empty_actions();
  return actions;
}
