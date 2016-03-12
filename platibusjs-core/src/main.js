'use strict'

const busManager = require('./bus-manager')
const _ = require('lodash')

exports.startAll = (busConfigurations) => {
	busManager.startAllBuses(busConfigurations);
}

exports.start = (busConfiguration) => {
	let configuration = configuration.dertermineConfig(busConfiguration)
	return transports.initBus(configuration)
}

function stopBus(name) {
	return transports.stopTransport()
}

function stopAllBuses() {

}
