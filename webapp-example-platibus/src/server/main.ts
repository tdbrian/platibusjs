'use strict';
declare var require, console : Console;

var express = require('express');
var app_port = 8080;

var app = express();
app.use(express.static('www'));
app.listen(app_port);

console.log("Listening at http://localhost:" + app_port + "/");

// Server app goes here