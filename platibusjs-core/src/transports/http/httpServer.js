'use strict';

const _ = require('lodash');
const http = require('http');
const director = require('director');

const configuration = require('../../../package.json');
const httpConfiguration = require('./httpConfiguration.js');
const messageHandler = require('../../message-handler.js');

const defaultPort = 8081;

class HttpServer {

	start(config) {
		this.setupRouter();
		this.init();
		return this.listen(config);
	}

	setupRouter() {
		this.router = new director.http.Router({
	  		'/platibus': { get: this.showPlatibusStatus },
	  		'/platibus/message/:messageId': { post: messageHandler.handleMessage }
		});
	}

	showPlatibusStatus() {
		this.res.writeHead(200, { 'content-type': 'application/json' });
		let status = { status: 'running' };
		this.res.end(JSON.stringify(status));
	}

	init() {
		this.server = http.createServer((req, res) => {
	  		this.dispatchRouter(req, res);
		});
	}

	dispatchRouter(req, res) {
		this.router.dispatch(req, res, this.handleRouterError);
	}

	handleRouterError(err) {
		if (err) {
			this.res.writeHead(404);
			this.res.end();
		}
	}

	listen(config) {
		return new Promise((fulfill, reject) => {
			this.port = config.port ? config.port: defaultPort;
			this.server.listen(this.port, (err) => {
				if(err) return reject(err);
				console.log(`PlatibusJs has started listening for messages on ${this.port}`);
				fulfill();
			});
		});
	}

	stop() {
		return new Promise((fulfill, reject) => {
			this.server.close(() => {
				console.log('PlatibusJs has stopped.');
				this.server = null;
				this.router = null;
				fulfill();
			});
		)};
	}
}

module.exports = {
	HttpServer: HttpServer
};
