import React, { Component } from 'react';
import CharacterContainer from './containers/CharacterContainer.js'
import HouseContainer from './containers/HouseContainer.js'

class App extends Component {
  render() {
    return (
      <div>
      <CharacterContainer></CharacterContainer>
      <HouseContainer></HouseContainer>
    </div>
    );
  }
}

export default App;
