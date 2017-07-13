import React from 'react';
import HelloWorldList from './HelloWorldList';

const App = () => {
  return ( // call HelloWorld as a separate component from inside App
    // assign props for components here
    <div className="App">
      <HelloWorldList />
    </div>
  );
};

export default App;

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
