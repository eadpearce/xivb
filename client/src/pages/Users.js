import React, { Component } from 'react'
import NavLink from '../components/NavLink'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
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
    });
  }
  render() {
    const users = this.state.users;
    return (
        <div>
        {users.map((user, index) => {
          return (
            <li key={ index }>
              <NavLink to={'/users/'+user.username}>{user.username}</NavLink>
            </li>
          )
        })}
        </div>
    );
  }
}

export default Users
