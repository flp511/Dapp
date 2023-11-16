const { resolve } = require('path');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const Dotenv = require('dotenv-webpack');

const webpackBaseConfig = {
  entry: {
    main: resolve('src/index.tsx'),
  },
  output: {
    path: resolve(process.cwd(), 'dist'),
  },
  resolve: {
    alias: {
      '@pages': resolve('src/pages'),
      '@abis': resolve('src/abis'),
      '@states': resolve('src/states'),
      '@hooks': resolve('src/hooks'),
      '@components': resolve('src/components'),
    },
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
      },
    ],
  },
    // cache: {
    //  type: 'filesystem',
    //  cacheDirectory: resolve(__dirname, '.temp'),
    // },
  plugins: [new Dotenv()],
};

module.exports = merge.default(webpackBaseConfig, _mergeConfig);
