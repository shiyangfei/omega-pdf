/**
 * Created by sfei on 8/10/2016.
 */
var app = angular.module('omega');
app.directive('fileChange', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var onChangeHandler = scope.$eval(attrs.fileChange);
            element.bind('change', onChangeHandler);
        }
    };
});