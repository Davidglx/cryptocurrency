import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter  as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import store from './app/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  rootElement
);

