var util = require('util');
var bleno = require('bleno');

var DiscoveryCharacteristric = require('./DiscoveryCharacteristic');

function DiscoveryService() {
    bleno.PrimaryService.call(this, {
        uuid: '3557',
        characteristics: [
            new DiscoveryCharacteristric(),
        ]
    });
}

util.inherits(DiscoveryService, bleno.PrimaryService);

module.exports = DiscoveryService;
