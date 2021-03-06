var request = require('supertest');
var path = require('path');
var fs = require('fs');
var app;

context('Given a media server with directory specified', function(){
  before(function(){
    process.env['MEDIA_DIRECTORY'] = path.join(__dirname, 'media');
    app = require('../server');
  });

  context('Given there are no files in the media directory', function(){
    it('will respond with 404', function(done){
      request(app)
        .get('/foo')
        .expect(404, done);
    });
  });

  context('Given there is a single file in the media directory', function(){
    var fooFile = path.join(__dirname, 'media', 'foo');

    before(function(){
      fs.writeFile(fooFile, 'bar');
    });

    after(function(){
      fs.unlink(fooFile);
    });

    it('will respond with a 200', function(done){
      request(app)
        .get('/foo')
        .expect(200, 'bar', done)
    });
  });

  context('Given there are tow files in the media directory', function(){
    var fooFile = path.join(__dirname, 'media', 'foo');
    var farFile = path.join(__dirname, 'media', 'far');
    
    before(function(){
      fs.writeFile(fooFile, 'bar');
      fs.writeFile(farFile, 'frump');
    });

    after(function(){
      fs.unlink(fooFile);
      fs.unlink(farFile);
    });

    it('will respond with a 200', function(done){
      request(app)
        .get('/far')
        .expect(200, 'frump', done);
    });

    it('will respond with a 200', function(done){
      request(app)
        .get('/foo')
        .expect(200, 'bar', done);
    });
  });
});
