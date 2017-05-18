var bleno = require('bleno');

var DiscoveryService = require('./DiscoveryService');

var name = "Poppy Ergo Jr.";

console.log('bleno - Poppy Ergo Jr.');

bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);

  if (state === 'poweredOn') {
    bleno.startAdvertising(name, ['ec00']);
  } else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(error) {
  console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

  if (!error) {
    bleno.setServices([
      new DiscoveryService()
    ]);
  }
});
