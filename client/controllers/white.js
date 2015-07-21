app.controller('whiteCtrl', function ($scope, whiteService) {
  $scope.whiteTime = whiteService.getTime();

  $scope.updateTime = function () {
    $scope.whiteTime = whiteService.getTime();
  };

  $scope.$on('setTime', function (event, time) {
    whiteService.setTime(time.hours, time.minutes, time.seconds);
    $scope.updateTime();
  });

  $scope.startGame = function () {
    $scope.$emit('whiteStart');
  };

  $scope.endTurn = function () {
    
  };
});

