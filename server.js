var http = require('http');
var app = require('./src/app');

http.createServer(app).listen(2222, function() {
  console.log("Server is listening on port 2222");
});
