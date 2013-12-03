express = require('express');
var app = express();

app.get('/', function (request, response) {
var exec = require('child_process').exec;

// Below espeak takes text and transform it to an audio format (pho), than mbrola transform the pho file to raw audio and provides the voice and finally, lame transforms the raw audio to mp3.
exec('espeak -v mb-fr1 -q --pho -a 15 -p 50 -s 130 "donc ceci démontre que ça fonctionne bien" | mbrola /usr/share/mbrola/fr1/fr1 - - | lame -r -m m -b 24 -s 16 - - ',function (error, stdout, stderr) {    
    response.setHeader('Content-Disposition', 'inline; filename=test.mp3','Accept-Ranges', 'bytes', 'Content-Range', 'bytes', 'Content-Type', 'audio/mpeg', 'Transfer-Encoding', 'chunked');
    //console.log(typeof stdout);
    response.send(stdout);
    response.end();
 });
});
module.exports = app;
