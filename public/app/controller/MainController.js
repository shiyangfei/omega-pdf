/**
 * Created by sfei on 8/10/2016.
 */
var app = angular.module('omega');
app.controller('MainController', function ($scope, MainService, toastr) {
    var me = this;
    $scope.errorMsg = null;
    $scope.fileValid = false;
    me.fileData = null;

    me.onFileChange = function (event) {
        var file = event.target.files[0],
            data,
            validationResult;
        Papa.parse(file, {
            header: true,
            complete: function (results) {
                validationResult = validateCSVFile(results);
                if (validationResult.valid) {
                    $scope.errorMsg = null;
                    $scope.fileValid = true;
                    me.fileData = results.data;
                } else {
                    $scope.errorMsg = validationResult.errors.join('<br>');
                    $scope.fileValid = false;
                }
            }
        });
    };

    me.onSubmitBtnClick = function () {
        var fileName,
            file;
        if ($scope.fileValid && me.fileData) {
            MainService.generateReport(me.fileData)
                .then(function (res) {
                    if (res) {
                        fileName = getFileName(res);
                        file = new Blob([res.data], {type: "application/pdf"});
                        saveAs(file, fileName);
                        $('.fileinput').fileinput('clear');
                        toastr.success('File uploaded');
                    }
                })
        } else {
            toastr.error('Please select a valid CSV file');
        }
    };

    function validateCSVFile(results) {
        var me = this,
            result = {
                valid: true,
                errors: []
            };
        //TODO: Add more validation rules
        if (!results.meta || !results.meta.fields) {
            result.valid = false;
            result.errors.push('Missing column headers')
        }
        return result;
    }

    function getFileName(res) {
        var fileName;
        try {
            fileName = res.headers()['content-disposition'].split('filename=')[1].replace('"', '').replace('"', '');
        } catch (e) {
            console.error('failed to get file name from server response header');
            fileName = new Date().getTime() + '.pdf'
        }
        return fileName;
    }
});