'use strict';

/**
 * @ngdoc service
 * @name myApp.usercheck
 * @description
 * # usercheck
 * Factory in the myApp.
 */
angular.module('myApp')
  .factory('usercheck', function ($http, $q,regCall,loginCall) {
    return {
      'userRegister': function (name, username, password, cpassword, email) {
        var p = $q.defer();
        $http({
          method: 'post',
          data: {
            'username': username,
            'name': name,
            'password': password,
            'cpassword': cpassword,
            'email': email
          },
          url: regCall
        }).then(function (data) {
          p.resolve(data);
        }, function (err) {
          console.log(err);
          p.reject(err);
        })
        return p.promise;
      },
      'userLogin': function (username, password) {
        var p = $q.defer();
        $http({
          method: 'post',
          data: {
            'username': username,
            'password': password,
          },
          url: loginCall
        }).then(function (data) {
          p.resolve(data);
        }, function (err) {
          console.log(err);
          p.reject(err);
        })
        return p.promise;      }
    }
  });
