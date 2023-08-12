import React, { useState } from 'react'
//css
import './SearchBar.css'
import styled from 'styled-components'
import { Button } from '../Nav/Nav';

const SearchBar = ({handleOnSubmit}) => {

  //state for input value
  const [pokemon, setPokemon] = useState("");
  
  //get input value
  const handleOnChange = (e) => {
    setPokemon(e.target.value); 
  }

  return (
    <div className='div-contain-search'>
    <Input
      type="text"
      value={pokemon}
      onChange={handleOnChange}
      placeholder="Search some Pokemon"
    />
    <Button onClick={(e) => handleOnSubmit(e, pokemon)}>Search</Button>
  </div>
  )
}

export default SearchBar;


const Input = styled.input`
  max-width: 190px;
  background-color: #f5f5f5;
  color: #242424;
  padding: .15rem .5rem;
  min-height: 40px;
  border-radius: 0.9375em;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 10px 20px -18px;

  &:hover{
    outline: 1px solid lightgrey;
  }
`