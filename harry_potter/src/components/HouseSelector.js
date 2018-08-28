import React from 'react';

const HouseSelector = (props) =>{

function handleChange(evt) {
  props.onHouseSelected(evt.target.value);
}







// const house = props.characters.map((character, index) => {
//   return <option value={index} key={index}>{character.name}</option>
// });
 return (
   <select
     id="house-selector"
     defaultValue="default"
     onChange={handleChange}
     >
 <option disabled value="default"> Choose a house </option>
 {/* {options} */}
</select>)

}







export default HouseSelector;
