import axios from 'axios';
import {GET_POKEMON, GET_POKEMON_NAME, GET_DETAIL, GET_TYPES, SET_ORDER, SET_FILTER, SET_TYPE, CLEAN_DETAIL} from '../actions-types/index'; 


///////////////////////////////////////////////////////////////////////////////////////
//get all pokemons
export const getPokemons = () => {
  return async function(dispatch){
    const {data} = await axios("http://localhost:3001/pokemon") //get pokemons from backend
    return dispatch({
      //select type
      type: GET_POKEMON,
      //response with all pokemons
      payload: data
    })
  }
}; 



///////////////////////////////////////////////////////////////////////////////////////
//get name search by query
export const getPokeByName = (name) => {
  return async function(dispatch){
    try {
      const {data} = await axios(`http://localhost:3001/pokemon?name=${name}`) //get through query

      if(name.length === 0) throw Error('Must have a name')
     
      return dispatch({
        //select type
        type: GET_POKEMON_NAME,
        //response with a name of pokemon
        payload: [data]
      })
   

    } catch (error) {
      alert("Pokemon not found", error.message);  
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//get detail by id
export const getDetail = (id, setIsValid) => {
  return async function(dispatch){
    try {
      const {data} = await axios(`http://localhost:3001/pokemon/${id}`) //get by id for show detail 
      dispatch({
        //select type
        type: GET_DETAIL,
        //response with id pokemon
        payload: data
      }); 
      //set true state
      //then handle it in detail view/page as argument of this function 
      setIsValid(true); 
    } catch (error) {
      //set false state & throw error
      //then handle it in detail view/page
      setIsValid(false);
      console.log(error.message);
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//get all types
export const getTypes = () => {
  return async function(dispatch){
    try {
      const {data} = await axios('http://localhost:3001/type')
      return dispatch({ 
        type: GET_TYPES, 
        payload: data
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//filter by origin
export const filterPokemon = (filter) => { 
  return{
    type: SET_FILTER,
    payload: filter
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//filter by type
export const filterPokemonType = (type) => {
  return {
    type: SET_TYPE,
    payload: type
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//order by name
export const orderPokemon = (sort) => { 
  return{
    type: SET_ORDER,
    payload: sort
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//clean detail
export const cleanDetail = () => {
  return{
    type: CLEAN_DETAIL,
    payload: {}
  }
}