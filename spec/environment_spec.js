var exec = require('child_process').exec;

describe('the environment', function(){

  it('can find espeak', function(){
    exec('espeak -h', function(error, stdout, stderr){
      expect(error).toBe(null);
    });
  });

  it('can find mbrola', function(){
    exec('mbrola -h', function(error, stdout, stderr){
      expect(error).toBe(null);
    });
  });

  it('can find lame', function(){
    exec('lame -h', function(error, stdout, stderr){
      expect(error).toBe(null);
    });
  });

});
