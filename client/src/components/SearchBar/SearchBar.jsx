import React, { useEffect, useState } from 'react';
//react redux
import {useDispatch} from 'react-redux';
//actions
import {getPokeByName, getPokemons, setPokePage} from '../../redux/actions/index.js';
//css
import './SearchBar.css';
import styled from 'styled-components';


const SearchBar = () => {

  const dispatch = useDispatch();

  //state for input value
  const [pokemon, setPokemon] = useState("");
  const [listener, setListener] = useState(""); 

  //get input value
  const handleOnChange = (value) => {
    setListener(value); 
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setPokemon(listener)
    }, 300)

    return () => {
      clearTimeout(timer); 
    }
  }, [listener])


  useEffect(() => {
    if(pokemon !== ''){
      dispatch(getPokeByName(pokemon))
      dispatch(setPokePage(0));
    }else{
      dispatch(getPokeByName('')); 
      dispatch(getPokemons());
    }
  }, [dispatch, pokemon]); 


  return (
    <div className='div-contain-search'>
    <Input
      type="text"
      value={listener}
      onChange={(e) => handleOnChange(e.target.value)}
      placeholder="Search some Pokemon"
    />
   
  </div>
  )
}

export default SearchBar;



//styled component
const Input = styled.input`
  max-width: 190px;
  background-color: var(--main-bg);
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