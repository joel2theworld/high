import React from 'react';
import $ from 'jquery';
import './css/animate.css';
import './css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/icomoon.css';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

window.$ = window.jQuery = $;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
