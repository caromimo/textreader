var http = require('http');
var app = require('./src/app');

http.createServer(app).listen(2222, function() {
  console.log("Le serveur est activé et à l'écoute sur le port 2222");
});
