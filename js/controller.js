var studentRoster = angular.module('studentRoster', []);

studentRoster.controller('StudentCtrl', function StudentCtrl($scope) {
  $scope.students = [];
});
