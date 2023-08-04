import React from 'react'
import SearchBar from '../SearchBar/SearchBar' 

function Nav({handleOnSubmit}) {
  return (
    <div>
      <h1>NAV</h1>
      <SearchBar handleOnSubmit={handleOnSubmit}/>
      {/* <button>Random Pokemon</button> */}
    </div>
  )
}

export default Nav;
