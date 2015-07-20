var SECONDS_IN_A_MINUTE = 60,
  MINUTES_IN_AN_HOUR = SECONDS_IN_A_MINUTE,
  SECONDS_IN_AN_HOUR = SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR,
  LOWER_LIMIT = 0,
  UPPER_LIMIT = (99 * SECONDS_IN_AN_HOUR) + (59 * SECONDS_IN_A_MINUTE) + 59;

var fillZero = function (number) {

  if (String(number).length < 2) {
    number = "0" + number;
  };
  return String(number);
};

var makeTimer = function () {
  /*
  I'm not convinced this counter should be called 'seconds'; that name causes
  confusion with the 'countSeconds' method below. A user of this interface 
  has every right to expect that method to return the value of this counter, 
  but it actually returns the value of this counter that remains after counting
  hours and minutes. The method is designed to get the number of seconds to 
  display on a clock, not the absolute number of seconds. I would rather rename
  this internal counter than rename the external interface, but I don't have 
  anything better to call it. BAH. */
  var seconds = 0;

  return {

    add : function (numberOfSeconds) {
      seconds += (numberOfSeconds || 1);

      if (seconds < LOWER_LIMIT) {
        seconds = LOWER_LIMIT;
      }

      else if (seconds > UPPER_LIMIT) {
        seconds = UPPER_LIMIT;
      }
    },

    subtract : function (numberOfSeconds) {
      this.add(-1 * (numberOfSeconds || 1));
    },

    addSeconds : function (numberOfSeconds) {
      this.add(numberOfSeconds);
    },

    addMinutes : function (numberOfMinutes) {
      this.addSeconds((numberOfMinutes || 1) * SECONDS_IN_A_MINUTE);
    },

    addHours : function (numberOfHours) {
      this.addMinutes((numberOfHours || 1) * MINUTES_IN_AN_HOUR);
    },

    subtractSeconds : function (numberOfSeconds) {
      this.subtract(numberOfSeconds);
    },

    subtractMinutes : function (numberOfMinutes) {
      this.subtractSeconds((numberOfMinutes || 1) * SECONDS_IN_A_MINUTE);
    },

    subtractHours : function (numberOfHours) {
      this.subtractMinutes((numberOfHours || 1) * MINUTES_IN_AN_HOUR);
    },

    countSeconds : function () {
      return seconds - (this.countMinutes() * SECONDS_IN_A_MINUTE + 
          this.countHours() * SECONDS_IN_AN_HOUR);
    },

    countMinutes : function () {
      return Math.floor((seconds - (this.countHours() * SECONDS_IN_AN_HOUR)) /
          SECONDS_IN_A_MINUTE);
    },

    countHours : function () {
      return Math.floor(seconds / SECONDS_IN_AN_HOUR);
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

