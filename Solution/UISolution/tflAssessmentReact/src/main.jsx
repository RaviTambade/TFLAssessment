import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { NavbarProvider } from './Navigation/NavbarContext'; // Import NavbarProvider
import App from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
