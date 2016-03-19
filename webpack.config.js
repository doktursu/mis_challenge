config = {
    entry: "./src/app.es6.js",
    output: {
        filename: "bundle.js",
        path: "./build"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}

module.exports = config;