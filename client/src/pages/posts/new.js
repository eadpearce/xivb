import React, { Component } from 'react'
import Loading from '../../components/Loading'
import Auth from '../../Auth'
import classLists from '../../css/classLists'

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      loaded: true,
      errors: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    const field = e.target.name;
    const post = this.state.post;
    post[field] = e.target.value;
    this.setState({ post });
  }
  onSubmit(e) {
    e.preventDefault();
    Auth.fetch('/api/posts', {
      method: 'POST',
      body: {
        title: this.state.post.title,
        body: this.state.post.body
      }
    })
    .then(() => {
      this.props.router.push('/');
    });
  }
  render() {
    const post = this.state.post;
    return (this.state.loaded) ? (
      <main className={classLists.container}>
      <h1 className="glow cinzel f1">New Post</h1>
      <form action="/posts" onSubmit={this.onSubmit}>
      <input
        onChange={this.onChange}
        name="title"
        className="db mv2 w-100"
        type="text"
        placeholder="Title"
        value={post.title}></input>
      <textarea
        onChange={this.onChange}
        name="post"
        className="db mv2 w-100"
        rows="20">{post.body}</textarea>
      <input className="btn green-btn" type="submit" value="Post"></input>
      </form>
      </main>
    ) : (
      <Loading/>
    )
  }
}
export default NewPost;
