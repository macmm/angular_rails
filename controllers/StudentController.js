studentRoster.controller('StudentCtrl', function StudentCtrl($scope, StudentsFactory) {
  $scope.students = StudentsFactory.students;
  $scope.StudentsFactory = StudentsFactory;
});
