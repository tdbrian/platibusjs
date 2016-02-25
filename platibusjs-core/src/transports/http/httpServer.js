'use strict';

const _ = require('lodash');
const http = require('http');
const director = require('director');

const configuration = require('../../../package.json');
const httpConfiguration = require('./httpConfiguration.js');
const messageHandler = require('../message-handler.js');

let router;
let server;

function start(configSectionName) {
	let config = _getConfiguration(configSectionName);
	_setupRouter();
	_init();
	_listen(config);
}

function _setupRouter() {
	router = new director.http.Router({
    	'/platibus': { get: _showPlatibusStatus }
    	'/platibus/message/:messageId': { post: messageHandler.handleMessage }
  	});
}

function _showPlatibusStatus() {
	this.res.writeHead(200, { 'content-type': 'application/json' });
	this.res.end({ status: 'running' });
}

function _init() {
	server = http.createServer((req, res) => {
    	_dispatchRouter(req, res);
	});
}

function _dispatchRouter(req, res) {
    router.dispatch(req, res, _handleRouterError);
}

function _handleRouterError(err) {
	if (err) {
		res.writeHead(404);
		res.end();
	}
}

function _listen(config) {
	let port = config.port ? config.port : 8080;
	server.listen(config.port);
	console.log('PlatibusJs has started on');
}

function _getConfiguration(configSectionName) {
	if (!configSectionName) configSectionName = 'platibus.httpserver';
	let configuration = configuration[configSectionName];
	if (!configuration) configuration = httpConfiguration.getDefaultConfiguration();
	return configuration;
}

function stop() {
	server.close(() => {
		console.log('PlatibusJs has stopped.');
		server = null;
		router = null;
	});
}

module.exports = {
	start: start,
	stope: stop
}