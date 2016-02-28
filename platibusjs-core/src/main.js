'use strict';

const bodyParser = require('body-parser');
const configuration = require('../package.json');
const bus = require('./bus');
const transports = require('./transports/transports');
const _ = require('lodash');

const jsonParser = bodyParser.json();

let endpoints = [];
let handlingRules = [];

function start(config) {
	config = _dertermineConfig(config);
	transports.initTransport(config);
}

function _dertermineConfig(config) {
	if(!config) config = _getDefaultConfig();
	if(_.isString(config)) config = configuration[config];
	return config;
}

function _getDefaultConfig() {
	return {
		transport: 'http',
  	port: 80612,
  	authenticationScheme: 'none',
  	endpoints: [],
  	topics: [],
  	sendRules: [],
  	handlingRules: [],
  	subscriptions: []
  };
}

module.exports = {
    start: start
};
