
var path = require('path');

const htmlPlugin = require('html-webpack-plugin'),
  outputPath = path.resolve(__dirname, 'build'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  env = process.env.NODE_ENV;

console.log(`run webpack now`);

var config = {
  context: __dirname,
  mode : 'development',
  devtool: "inline-sourcemap",
  entry : [
    './src/index.js',
    './src/app.scss'
  ],
  output: {
    path: outputPath,
    filename: 'index.js'
  },
   plugins:[ 

     new htmlPlugin({
      template: "./src/index.html",
      path: outputPath,
      filename: "index.html"
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ],
  resolve : {
    alias : {
      actions : path.resolve('./src/users'),
      components : path.resolve('./src/components'),
    },
    extensions : ['.js', '.jsx', '.json'],
    modules : [
      path.resolve('./src'),
      'node_modules'
    ] 
  },

  module : {
    rules : [
      {
        test : require.resolve('react'),
        loader : 'expose-loader?react',
      },
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },
  devServer : {
    outputPath : outputPath,
    contentBase : './',
    colors : true,
    inline : true,
    publicPath : '/',
    writeToDisk:true,
    historyApiFallback : true,
    hot : true,
    quiet : false,
    hash : false,
    version : false,
    timings : false,
    assets : false,
    chunks : false,
    modules : false,
    reasons : false,
    children : false,
    source : false,
    errors : false,
    errorDetails : false,
    noInfo : false,
    warnings : false,
    stats : 'minimal'
  }
};
module.exports = config;