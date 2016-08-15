/**
 * Created by sfei on 8/10/2016.
 */
'use strict';

var ctrl = require('../controller/UploadController.server.js');

module.exports = function (app) {
    app.route('/api/upload')
        .post(ctrl.upload);
};