import React from 'react'; // ES6. import react from node modules
import './HelloWorld.css'; // u can import stylesheets like this

// using props
// const HelloWorld = (props) => {
// OR
// function HelloWorld(props) {

function HelloWorld(props) { // you need to give the component props when it is used. like attributes for angular directives 
  return (
    <div className="HelloWorld">Hello {props.name}!</div>
  );
};


// create const function
// const HelloWorld = () => {
//   return (
//     <div className="HelloWorld">Hello World!</div> // user className not class. class is a reserved keyword in JS
//   );
// };
export default HelloWorld; // like module exports in node
