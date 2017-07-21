import React, { Component } from 'react'
import NavLink from '../../components/NavLink'
import Loading from '../../components/Loading'
import {Link} from 'react-router'
import Auth from '../../Auth'

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
    Auth.fetch(`/api/users/${this.props.params.username}`, {})
    .then(response => {
      this.setState({
        user: response,
        loaded : true // sets to true when data has been fetched
      });
    });
  }
  render() {
    const user = this.state.user;
    return (this.state.loaded) ?
    (
      <div>
        <h2><NavLink to={'/users/'+user.username}>{user.username}</NavLink>'s Profile</h2>
        <p><b>Main Character: </b>
          <Link to={'/characters/'+user.main.id}>{user.main.data.name} <i>"{user.main.data.data.title}"</i></Link> on {user.main.data.server}</p>
        <p><b>Main Job: </b>{user.main_job}</p>
        <p><b>Alts: </b></p>
        {user.alts.map(alt => {
          return (alt.data.data.title) ?
            (<p key={alt.id}>
              <Link to={'/characters/'+alt.id}>{alt.data.name} <i>"{alt.data.data.title}"</i></Link> on {alt.data.server}</p>) :
            (<p key={alt.id}><Link to={'/characters/'+alt.id}>{alt.data.name}</Link> on {alt.data.server}</p>)
        })}
        <p><b>Age: </b>{user.age}</p>
        <p><b>About: </b>{user.about}</p>
        <p><b>Recent posts: </b></p>
        {user.posts.map(post => {
          return (post.title) ?
          (<p key={post.id}><Link to={'/users/'+user.username+'/posts/'+post.id}>{post.title}</Link></p>) :
          (<p key="1">No posts yet.</p>)
        })}
      </div>
    ) : (
      <Loading/>
    );
  }
}

export default User
