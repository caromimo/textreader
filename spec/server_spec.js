var request = require('request');
var app = require('../src/app');
var server;

describe('textreader', function(){

  beforeEach(function(done){
    server = app.listen(3333, function (err, result) {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
  });

  afterEach(function(){
    server.close();
  });

  it('responds to /', function(done){
      request.get("http://localhost:3333", function(error, response, body){
        expect(body).toEqual('Bonjour!');
        done();
      });
  });

});

