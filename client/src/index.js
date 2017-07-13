import React from 'react';
import ReactDOM from 'react-dom'; // imports ReactDOM from module react-dom. can use render like below
import App from './App'; // import component from ./App.js
import './index.css'; // import css

ReactDOM.render(
  <App />, // what to render. can also write this: <App></App>. does the same thing 
  document.getElementById('root') // where to render it
);
