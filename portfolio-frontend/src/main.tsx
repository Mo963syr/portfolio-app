import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // إزالة .tsx للسماح للـ bundler بإيجاد الملف تلقائيًا
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);