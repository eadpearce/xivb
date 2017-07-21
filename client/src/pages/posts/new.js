import React, { Component } from 'react'
import NavLink from '../../components/NavLink'
import Loading from '../../components/Loading'
import {Link} from 'react-router'
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
      <div className={classLists.container}>
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
      <input type="submit" value="Post"></input>
      </form>
      </div>
    ) : (
      <Loading/>
    )
  }
}
export default NewPost;
