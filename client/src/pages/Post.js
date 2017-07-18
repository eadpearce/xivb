import React, { Component } from 'react'
import NavLink from '../components/NavLink'
import Loading from '../components/Loading'
import {Link} from 'react-router'
import Auth from '../Auth'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    this.fetchPost();
  }
  fetchPost() {
    Auth.fetch(`/api/posts/${this.props.params.postId}`, {})
    .then(response => {
      this.setState({
        post: response,
        loaded : true
      });
    });
  }
  render() {
    const post = this.state.post;
    return (this.state.loaded) ? (
      <div>
      <h2>{post.title}</h2>
      <p>Posted at {post.created_at} by <Link to={"/users/"+post.user.username}>{post.user.username}</Link></p>
      <p>{post.body}</p>
      <h3>Comments</h3>
      {post.comments.map(comment => {
        return (post.comments[0]) ?
        (
          <div key={comment.id}>
            <p><Link to={"/users/"+comment.user.username}>{comment.user.username}</Link> said: </p>
            <p>{comment.body}</p>
          </div>
        ) : (
          <div key="1">No comments yet.</div>
        )
      })}
      </div>
    ) : (
      <Loading/>
    )
  }
}
export default Post;
