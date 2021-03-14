import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import '../node_modules/antd/dist/antd.css';

import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
