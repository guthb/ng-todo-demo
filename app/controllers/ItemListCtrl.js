app.controller("ItemListCtrl", function($scope, $http, $location, itemStorage){

  $scope.items =[];

    itemStorage.getItemList().then(function(itemCollection){
      console.log("itemcollection from promise", itemCollection);
      $scope.items = itemCollection;
    })

   // getItems();
     $scope.itemDelete = function(itemId){
      //console.log("itemId",itemId );
      itemStorage.deleteItem(itemId).then(function(response){
            // $scope.items =[]
          itemStorage.getItemList().then(function(itemCollection){
            $scope.items = itemCollection;
          })
      })

    }

    $scope.inputChange = function(item){
      itemStorage.updateCompletedStatus(item)
      .then(function(response){
        console.log("response", response);
      })
    }

});