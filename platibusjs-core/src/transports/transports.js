'use strict'

const httpListener = require('./transports/http/httpListener');

function initTransportListener(transportConfig) {
	switch(transportConfig) {
		case 'http':
			httpListener.listenToMessagePost(app);
			break;
		default:
			throw `Can't start platibus with invalid transport config ${transportConfig}. Make sure it's defined in package.json`;
			break;
	}
}

module.exports = {
    setupTransport: initTransportListener
}
