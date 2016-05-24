app.controller("ItemListCtrl", function($scope, $http, $location){

  $scope.items =[];
    // old way Jqueryexample
    // $.ajax(function(){
    //   url:'../data.itmes.json'
    //   method:"GET"
    // }).done()

    //angular is called from  index.html  only  on "."
    // $http.get('./data/items.json') //local
    var getItems = function(){
    $http.get('https://ng-bg-todo.firebaseio.com/items.json')  //firebaase

     .success(function(itemObject){
        // var itemCollection = itemObject.items; //local
        var itemCollection = itemObject;

        console.log("itemObject", itemObject);
        // returns all the key in an array
        Object.keys(itemCollection).forEach(function(key){
          // goes through every key in this array and writes back to the object the id as  a property
          // console.log("before",itemCollection[key] );
          itemCollection[key].id=key;
          console.log("after",itemCollection[key] );
          $scope.items.push(itemCollection[key])
        })
     });
   }
   getItems();
     $scope.itemDelete = function(itemId){
      console.log("itemId",itemId );
      $http
        .delete(`https://ng-bg-todo.firebaseio.com/items/${itemId}.json`) //es6 method
        .success(function(response){
          console.log(response);
          $scope.items=[];
          getItems();
        })
     }

});