app.service('whiteService', function (timerMaker, turnManager) {
  var whiteTimer = timerMaker.makeTimer();

  this.setTime = function (hours, minutes, seconds) {
    whiteTimer.setTime(hours, minutes, seconds);
  };

  this.subtractSecond = function () {
    whiteTimer.subtractSeconds(1);
  };

  this.countHours = function () {
    return whiteTimer.countHours();
  };

  this.countMinutes = function () {
    return whiteTimer.countMinutes();
  };

  this.countSeconds = function () {
    return whiteTimer.countSeconds();
  };

  this.getTime = function () {
    return whiteTimer.getTime();
  };
});

