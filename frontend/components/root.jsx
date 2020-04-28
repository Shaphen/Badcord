import React from 'react';
import Provider from 'react-dom'
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => (
  <div>
    <Provider store={ store }>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </div>
);

export default App;