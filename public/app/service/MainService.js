/**
 * Created by sfei on 8/10/2016.
 */
var app = angular.module('omega');
app.service('MainService', function ($http) {
    var me = this;
    me.generateReport = function (data) {
        return $http({
            url: 'api/upload',
            method: 'POST',
            data: data,
            responseType: 'blob'
        });
    };
});