'use strict';

const bodyParser = require('body-parser');
const configuration = require('../package.json');
const bus = require('./bus');
const transports = require('./transports/transports');
const _ = require('lodash');

const jsonParser = bodyParser.json();
let configTransport = configuration.transport;

let endpoints = [];
let handlingRules = [];

function start(config) {
	if(_.isString(config)) config = configuration[config];
	if(!config) throw 'There is no configuration';
	transports.initTransport(config);
}

module.exports = {
    start: start
};
