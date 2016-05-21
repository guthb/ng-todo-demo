var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems =[{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});


app.controller("TodoCtrl", function($scope){

  $scope.welcome = "hello";
  $scope.showListView = false;
  $scope.newTask = {};

  $scope.items =[
    {
      id: 0,
      task: "mow the lawn",
      isCompleted:true,
      dueDate:"12/5/17",
      assignedTo:"greg",
      location:"Zoe's house",
      urgency:"low",
      dependencies:["sunshine, clippers, hat, water, headphones"]

    },
    {
      id: 1,
      task: "grade quizes",
      isCompleted:true,
      dueDate:"12/5/15",
      assignedTo:"joe",
      location:"NSS",
      urgency:"low",
      dependencies:["wifi, tissues, vodka"]

    },
    {
      id: 2,
      task: "take a nap",
      isCompleted:true,
      dueDate:"12/5/16",
      assignedTo:"zoe",
      location:"Zoe's house",
      urgency:"high",
      dependencies:["hammock, cat, pillow, blanket"]

    }
  ];



  $scope.newItem = function(){
    console.log("You clicked new items");
    $scope.showListView = false;
  };

  $scope.allItem=function(){
    console.log("you clicked all items");
    $scope.showListView = true;
  };

  $scope.addNewItem= function(){
    $scope.newTask.isCompleted=false;
    $scope.newTask.id = $scope.items.length;
    console.log("you added a new item", $scope.newTask );
    $scope.items.push($scope.newTask);
    console.log("items",$scope.items );
    $scope.newTask="";
  };










});