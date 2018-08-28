import React from 'react';
import HouseSelector from '../components/HouseSelector';
import HouseDetail from '../components/HouseDetail';

class HouseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      selectedHouse: null
    };
  }


    componentDidMount(){
      const url = 'http://hp-api.herokuapp.com/api/characters';
      fetch(url)
      .then((res)=>{
        return res.json();
      })
      .then((characters)=>{
        this.setState({ characters: characters});
        const lotsOfHouses = characters.map((character, index)=> {
          return character.house
        })
        const houses = [...new Set(lotsOfHouses)];
        this.setState({houses: houses})
              console.log(houses);
    })
}
//
// const houses = characters.map((character, index) => {
//   return {character.house}
// });




render (){
  return (
    <div>
      <HouseSelector houses = {this.state.houses}/>
        <HouseDetail/>
    </div>
  )
}

}



export default HouseContainer;
