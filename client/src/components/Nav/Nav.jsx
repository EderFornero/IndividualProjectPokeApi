import React from 'react'
//components
import SearchBar from '../SearchBar/SearchBar.jsx' 
//router
import { Link } from 'react-router-dom';
//css
import './Nav.css'
import styled from 'styled-components'
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
  
      <details className="dropdown-buttons"> 
        <summary className="dropdown-summary">Menu</summary>
          <div className="dropdown-content">
            <Link to="/home" onClick={handleOnClick}><Button>Home</Button></Link>
            <Link to="/create"><Button>Create</Button></Link>
          </div>
      </details>



      <div className='div-search-nav'>
      <SearchBar handleOnSubmit={handleOnSubmit} />
      </div>
      
    </div>
  )
}

export default Nav;


export const Button = styled.button`
 appearance: none;
 background-color: #f5f5f5;
 border: 0.125em solid #1A1A1A;
 border-radius: 0.9375em;
 box-sizing: border-box;
 color: #3B3B3B;
 cursor: pointer;
 display: inline-block;
 font-size: 12px;
 font-weight: 600;
 line-height: normal;
 margin-left: 5px;
 margin-right: 5px;
 min-height: 20px;
 min-width: 40px;
 outline: none;
 padding: 1em 2.3em;
 text-align: center;
 text-decoration: none;
 transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 will-change: transform;


&:disabled {
 pointer-events: none;
}

&:hover {
 color: #fff;
 background-color: #000;
 box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
 transform: translateY(-2px);
}

&:active {
 box-shadow: none;
 transform: translateY(0);
}
`
