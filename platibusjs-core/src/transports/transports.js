'use strict';

const httpServer = require('./http/httpServer');

function initTransport(config) {
  console.log(`Start transport type: ${config}`);
  switch (config.transport) {
    case 'http':
      httpServer.start(config);
      break;
    default:
      throw `Can't start platibus with invalid transport config ${config.transport}.
				Make sure it's defined in package.json`;
  }
}

module.exports = {
  initTransport: initTransport
};
