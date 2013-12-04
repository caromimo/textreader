var tmp = require('tmp');
var express = require('express');
var app = express();
app.use(express.bodyParser());

app.get('/vocalization/fr/homme', function (request, response) {
  response.header('Content-Type', 'audio/mpeg');
  response.header('Content-Disposition', 'inline; filename=test.mp3');
  var exec = require('child_process').exec;
  var text = request.query.texte;


  tmp.tmpName(function _tempNameGenerated(err, tempfile) {
    if (err) throw err;
    // Below espeak takes text and transform it to an audio format (pho), than
    // mbrola transform the pho file to raw audio and provides the voice and
    // finally, lame transforms the raw audio to mp3.
    var command = 'espeak -v mb-fr1 -q --pho -a 15 -p 50 -s 130 "' + text + '" | mbrola /usr/share/mbrola/fr1/fr1 - - | lame -r -m m -b 24 -s 16 - ' + tempfile;
    exec(command, function (error, stdout, stderr) {
      response.sendfile(tempfile);
    });
  });
});


module.exports = app;
