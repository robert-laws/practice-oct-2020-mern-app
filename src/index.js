import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TechnologyState from './context/technology/TechnologyState';
import AuthState from './context/auth/AuthState';
import 'bulma/css/bulma.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <TechnologyState>
        <App />
      </TechnologyState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);
