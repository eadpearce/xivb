import React, { Component } from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router'
import Auth from '../Auth'
import NavLink from './NavLink'

class Header extends Component {
  render() {
    let loggedIn = null;
    if (Auth.isLoggedIn()) {
      loggedIn = <li className="link fl white"><Link to="/logout">Log Out</Link></li>;
    } else {
      loggedIn = <li className="link fl white"><Link to="/login">Log In</Link></li>;
    }
    let loggedInAs = null;
    if (Auth.isLoggedIn()) {
      loggedInAs = <li className="link fl pr2 white">Logged in as <Link to={"/users/"+Auth.currentUser()}>{Auth.currentUser()}</Link></li>
    }
    return (
      <div className="nav w-100 h2 pa2 bg-black">
        <IndexLink className="fl" to="/">XIVB</IndexLink>
        <ul role="nav" className="fr mv0 pa0">
          <li className="link fl pr2"><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li className="link fl pr2"><NavLink to="/about">About</NavLink></li>
          <li className="link fl pr2"><NavLink to="/users">Users</NavLink></li>
          <li className="link fl pr2"><NavLink to="/characters">Characters</NavLink></li>
          {loggedInAs}
          {loggedIn}
        </ul>
      </div>
    )
  }
}
export default Header;
