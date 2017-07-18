import React from 'react';
import ReactDOM from 'react-dom'; // imports ReactDOM from module react-dom. can use render like below
import App from './pages/App'; // import component from ./App.js
import './css/index.css'; // import css
import './css/tachyons.css'; // import css
// ReactDOM.render(
//   <App />, // what to render. can also write this: <App></App>. does the same thing
//   document.getElementById('root') // where to render it
// );
// ReactDOM.render(
//  <Routes history={browserHistory} />,
//  document.getElementById('root')
// );

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './pages/About'
import Repos from './pages/Repos'
import Repo from './pages/Repo'
import Home from './pages/Home'
import Users from './pages/Users'
import User from './pages/User'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Login from './pages/Login'
import Auth from './Auth'

// instead of rendering app we render the router
// can nest components inside a route
ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route
          path="/logout"
          onEnter={(nextState, replace) => {
            Auth.removeToken();
            replace('/');
          }}/>
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="/users" component={Users}/>
        <Route path="/users/:username" component={User}/>
        <Route path="/users/:username/posts" component={Posts}/>
        <Route path="/users/:username/posts/:postId" component={Post}/>
        <Route path="/characters" component={Characters}/>
        <Route path="/characters/:characterId" component={Character} />
        </Route>
    </Router>
  ),
  document.getElementById('root')
);
