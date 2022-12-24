const path = require('path');
const PugPlugin = require('pug-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let mode = process.env.NODE_ENV || 'development';
const isDev = mode === 'development';
const isProd = !isDev;
const devtool = isDev ? 'source-map' : undefined;
console.log(mode);

// Optimization for js/ts
const babelOptions = (preset) => {
  const opts = {
    preset: ['@babel/preset-env'],
  };
  if (preset) {
    opts.presets.push(preset);
  }
  return opts;
};

module.exports = {
  mode: mode,
  devtool,
  // entry point from where the data will be collected
  // define your Pug files here
  // JS and CSS files will be extracted from their sources loaded in Pug
  entry: {
    index: './src/index.pug', // => dist/index.html
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

    // enable processing of Pug files in Webpack entry
    new PugPlugin({
      pretty: !isProd, // pretty formatting generated HTML (for prod mode should be false)
      // extract CSS from SCSS files loaded in Pug
      extractCss: {
        filename: '[name].[contenthash].css', // output hashed filename of CSS
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
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
        exclude: /(node_modules|bower_components)/,
        loader: PugPlugin.loader, // Pug loader
        options: {
          // pass global data into all Pug files
          data: {
            title: 'Stray',
          },
        },
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
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true, // open browser
    compress: true,
    // enable HMR for files defined in paths
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
  },
};
