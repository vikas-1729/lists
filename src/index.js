import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/index';
import './index.css';

import configStore from './store';
import { Provider } from 'react-redux';
const store = configStore();
//console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
