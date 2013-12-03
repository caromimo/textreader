var exec = require('child_process').exec;

describe('the environment', function(){

  it('can find espeak', function(done){
    exec('espeak -h', function(error, stdout, stderr){
      expect(stdout).toMatch(/eSpeak/);
      done();
    });
  });

  it('can find mbrola', function(done){
    exec('mbrola -h', function(error, stdout, stderr){
      expect(stdout).toMatch(/USAGE/);
      done();
    });
  });

  it('can find lame', function(done){
    exec('lame -h', function(error, stdout, stderr){
      // programs that execute successfully return
      // 0 as their exit code, and any other number
      // to indicate some sort of failure.
      // lame -h returns an exit code of 1 for some
      // reason, so node puts the output in the error
      // variable. Grrr. So... what's the word? LAME.
      expect(error).toMatch(/LAME/);
      done();
    });
  });

});
