var http = require('http');
var app = require('./src/app');

http.createServer(app).listen(2222, function() {
  console.log("S.V.P. veuillez patienter... la vie est belle :)");
});
