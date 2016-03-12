'use strict'

const configuration = require('./configuration');
const transports = require('./transports/transports')
const Bus = require('./bus').Bus

let buses = []

exports.startBus = (config) => {
    let busConfig = configuration.dertermineBusConfig(name);
    let bus = new Bus();
}

exports.startBuses = (busConfigurations) => {
    // TODO: Implement
}

exports.stopAllBuses = () => {
    // TODO: Implement
}
