'use strict';

function getDefaultConfiguration() {
	return {
		transport: "http",
		authenticationScheme: "none",
		endpoints: [],
		topics: [],
		sendRules: [],
		handlingRules: [],
		subscriptions: [],
		port: 80612
	};
}

module.exports = {
	getDefaultConfiguration: getDefaultConfiguration
};
