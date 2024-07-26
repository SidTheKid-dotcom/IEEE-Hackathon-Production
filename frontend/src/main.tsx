import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <AuthProvider />
  </Router>
);
