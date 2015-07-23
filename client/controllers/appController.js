app.controller('appCtrl', function ($scope, appService) {
  var defaultMessage = "Press the WHITE button to start the game,\n" +
      "and WHITE again to switch turns.\n" + 
      "Player 2 can press BLACK to switch back.";

  $scope.appMessage = defaultMessage;

  $scope.$on('whiteStart', function (event) {
    appService.setPlayer('white');
    $scope.appMessage = "";
    $scope.$broadcast('startGame');
  });

  $scope.$on('setPlayerTime', function (event, time) {
    $scope.$broadcast('setTime', time);
  });

  $scope.$on('newTurn', function (event, player) {
    appService.setPlayer(player);
    $scope.$broadcast('switchTurn', player);
  });

  $scope.$on('lose', function (event, player) {
     player === "white" ? player = "White" : player = "Black";
     $scope.appMessage = player + " loses!"
     $scope.$broadcast('switchTurn', 'menu');
  });

  setInterval(function () {
    $scope.$broadcast('countDown', appService.getPlayer());
  }, 1000);
});

