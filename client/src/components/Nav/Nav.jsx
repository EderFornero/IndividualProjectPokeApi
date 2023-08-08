import React from 'react'
//components
import SearchBar from '../SearchBar/SearchBar' 
import TypeFilter from '../TypeFilter/TypeFilter';
//router
import { Link } from 'react-router-dom';
//css
import './Nav.css'
//react redux
import { useDispatch } from 'react-redux';
//actions
import {getPokeByName} from '../../redux/actions/index';
import { TYPE_FILTER } from '../../redux/actions-types';

function Nav() {

  
  const dispatch = useDispatch(); 

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
      <Link to="/home">Home</Link>
      </div>
      <div className='div-search-nav'>
      <SearchBar handleOnSubmit={handleOnSubmit} />
      <TypeFilter />
      </div>
      
    </div>
  )
}

export default Nav;
