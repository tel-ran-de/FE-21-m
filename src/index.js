import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';

import store from "./store/store";
import AppF from "./components/AppF";


ReactDOM.render(
    <Provider store={store}>
        <App />
        <AppF />
    </Provider>
    ,
  document.getElementById('root')
);

