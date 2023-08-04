import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';

const root = document.getElementById('root');
const rootComponent = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (root) {
  if (ReactDOM.createRoot) {
    ReactDOM.createRoot(root).render(rootComponent);
  } else {
    ReactDOM.render(rootComponent, root);
  }
}
