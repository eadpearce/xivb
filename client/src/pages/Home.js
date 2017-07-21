import React, { Component } from 'react'
import Auth from '../Auth'
import { Link } from 'react-router'
import classLists from '../css/classLists'

class Home extends Component {
  render() {
    return (Auth.isLoggedIn()) ? ( // USER DASHBOARD
      <div className={classLists.container}>
      <h2 className="f1">Dashboard</h2>
      <Link to="/posts/new">New post</Link>
      </div>
    ) : ( // HOMEPAGE
      <div className={classLists.container}>
      <h2 className="f1">Home</h2>
      </div>
    );
  }
}

export default Home
