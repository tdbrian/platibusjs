'use strict';

const httpServer = require('./http/httpServer');

function initTransport(config, cb) {
  console.log(`Start transport type: ${config.transport}`);
  switch (config.transport) {
    case 'http':
      httpServer.start(config, cb);
      break;
    default:
      throw `Can't start platibus with invalid transport config ${config.transport}.
				Make sure it's defined in package.json`;
  }
}

module.exports = {
  initTransport: initTransport
};
