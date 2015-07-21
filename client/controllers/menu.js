var menuController = function ($scope, menuService) {
  $scope.menuTime = menuService.getTime();

  $scope.updateTime = function () {
    $scope.menuTime = menuService.getTime();
  };

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

  };

  $scope.reset = function () {

  };

  $scope.$on('startGame', function (event) {
    $scope.$emit('setPlayerTime', {
      hours : menuService.countHours(),
      minutes : menuService.countMinutes(),
      seconds : menuService.countSeconds()
    });
  });
};

module.exports = menuController;

