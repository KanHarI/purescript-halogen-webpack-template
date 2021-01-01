const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "dev/index.html"
        }),
        new CopyPlugin({
            patterns: [
                {from: "public", to: "."}
            ]
        })
    ]
}
