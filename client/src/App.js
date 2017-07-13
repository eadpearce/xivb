import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('/api/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({ users: data });
    });
  }

  render() {
    return (
      <main>
        <section>
          Hello world
        </section>
      </main>
    );
  }

}

export default App;
