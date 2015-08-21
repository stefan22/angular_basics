var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
});
