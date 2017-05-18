var util = require('util');
var bleno = require('bleno');
var ip = require('ip');

function DiscoveryCharacteristric() {
  bleno.Characteristic.call(this, {
    uuid: '3551',
    properties: ['read'],
    value: null,
    descriptors: [
      new bleno.Descriptor({
        uuid: '2901',
        value: "Get the IP address of the device"
      })
    ]
  });
  this._value = new Buffer(0);
}

util.inherits(DiscoveryCharacteristric, bleno.Characteristic);

DiscoveryCharacteristric.prototype.onReadRequest = function(offset, callback) {
  if(!offset) {
    data = ip.address();
    this._value = new Buffer(data)
  }
  callback(this.RESULT_SUCCESS, this._value.slice(offset, this._value.length));
};

module.exports = DiscoveryCharacteristric;
