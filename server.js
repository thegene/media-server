var path = require('path');

var express = require('express');
var app = express();

var mediaDirectory = process.env['MEDIA_DIRECTORY'] || path.join(__dirname, 'media');

app.use('/', express.static(mediaDirectory));

app.listen(3000);

module.exports = app;
