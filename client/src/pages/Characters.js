import React, { Component } from 'react'
import NavLink from '../components/NavLink'

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }
  componentDidMount() {
    this.fetchCharacters();
  }
  fetchCharacters() {
    fetch('/api/characters')
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      this.setState({ characters: data });
    });
  }
  render() {
    const characters = this.state.characters;
    return (
        <div>
        {characters.map((character, index) => {
          return (
            <li key={ index }>
              <NavLink to={'/characters/'+character.id}>{character.data.name}</NavLink>
            </li>
          )
        })}
        </div>
    );
  }
}

export default Characters
