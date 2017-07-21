import React, { Component } from 'react'
import NavLink from '../../components/NavLink'
import { Link } from 'react-router'
import Auth from '../../Auth'
import Loading from '../../components/Loading'
import classLists from '../../css/classLists'

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
      loaded: false
    };
  }
  componentDidMount() {
    this.fetchCharacter();
  }
  fetchCharacter() {
    Auth.fetch(`/api/characters/${this.props.params.characterId}`, {})
    .then(response => {
      this.setState({
        character: response,
        loaded : true // sets to true when data has been fetched
      });
    });
  }
  render() {
    const character = this.state.character;
    return (this.state.loaded) ?
    (
      <div className={classLists.container}>
        <h2><NavLink to={'/characters/'+character.id}>{character.data.name}</NavLink>'s Profile</h2>
        <p><b>Played by: </b><Link to={'/users/'+character.user.username}>{character.user.username}</Link> on {character.data.data.server}</p>
        <p><b>About: </b>{character.about}</p>
      </div>
    ) : (
      <Loading/>
    );
  }
}

export default Character
