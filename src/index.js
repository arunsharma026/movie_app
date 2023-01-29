import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppcontectProvider from './context/AppcontectProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppcontectProvider>
    <App />
    </AppcontectProvider>
  </React.StrictMode>
);
 
reportWebVitals();
