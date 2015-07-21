var blackService = function (timerService) {
  var blackTimer = timerService.makeTimer();

  this.setTime = function (hours, minutes, seconds) {
    blackTimer.setTime(hours, minutes, seconds);
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
};

module.exports = blackService;

