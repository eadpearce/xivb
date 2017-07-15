import React from 'react';
import ReactDOM from 'react-dom'; // imports ReactDOM from module react-dom. can use render like below
import App from './pages/App'; // import component from ./App.js
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

// import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Router, Route, browserHistory, IndexRoute } from 'react-router' // for clean URLs import browserHistory instead of hashHistory
import About from './pages/About'
import Repos from './pages/Repos'
import Repo from './pages/Repo'
import Home from './pages/Home'
import Users from './pages/Users'
import User from './pages/User'

// instead of rendering app we render the router
// can nest components inside a route
ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/repos" component={Repos}>
          <Route path="/repos/:userName/:repoName" component={Repo} />
        </Route>
        <Route path="/users" component={Users}/>
        <Route path="/users/:username" component={User} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
