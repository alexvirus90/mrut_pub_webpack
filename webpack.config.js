'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	frontend: path.join(__dirname, 'frontend'),
	public: 	path.join(__dirname, 'public')
};

module.exports = {
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

	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: ['@babel/transform-runtime']
				}
			}
		},
		{
			test: /\.pug$/,
			use: {
				loader: 'pug-loader',
				options: {
					pretty: true,
				}
			}
		}],

	}
};
