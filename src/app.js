var express = require('express');
var app = express();
app.use(express.bodyParser());

app.put('/', function (request, response) {
  response.send(request.body.foo);
});


module.exports = app;
