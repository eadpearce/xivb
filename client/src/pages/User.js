import React, { Component } from 'react'
import NavLink from '../components/NavLink'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    this.fetchUser();
  }
  fetchUser() {
    fetch(`/api/users/${this.props.params.username}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        user: data,
        fetchedData : true // sets to true when data has been fetched
      });
    });
  }
  render() {
    const user = this.state.user;
    if (!this.state.fetchedData) return null; // waits until all the data has been fetched before rendering
    return (
        <div>
          <h2><NavLink to="/users/{user.username}">{user.username}</NavLink>'s Profile</h2>
          <h3><NavLink to="/users/{user.username}">{user.username}</NavLink></h3>
          <p><b>Main Character: </b>{user.main.data.name} <i>"{user.main.data.data.title}"</i> on {user.main.data.server}</p>
          <p><b>Main Job: </b>{user.main_job}</p>
          <p><b>Alts: </b></p>
          {user.alts.map(alt => {
            return (alt.data.data.title) ?
              (<p key={alt.id}>{alt.data.name} <i>"{alt.data.data.title}"</i> on {alt.data.server}</p>) :
              (<p key={alt.id}>{alt.data.name} on {alt.data.server}</p>)
          })}
          <p><b>Age: </b>{user.age}</p>
          <p><b>About: </b>{user.about}</p>
        </div>
    );
  }
}

export default User
