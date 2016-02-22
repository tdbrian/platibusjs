'use strict';

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

class Main {
    
    constructor(app) {
        this.app = app;
    }
    
    start() {
        this.app.post('/platibus/message', jsonParser, (req, res) => {
			if (!req.body) return res.sendStatus(400);
        });
    }
}

exports.start = (app) => {
    let platibusMain = new Main(app);
    return platibusMain.start;
}