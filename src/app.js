var tmp = require('tmp');
var express = require('express');
var util = require('util');
var app = express();
app.use(express.bodyParser());

app.set('view engine', 'jade');
app.set('views','./views');

app.get('/vocalization/:voix', function (request, response) {
  var spawn = require('child_process').spawn;

  tmp.tmpName(function _tempNameGenerated(err, espeakTmpfile) {
    if (err) throw err;
    var decodedText = decodeURIComponent(request.query.texte);
    var espeak = spawn('espeak', ['-vmb-' + request.params.voix , '-w' + espeakTmpfile , '-s130', decodedText]);

    espeak.on('exit', function(exitCode){
      tmp.tmpName(function _tempNameGenerated(err, lameTmpfile) {
        if(err) throw err;
        if(exitCode === 0){
          // volume normalization with fast replaygain is used by default.
          var options = ['-r', '-mm', '--little-endian', '--silent', '-b128', '-s16', espeakTmpfile, lameTmpfile];
          var lame = spawn('lame', options);

          lame.on('exit', function(exitCode){
            if(err) throw err;
            var stat = fs.statSync(lameTmpfile);
            response.header('Content-Type', 'audio/mpeg');
            response.header('Content-Length', stat.size - 1);
            // There is a click that appears at the beginning of the audio.
            // we start reading 1 byte in to avoid it:
            var readstream = fs.createReadStream(lameTmpfile, {start: 1});
            readstream.pipe(response);
          });

          lame.stderr.on('data', function(data){
            console.log("Lame error: " + data);
          });
        };

      });
    });

    espeak.stderr.on('data', function(data){
      response.status(404);
      response.render('404', {error: data});
    });

  });

});


module.exports = app;
