'use strict';

let bodyParser = require('body-parser');
let configuration = require('../package.json');
let bus = require('./bus');
let httpListener = require('transports/http/httpListener');

let jsonParser = bodyParser.json();
let transportConfig = configuration.transport;
let endpoints = [];
let handlingRules = [];

function start(app, config) => {
	if(config && config.transport) transportConfig.transport = config.transport;
	_initTransportListener(transportConfig);
}

function _initTransportListener(transportConfig) {
	switch(transportConfig) {
		case 'http':
			httpListener.listenToMessagePost(app);
			break;
		default:
			throw `Can't start platibus with invalid transport config ${transportConfig}.
			Make sure it's defined in package.json`;
			break;
	}
}

module.exports = {
    start: start
}