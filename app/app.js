var app = angular.module("TodoApp", ["ngRoute"])
.constant ("firebaseURL","https://ng-bg-todo.firebaseio.com/");


let isAuth = (AuthFactory) => new  Promise ((resolve, reject) =>  {
  if (AuthFactory.isAuthenticated()){
    console.log("User is authenticated resolve route promise");
    resolve();
  } else {
    console.log("user is not authenticated, reject route promise");
    reject();
  }
})

app.config(function($routeProvider){
  $routeProvider.

    when("/",{
      templateUrl:"partials/item-list.html",
      controller:"ItemListCtrl",
      resolve: {isAuth}
    }).
    when("/items/list",{
      templateUrl:"partials/item-list.html",
      controller:"ItemListCtrl",
      resolve: {isAuth}
    }).
    when("/items/new",{
      templateUrl:"partials/item-new.html",
      controller:"ItemNewCtrl",
      resolve: {isAuth}
    }).
    // when("/items/details",{
    //   templateUrl:"partials/item-details.html",
    //   controller:"ItemViewCtrl"
    // }).
    when('/items/:itemId', {
      templateUrl:"partials/item-details.html",
      controller:"ItemViewCtrl",
      resolve: {isAuth}
    }).

    when('/items/:itemId/edit', {
      templateUrl:"partials/item-new.html",
      controller:"ItemEditCtrl",
      resolve: {isAuth}
    }).

    when('/login', {
      templateUrl:"partials/login.html",
      controller:"LoginCtrl"
    }).

    when('/logout', {
      templateUrl:"partials/login.html",
      controller:"LoginCtrl"
    }).

    otherwise("/");

});

app.run(($location) => {
  let todoRef = new Firebase('https://ng-bg-todo.firebaseio.com/');
  todoRef.onAuth( authData => {
    if(!authData) {
      $location.path('/login');
    }
  }) //firebase method
})
