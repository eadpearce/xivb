import React from 'react';
import ReactDOM from 'react-dom'; // imports ReactDOM from module react-dom. can use render like below
import App from './App'; // import component from ./App.js
import './index.css'; // import css

// ReactDOM.render(
//   <App />, // what to render. can also write this: <App></App>. does the same thing
//   document.getElementById('root') // where to render it
// );
//
// ReactDOM.render(
//  <Routes history={browserHistory} />,
//  document.getElementById('root')
// );

import { Router, Route, hashHistory } from 'react-router'
import About from './pages/About'
import Repos from './pages/Repos'

// instead of rendering app we render the router
// can nest components inside a route
ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/about" component={About}/>
        <Route path="/repos" component={Repos}/>
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
