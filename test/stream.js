const assert = require('assert');
const expect = require('chai').expect;

const Stream = require('../lib/stream');
const data = 'hello world';

describe('Stream', function () {
  it('should expose a constructor', function () {
    assert(typeof Stream, 'function');
  });
  
  it('should be able to write some data', function (done) {
    const stream = new Stream();

    stream.on('end', function () {
      const output = stream.compute();
      
      assert.equal(output['@data'][0], data);
      
      return done();
    });

    stream.write(data);
    stream.end();
  });
});
