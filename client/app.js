var css = require('./index.css'),
  angular = require('angular'),
  $ = require('jquery'),
  ourJqueryCode = require('./ourJqueryCode'),
  timerMaker = require('./timerMaker'),
  app = angular.module('app', []),
  menuTimer = timerMaker.makeTimer(),
  whiteTimer = timerMaker.makeTimer(),
  blackTimer = timerMaker.makeTimer();

var appController = app.controller('appCtrl', ['$scope', function ($scope) {

  $scope.$on('whiteStart', function (event) {
    $scope.$broadcast('startGame');
  });

  $scope.$on('setPlayerTime', function (event, time) {
    $scope.$broadcast('setTime', time);
  });
}]);

appController.controller('mainCtrl', ['$scope', function ($scope) {
  $scope.startTimeMinutes = 5;
  $scope.startTimeHours = 0;
  $scope.message = $scope.startTime;
  $scope.menuTime = menuTimer.getTime();

  $scope.updateTime = function () {
    $scope.menuTime = menuTimer.getTime();
    $scope.startTimeMinutes = menuTimer.countMinutes();
    $scope.startTimeHours = menuTimer.countHours();
  };

  $scope.addHour = function () {
    menuTimer.addHours(1);
    $scope.updateTime();
  };

  $scope.addMinute = function () {
    menuTimer.addMinutes(1);
    $scope.updateTime();
  };

  $scope.addSecond = function () {
    menuTimer.addSeconds(1);
    $scope.updateTime();
  };

  $scope.removeHour = function () {
    menuTimer.subtractHours(1);
    $scope.updateTime();
  }; 

  $scope.removeMinute = function () {
    menuTimer.subtractMinutes(1);
    $scope.updateTime();
  };
 
  $scope.removeSecond = function () {
    menuTimer.subtractSeconds(1);
    $scope.updateTime();
  }; 

  $scope.pause = function () {

  };

  $scope.reset = function () {

  };

  $scope.$on('startGame', function (event) {
    $scope.$emit('setPlayerTime', {
      hours : menuTimer.countHours(),
      minutes : menuTimer.countMinutes(),
      seconds : menuTimer.countSeconds()
    });
  });
}]);

appController.controller('whiteCtrl', ['$scope', function ($scope) {
  $scope.whiteTime = whiteTimer.getTime();

  $scope.updateTime = function () {
    $scope.whiteTime = whiteTimer.getTime();
  };

  $scope.$on('setTime', function (event, time) {
    whiteTimer.setTime(time.hours, time.minutes, time.seconds);
    $scope.updateTime();
  });

  $scope.startGame = function () {
    $scope.$emit('whiteStart');
  };

  $scope.endTurn = function () {
    
  };
}]);

appController.controller('blackCtrl', ['$scope', function ($scope) {
  $scope.blackTime = blackTimer.getTime();

  $scope.updateTime = function () {
    $scope.blackTime = blackTimer.getTime();
  };

  $scope.$on('setTime', function (event, time) {
    blackTimer.setTime(time.hours, time.minutes, time.seconds);
    $scope.updateTime();
  });

  $scope.endTurn = function () {
    
  };
}]);

