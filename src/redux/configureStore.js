import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import reducer from './cryptodata/cryptodata';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
