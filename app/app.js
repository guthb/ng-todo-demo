var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems =[{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});


app.controller("TodoCtrl", function($scope){

  $scope.welcome = "hello";

});