import React, { Component } from 'react'
import NavLink from '../components/NavLink'
import Loading from '../components/Loading'

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
    fetch('/api/users')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      this.setState({ users: data });
      this.setState({ loaded: true });
    });
  }
  render() {
    const users = this.state.users;
    return (this.state.loaded) ?
    (
      <div>
      {users.map((user, index) => {
        return (
          <li key={ index }>
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
