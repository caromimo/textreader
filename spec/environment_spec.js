
describe('the environment', function(){

  it('can find espeak', function(done){
    var exec = require('child_process').exec;
    exec('espeak -h', function(error, stdout, stderr){
      expect(stdout).toNotEqual('');
      done();
    });
  });

  it('can find mbrola', function(done){
    var exec = require('child_process').exec;
    exec('mbrola -h', function(error, stdout, stderr){
      expect(stdout).toNotEqual('');
      done();
    });
  });

  it('can find lame', function(done){
    var exec = require('child_process').exec;
    exec('lame -h', function(error, stdout, stderr){
      expect(stdout).toNotEqual('');
      done();
    });
  });

});
