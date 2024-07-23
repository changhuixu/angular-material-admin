const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { AngularWebpackPlugin } = require('@ngtools/webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production', // Set the mode to 'production' or 'development'
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    })],
  },
  plugins: [
    new AngularWebpackPlugin({
      tsconfig: path.resolve(__dirname, 'tsconfig.app.json'),
      entryModule: path.resolve(__dirname, 'src/app/app.module#AppModule'),
      sourceMap: true
    }),
    new BundleAnalyzerPlugin()
  ]
};
