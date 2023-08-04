import React, {useState} from 'react'
//react router 
import { Outlet, useLocation } from 'react-router-dom';
//components 
import Nav from '../components/Nav/Nav';
//react redux
import {useDispatch} from 'react-redux'; 
//actions
import {getPokeByName} from '../redux/actions/index';

function Main() {

  const dispatch = useDispatch(); 
  const [searchPokemon, setSearchPokemon] = useState(""); //set state of search

  //search by name
  const handleOnSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await dispatch(getPokeByName(searchPokemon));
      console.log(res);
  
      if(res.payload && res.payload.length === 0){
      console.log(`That pokemon ${searchPokemon} do not exist`);
      }
      setSearchPokemon(""); 

    }catch (error) {
      console.log('Error: ', error.message);
      setSearchPokemon(""); 
  }
}


  //use location
  const location = useLocation(); 
  const showNav = location.pathname !== '/';

  return (
    <>
        {
            showNav && <Nav handleOnSubmit={handleOnSubmit}/>
        }
        <Outlet />
    </>
  )
}

export default Main;
