import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LoginContextProvider } from './context/LoginContext';

ReactDOM.render(
  <React.StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
