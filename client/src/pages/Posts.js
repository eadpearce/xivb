import React, { Component } from 'react'
import NavLink from '../components/NavLink'
import Loading from '../components/Loading'
import {Link} from 'react-router'
import Auth from '../Auth'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loaded: false
    };
  }
  componentDidMount() {
    this.fetchPosts();
  }
  fetchPosts() {
    Auth.fetch(`/api/users/${this.props.params.username}/posts`, {})
    .then(response => {
      this.setState({
        posts: response,
        loaded : true
      });
    });
  }
  render() {
    const posts = this.state.posts;
    return (this.state.loaded) ? (
      <div>
      {posts.map(post => {
        return (
          <div key={post.id}>
          <h2><Link to={"/users/"+post.user.username+"/posts/"+post.id}>{post.title}</Link></h2>
          <p>Posted at {post.created_at} by <Link to={"/users/"+post.user.username}>{post.user.username}</Link></p>
          </div>
        )
      })}
      </div>
    ) : (
      <Loading/>
    )
  }
}
export default Posts;
