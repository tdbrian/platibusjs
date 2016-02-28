'use strict';

const configuration = require('../package.json');
const _ = require('lodash');

function dertermineConfig(config) {
	let configName = config;
	if(!config) config = _getDefaultConfig();

	if(_.isString(config) && configuration.platibusConfigs) {
		config = configuration.platibusConfigs[config];
		if(!config) throw `Unable to find configuration for ${configName}`;
	}

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
