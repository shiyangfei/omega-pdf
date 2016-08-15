/**
 * Created by sfei on 8/10/2016.
 */
'use strict';

var _ = require('lodash'),
    winston = require('winston'),
    phantom = require('phantom'),
    phInstance;

exports.upload = function (req, res, next) {
    var data = req.body;
    winston.info(data);
    startProcess(data, res);
};

function startProcess(data, res) {
    var page,
        fileName,
        filePath;
    phantom.create()
        .then(function (instance) {
            winston.info(new Date + ': phantom created');
            phInstance = instance;
            return phInstance.createPage();
        })
        .then(function (pg) {
            winston.info(new Date + ': page created');
            page = pg;
            return page.property('paperSize', {
                format: 'A4',
                orientation: 'portrait',
                margin: '0.5cm'
            });
        })
        .then(function () {
            winston.info(new Date + ': page paper size set');
            return page.open('template/template.html');
        })
        .then(function () {
            //Put the CSV data into template
            return page.evaluate(function (data) {
                var $scope = angular.element(document.body).scope();
                $scope.updateData(data);
                $scope.$apply();
            }, data);
        })
        .then(function () {
            winston.info(new Date + ': page content set');
            fileName = new Date().getTime() + '.pdf';
            filePath = '/file/' + fileName;
            return page.render(filePath, {format: 'pdf'})
        })
        .then(function () {
            winston.info(new Date + ': page rendered');
            return page.close();
        })
        .then(function () {
            winston.info(new Date + ': page closed');
            return phInstance.exit();
        })
        .then(function () {
            winston.info(new Date + ': phantom exited');
            res.download(filePath, fileName, function (err) {
                    if (err) {
                        winston.error(err)
                    } else {
                        winston.info(new Date + ': download completed');
                    }
                }
            );
        });
}