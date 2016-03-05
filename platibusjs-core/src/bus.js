'use strict';

let configuration = require('../package.json');

let endpoints = configuration.endpoints;
let topics = configuration.topics;
let sendRules = configuration.sendRules;
let handlingRules = configuration.handlingRules;
let subscriptions = configuration.subscriptions;

function init(configOptions) {
	if(configOptions.endpoints) endpoints = configOptions.endpoints;
	if(configOptions.topics) topics = configOptions.topics;
	if(configOptions.sendRules) sendRules = configOptions.sendRules;
	if(configOptions.handlingRules) handlingRules = configOptions.handlingRules;
	if(configOptions.subscriptions) subscriptions = configOptions.subscriptions;
}

module.exports = {
	init: init
};
