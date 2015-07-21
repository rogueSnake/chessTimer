var timerMaker = require('../services/timerMaker'),
  whiteTimer = timerMaker.makeTimer();

var whiteController = function ($scope, whiteService) {
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
};

module.exports = whiteController;

