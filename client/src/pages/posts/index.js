import React, { Component } from 'react'
import Loading from '../../components/Loading'
import {Link} from 'react-router'
import Auth from '../../Auth'
import classLists from '../../css/classLists'

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
    .then(posts => {
      const sorted_posts = posts.sort((a,b) => {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      }).reverse();
      this.setState({
        posts: sorted_posts,
        loaded : true
      });
    });
  }
  render() {
    const posts = this.state.posts;
    return (this.state.loaded) ? (
      <main className={classLists.container}>
      <h1 className="cinzel f1 glow">{this.props.params.username}'s Posts</h1>
      {posts.map(post => {
        return (
          <div key={post.id}>
          <Link className="f4 play grd-gold" to={"/"+post.user.username+"/posts/"+post.id}>{post.title}</Link>
          <p className="mt2 mb3">{post.long_date}</p>
          </div>
        )
      })}
      </main>
    ) : (
      <Loading/>
    )
  }
}
export default Posts;
