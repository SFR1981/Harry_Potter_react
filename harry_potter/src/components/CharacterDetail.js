import React from 'react';

const CharacterDetail = (props) =>{
  if(!props.selectedCharacter) return null;

  return (
    <div>
      <h2>{props.selectedCharacter.name}</h2>
      <img src={props.selectedCharacter.image}/>
    </div>
  )
}



export default CharacterDetail;
