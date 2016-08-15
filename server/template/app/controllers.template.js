/**
 * Created by sfei on 8/11/2016.
 */

var app = angular.module('template');
app.controller('MainController', function ($scope, MainService) {
    var me = this;
    $scope.reports = [];
    $scope.updateData = function (data) {
        $scope.reports = processData(data);
    };

    function processData(rawData) {
        var data = [];
        _.forEach(rawData, function (report) {
            data.push(report);
        });
        return data;
    }
});