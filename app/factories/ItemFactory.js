'esversion: 6'
app.factory("itemStorage", function($q, $http, firebaseURL){


  var getItemList = function(){
    var items =[];
    return $q(function(resolve, reject){
      $http.get(firebaseURL + `items.json`)  //firebaase
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
            items.push(itemCollection[key]);
           });
          resolve(items);
        })
        .error(function(error){
           reject(error);
        });
    });
  };

  var deleteItem = function (itemId){

  return $q(function(resolve, reject){
      $http
        .delete(firebaseURL +`items/${itemId}.json`)
        .success(function(objectFromFirebase){
          resolve(objectFromFirebase);
        });

        });
};


  var postNewItem = function(newItem){
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + `items.json`,
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase); //promise word
                }
            );
        });
  };



var getSingleItem = function(itemId) {


    return $q(function(resolve, reject){
      $http.get(firebaseURL + `items/${itemId}.json`)  //firebaase
        .success(function(itemObject){
        // var itemCollection = itemObject.items; //local

          resolve(itemObject);
        })
        .error(function(error){
           reject(error);
        });
    });
}

  var putItem = function(itemId, newItem){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + `items/${itemId}.json`,
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase); //promise word
                }
            );
        });
  };



  var updateCompletedStatus = function(newItem){
          return $q(function(resolve, reject) {
              $http.put(
                  firebaseURL + `items/${newItem.id}.json`,
                  JSON.stringify({
                      assignedTo: newItem.assignedTo,
                      dependencies: newItem.dependencies,
                      dueDate: newItem.dueDate,
                      isCompleted: newItem.isCompleted,
                      location: newItem.location,
                      task: newItem.task,
                      urgency: newItem.urgency
                  })
              )
              .success(
                  function(objectFromFirebase) {
                      resolve(objectFromFirebase); //promise word
                  }
              );
          });
    };







  return {putItem:putItem, getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem, getSingleItem:getSingleItem, updateCompletedStatus:updateCompletedStatus}

});