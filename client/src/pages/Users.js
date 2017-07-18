import React, { Component } from 'react'
import NavLink from '../components/NavLink'
import Loading from '../components/Loading'
import Auth from '../Auth'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loaded: false
    };
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers() {
    Auth.fetch('/api/users', {})
    .then(response => {
      this.setState({ users: response, loaded: true });
    });
  }
  render() {
    const users = this.state.users;
    return (this.state.loaded) ?
    (
      <div>
      {users.map(user => {
        return (
          <li key={user.id}>
            <NavLink to={'/users/'+user.username}>{user.username}</NavLink>
          </li>
        )
      })}
      </div>
    ) : (
      <Loading/>
    );
  }
}

export default Users
