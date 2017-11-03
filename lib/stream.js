'use strict';

const util = require('util');
const Fabric = require('fabric');

function Stream (init) {
  this['@data'] = init || [];
  this.clock = 0;
  this.stack = [];
  this.known = {};
  
  this.init();
}

util.inherits(Stream, Fabric);

Stream.prototype.write = function (input) {
  this['@data'].push(input);
  this.emit('data', input);
};

Stream.prototype.end = function (input) {
  this['@data'].push(input || null);
  this.emit('end', input || null);
};

module.exports = Stream;
