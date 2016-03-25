var express = require('express');
var app = express();

app.use('/', express.static('media'));

module.exports = app;
