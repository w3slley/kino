import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div style={{minHeight: '100vh', position: 'relative'}}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);