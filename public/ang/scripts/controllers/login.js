'use strict';

/**
 * @ngdoc function
 * @name myApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myApp
 */
angular.module('myApp')
  .controller('LoginCtrl', function ($scope, $timeout, usercheck) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.log = function () {
      var username = $scope.username;
      var password = $scope.password;
      var promise = usercheck.userLogin(username, password);
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
      })

    }
  });
