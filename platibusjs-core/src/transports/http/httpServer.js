'use strict';

const _ = require('lodash');
const http = require('http');
const director = require('director');

const configuration = require('../../../package.json');
const httpConfiguration = require('./httpConfiguration.js');
const messageHandler = require('../../message-handler.js');

const defaultPort = 8081;

class HttpServer {

	start(config, cb) {
		this._setupRouter();
		this._init();
		this._listen(config, cb);
	}

	_setupRouter() {
		this.router = new director.http.Router({
	  	'/platibus': { get: this._showPlatibusStatus },
	  	'/platibus/message/:messageId': { post: messageHandler.handleMessage }
		});
	}

	_showPlatibusStatus() {
		this.res.writeHead(200, { 'content-type': 'application/json' });
		let status = { status: 'running' };
		this.res.end(JSON.stringify(status));
	}

	_init() {
		this.server = http.createServer((req, res) => {
	  	this._dispatchRouter(req, res);
		});
	}

	_dispatchRouter(req, res) {
		this.router.dispatch(req, res, this._handleRouterError);
	}

	_handleRouterError(err) {
		if (err) {
			this.res.writeHead(404);
			this.res.end();
		}
	}

	_listen(config, cb) {
		this.port = config.port ? config.port : defaultPort;
		this.server.listen(this.port, (err) => { if(cb) cb(err); });
		console.log(`PlatibusJs has started listening for messages on ${this.port}`);
	}

	stop() {
		this.server.close(() => {
			console.log('PlatibusJs has stopped.');
			this.server = null;
			this.router = null;
		});
	}
}

module.exports = {
  HttpServer: HttpServer
};
