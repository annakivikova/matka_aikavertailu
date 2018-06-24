import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { NewMap } from './NewMap';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <NewMap />,
  document.getElementById('container')
);

registerServiceWorker();
