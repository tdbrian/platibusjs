'use strict';

const configuration = require('../package.json');
const _ = require('lodash');

function dertermineConfig(config) {
	if(!config) config = _getDefaultConfig();
	if(_.isString(config)) config = configuration[config];
	return config;
}

function _getDefaultConfig() {
	return {
		transport: 'http',
  	port: 8612,
  	authenticationScheme: 'none',
  	endpoints: [],
  	topics: [],
  	sendRules: [],
  	handlingRules: [],
  	subscriptions: []
  };
}

module.exports = {
  dertermineConfig: dertermineConfig
};
