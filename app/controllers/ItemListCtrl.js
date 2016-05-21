app.controller("ItemListCtrl", function($scope){
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
});