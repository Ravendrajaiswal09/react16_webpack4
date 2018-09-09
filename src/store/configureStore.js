import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

const logger = createLogger({
  level : 'info',
  collapsed : false,
  logger : console,
  predicate : () => true
});


export default function configureStore() {
  return createStore(rootReducer, {}, compose(applyMiddleware(thunkMiddleware, logger)));
} 