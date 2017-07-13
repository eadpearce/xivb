import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';

class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ['Jim', 'Sally'] };
  }
  // iterating over arrays
  renderGreetings() {
    // forEach works if u only have one arg
    // key is used like track by $index in angular to differentiate each component 
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name}/>
    ));
  }
  render() {
    return (
      <div className="HelloWorldList">
        <HelloWorld name="Jim"/>
        <HelloWorld name="Sally"/>
      </div>
    )
  }
}
export default HelloWorldList;
