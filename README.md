#Textreader

Textreader is a small Text To Speech server built on Espeak and Lame. It is
written in Node.js. Currently it only speaks French using the Mbrola fr1
voice. Others will added shortly.
While it uses the Mbrola voices it does not actually need Mbrola to be
installed.

##Installing dependencies:

###Ubuntu/Debian

    $ sudo apt-get install espeak lame mbrola-fr1

You will also obviously need Node.js installed. It's recommended to install it
from Chris Lea's PPA with:

    $ sudo add-apt-repository ppa:chris-lea/node.js

After that you should be able to run the server with:

    $ node server.js

###Windows

You will need to download the Lame encoder from [here](http://www.rarewares.org/mp3-lame-bundle.php)

Extract the contents and ensure that lame.exe is available in the PATH.

The same will need to happen for [Espeak](http://espeak.sourceforge.net/download.html).

When extracting Espeak you will notice there is an espeak-data/mbrola folder
inside.  You will need to download the Mbrola fr1 voice and put it in that
folder.  You can download the Mbrola fr1 voice (and others) from [here](http://tcts.fpms.ac.be/synthesis/mbrola/mbrcopybin.html)

##Usage:

    http://localhost:2222/vocalization/fr1?texte=Bonjour%20tout%20le%20monde

fr1 in the URL above refers to the mbrola voice you would like to use to read
the text. Replace that with any other voice you have installed.

If you care about the speed of the speech, you can control it with the wpm
param in the query string. This lets you specify the number of words per minute
spoken in the resulting audio file.

    http://localhost:2222/vocalization/fr1?texte=Bonjour%20tout%20le%20monde&wpm=200

The URL above will deliver an MP3 with the words "Bonjour tout le monde."
spoken at 200 words per minute.



The server will respond with MP3 data.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
