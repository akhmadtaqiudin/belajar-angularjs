'use strict'
angular.module('app')

     /** login, logout, register */
    .factory('loginFactory', function ($http, Config, $http_action) {
        return {
            login: function (data, headers) {
                url = Config.api + '/api/login';
                return $http.post(url, data, headers);
            },
            logout: function (data, headers) {
                url = Config.api + '/api/logout';
                return $http.post(url, data, headers);
            },
            register: function (data, headers) {
                url = Config.api + '/api/registrasi';
                return $http.post(url, data, headers);
            }
        };
    })