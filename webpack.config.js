const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsPlugin = require('favicons-webpack-plugin');

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
    filename: '[name].js'
  },
  plugins: [
    new HtmlPlugin({
      template: PATHS.src + '/index.pug',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true
        }
      }
    }),
    new FaviconsPlugin({
      logo: './src/favicons/favicon.png',
      prefix: 'favicons/',
      publicPath: '',
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {sourceMap: true, config: {path: './postcss.config.js'}},
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true},
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {sourceMap: true, config: {path: './postcss.config.js'}},
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: [
          path.resolve(__dirname, 'src/fonts'),
          path.resolve(__dirname, 'src/favicons'),
        ],
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
      },
      {
        test: /\.(png|svg)$/,
        include: path.resolve(__dirname, 'src/favicons'),
        loader: 'file-loader',
        options: {
          name: 'favicons/[name].[ext]',
        },
      },
    ]
  },
  devServer: {
    stats: 'errors-only',
    contentBase: PATHS.dist,
    compress: true
  }
};
