var timerMaker = require('../services/timerMaker'),
  blackTimer = timerMaker.makeTimer();

var blackController = function ($scope, blackService) {
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
};

module.exports = blackController;

