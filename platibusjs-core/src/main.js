'use strict';

const transports = require('./transports/transports');
const configuration = require('./configuration');
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

function startTransport(transportConfiguration) {
	return transports.startTransport(transportConfiguration);
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
