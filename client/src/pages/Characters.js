import React, { Component } from 'react'
import NavLink from '../components/NavLink'
import Loading from '../components/Loading'

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loaded: false
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
      this.setState({ loaded: true });
    });
  }
  render() {
    const characters = this.state.characters;
    return (this.state.loaded) ? (
      <div>
      {characters.map((character, index) => {
        return (
          <li key={ index }>
          <NavLink to={'/characters/'+character.id}>{character.data.name}</NavLink>
          </li>
        )
      })}
      </div>
    ) : (
      <Loading/>
    );
  }
}

export default Characters
