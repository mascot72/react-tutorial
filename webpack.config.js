const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['react-hot-loader/patch', './src/index.js'],
	mode: 'development',
	output: {
		path: __dirname + '/public/',
		filename: 'bundle.js'
	},

	devServer: {
		hot: true,
		host: 'localhost',
		port: 7777,
		static: {
			directory: path.join(__dirname, 'public'),
		},
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				},
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					minimize: true,
				},
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: ['style-loader', 'css-loader'],
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin({
			template: './public/index.html',
		})
		// new HtmlWebpackPlugin()
	]
};
