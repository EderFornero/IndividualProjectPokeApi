import React, { useState } from 'react'

const SearchBar = ({handleOnSubmit}) => {

  //state for input value
  const [pokemon, setPokemon] = useState("");
  
  //get input value
  const handleOnChange = (e) => {
    setPokemon(e.target.value); 
  }

  return (
    <div>
    <input
      type="text"
      value={pokemon}
      onChange={handleOnChange}
      placeholder="Search a Pokemon, example: ditto"
    />
    <button onClick={(e) => handleOnSubmit(e, pokemon)}>Search</button>
  </div>
  )
}

export default SearchBar;
