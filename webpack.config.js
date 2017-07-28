var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', 'script!foundation-sites/dist/foundation.min.js', './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [new webpack.ProvidePlugin({
    '$': 'jquery',
    'jquery': 'jquery'
  })],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss',
      TodoApp: 'app/components/TodoApp.jsx',
      TodoSearch: 'app/components/TodoSearch.jsx',
      TodoList: 'app/components/TodoList.jsx',
      AddTodo: 'app/components/AddTodo.jsx',
      Todo: 'app/components/Todo.jsx',
      TodoAPI : 'app/api/TodoAPI.jsx',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx'
    },
    extentions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'eval-source-map'
};
