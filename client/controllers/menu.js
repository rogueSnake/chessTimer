var timerMaker = require('../services/timerMaker'),
  menuTimer = timerMaker.makeTimer();

var menuController = function ($scope, menuService) {
  $scope.startTimeMinutes = 5;
  $scope.startTimeHours = 0;
  $scope.message = $scope.startTime;
  $scope.menuTime = menuTimer.getTime();

  console.log(menuService.getData());

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
};

module.exports = menuController;

