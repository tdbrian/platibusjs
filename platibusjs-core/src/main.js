'use strict';

const configuration = require('./configuration');
const Bus = require('./bus').Bus;
const _ = require('lodash');

let endpoints = [];
let handlingRules = [];

function startTransports(configurations) {
	if(_.isFunction(config)) {
		return startTransportsWithDefault();
	} else {
		let services = configuration.dertermineConfig(configurations);
		return transports.initTransports(services);
	}
}

function startTransportsWithDefault() {
	let cservices = configuration.dertermineConfig();
	return transports.initTransports(services);
}

function startBus(transportConfiguration) {
	let bus = new Bus();
	return bus.init(transportConfiguration);
}

function stopTransport(name) {
	return transports.stopTransport();
}

module.exports = {
    startAll: startTransports,
	start: startTransport,
	stopAll: stopTransports,
	stop: stopTransport
};
