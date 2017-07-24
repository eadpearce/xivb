import React, { Component } from 'react'
import Auth from '../../Auth'
import classLists from '../../css/classLists'
import {Link} from 'react-router'
import Loading from '../../components/Loading'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: [],
      loaded: false
    };
  }
  componentDidMount() {
    this.fetchComment();
  }
  fetchComment() {
    Auth.fetch(`/api/comments/${this.props.params.commentId}`, {})
    .then(response => {
      this.setState({
        comment: response,
        loaded : true
      });
    });
  }
  render() {
    const comment = this.state.comment;
    return (this.state.loaded) ? (
      <main className={classLists.container}>
      <h1 className="f2 glow cinzel">Comment on <Link className="white hover-yellow" to={"/users/"+comment.post.user.username+"/posts/"+comment.post.id}>{comment.post.title}</Link></h1>
      <div key={comment.id}>
        <p className="grd-silver play f5">At <Link className="grd-gold" to={"/comments/"+comment.id}>{comment.date_created}</Link> <Link className="grd-gold" to={"/users/"+comment.username}>{comment.user.username}</Link> said: </p>
        <p className="blog-post">{comment.body}</p>
      </div>
      </main>
    ) : ( <Loading/> )
  }
}
export default Comment;
