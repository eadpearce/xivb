import React, { Component } from 'react'

class Repo extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
}
// this.props.params.repoName is the value in the url
// e.g. u could do a fetch request to ur API to get data with this.props.params

export default Repo 
