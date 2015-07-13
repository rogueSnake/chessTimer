var protoTimer = {
  onesOfMinutes : 0,
  tensOfMinutes : 0,
  onesOfHours : 0,

  setTime : function (time) {
    this.onesOfMinutes = Number(time.slice(3, 4));
    this.tensOfMinutes = Number(time.slice(2, 3));
    this.onesOfHours = Number(time.slice(0, 1));
    return this.getTime();
  },

  getTime : function () {
    return this.onesOfHours + ":" + this.tensOfMinutes + this.onesOfMinutes;
  },

  removeOneMinute : function () {

    if (this.onesOfMinutes > 0) {
      this.onesOfMinutes -= 1;
    }

    else if (this.tensOfMinutes > 0) {
      this.onesOfMinutes = 9;
      this.tensOfMinutes -= 1;
    }

    else if (this.onesOfHours > 0) {
      this.onesOfMinutes = 9;
      this.tensOfMinutes = 5;
      this.onesOfHours -= 1;
    }
    return this.getTime();
  },

  removeTenMinutes : function () {

    if (this.tensOfMinutes > 0) {
      this.tensOfMinutes -= 1;
    }

    else if (this.onesOfHours > 0) {
      this.tensOfMinutes = 5;
      this.onesOfHours -= 1;
    }
    return this.getTime();
  },

  removeOneHour : function () {

    if (this.onesOfHours > 0) {
      this.onesOfHours -= 1;
    }
    return this.getTime();
  }
};

var menuTimer = Object.create(protoTimer);

menuTimer.addOneMinute = function () {

  if (this.onesOfMinutes < 9) {
    this.onesOfMinutes += 1;
  }

  else if (this.tensOfMinutes < 5) {
    this.onesOfMinutes = 0;
    this.tensOfMinutes += 1;
  }

  else if (this.onesOfHours < 9) {
    this.onesOfHours += 1;
  }

  // If time is at 9:59 or greater, let timer keep counting to 9:99.
  else if (this.tensOfMinutes < 9) {
    this.onesOfMinutes = 0;
    this.tensOfMinutes += 1;
  }
  return this.getTime();
};

menuTimer.addTenMinutes = function () {

  if (this.tensOfMinutes < 5) {
    this.tensOfMinutes += 1;
  }

  else if (this.onesOfHours < 9) {
    this.tensOfMinutes = 0;
    this.onesOfHours += 1;
  }

  else if (this.tensOfMinutes < 9) {
    this.tensOfMinutes += 1;
  }
  return this.getTime();
};

menuTimer.addOneHour = function () {

  if (this.onesOfHours < 9) {
    this.onesOfHours += 1;
  }
  return this.getTime();
};

var playerTimer = Object.create(protoTimer);

playerTimer.onesOfSeconds = 0;
playerTimer.tensOfSeconds = 0;

playerTimer.removeOneSecond = function () {

  if (this.onesOfSeconds > 0) {
    this.onesOfSeconds -= 1;
  }

  else if (this.tensOfSeconds > 0) {
    this.onesOfSeconds = 9;
    this.tensOfSeconds -= 1;
  }

  else if (this.getTime() > "0:00:00") {
    this.onesOfSeconds = 9;
    this.tensOfSeconds = 5;
    this.removeOneMinute();
  }
  return this.getTime();
};

playerTimer.getTime = function () {
  return this.onesOfHours + ":" + this.tensOfMinutes + this.onesOfMinutes + 
      ":" + this.tensOfSeconds + this.onesOfSeconds;
};

var makeMenuTimer = function () {
  return Object.create(menuTimer);
};

var makePlayerTimer = function () {
  return Object.create(playerTimer);
};

module.exports = {
  makeMenuTimer : makeMenuTimer,
  makePlayerTimer : makePlayerTimer
};

