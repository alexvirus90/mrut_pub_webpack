'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const babel = require('./webpack/babel');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const source_map = require('./webpack/source_map');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
// const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};
const common = merge([
	{
		context: PATHS.source,
		entry: {
			header: './pages/header/header.js',
			media: './pages/media/media.js',
		},
		output: {
			path: PATHS.build,
			filename: "js/[name].js",
			library:  "[name]"
		},
		plugins: [
			new webpack.NoEmitOnErrorsPlugin(),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['header', 'common', 'media'],
				template: './pages/base.pug',
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				"window.Tether": 'tether',
				"Tether": 'tether'
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
		}
	},
	pug(),
	babel(),
	images(),
	fonts()
]);
module.exports = function (env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			// uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			source_map(),
			css()
		])
	}
};










