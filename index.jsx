import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import './src/App.css';
import {Provider} from 'react-redux';
import store from './src/store/index.js';

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );