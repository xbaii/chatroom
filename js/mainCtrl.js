var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){

  $scope.getParseData = function() {
    parseService.getData().then(function(res){
      $scope.messages = res.data.results;
    })
  };


  $scope.postData = function() {
    parseService.postData($scope, message)
    .then(function(message){
    $scope.messages = message;
  });
};

  setInterval(function(){
    $scope.getParseData();
  }, 1500)
})
