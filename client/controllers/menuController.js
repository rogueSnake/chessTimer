app.controller('menuCtrl', function ($scope, menuService) {

  $scope.updateTime = function () {
    var time = menuService.getTime();

    $scope.addHourDisabled = (time > "99h 00m 00s");
    $scope.addMinuteDisabled = (time > "99h 59m 00s");
    $scope.addSecondDisabled = (time > "99h 59m 58s");
    $scope.removeHourDisabled = (time < "01h 00m 00s");
    $scope.removeMinuteDisabled = (time < "00h 01m 00s");
    $scope.removeSecondDisabled = (time < "00h 00m 01s");

    $scope.menuTime = time;
  };

  $scope.updateTime();

  $scope.addHour = function () {
    menuService.addHour();
    $scope.updateTime();
  };

  $scope.addMinute = function () {
    menuService.addMinute();
    $scope.updateTime();
  };

  $scope.addSecond = function () {
    menuService.addSecond();
    $scope.updateTime();
  };

  $scope.removeHour = function () {
    menuService.subtractHour();
    $scope.updateTime();
  }; 

  $scope.removeMinute = function () {
    menuService.subtractMinute();
    $scope.updateTime();
  };
 
  $scope.removeSecond = function () {
    menuService.subtractSecond();
    $scope.updateTime();
  }; 

  $scope.pause = function () {
    menuService.pause();
  };

  $scope.reset = function () {
    menuService.reset();
  };

  $scope.$on('startGame', function (event) {
    $scope.$emit('setPlayerTime', {
      hours : menuService.countHours(),
      minutes : menuService.countMinutes(),
      seconds : menuService.countSeconds()
    });
  });
});

