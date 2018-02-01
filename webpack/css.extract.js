const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = function (paths) {
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader',
					}),
				},
				{
					test: /\.sass$/,
					include: paths,
					use: ExtractTextPlugin.extract({
						publicPath: '../',
						fallback: 'style-loader',
						use: ['css-loader', 'sass-loader'],
					}),
				},

			],
		},
		plugins: [
			new ExtractTextPlugin('./css/[name].css'),
		],
	};
};