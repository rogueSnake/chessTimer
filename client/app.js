var css = require('./index.css'),
  angular = require('angular'),
  $ = require('jquery'),
  ourJqueryCode = require('./ourJqueryCode'),
  timerMaker = require('./timerMaker'),
  app = angular.module('app', []),
  menuTimer = timerMaker.makeTimer(),
  whiteTimer = timerMaker.makeTimer(),
  blackTimer = timerMaker.makeTimer();

var menuController = app.controller('mainCtrl', ['$scope', function ($scope) {
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
    menuTimer.addHours();
    $scope.updateTime();
  };

  $scope.addMinute = function () {
    menuTimer.addMinutes();
    $scope.updateTime();
  };

  $scope.addSecond = function () {
    menuTimer.addSeconds();
    $scope.updateTime();
  };

  $scope.removeHour = function () {
    menuTimer.subtractHours();
    $scope.updateTime();
  }; 

  $scope.removeMinute = function () {
    menuTimer.subtractMinutes();
    $scope.updateTime();
  };
 
  $scope.removeSecond = function () {
    menuTimer.subtractSeconds();
    $scope.updateTime();
  }; 

  $scope.pause = function () {

  };

  $scope.reset = function () {

  };

  $scope.$on('startGame', function (event) {
    console.log('Setting time!');
    $scope.$broadcast('setTime', {
      hours : menuTimer.countHours(),
      minutes : menuTimer.countMinutes(),
      seconds : menuTimer.countSeconds()
    });
  });
}]);

menuController.controller('whiteCtrl', ['$scope', function ($scope) {
  $scope.whiteTime = whiteTimer.getTime();

  $scope.$on('setTime', function (event, time) {
    whiteTimer.setTime(time.hours, time.minutes, time.seconds);
  });

  $scope.startGame = function () {
    $scope.$emit('startGame');
  };

  $scope.endTurn = function () {
    
  };
}]);

menuController.controller('blackCtrl', ['$scope', function ($scope) {
  $scope.blackTime = blackTimer.getTime();

  $scope.$on('setTime', function (event, time) {
    blackTimer.setTime(time.hours, time.minutes, time.seconds);
  });

  $scope.endTurn = function () {
    
  };
}]);

