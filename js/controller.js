var studentRoster = angular.module('studentRoster', []);

studentRoster.controller('StudentCtrl', function StudentCtrl($scope) {
  $scope.students = [];
  $scope.addStudent = function() {
    $scope.students.push({"name": $scope.studentName});
    $scope.studentName = null;
  };
});
