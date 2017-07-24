import React, { Component } from 'react'
import Loading from '../../components/Loading'
import {Link} from 'react-router'
import Auth from '../../Auth'
import classLists from '../../css/classLists'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      loaded: false
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
      <main className={classLists.container}>
      <h1 className="glow f1 cinzel">{post.title}</h1>
      <p className="grd-silver f4 play">At {post.date_created} <Link className="grd-gold" to={"/"+post.user.username}>{post.user.username}</Link> wrote:</p>
      <p className="blog-post">{post.body}</p>
      <h2 className="grd-silver play f4">Comments</h2>
      {post.comments.map(comment => {
        return (post.comments[0]) ?
        (
          <div key={comment.id}>
            <p className="grd-silver play f5">At <Link className="grd-gold" to={"/"+post.user.username+"/posts/"+post.id+"/comments/"+comment.id}>{comment.date_created}</Link> <Link className="grd-gold" to={"/"+comment.user.username}>{comment.user.username}</Link> said: </p>
            <p className="blog-post">{comment.body}</p>
          </div>
        ) : (
          <div key="1">No comments yet.</div>
        )
      })}
      </main>
    ) : (
      <Loading/>
    )
  }
}
export default Post;
