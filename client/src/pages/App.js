import React, { Component } from 'react'
import HelloWorldList from '../components/HelloWorldList'
// import { Link } from 'react-router';
import NavLink from '../components/NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'

// can also use activeStyle={{ color: 'red' }}
// with NavLink the link to Home is always active
// parent routes are active when child routes are active
// unfortunately / is the parent of everything
// fix this by using IndexLink instead

// we can also use onlyActiveOnIndex with a NavLink

class App extends Component {
  render() {
    return (
      <div>
        <h1><IndexLink to="/" activeClassName="active">React Router Tutorial</IndexLink></h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>

        {/* this adds the content of the component underneath the navbar ^^ so we can have the navbar on every page */}
        {/* if there are no children it just renders the Home component */}
        {this.props.children || <Home/>}

      </div>
    )
  }
}

export default App


// const App = () => {
//   return ( // call HelloWorld as a separate component from inside App
//     // assign props for components here
//     <div id="App">
//     </div>
//   );
// };
//
// export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       users: []
//     };
//   }
//   componentDidMount() {
//     this.fetchUsers();
//   }
//   fetchUsers() {
//     fetch('/api/users')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       this.setState({ users: data });
//     });
//   }
//   render() {
//     const users = this.state.users;
//     return (
//       <main>
//         <section>
//         {users.map((user, index) => {
//           return (
//             <li key={ index }>
//               <h3>{user.username}</h3>
//               <p><b>Main Character: </b>{user.main.data.name} <i>"{user.main.data.data.title}"</i> on {user.main.data.server}</p>
//               <p><b>Main Job: </b>{user.main_job}</p>
//               <p><b>Age: </b>{user.age}</p>
//               <p><b>About: </b>{user.about}</p>
//             </li>
//           )
//         })}
//         </section>
//       </main>
//     );
//   }
// }
// export default App;
