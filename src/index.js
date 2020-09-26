import React from 'react';
import ReactDom from 'react-dom';
import App from './js/App';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './js/reducers/index';

const loggerMiddleware = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
ReactDom.render(<App store={store} />, document.getElementById('root'));
