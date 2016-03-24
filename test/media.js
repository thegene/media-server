var request = require('supertest');
var express = require('express');

var app = require('../server');

context('Given there are no files in the media directory', function(){
  it('will respond with 404', function(done){
    request(app)
      .get('/foo')
      .expect(404, done);
  });
});
