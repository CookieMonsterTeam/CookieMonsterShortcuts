const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
  return {
    mode: 'production',
    devtool: env.minimize ? 'source-map' : 'inline-source-map',
    optimization: {
      minimize: !!env.minimize,
    },
    entry: './src/cookieMonsterShortcuts.js',
    resolve: {
      extensions: ['.js'],
    },
    output: {
      filename: env.finalfile ? 'cookieMonsterShortcuts.js' : 'cookieMonsterShortcutsDev.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename:
          env.finalfile && env.minimize
            ? 'cookieMonsterShortcuts.js.map'
            : 'cookieMonsterShortcutsDev.js.map',
        publicPath: 'https://cookiemonsterteam.github.io/CookieMonsterShortcuts/dist/',
        fileContext: 'public',
      }),
    ],
  };
};
