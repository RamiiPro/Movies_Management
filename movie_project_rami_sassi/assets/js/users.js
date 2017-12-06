var myApp = angular.module('myApp',[]);
        
myApp.controller('usersController',function ($scope,$http) {

      $http({
        method : "GET",
        url : "http://127.0.0.1:3000/users",
        dataType: 'json'
    }).then(function mySuccess(response) {
        $scope.users = response.data;
    }, function myError(response) {
        $scope.users = response.statusText;
    });
});
