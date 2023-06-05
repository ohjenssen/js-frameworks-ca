import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './Theme/GlobalStyle';
import Theme from './Theme/Theme';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Theme>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </Theme>
  </React.StrictMode>
);