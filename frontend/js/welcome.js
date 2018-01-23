'use strict';

module.exports = function (message) {

	if (NODE_ENV == 'development'){
		console.log('message', message);
	}

	console.log(`Welcome ${message}`);
};