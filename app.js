var studentRoster = angular.module('studentRoster', ['ngRoute']);

studentRoster.config(function ($routeProvider) {
   $routeProvider
      .when('/',
      {
        controller: 'StudentCtrl',
        templateUrl: 'views/Students.html'
      })
 });
