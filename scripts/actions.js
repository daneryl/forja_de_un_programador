'use strict';

var actions_for_cryings = {
  'Bua': 'Alimentar',
  'Mua': 'Pañal',
  'Gua': 'Chupón'
};

var action_times_in_minutes = {
  'Chupón': 10,
  'Pañal': 30,
  'Alimentar': 60,
  'Pañal Alimentar': 75,
  'Alimentar Chupón': 65,
  'Chupón Alimentar Pañal': 75
};

var actions = [];
actions.raw_actions = [];
actions.toString = function(){
  return this.join(' - ');
};
actions.add = function(crying) {
  var action = actions_for_cryings[crying];
  this.raw_actions.push(action);
  var to_compute_actions = this.raw_actions.slice(0);

  compute_chupon_alimentar_panal_case(to_compute_actions);
  compute_rest_cases(to_compute_actions);

  empty_actions();
  to_compute_actions.forEach(function(action) {
    actions.push(action);
  });
};

actions.time = function() {
  var time = 0;
  this.forEach(function(action) {
    time += action_times_in_minutes[action];
  });
  return time;
};

function compute_chupon_alimentar_panal_case(actions){
  actions.forEach(function(current_action, index) {
    if(current_action === 'Chupón' && actions[index+1] === 'Alimentar' && actions[index+2] === 'Pañal'){
      actions[index] += ' Alimentar Pañal';
      actions.splice(index+1, 2);
    }
  });
}

function compute_rest_cases(actions){
  actions.forEach(function(current_action, index) {
    if(current_action === 'Pañal' && actions[index+1] === 'Alimentar'){
      actions[index] += ' Alimentar';
      actions.splice(index+1, 1);
    }

    if(current_action === 'Alimentar' && actions[index+1] === 'Chupón'){
      actions[index] += ' Chupón';
      actions.splice(index+1, 1);
    }
  });
}

function empty_actions(){
  actions.splice(0, actions.length);
}

function empty_all(){
  empty_actions();
  actions.raw_actions.splice(0, actions.raw_actions.length);
}

exports.new = function() {
  empty_all();
  return actions;
};
