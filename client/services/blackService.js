app.service('blackService', function (timerMaker, turnManager) {
  var blackTimer = timerMaker.makeTimer();

  this.setTime = function (hours, minutes, seconds) {
    blackTimer.setTime(hours, minutes, seconds);
  };

  this.canSubtractSecond = function () {
    return (blackTimer.getTime() > "00h 00m 00s");
  };

  this.subtractSecond = function () {
    blackTimer.subtractSeconds(1);
  };

  this.countHours = function () {
    return blackTimer.countHours();
  };

  this.countMinutes = function () {
    return blackTimer.countMinutes();
  };

  this.countSeconds = function () {
    return blackTimer.countSeconds();
  };

  this.getTime = function () {
    return blackTimer.getTime();
  };
});

