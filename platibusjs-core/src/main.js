'use strict';

const transports = require('./transports/transports');
const configuration = require('./configuration');
const _ = require('lodash');

let endpoints = [];
let handlingRules = [];

function start(config, cb) {
	if(_.isFunction(config)) {
		cb = config;
		_startWithDefault(cb);
	} else {
		config = configuration.dertermineConfig(config);
		transports.initTransport(config, cb);
	}
}

function _startWithDefault(cb) {
	let config = configuration.dertermineConfig();
	transports.initTransport(config, cb);
}

module.exports = {
    start: start
};
