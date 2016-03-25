var request = require('supertest');
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = require('../server');

context('Given there are no files in the media directory', function(){
  it('will respond with 404', function(done){
    request(app)
      .get('/foo')
      .expect(404, done);
  });
});

context('Given there is a single file in the media directory', function(){
  var fooFile = path.join(__dirname, '..', 'media', 'foo');

  before(function(){
    fs.writeFile(fooFile, 'bar');
  });

  after(function(){
    fs.unlink(fooFile);
  });

  it('will respond with a 200', function(done){
    request(app)
      .get('/foo')
      .expect(200, done);
  });
});
