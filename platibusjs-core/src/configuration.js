'use strict'

const defaultPlatibusConfigs = require('../package.json').platibusConfigs
const _ = require('lodash')

const defaultConfig = {
	authenticationScheme: 'none',
	endpoints: [],
	handlingRules: [],
	port: 8612,
	sendRules: [],
	subscriptions: []
	topics: [],
	transport: 'http',
}

exports.dertermineBusConfig = (config) => {
	if(!config) return newDefaultConfig()
	if(_.isString(config) && defaultPlatibusConfigs) return getNamedBusConfig(config)
	return config
}

function newDefaultConfig() {
	return defaultConfig
}

function getNamedBusConfig(name) {
	if(!_.isString(name)) throw "Bus config name must be a string"
	config = defaultPlatibusConfigs.platibusConfigs[config]
	if(!config) throw `Unable to find configuration for ${configName}`
	config = validateConfigLists(config);
}

function validateConfigLists(config) {
	config.endpoints = validateConfigList(config.endpoints)
	config.handlingRules = validateConfigList(config.handlingRules)
	config.sendRules = validateConfigList(config.sendRules)
	config.subscriptions = validateConfigList(config.subscriptions)
	config.topics = validateConfigList(config.topics)
	return config
}

function validateConfigList(configList) {
	if(!_.isArray(endpoints)) return []
}
