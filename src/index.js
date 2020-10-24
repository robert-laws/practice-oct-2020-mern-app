import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TechnologyState from './context/technology/TechnologyState';
import 'bulma/css/bulma.css';

ReactDOM.render(
  <React.StrictMode>
    <TechnologyState>
      <App />
    </TechnologyState>
  </React.StrictMode>,
  document.getElementById('root')
);
