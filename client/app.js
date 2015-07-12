var angular = require('angular'),
  app = angular.module('app', []);

app.controller('mainController', ['$scope', function ($scope) {
  $scope.message = "Not really a chess timer yet.";
}]);

