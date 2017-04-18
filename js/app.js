(function () {
  'use strict';

  var movieApplication = angular.module('movieApplication', []);

  movieApplication.controller('DataController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.selectedMovie = '';
    $scope.loaded = false;
    $scope.shipping = 2;
  }]);
})();
