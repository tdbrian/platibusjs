'use strict';

const bodyParser = require('body-parser');
const configuration = require('../package.json');
const bus = require('./bus');
const transports = require('./transports/transports');

const jsonParser = bodyParser.json();
let configTransport = configuration.transport;

let endpoints = [];
let handlingRules = [];

function start(config) {
	if(config && config.transport) configTransport = config.transport;
	transports.initTransport(configTransport);
}

module.exports = {
    start: start
};
