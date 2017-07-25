import React, { Component } from 'react'
import Loading from '../../components/Loading'
import {Link} from 'react-router'
import Auth from '../../Auth'
import classLists from '../../css/classLists'
import ReactMarkdown from 'react-markdown'

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
    let author = null;
    if (this.state.loaded) {
      if (post.character) author = <p className="fl grd-silver f4 play">By <Link className="grd-gold" to={"/characters/"+post.character.id}>{post.character.data.name}</Link></p>;
      else author = <p className="fl grd-silver f4 play">By <Link className="grd-gold" to={"/"+post.user.username}>{post.user.username}</Link></p>;
    }

    return (this.state.loaded) ? (
      <main className={classLists.container}>
      <h1 className="glow f1 cinzel">{post.title}</h1>

      {/* NAVIGATION */}
      {author}
      <Link className="fr db grd-gold play f4 mb2" to={"/"+post.user.username+"/posts"}>Back
      <img alt="Go back" className="v-mid pl2" src="https://ffxiv.gamerescape.com/w/images/5/5e/Main_Command_19_Icon.png"/>
      </Link>
      <p className="cb grd-silver f4 play">At {post.long_date} <Link className="grd-gold" to={"/"+post.user.username}>{post.user.username}</Link> wrote:</p>
      <ReactMarkdown className="blog-post" source={post.body} />
      <Link to={"/"+post.user.username+"/posts/"+post.id+"/comments/new"} className="fl small btn green-btn">Comment</Link>
      <Link to={"/"+post.user.username+"/posts/"+post.id+"/edit"} className="fr small btn blue-btn">Edit/Delete</Link>

      {/* COMMENTS */}
      <h2 className="cb grd-silver play f4">Comments</h2>
      {post.comments.map(comment => {
        return (post.comments[0]) ?
        (
          <div key={comment.id}>
            <p className="grd-silver play f5 mv3">At <Link className="grd-gold" to={"/"+post.user.username+"/posts/"+post.id+"/comments/"+comment.id}>{comment.long_date}</Link> <Link className="grd-gold" to={"/"+comment.user.username}>{comment.user.username}</Link> said: </p>
            <ReactMarkdown className="blog-post" source={comment.body}/>
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
