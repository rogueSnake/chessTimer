var angular = require('angular'),
  timeManager = require('./timeManager'),
  app = angular.module('app', []);

playerTimer = timeManager.makePlayerTimer();
menuTimer = timeManager.makeMenuTimer(); 

app.controller('mainCtrl', ['$scope', function ($scope) {
  $scope.startTimeMinutes = 5;
  $scope.startTimeHours = 0;
  $scope.message = $scope.startTime;
  $scope.addMinute = function () {
    if ($scope.startTimeMinutes < 59) {$scope.startTimeMinutes += 1;}
    else {
      $scope.startTimeHours += 1;
      $scope.startTimeMinutes = 0;
    }
  };
  $scope.removeMinute = function () {

    if ($scope.startTimeMinutes > 0){
      $scope.startTimeMinutes -= 1;
    }

    else if ($scope.startTimeMinutes === 0 && $scope.startTimeHours > 0) {
      $scope.startTimeHours -= 1;
      $scope.startTimeMinutes = 59;
    }
  };  
}]);

