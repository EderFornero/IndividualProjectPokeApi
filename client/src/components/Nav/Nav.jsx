import React from 'react'
import SearchBar from '../SearchBar/SearchBar' 

function Nav({onSearch, addRandomPoke}) {
  return (
    <div>
      <h1>NAV</h1>
      <SearchBar onSearch={onSearch} />
      <button onClick={addRandomPoke}>Random Pokemon</button>
    </div>
  )
}

export default Nav
