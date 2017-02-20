/**
 * Created by admin on 2017/2/20.
 */
var app = angular.module('Demo', []);
app.controller('DemoCtrl', function ($scope, $http) {
    $http({
        url: 'data.json',
        method: 'GET',
        params: {
            'username': 'tan'
        }
    }).success(function (data, header, config, status) {
        //响应成功
    }).error(function (data, header, config, status) {
        //处理响应失败
    });
});