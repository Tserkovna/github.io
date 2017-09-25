var app = angular.module('students', ["ui.router"]);

app.service('students', function($http) {
  function getStudents(callback) {
        $http({
          method: 'GET',
          url: 'data/students.json',
          cache: false
        }).then(callback);
      };
    
      return {
        list : getStudents
      }
});

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  $stateProvider
    .state('students', {
      url: "/students",
      templateUrl: "templates/studentsList.html",
      controller: function ($scope, students) {
        students.list(function (response) {
          $scope.students = response.data;
        });
      }

    })
    .state('new-rp', {
      url: '/student/:id',
      templateUrl: "templates/student.html",
      controller: function ($scope, students, $stateParams) {
        $scope.id = $stateParams.id;
        students.list(function (response) {
          $scope.students = response.data;
          for (var i = 0; i < $scope.students.length; i++) {
            if($scope.students[i].id == $scope.id) {
              $scope.student = $scope.students[i];
            }
           }
        });

         
    }
  });
  

});