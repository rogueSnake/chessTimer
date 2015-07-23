app.service('timerMaker', function () {
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

  this.makeTimer = function () {
    var absoluteSeconds = 0;

    return {

      add : function (numberOfSeconds) {
        absoluteSeconds += (numberOfSeconds);

        if (absoluteSeconds < LOWER_LIMIT) {
          absoluteSeconds = LOWER_LIMIT;
        }

        else if (absoluteSeconds > UPPER_LIMIT) {
          absoluteSeconds = UPPER_LIMIT;
        }
      },

      subtract : function (numberOfSeconds) {
        this.add(-1 * (numberOfSeconds));
      },

      addSeconds : function (numberOfSeconds) {
        this.add(numberOfSeconds);
      },

      addMinutes : function (numberOfMinutes) {
        this.addSeconds((numberOfMinutes) * SECONDS_IN_A_MINUTE);
      },

      addHours : function (numberOfHours) {
        this.addMinutes((numberOfHours) * MINUTES_IN_AN_HOUR);
      },

      subtractSeconds : function (numberOfSeconds) {
        this.subtract(numberOfSeconds);
      },

      subtractMinutes : function (numberOfMinutes) {
        this.subtractSeconds((numberOfMinutes) * SECONDS_IN_A_MINUTE);
      },

      subtractHours : function (numberOfHours) {
        this.subtractMinutes((numberOfHours) * MINUTES_IN_AN_HOUR);
      },

      countSeconds : function () {
        return absoluteSeconds - (this.countMinutes() * SECONDS_IN_A_MINUTE + 
            this.countHours() * SECONDS_IN_AN_HOUR);
      },

      countMinutes : function () {
        return Math.floor((absoluteSeconds - (this.countHours() * 
            SECONDS_IN_AN_HOUR)) / SECONDS_IN_A_MINUTE);
      },

      countHours : function () {
        return Math.floor(absoluteSeconds / SECONDS_IN_AN_HOUR);
      },

      getTime : function () {
        return fillZero(this.countHours()) + "h " + 
            fillZero(this.countMinutes()) + "m " + 
            fillZero(this.countSeconds()) + "s";
      },

      setTime : function (hours, minutes, seconds) {
        absoluteSeconds = 0;
        this.addHours(hours);
        this.addMinutes(minutes);
        this.addSeconds(seconds);
      }
    };
  };
});

