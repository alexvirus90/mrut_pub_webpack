'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
	entry: "./frontend/js/home.js",
	output: {
		filename: "./public/build.js",
		library: 'home'
	},

	watch: NODE_ENV == 'development',

	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : false,

	plugins: [
		new webpack.EnvironmentPlugin(['NODE_ENV','USERNAME'])
	]
};