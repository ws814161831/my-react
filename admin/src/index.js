import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/Main2'
import { Provider } from 'react-redux'
import store from './store'
// import './style/css/public.css'
import '@/style/css/public.less'

ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);

