const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
		alias: {
			'~': path.resolve(__dirname, './src/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'public'),
	},
	devtool: 'inline-source-map',
}