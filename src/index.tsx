import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store/store'

import './index.css';

import App from './App';
import StyledTheme from './Config/StyledTheme/StyledTheme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledTheme>
        <Router>
          <App />
        </Router>
      </StyledTheme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

