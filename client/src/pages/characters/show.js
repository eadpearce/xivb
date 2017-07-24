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
    let title = null;
    if (this.state.loaded) {
      if (character.data.data.title) title = <h2 className="cb script glow f1">{character.data.data.title}</h2>;
    }
    return (this.state.loaded) ?
    (
      <main className={classLists.container}>
        <h2 className="play grd-silver f3 mt4">Character Profile:</h2>
        <div className="w-75 fl">
        <h1 className="cinzel glow f1 mv2">{character.data.name}</h1>
        {title}</div>
        <img className="ba b--washed-yellow bw1 br-100 fr" src={character.data.data.avatar}/>
        <p className="cb grd-silver play f4">{character.data.data.gender} {character.data.data.clan} {character.data.data.race}</p>

        <div className="w-25-ns w-100 fl-ns pr1">
        <h3 className="grd-silver play f4">Nameday:</h3>
          <p>{character.data.data.nameday}</p>
        </div>
        <div className="w-25-ns w-100 fl-ns ph1">
        <h3 className="grd-silver play f4">Guardian: </h3>
          <p><img className="v-mid" src={character.data.data.guardian.icon}/> {character.data.data.guardian.name}</p>
        </div>
        <div className="w-25-ns w-100 fl-ns ph1">
        <h3 className="grd-silver play f4">City: </h3>
          <p><img className="v-mid" src={character.data.data.city.icon}/> {character.data.data.city.name}</p>
        </div>
        <div className="w-25-ns w-100 fl-ns pl1">
        <h3 className="grd-silver f4 play">Played by: </h3>
          <p><Link to={'/'+character.user.username}>{character.user.username}</Link> on {character.data.data.server}</p>
        </div>

        <h3 className="cb grd-silver f4 play">Current class:</h3>
          <p>{character.data.data.active_class.role.name}</p>
        <h3 className="grd-silver f4 play">About:</h3>
          <p className="blog-post">{character.about}</p>
      </main>
    ) : (
      <Loading/>
    );
  }
}

export default Character
