app.controller('whiteCtrl', function ($scope, whiteService) {
  $scope.whiteTime = whiteService.getTime();
  $scope.buttonDisabled = false;

  $scope.updateTime = function () {
    $scope.whiteTime = whiteService.getTime();
  };

  $scope.$on('setTime', function (event, time) {
    whiteService.setTime(time.hours, time.minutes, time.seconds);
    $scope.updateTime();
  });

  $scope.startGame = function () {
    $scope.clickButton = $scope.endTurn;
    $scope.$emit('whiteStart');
  };

  $scope.endTurn = function () {
    $scope.$emit('newTurn', 'black');
  };

  $scope.clickButton = $scope.startGame;

  $scope.$on('switchTurn', function (event, player) {
    $scope.buttonDisabled = (player !== 'white');
  });

  $scope.$on('countDown', function (event, player) {

    if (player === 'white') {
      whiteService.subtractSecond();
      $scope.updateTime();
      $scope.$apply();

      if (whiteService.getTime() === "00h 00m 00s") {
        $scope.$emit('lose', 'white');
      }
    }
  });
});

