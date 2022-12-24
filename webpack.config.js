const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let mode = process.env.NODE_ENV || 'development'
const isDev = mode === 'development'
const isProd = !isDev
const devtool = isDev ? 'source-map' : undefined
console.log(mode)

// Optimization for js/ts
const babelOptions = (preset) => {
  const opts = {
    preset: ['@babel/preset-env'],
  }
  if (preset) {
    opts.presets.push(preset)
  }
  return opts
}

module.exports = {
  mode: mode,
  devtool,
  // entry point from where the data will be collected
  // app is such name will be generated in folder dist
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: isDev ? '[name].js' : '[name].[contenthash].js',
    assetModuleFilename: isDev
      ? 'assets/[name][ext]'
      : 'assets/[hash][ext][query]',
  },
  resolve: {
    alias: {
      '@module': path.resolve(__dirname, 'src/module'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/img/favicon/site.webmanifest'),
    //       to: path.resolve(__dirname, 'dist/assets/favicon'),
    //     },
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Stray',
      template: './src/index.pug',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|wepb|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/ico/[hash][ext]',
        },
      },
      {
        test: /\.(mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: isDev ? 'assets/[name][ext]' : 'assets/[hash][ext]',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(ttf|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
