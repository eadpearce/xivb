import React, { Component } from 'react'
import NavLink from '../../components/NavLink'
import Loading from '../../components/Loading'
import {Link} from 'react-router'
import Auth from '../../Auth'
import classLists from '../../css/classLists'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      recentPosts: ''
    };
  }
  componentDidMount() {
    this.fetchUser();
  }
  fetchUser() {
    Auth.fetch(`/api/users/${this.props.params.username}`, {})
    .then(response => {
      this.setState({
        user: response
      });
    })
    .then(() => {
      console.log(this.state.user.posts);
      const recentPosts = [];
      for (let i = 0; i < 5; i++) {
        recentPosts.push(this.state.user.posts[i]);
      }
      this.setState({ recentPosts: recentPosts, loaded: true });
      console.log(this.state.recentPosts);
    })
  }
  render() {
    const user = this.state.user;
    const recentPosts = this.state.recentPosts;
    return (this.state.loaded) ?
    (
      <main className={classLists.container}>
        <h2 className="glow cinzel f1"><NavLink className="white hover-white" to={'/users/'+user.username}>{user.username}</NavLink>'s Profile</h2>
        <h3 className="grd-gold play f4">Main Character: </h3>
          <p><Link to={'/characters/'+user.main.id}>{user.main.data.name} <i>"{user.main.data.data.title}"</i></Link> on {user.main.data.server}</p>
        <p><span className="grd-silver play f5">Main Job: </span>{user.main_job}</p>
        <p><b>Alts: </b></p>
        {user.alts.map(alt => {
          return (alt.data.data.title) ?
            (<p key={alt.id}>
              <Link to={'/characters/'+alt.id}>{alt.data.name} <i>"{alt.data.data.title}"</i></Link> on {alt.data.server}</p>) :
            (<p key={alt.id}><Link to={'/characters/'+alt.id}>{alt.data.name}</Link> on {alt.data.server}</p>)
        })}
        <p><b>Age: </b>{user.age}</p>
        <p><b>About: </b>{user.about}</p>

        {/* TOP 5 RECENT POSTS */}
        <p className="b"><Link to={"/users/"+user.username+"/posts"}>Recent posts: </Link></p>
        {recentPosts.map(post => {
          if (post) {
            if (post.title) {
              return (
              <p key={post.id}><Link to={'/users/'+user.username+'/posts/'+post.id}>{post.title}</Link></p>
            ) } else return <p key="1">No posts yet.</p>
          }
        })}


      </main>
    ) : (
      <Loading/>
    );
  }
}

export default User
