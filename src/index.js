// require('!style!css!bootstrap/dist/css/bootstrap.css');
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import App from './components/App';

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

const store = new Store(['x1', 'x2', 'x3']);

ReactDOM.render(
  <App store= { store } />,
  document.querySelector('#app')
);
