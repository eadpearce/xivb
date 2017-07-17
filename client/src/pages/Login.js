import React, { Component } from 'react'
import Auth from '../Auth'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;
    this.setState({ user });
  }
  onSubmit(e) {
    e.preventDefault();
    // send a req to /login with credentials
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.user.email,
        password: this.state.user.password,
      })
    })
    // parse the response
    .then(res => res.json())
    // get the token back
    .then(data => {
      const token = data.token;
      // save token to localStorage with Auth
      Auth.setToken(token);
      this.props.router.push('/');
    });
  }
  render() {
    const user = this.state.user;
    return (
      <div>
      <h3>Login</h3>
      <form action="/" onSubmit={this.onSubmit}>
      <input
        name="email"
        type="email"
        value={user.email}
        onChange={this.onChange}>
      </input><br/>
      <input
        name="password"
        type="password"
        value={user.password}
        onChange={this.onChange}>
      </input>
      <input type="submit" value="Login"></input>
      </form>
      </div>
    )
  }
}

export default Login
