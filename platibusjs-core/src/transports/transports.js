'use strict';

const HttpServer = require('./http/httpServer').HttpServer;

let transports = [];

function initTransports(transportConfigurations) {
    let startPromises = [];
    for (transportConfiguration of transportConfigurations) {
        let startPromise = startTransport(transportConfiguration);
        startPromises.push(startPromise);
    }
    return Promise.all(startPromises);
}

function startTransport(transportConfiguration) {
    switch (transportConfiguration.transport) {
        case 'http':
            return startHttpTransport(transportConfiguration);
        default:
            throw `Can't start platibus with invalid transport config ${config.transport}.
    			Make sure it's defined in package.json`;
    }
}

function startHttpTransport(transportConfiguration) {
    let name = transportConfiguration.name;

    if(!transportConfiguration || !transportConfiguration.name) {
        return Promise.reject('A transport must have a name');
    }

    if(transportExists(name)) {
        return Promise.reject('A transport with this name already exists');
    }

    let server = new HttpServer();
    let httpTransport = generateTransport(transportConfiguration, server);
    transports.push(httpTransport);

    return server.start(transportConfiguration);
}

function getTransports() {
    return transports;
}

function getTransportByName(name) {
    return _.find(transports, 'name', name);
}

function transportExists(name) {
    return getTransportByName(name) != undefined;
}

function generateTransport(config, server) {
    return {
        server: server,
        name: config.name,
        running: false
    }
}

function stopTransport(name) {
    let transport = getTransportByName(name);
    return transport.stop();
}

function stopTransports() {
    let stopTransportsPromises = [];
    for (transport of transports) {
        stopTransports.push(transport.stop());
    }
    return Promise.all(stopTransportsPromises);
}

module.exports = {
    initTransports: initTransports,
    startTransport: startTransport,
    getTransports: getTransports,
    getTransportByName: getTransportByName,
    stopTransport: stopTransport,
    stopTransports: stopTransports
};
