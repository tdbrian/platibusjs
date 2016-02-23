'use strict';

const _ = require('lodash');
const configuration = require('../../../package.json');
const httpConfiguration = require('httpConfiguration');
const http = require('http');

function start(configSectionName) {
	let config = _getConfiguration(configSectionName);
	var keepAliveAgent = new http.Agent({ keepAlive: true });
	http.request({ agent: keepAliveAgent }, onResponseCallback);
}

function _initHttpListener(baseUri, authenticationSchemes) {

}

function _init() {

}

function _listen() {

}

function _getConfiguration(configSectionName) {
	if (!configSectionName) configSectionName = "platibus.httpserver";
	let configuration = configuration[configSectionName];
	if (!configuration) configuration = httpConfiguration.getDefaultConfiguration();
	return configuration;
}

module.exports = {
	start: start
};