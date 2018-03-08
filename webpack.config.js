const path = require("path")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const nodeExternals = require("webpack-node-externals")

module.exports = {
	entry: path.join(__dirname, "src"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [new UglifyJSPlugin()],
}
