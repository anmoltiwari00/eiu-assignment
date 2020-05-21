//third party imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//project imports
import store from './Store';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
