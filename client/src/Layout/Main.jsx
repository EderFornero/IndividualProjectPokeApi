import React from 'react'
//react router 
import { Outlet, useLocation } from 'react-router-dom';
//components 
import Nav from '../components/Nav/Nav';
//axios
// import axios from 'axios'; 

function Main() {
 
  // const [pokemon, setPokemon] = useState(null);

  // //function onSearch going to passed by params to nav
  // const onSearch = async (name) => { 
  //   const {data} = await axios(`
  //     http://localhost:3001/pokemon/${name.toLowerCase()}
  //   `)
  //   try {
  //     if(data.name){
        
  //       setPokemon(data)
  //       console.log("Pokemon", data);
  //     }else{
  //       setPokemon(null)
  //     }
  //   } catch (error) {
  //     alert(`Error fetching ${pokemon}: ${error.message}`);
  //     setPokemon(null);
  //   }
  // }

  //random pokemon (extra function)

  // const addRandomPoke = async () => {
  // try {
  //     const {data} = await axios(`http://localhost:3001/pokemon/`);

  //     //search in data array
  //     const pickRandomPokeName = data[Math.floor(Math.random() * data.length)]
     
  //     setPokemon(pickRandomPokeName)
  //     console.log("Random poke", pickRandomPokeName);
  
  // } catch (error) {
  // return{error: error.message}
  // }
   
  // }
  
  //using use location
  const location = useLocation(); 
  const showNav = location.pathname !== '/';

  return (
    <>
        {
            showNav && <Nav />
        }
        <Outlet />
    </>
  )
}

export default Main;
