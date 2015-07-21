app.controller('appCtrl', function ($scope, appService) {

  $scope.$on('whiteStart', function (event) {
    $scope.$broadcast('startGame');
  });

  $scope.$on('setPlayerTime', function (event, time) {
    $scope.$broadcast('setTime', time);
  });
});

