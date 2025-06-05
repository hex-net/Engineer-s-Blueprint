import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/ComponentTable'; // Ensure ComponentTable is included in the bundle
import './components/DroneBehaviorTable'; // Ensure DroneBehaviorTable is included

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);