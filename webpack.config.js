const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "bundle.js",
        publicPath: "/js/",
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "public"),
        port: 3000
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
}