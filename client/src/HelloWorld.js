// import React from 'react'; // ES6. import react from node modules
import React, { Component } from 'react'; // to use class components
import './HelloWorld.css'; // u can import stylesheets like this

// using props
// const HelloWorld = (props) => {
// OR
// function HelloWorld(props) {

// function HelloWorld(props) { // you need to give the component props when it is used. like attributes for angular directives
//   return (
//     <div className="HelloWorld">Hello {props.name}!</div>
//   );
// };

// after importing react component we can write components like this:
// HelloWorld extends the functionality of the Component class
// no need to give props as an arg this time
// call props with this.props
class HelloWorld extends Component {
  constructor(props) { // constructor runs when the component is instantiated. must accept a props arg
    super(props);
    this.state = { greeting: 'Hello' }; // state is set here but props is set when using the component
    // props cannot be modified but state can
    this.translate = this.translate.bind(this);
    // need to do this to tell function that 'this' refers to that specific instance of the component
  }
  translate() {
    this.setState({ greeting: 'こんにちは' });
  }
  render() {
    return (
      <div className="HelloWorld">{this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.translate}>Translate!</button>
      </div>
    );
  }
}

// create const function
// const HelloWorld = () => {
//   return (
//     <div className="HelloWorld">Hello World!</div> // user className not class. class is a reserved keyword in JS
//   );
// };
export default HelloWorld; // like module exports in node
