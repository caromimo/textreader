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

  it('responds to /vocalization/fr/homme', function(done){
    var urllink = "http://localhost:3333/vocalization/fr/homme";
    request.get({url: urllink }, function(error, response, body){
      // there is no decernable way to test for headers here even though they
      // are definitely being sent. The body is just binary data so I guess all
      // that is left is the response code:
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

});

