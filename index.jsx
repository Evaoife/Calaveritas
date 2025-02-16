import React from 'react';
import ReactDOM from 'react-dom/client'; // Use client for React 18+
import './style.css'; // Import your CSS (if you have one)
import CardGame from './App'; // Import your CardGame component

const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root element

root.render(
  <React.StrictMode> {/* Optional: For development mode checks */}
    <CardGame /> 
  </React.StrictMode>
);
