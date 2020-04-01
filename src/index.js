import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './Context';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <ContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);
