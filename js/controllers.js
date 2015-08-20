var myApp = angular.module('myApp', []);

myApp.controller('MyController', function($scope) {
  $scope.artist = {
    'name' : 'Jon Solong',
    'title': 'Staff member',
    'company' : 'Acer Corporation'
  }
});
