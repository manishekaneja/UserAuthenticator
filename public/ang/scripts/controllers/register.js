'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('RegisterCtrl', function ($scope, $timeout, usercheck) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.reg = function () {
      var username = $scope.username;
      var password = $scope.password;
      var name = $scope.name;
      var cpassword = $scope.cpassword;
      var email = $scope.email;
      var promise = usercheck.userRegister(name, username, password, cpassword, email);
      promise.then(function (data) {
        console.log(data);
        $scope.result = data.data.message;
        if (data.data.status) {
          $scope.successbox = true;
          $timeout(function () {
            if ($scope.successbox) {
              $scope.successbox = false;
            }
          }, 1000);
        }
        else {
          $scope.result = data.data.message;

          $scope.failbox = true;

          $timeout(function () {
            if ($scope.failbox) {
              $scope.failbox = false;
            }
          }, 1000);
        }
      }, function (err) {
        console.log(err);
        $scope.errbox = true;
        $timeout(function () {
          if ($scope.errbox) {
            $scope.errbox = false;
          }
        }, 1000);

      })

    }
  });
