var myApp = angular.module('myApp', []);

myApp.controller("MyController", function($scope) {
    $scope.author = {
      'name' : 'John Doe',
      'title': 'Staff',
      'company' : 'Acer Corporation'
    }
});
