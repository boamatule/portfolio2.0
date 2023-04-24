const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin');
const OptimizeAssetsPlugin = require('optimize-assets-webpack-plugin'); // Add this import statement

module.exports = {
  // ... other Webpack configuration options ...

  plugins: [
    new BabelMinifyWebpackPlugin(), // Add this plugin to minify JavaScript
    // ... other plugins ...
  ],
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false,
      "os": require.resolve("os-browserify/browser")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'], // Include React preset for JSX
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // ... other rules ...
    ],
  },
  optimization: {
    // ... other optimization options ...
    minimize: true,
    minimizer: [
      // ... other minimizer options ...
      new BabelMinifyWebpackPlugin(),
      new OptimizeAssetsPlugin({ // Use OptimizeAssetsPlugin for asset optimization
        assetNameRegExp: /\.js$/g,
        // ... other options ...
      })
    ]
  }
};
