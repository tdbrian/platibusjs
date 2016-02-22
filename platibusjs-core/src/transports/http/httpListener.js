'use strict';

function listenToMessagePost(app) {
	app.post('/platibus/message', jsonParser, (req, res) => {
        if (!req.body) return res.sendStatus(400);
    });
}

module.exports = {
	listenToMessagePost: listenToMessagePost
};