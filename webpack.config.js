const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		loadHome: './src/loadHome.js',
		loadMenu: './src/loadMenu.js',
		loadContact: './src/loadContact.js',
		loadHeader: './src/loadHeader.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		stats: 'errors-only',
	},
	stats: 'errors-only',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [
		new HtmlWebpackPlugin({  
			title: 'Restaurant Page',
			template: './src/index.html',
		  })
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};
