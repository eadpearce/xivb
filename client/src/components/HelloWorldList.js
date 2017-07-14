import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import './HelloWorldList.css';
import './AddGreeter.css';

class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ['Jim', 'Sally', 'my dude'] };
    this.addGreeting = this.addGreeting.bind(this); // make addGreeting func here so we can access state with it from child component
    this.removeGreeting = this.removeGreeting.bind(this); // always need to bind when modifying parent state from a child component
  }

  removeGreeting(removeName) {
    const filteredGreetings = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    this.setState({ greetings: filteredGreetings });
  }
  // ... = array concatenation shortcut
  // start of the array should remain this.state.greetings but add newName onto the end
  // return a new modified copy of the array but not change the original
  addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  }

  // iterating over arrays
  renderGreetings() {
    // forEach works if u only have one arg
    // key is used like track by $index in angular to differentiate each component
    return this.state.greetings.map(name => (
      <HelloWorld
        key={name}
        name={name}
        removeGreeting={this.removeGreeting}
      />
    ));
  }

  // get the output from the function renderGreetings like this
  // pass addGreeting func to child component as props
  render() {
    return (
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting}/>
        {this.renderGreetings()}
      </div>
    )
  }
}
export default HelloWorldList;
