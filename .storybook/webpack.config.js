const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const developmentWebpackConfig = require('../config/webpack.config.dev')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  // Extend it as you need.
  // For example, add typescript loader:
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader')
  });

  config.module.rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          },
        },
        'postcss-loader',
      ],
    }),
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          },
        },
        'sass-loader',
      ],
    }),
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.plugins.unshift(new ExtractTextPlugin({filename: 'styles.css', allChunks: true}))
  return config;
};

