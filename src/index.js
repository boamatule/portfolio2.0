import React from 'react';
import ReactDOM from 'react-dom';
// import 'normalize.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
  <React.StrictMode>
    {/* <GlobalStyles /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
