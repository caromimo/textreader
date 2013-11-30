var http = require('http');
var express = require ('express');
var app = express();
http.createServer(app).listen(2222, function() { 
  console.log("S.V.P. veuillez patienter... la vie est belle :)");
});
app.get('/', function (request, response) {
  response.send("Bonjour!");
});
