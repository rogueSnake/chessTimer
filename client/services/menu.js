var timerMaker = require('./timerMaker'),
  menuTimer = timerMaker.makeTimer();

var menuService = function () {
  var data = 0;

  this.getTime = function () {

  };

  this.addHours = function () {

  };

  this.getData = function () {
    return data;
  };
};

module.exports = menuService;

