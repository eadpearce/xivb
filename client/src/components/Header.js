import React, { Component } from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router'
import Auth from '../Auth'
import NavLink from './NavLink'

class Header extends Component {
  render() {
    let button = null;
    if (Auth.isLoggedIn()) {
      button = <Link to="/logout">Log Out</Link>;
    } else {
      button = <Link to="/login">Log In</Link>;
    }
    return (
      <div className="nav w-100 h2 pa2 bg-black">
        <IndexLink className="fl" to="/">XIVB</IndexLink>
        <ul role="nav" className="fr mv0 pa0">
          <li className="link fl pr2"><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li className="link fl pr2"><NavLink to="/about">About</NavLink></li>
          <li className="link fl pr2"><NavLink to="/users">Users</NavLink></li>
          <li className="link fl pr2"><NavLink to="/characters">Characters</NavLink></li>
          <li className="link fl">{button}</li>
        </ul>
      </div>
    )
  }
}
export default Header;
