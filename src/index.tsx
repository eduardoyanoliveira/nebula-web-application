import React from 'react';
import ReactDOM from 'react-dom/client';
import AppSetup from './AppSetup';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppSetup />
  </React.StrictMode>
);
