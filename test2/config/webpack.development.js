const {join, resolve}=require('path');
const FriendlyErrorsWebpackPlugin=require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
// const logo = join(__dirname, 'icon.png');
// const WebpackBuildNotifierPlugin=require('webpack-build-notifier');
const notifier=require('node-notifier');
// const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports={
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    static: {
      directory: join(__dirname, '../dist'),
    },
    hot: true,
    port: 3000,
  },
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundule.js',
    assetModuleFilename: 'images/[name].[ext]',
  },
  stats: 'errors-only',
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new WebpackBuildNotifierPlugin({
    //   title: 'React脚手架',
    //   logo,
    //   suppressSuccess: true,
    // }),
    new HtmlWebpackPlugin({
      title: 'react-generator',
      filename: 'index.html',
      template: resolve(__dirname, '../src/index-dev.html'),
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:3000'],
        notes: ['构建信息请及时关注窗口右上角'],
      },
      onErrors: function (severity, errors) {
        if (severity!=='error') {
          return;
        }
        const error=errors[0];
        // console.log(error);
        notifier.notify({
          title: ' Webpack构建失败',
          message: severity+': '+error.name,
          subtitle: error.file||'',
          icon: join(__dirname, 'icon.png'),
        });
      },
      clearConsole: true,
    }),
  ],
};