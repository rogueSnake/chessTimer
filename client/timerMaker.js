var lowerLimit = 0,
  upperLimit = 359999;

var fillZero = function (number) {

  if (String(number).length < 2) {
    number = "0" + number;
  };
  return String(number);
};

var makeTimer = function () {
  var seconds = 0;

  return {

    add : function (numberOfSeconds) {
      seconds += (numberOfSeconds || 1);

      if (seconds < lowerLimit) {
        seconds = lowerLimit;
      }

      else if (seconds > upperLimit) {
        seconds = upperLimit;
      }
    },

    subtract : function (numberOfSeconds) {
      this.add(-1 * (numberOfSeconds || 1));
    },

    addSeconds : function (numberOfSeconds) {
      this.add(numberOfSeconds);
    },

    addMinutes : function (numberOfMinutes) {
      this.addSeconds((numberOfMinutes || 1) * 60);
    },

    addHours : function (numberOfHours) {
      this.addMinutes((numberOfHours || 1) * 60);
    },

    subtractSeconds : function (numberOfSeconds) {
      this.subtract(numberOfSeconds);
    },

    subtractMinutes : function (numberOfMinutes) {
      this.subtractSeconds((numberOfMinutes || 1) * 60);
    },

    subtractHours : function (numberOfHours) {
      this.subtractMinutes((numberOfHours || 1) * 60);
    },

    countSeconds : function () {
      return seconds - (this.countMinutes() * 60 + 
          this.countHours() * 60 * 60);
    },

    countMinutes : function () {
      return Math.floor((seconds - (this.countHours() * 60 * 60)) / 60);
    },

    countHours : function () {
      return Math.floor(seconds / 60 / 60);
    },

    getTime : function () {
      return fillZero(this.countHours()) + "h " + 
          fillZero(this.countMinutes()) + "m " + 
          fillZero(this.countSeconds()) + "s";
    },

    setTime : function (hours, minutes, seconds) {
      seconds = 0;
      this.addHours(hours);
      this.addMinutes(minutes);
      this.addSeconds(seconds);
    }
  };
};

module.exports = {
    makeTimer : makeTimer
};

