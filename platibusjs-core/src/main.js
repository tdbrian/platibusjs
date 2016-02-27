'use strict';

const bodyParser = require('body-parser');
const configuration = require('../package.json');
const bus = require('./bus');
const transports = require('./transports/transports')

const jsonParser = bodyParser.json();
const transportConfig = configuration.transport;

let endpoints = [];
let handlingRules = [];

function start(app, config) {
	if(config && config.transport) transportConfig.transport = config.transport;
	transports.setupTransport(transportConfig);
}

module.exports = {
    start: start
};
