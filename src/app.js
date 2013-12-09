var tmp = require('tmp');
var express = require('express');
var app = express();
app.use(express.bodyParser());

app.get('/vocalization/:voix', function (request, response) {
  response.header('Content-Type', 'audio/mpeg');
  var spawn = require('child_process').spawn;

  tmp.tmpName(function _tempNameGenerated(err, espeakTmpfile) {
    if (err) throw err;
    var decodedText = decodeURIComponent(request.query.texte);
    var espeak = spawn('espeak', ['-vmb-' + request.params.voix , '-w' + espeakTmpfile , '-s130', decodedText]);

    espeak.on('exit', function(exitCode){
      tmp.tmpName(function _tempNameGenerated(err, lameTmpfile) {
        if (err) throw err;
        // volume normalization with fast replaygain is used by default.
        var options = ['-r', '-mm', '--silent', '-b24', '-s16', espeakTmpfile, lameTmpfile];
        var lame = spawn('lame', options);

        lame.on('exit', function(exitCode){
          response.sendfile(lameTmpfile);
        });

        lame.stderr.on('data', function(data){
          console.log("Lame error: " + data);
        });

      });
    });

    espeak.stderr.on('data', function(data){
      console.log("Espeak error: " + data);
    });

  });

});


module.exports = app;
