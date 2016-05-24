'use strict'

app.controller("ItemNewCtrl", function($scope, $http, $location){

  // $scope.newTask = {}; //local
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    locations: "",
    task: "",
    urgency: ""
  };

  // $scope.items =[]  //remved as will ge going to new controller

  // $scope.addNewItem= function(){
    // $scope.newTask.isCompleted=false;
    // $scope.newTask.id = $scope.items.length;
    // console.log("you added a new item", $scope.newTask );
    // $scope.items.push($scope.newTask);
    // console.log("items",$scope.items );
    // $scope.newTask="";
  $scope.addNewItem= function(){
    $http.post("https://ng-bg-todo.firebaseio.com/items.json",
      JSON.stringify({
        assignedTo:  $scope.newTask.assignedTo,
        dependencies: $scope.newTask.dependencies,
        dueDate: $scope.newTask.dueDate,
        isCompleted: $scope.newTask.isCompleted,
        locations: $scope.newTask.locations,
        task: $scope.newTask.task,
        urgency: $scope.newTask.urgency
      })
      )
      .success(function(response){
        console.log("response",response );
        $location.url("/items/list")
      })


  };
});