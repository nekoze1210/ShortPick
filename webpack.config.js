const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/browser/index.js',
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    path: __dirname + '/src/browser',
    filename: 'build.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'css-loader' },
      {
        test: /\.s[a|c]ss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      }
    ]
  },
  externals: ['electron', 'fs']
}
