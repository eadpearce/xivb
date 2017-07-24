import React, { Component } from 'react'
import Auth from '../Auth'
import { Link } from 'react-router'
import classLists from '../css/classLists'

class Home extends Component {
  render() {
    return (Auth.isLoggedIn()) ? ( // USER DASHBOARD
      <main className={classLists.container}>
      <h1 className="f1 cinzel glow">Dashboard</h1>
      <Link to="/posts/new">New post</Link>
      </main>
    ) : ( // HOMEPAGE
      <main className={classLists.container}>
      <h1 className="f1 glow cinzel">Home</h1>
      </main>
    );
  }
}

export default Home
