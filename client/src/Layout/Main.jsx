import React, {useState} from 'react'
//react router 
import { Outlet, useLocation } from 'react-router-dom';
//components 
import Nav from '../components/Nav/Nav';
//axios
import axios from 'axios'; 

function Main() {
 
  const [pokemon, setPokemon] = useState(null);

  //function onSearch going to passed by params to nav
  const onSearch = async (name) => { 
    const {data} = await axios(`
      http://localhost:3001/pokemon/${name.toLowerCase()}
    `)
    try {
      if(data.name){
        console.log("Pokemon", data)
      }else{
        setPokemon(null)
      }
    } catch (error) {
      alert(`Error fetching ${pokemon}: ${error.message}`);
      setPokemon(null);
    }
  }

  //random pokemon (extra function)

  const addRandomPoke = async (name) => {
  try {
    const {data} = await axios(`
    http://localhost:3001/pokemon/${name}
  `)
    if(data.name){
      const randomPokeName = [data.name]; 
      const pickRandomPokeName = randomPokeName[Math.floor(Math.random() * randomPokeName.length)]
      console.log("Random poke", pickRandomPokeName);
    }else{
      setPokemon(null); 
    }
  } catch (error) {
    setPokemon(null);
  }
   
  }
  
  //using use location
  const location = useLocation(); 
  const showNav = location.pathname !== '/';

  return (
    <>
        {
            showNav && <Nav onSearch={onSearch} addRandomPoke={addRandomPoke} />
        }
        <Outlet />
    </>
  )
}

export default Main;
