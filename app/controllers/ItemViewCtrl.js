app.controller("ItemViewCtrl", function($scope, $http, $routeParams){

  // $scope.welcome = "hello";
  $scope.items = [];
  $scope.selectedItem = {};
  console.log($routeParams.itemId);

  $http.get(`https://ng-bg-todo.firebaseio.com/items.json`)  //firebaase

     .success(function(itemObject){
        // var itemCollection = itemObject.items; //local
        var itemCollection = itemObject;

        console.log("itemObject", itemObject);
        // returns all the key in an array
        Object.keys(itemCollection).forEach(function(key){
          // goes through every key in this array and writes back to the object the id as  a property
          // console.log("before",itemCollection[key] );
          itemCollection[key].id=key;
          // console.log("after",itemCollection[key] );
          $scope.items.push(itemCollection[key]);

          $scope.selectedItem = $scope.items.filter(function(item){
            return item.id === $routeParams.itemId;
          })[0]  //return the first thing in the array
        })
     });

});