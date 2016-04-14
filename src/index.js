// require('!style!css!bootstrap/dist/css/bootstrap.css');
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './stores/Store';
import FieldStore from './stores/Field';
import App from './App';

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

// const store = new Store(['x1', 'x2', 'x3']);
const store = new Store('x1, x2, x3');
const fieldStore = new FieldStore();

ReactDOM.render(
  <App store= { store } fieldStore={ fieldStore } />,
  document.querySelector('#app')
);
