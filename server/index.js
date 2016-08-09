/**
 * Created by sfei on 8/9/2016.
 */
'use strict';
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var express = require('./config/express'),
    config = require('./config/config'),
    winston = require('winston'),
    app,
    port = 3000;

app = express();
app.set('port', port);

var server = app.listen(app.get('port'), function() {
    winston.log('Server listening on port: ' + server.address().port);
});