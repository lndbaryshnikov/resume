const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src/basic'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    entry: PATHS.src + '/index.js',
    output: {
        path: PATHS.dist,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '/index.pug',
        })
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
                include: paths,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                    ]
            }
        ]
    },
    devServer: {
        stats: 'errors-only'
    }
};