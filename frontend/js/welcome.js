'use strict';

module.exports = function (message) {

	if (process.env.NODE_ENV == 'development'){
		console.log('message', message);
	}

	console.log(process.env.USERNAME);
	console.log(`Welcome ${message}`);
};