'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./pug');
const devserver = require('./devserver');

const PATHS = {
	frontend: path.join(__dirname, 'frontend'),
	public: 	path.join(__dirname, 'public')
};

const common = merge([{
		entry: PATHS.frontend + '/js/index.js',
		output: {
			path: PATHS.public,
			filename: "[name].js"
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: PATHS.frontend + '/pug/index.pug',
			})
		],
		resolve: {
			modules: ["node_modules"],
			extensions: ["*", ".js"]
		},
		resolveLoader: {
			modules: ["node_modules"],
			moduleExtensions: ['-loader'],
			extensions: ["*", ".js"]
		},
	},
	pug()

]);


module.exports = function (env) {
	if(env === 'production'){
		return common;
	}
	if(env === 'development'){
		return merge([
			common,
			devserver()
		])
	}
};
