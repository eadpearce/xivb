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
        <h1 className="glow cinzel f1"><NavLink className="white hover-white" to={'/users/'+user.username}>{user.username}</NavLink>'s Profile</h1>
        {/* NAVIGATION HERE */}
        <div className="fl db">
          <Link className="grd-gold play f4 mb2" to={"/users/"+user.username+"/posts"}>
          <img className="v-mid pr2" src="https://ffxiv.gamerescape.com/w/images/8/86/Main_Command_26_Icon.png"/>
          Posts</Link>
        </div>
        <div className="fr db">
          <Link className="grd-gold play f4 mb2" to="/users">
          Back
          <img className="v-mid pl2" src="https://ffxiv.gamerescape.com/w/images/5/5e/Main_Command_19_Icon.png"/>
          </Link>
        </div>

        {/* USER INFO */}
        <div className="cb w-100"><h2 className="grd-gold play f4 dib mt3">Age: </h2><p className="dib play grd-silver f4">&nbsp;{user.age}</p></div>
        <h2 className="grd-gold play f4">About: </h2><p className="blog-post">{user.about}</p>

        {/* CHARACTER INFO */}
        <h2 className="grd-gold play f4 mt3">Main Character: </h2>
          <p><Link to={'/characters/'+user.main.id}>{user.main.data.name} <i>"{user.main.data.data.title}"</i></Link> on {user.main.data.server}</p>
        <h2 className="grd-gold play f4 dib">Main Job: </h2><span className="grd-silver play f4"> {user.main_job}</span>
        <h2 className="grd-gold play f4">Alts: </h2>
        <p>{user.alts.map(alt => {
          return (alt.data.data.title) ?
            (<p key={alt.id}>
              <Link to={'/characters/'+alt.id}>{alt.data.name} <i>"{alt.data.data.title}"</i></Link> on {alt.data.server}</p>) :
            (<p key={alt.id}><Link to={'/characters/'+alt.id}>{alt.data.name}</Link> on {alt.data.server}</p>)
        })}</p>

        {/* TOP 5 RECENT POSTS */}
        <h2 className="grd-gold play f4">Recent posts: </h2>
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
