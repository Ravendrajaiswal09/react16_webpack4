import express from 'express';
import path from 'path';
import bodyParser from 'body-parser' ;
const app = express();

const port = process.env.PORT || 3100;
const api = require('../api/api');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../webpack.config');

const compiler = webpack(config);

//app.use(webpackDevMiddleware(compiler, config.devServer));
//app.use(webpackHotMiddleware(compiler));
 

// Parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// React DIST output folder
app.use(express.static(path.join(__dirname, '../../build')));


// API location
app.use('/', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port,function () {
  console.log(`Server is listening to port: ${port}`);
});