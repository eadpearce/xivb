import React, { Component } from 'react'
import NavLink from '../components/NavLink'
import { Link } from 'react-router'

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    };
  }
  componentDidMount() {
    this.fetchCharacter();
  }
  fetchCharacter() {
    fetch(`/api/characters/${this.props.params.characterId}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        character: data,
        fetchedData : true // sets to true when data has been fetched
      });
    });
  }
  render() {
    const character = this.state.character;
    if (!this.state.fetchedData) return null; // waits until all the data has been fetched before rendering
    return (
        <div>
          <h2><NavLink to={'/characters/'+character.id}>{character.data.name}</NavLink>'s Profile</h2>
          <p><b>Played by: </b><Link to={'/users/'+character.user.username}>{character.user.username}</Link> on {character.data.data.server}</p>
          <p><b>About: </b>{character.about}</p>
        </div>
    );
  }
}

export default Character
