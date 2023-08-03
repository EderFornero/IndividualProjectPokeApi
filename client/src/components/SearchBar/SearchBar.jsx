import React, {useState} from 'react'

const SearchBar = ({onSearch}) => {
  //manage the value of the term (name on search function) with a new state
  const [term, setTerm] = useState(''); 

  const handleOnSearch = (e) => {
    e.preventDefault();
    onSearch(term); 
  }
  
  return (
    <div>
    <input
      type="text"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      placeholder="Search a Pokemon, example: ditto"
    />
    <button onClick={handleOnSearch}>Search</button>
  </div>
  )
}

export default SearchBar;
