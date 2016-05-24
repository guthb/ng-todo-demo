'use strict';

app.factory("itemStorage", function($q, $http){


  var getItemList = function(){
    var items =[];
    return $q(function(resolve, reject){
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
            // console.log("after",itemCollection[key] );
            items.push(itemCollection[key])
           })
          resolve(items);
        })
        .error(function(error){
           reject(error);
        });
    })
  }

  var deleteItem = function (itemId){

  return $q(function(resolve, reject){
      $http
        .delete(`https://ng-bg-todo.firebaseio.com/items/${itemId}.json`)
        .success(function(objectFromFirebase){
          resolve(objectFromFirebase);
        })

    })
}


  return {getItemList:getItemList, deleteItem:deleteItem}


})