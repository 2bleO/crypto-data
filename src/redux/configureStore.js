import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './cryptodata/cryptodata';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
