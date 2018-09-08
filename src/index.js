
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import createLogger from 'redux-logger';
import configureStore from './store/configureStore';
import getAppProvider from './routes/index';

const store = configureStore();
const mountNode = document.getElementById('root');

ReactDOM.render(
  
  getAppProvider(store), mountNode
);



