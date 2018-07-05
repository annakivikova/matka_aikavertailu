import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { App } from './App';

ReactDOM.render(<App />, document.getElementById('app'));

/*const MOUNT_NODE = document.getElementById('app')

const render = () => {
  const App = require('./App').default
  ReactDOM.render(<App />, MOUNT_NODE)
}

render()

if (module.hot) {
  module.hot.accept(['./App'], () =>
    setImmediate(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE)
      render()
    }),
  )
}*/

registerServiceWorker();
