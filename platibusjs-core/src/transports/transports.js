'use strict';

const HttpServer = require('./http/httpServer').HttpServer;

function initTransport(config, cb) {
  switch (config.transport) {
    case 'http':
      let server = new HttpServer();
      server.start(config, cb);
      break;
    default:
      throw `Can't start platibus with invalid transport config ${config.transport}.
				Make sure it's defined in package.json`;
  }
}

module.exports = {
  initTransport: initTransport
};
