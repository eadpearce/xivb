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
      <p>Blog posts support <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">markdown</a></p>
      <form action="/posts" onSubmit={this.onSubmit}>
      <input
        onChange={this.onChange}
        name="title"
        className="db mv2 w-100 blog-post"
        type="text"
        placeholder="Title"
        value={post.title}></input>
      <textarea
        onChange={this.onChange}
        name="body"
        className="db mv2 w-100 blog-post"
        value={post.body}
        rows="20"/>
      <input className="btn green-btn" type="submit" value="Post"></input>
      </form>
      </main>
    ) : (
      <Loading/>
    )
  }
}
export default NewPost;
