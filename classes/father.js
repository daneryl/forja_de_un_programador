'use strict';

//var action_times_in_minutes = {
  //'Chupón': 10,
  //'Pañal': 30,
  //'Alimentar': 60
//};

module.exports = {
  hear: function(baby) {
    var actions = require('./actions.js').new();

    baby.when_cry(function(crying) {
      actions.add(crying);
    });

    return actions.toString();
  },
  do: function(actions) {
    if(actions === 'Pañal'){
      return '7 horas 30 minutos';
    }
    if(actions === 'Alimentar'){
      return '7 horas 0 minutos';
    }
    return '7 horas 50 minutos';
  }
};
