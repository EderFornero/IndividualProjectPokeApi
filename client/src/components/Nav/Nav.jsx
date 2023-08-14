import React from 'react'
//components
import SearchBar from '../SearchBar/SearchBar.jsx' 
//router
import { Link, useLocation, useParams } from 'react-router-dom';
//css
import './Nav.css'
import styled from 'styled-components'




function Nav() {

  const location = useLocation();
  const {id} = useParams(); 

  const showSearchBar = location.pathname !== '/create' && location.pathname !== `/home/detail/${id}`; 

  return (
    <div className='div-contain-nav'>
  
      <details className="dropdown-buttons"> 
        <summary className="dropdown-summary">Menu</summary>
          <div className="dropdown-content">
            <Link to="/home"><Button>Home</Button></Link>
            <Link to="/create"><Button>Create</Button></Link>
          </div>
      </details>


      {showSearchBar && 
      <div className='div-search-nav'>
      <SearchBar />
      </div>
      }
    </div>
  )
}

export default Nav;


export const Button = styled.button`
 appearance: none;
 background-color: var(--main-bg);
 border: 0.125em solid var(--main-hover);
 border-radius: 0.9375em;
 box-sizing: border-box;
 color: var(--button-font);
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
 background-color: var(--main-disable);
}

&:hover {
 color: #fff;
 background-color: #000;
 box-shadow: var(--button-hover) 0 8px 15px;
 transform: translateY(-2px);
}

&:active {
 box-shadow: none;
 transform: translateY(0);
}
`
