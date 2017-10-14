var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: [
		"./client/index.js",
	],
	output: {
		path: path.join(__dirname, "server/js"),
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
		}, {
			test: /\.css$/, loader: "style-loader!css-loader"
		}, {
			test: /\.s?css$/,
			loaders: ["style-loader", "css-loader", "sass-loader"],
			include: path.join(__dirname, "server")
		}, {
			test: /\.(png|gif|jpe?g|svg|jpg)$/,
      	loaders: "url-loader",
				include: path.join(__dirname, "server")
    }, {
      test: /\.svg$/,
      loader: "babel-loader!react-svg-loader",
			include: path.join(__dirname, "server")
    }]
	},
	devtool: "#cheap-module-inline-source-map"
};
