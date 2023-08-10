import React from 'react'
//components
import SearchBar from '../SearchBar/SearchBar.jsx' 

//router
import { Link } from 'react-router-dom';
//css
import './Nav.css'
//react redux
import { useDispatch } from 'react-redux';
//actions
import {getPokeByName, getPokemons} from '../../redux/actions/index';


function Nav() {

  
  const dispatch = useDispatch(); 

  //get all
  const handleOnClick = () => {
    dispatch(getPokemons())
  }

  //search by name
  const handleOnSubmit = async (e, name) => {
    e.preventDefault(); 
    try {
      const res = await dispatch(getPokeByName(name));
      
      if(res.payload && res.payload.length === 0){
      console.log("You must write some Pokemon name");
      }
    }catch (error) {
      console.log('Error: ', error.message);
  }
}


  return (
    <div className='div-contain-nav'>
      <div className='div-home-nav'>
        <div><Link to="/home" onClick={handleOnClick}>Home</Link></div>
        <div><Link to="/create">Create</Link></div>
      </div>
      <div className='div-search-nav'>
      <SearchBar handleOnSubmit={handleOnSubmit} />
      </div>
      
    </div>
  )
}

export default Nav;
