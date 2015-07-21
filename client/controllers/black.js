var blackController = function ($scope, blackService) {
  $scope.blackTime = blackService.getTime();

  $scope.updateTime = function () {
    $scope.blackTime = blackService.getTime();
  };

  $scope.$on('setTime', function (event, time) {
    blackService.setTime(time.hours, time.minutes, time.seconds);
    $scope.updateTime();
  });

  $scope.endTurn = function () {
    
  };
};

module.exports = blackController;

