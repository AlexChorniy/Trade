const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
import { Configuration, RuleSetRule, RuleSetUseItem, WebpackPluginInstance } from 'webpack';

const mode = process.env.NODE_ENV as Configuration['mode'];
const port: number = Number(process.env.PORT);

const isDevMode: boolean = mode === 'development';

const tsRuleBase: RuleSetRule = {
  test: /\.(tsx?)$/i,
  loader: 'ts-loader',
};

// const jsRules: RuleSetRule = {
//   test: /\.(js?|jsx)$/,
//   exclude: /node_modules/,
//   use: {
//     loader: 'babel-loader',
//     options: {
//       presets: ['@babel/preset-env', '@babel/preset-react'],
//     },
//   },
// };

const tsRule: RuleSetRule = {
  ...tsRuleBase,
  options: {
    configFile: join(__dirname, 'tsconfig.json'),
  },
};

const loaderMiniCssExtractPlugin: RuleSetUseItem = MiniCssExtractPlugin.loader;
const cssRule: RuleSetRule = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    // fallback to style-loader in development
    isDevMode ? 'style-loader' : loaderMiniCssExtractPlugin,
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'),
        sourceMap: true,
      },
    },
  ],
};

const imgRule: RuleSetRule = {
  test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
  loader: 'file-loader',
};

const fontRule: RuleSetRule = {
  test: /\.(woff(2)?|ttf|eot)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  ],
};

const htmlWebpackPlugin: WebpackPluginInstance = new HtmlWebpackPlugin({
  favicon: 'bonfire.ico',
  title: 'My Webpack Site',
  cache: true,
  hash: isDevMode,
  publicPath: './',
});

const miniCssExtractPlugin: WebpackPluginInstance = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
});

const allPlugins: WebpackPluginInstance[] = isDevMode ? [htmlWebpackPlugin] : [htmlWebpackPlugin, miniCssExtractPlugin];

const webAppConfig: Configuration & { devServer?: Record<string, unknown> } = {
  mode,
  devtool: 'source-map',
  entry: {
    bundle: join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
  target: 'web',
  module: {
    rules: [tsRule, cssRule, imgRule, fontRule],
  },
  plugins: allPlugins,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    extensionAlias: {
      '.ts': ['.js', '.ts'],
    },
  },
  devServer: {
    static: './dist',
    port,
  },
};

export default [webAppConfig];
