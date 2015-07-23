app.service('menuService', function (timerMaker, turnManager) {
  var menuTimer = timerMaker.makeTimer();

  // Start clock at five minutes.
  menuTimer.addMinutes(5);
 
  this.addHour = function () {
    menuTimer.addHours(1);
  };

  this.addMinute = function () {
    menuTimer.addMinutes(1);
  };

  this.addSecond = function () {
    menuTimer.addSeconds(1);
  };

  this.subtractHour = function () {
    menuTimer.subtractHours(1);
  };

  this.subtractMinute = function () {
    menuTimer.subtractMinutes(1);
  };

  this.subtractSecond = function () {
    menuTimer.subtractSeconds(1);
  };

  this.countHours = function () {
    return menuTimer.countHours();
  };

  this.countMinutes = function () {
    return menuTimer.countMinutes();
  };

  this.countSeconds = function () {
    return menuTimer.countSeconds();
  };

  this.getTime = function () {
    return menuTimer.getTime();
  };

  this.pause = function () {
    console.log("PAUSE");
  };

  this.reset = function () {
    console.log("RESET");
  };
});

