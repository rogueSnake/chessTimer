app.controller('menuCtrl', function ($scope, menuService) {

  $scope.updateTime = function () {
    $scope.addHourDisabled = !menuService.canAddHour();
    $scope.addMinuteDisabled = !menuService.canAddMinute();
    $scope.addSecondDisabled = !menuService.canAddSecond();
    $scope.removeHourDisabled = !menuService.canSubtractHour();
    $scope.removeMinuteDisabled = !menuService.canSubtractMinute();
    $scope.removeSecondDisabled = !menuService.canSubtractSecond();

    $scope.menuTime = menuService.getTime();;
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
    $scope.addHourDisabled = true;
    $scope.addMinuteDisabled = true;
    $scope.addSecondDisabled = true;
    $scope.removeHourDisabled = true;
    $scope.removeMinuteDisabled = true;
    $scope.removeSecondDisabled = true;
  });
});

