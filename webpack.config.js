const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src/basic'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    entry: [
        PATHS.src + '/index.js',
    ],
    output: {
        path: PATHS.dist,
        publicPath: "./",
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '/index.pug',
        }),
        new ExtractTextPlugin('./style.css'),
        new FaviconsWebpackPlugin('./src/img/favicon.png')
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true, config: { path: './postcss.config.js' } },
                        },
                        {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                        },
                    ],
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true },
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true, config: { path: './postcss.config.js' } },
                        },
                    ],
                }),
            },
            {
                test: /\.(jpg|png|svg)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                include: path.resolve(__dirname, 'src/fonts'),
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                },
            }
        ]
    },
    devServer: {
        stats: 'errors-only',
        contentBase: PATHS.dist,
        compress: true
    }
};
