import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './index.css';

import App from './App';
import StyledTheme from './Config/StyledTheme/StyledTheme';

ReactDOM.render(
  <React.StrictMode>
    <StyledTheme>
      <Router>
        <App />
      </Router>
    </StyledTheme>
  </React.StrictMode>,
  document.getElementById('root')
);

