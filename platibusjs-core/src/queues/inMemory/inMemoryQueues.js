'use strict';

const _ = require('lodash');

let _messageQueues = [];

function createQueue(queueName, listener, options) {
	let newQueue = {
		queueName: queueName,
		maxAttempts: options.maxAttempts ? 0 : options.maxAttempts,
		autoAcknowledge: options.autoAcknowledge ? true : options.autoAcknowledge,
		retryDelay: options.retryDelay ? 0 : options.retryDelay,
		queuedMessages: [],
		listener: listener,
		isRunning: false
	};

	if(!_findQueue(queueName)) _messageQueues.push(newQueue);
	else console.error(`Unable to create queue. One already exists with the name ${queueName}`);
}

function enqueueMessage(queueName, message, user, cancellationToken) {
	let matchingQueue = _findQueue(queueName);
	if(!matchingQueue) console.error(`No message queue found named ${queueName}`);
}

function sendMessage(message) {
	// body...
}

function publishMessage(message, topicName, cancellationToken) {
	// body...
}

function Subscribe(endpoint, topicName, ttl, cancellationToken) {
	// body...
}

function _findQueue(queueName) {
	return _.find(_messageQueues, "queueName", queueName);
}

module.exports = {
	createQueue: createQueue,
	sendMessage: sendMessage,
	publishMessage: publishMessage,
	send: sendMessage
};
