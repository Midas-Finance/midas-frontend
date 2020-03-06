const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'public', 'index.html'),
	filename: "./index.html"
});

module.exports = {
	entry:  {
		app: './src/index.tsx',
		vendor: [
			'@babel/polyfill',
			'react',
			'react-dom'
		]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader"
					},
					{
						loader: "awesome-typescript-loader"
					},
				]
			}
		]
	},
	plugins: [
		htmlPlugin
	]
};