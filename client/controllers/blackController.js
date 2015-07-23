app.controller('blackCtrl', function ($scope, blackService) {
  $scope.blackTime = blackService.getTime();
  $scope.buttonDisabled = true;

  $scope.updateTime = function () {
    $scope.blackTime = blackService.getTime();
  };

  $scope.$on('setTime', function (event, time) {
    blackService.setTime(time.hours, time.minutes, time.seconds);
    $scope.updateTime();
  });

  $scope.$on('switchTurn', function (event, player) {
    $scope.buttonDisabled = (player !== 'black');
  });

  $scope.endTurn = function () {
    $scope.$emit('newTurn', 'white');
  };

  $scope.$on('countDown', function (event, player) {
    if (player === 'black') {
      blackService.subtractSecond();
      $scope.updateTime();
      $scope.$apply();

      if (blackService.getTime() === "00h 00m 00s") {
        $scope.$emit('lose', 'black');
      }
    }
  });
});

