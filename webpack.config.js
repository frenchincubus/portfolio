const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"] // can use "style-loader" instead of MiniCssExtractPlugin for plain css in header
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all"}
    },
    // use entry or output
    entry: { 
        index: path.resolve(__dirname, "src", "index.js") 
    },
    output : {
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            favicon: "./src/assets/icons/favicon.ico"
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        contentBase: "./build",
        port: 8080,
        historyApiFallback: true
    }
};