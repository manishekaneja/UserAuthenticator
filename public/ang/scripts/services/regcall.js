'use strict';

/**
 * @ngdoc service
 * @name myApp.regCall
 * @description
 * # regCall
 * Constant in the myApp.
 */
angular.module('myApp')
  .constant('regCall', 'http://localhost:3000/register');
  angular.module('myApp')
  .constant('loginCall', 'http://localhost:3000/login');
