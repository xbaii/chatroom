var app = angular.module('chatroom');

app.service('parseService', function($http){

  this.postData = function() {
    return $http({
      method: 'POST',
      data: info,
      url: 'https://api.parse.com/1/classes/chat'
    })
  };

  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/chat?order=-createdAt'
    })
  };


});
