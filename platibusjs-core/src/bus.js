'use strict';

const transports = require('./transports/transports');

class Bus {
	constructor(configuration) {
		this.endpoints = configuration.endpoints;
		this.topics = configuration.topics;
		this.sendRules = configuration.sendRules;
		this.handlingRules = configuration.handlingRules;
		this.subscriptions = configuration.subscriptions;
	}

	init(configOptions) {
		if(configOptions.endpoints) this.endpoints = configOptions.endpoints;
		if(configOptions.topics) this.topics = configOptions.topics;
		if(configOptions.sendRules) this.sendRules = configOptions.sendRules;
		if(configOptions.handlingRules) this.handlingRules = configOptions.handlingRules;
		if(configOptions.subscriptions) this.subscriptions = configOptions.subscriptions;
	}

	startTransport(transportConfiguration) {
		return transports.startTransport(transportConfiguration);
	}

	stopTransport(name) {
		return transports.stopTransport();
	}
}

module.exports = {
	Bus: Bus
};
