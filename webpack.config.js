const HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './src/pages/main/index.ts',
    sprint: './src/pages/sprint/index.ts',
    textbook: './src/pages/textbook/index.ts',
    authorization: './src/pages/authorization/index.ts',
    audiocall: './src/pages/audio-call/audition.ts',
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][hash][ext][query]',
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
    clean: true,
    // chunkFilename: '[id].[hash].js',
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['main'],
      template: './src/pages/main/index.html',
      filename: 'main.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['textbook'],
      template: './src/pages/textbook/index.html',
      filename: 'textbook.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['sprint'],
      template: './src/pages/sprint/index.html',
      filename: 'sprint.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['authorization'],
      template: './src/pages/authorization/index.html',
      filename: 'authorization.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
