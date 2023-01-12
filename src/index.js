import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { ProjectsProvider } from './contexts/projects.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectsProvider>
        <GlobalStyles />
        <App />
      </ProjectsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

serviceWorkerRegistration.register();
reportWebVitals();
