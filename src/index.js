// require('!style!css!bootstrap/dist/css/bootstrap.css');
import React from 'react';
import ReactDOM from 'react-dom';
import Store from './stores/Store';
import FieldStore from './stores/Field';
import App from './App';

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

const fieldStore = new FieldStore();
const store = new Store('', fieldStore);

ReactDOM.render(
  <App store = {store} />,
  document.querySelector('#app')
);
