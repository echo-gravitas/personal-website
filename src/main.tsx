import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { initGA, logPageView } from './functions/analytics.ts';
import reportWebVitals from './functions/webvitals.ts';

initGA();
logPageView();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

reportWebVitals();
