var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();

var mediaDirectory = process.env['MEDIA_DIRECTORY'] || path.join(__dirname, 'media');
fs.readdir(mediaDirectory, function(error, files) {
  console.log('Found the following media: ' + files.toString());
});

console.log('Serving media from ' + mediaDirectory);

app.use('/', express.static(mediaDirectory));

app.use(function(error, request, response, next){
  console.error(error.stack);
  response.send(500).send(error.stack);
});

app.listen(3000);

module.exports = app;
