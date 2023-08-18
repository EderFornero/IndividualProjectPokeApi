import axios from 'axios';
import {GET_POKEMON, GET_POKEMON_NAME, GET_DETAIL, GET_TYPES, SET_ORDER, SET_FILTER, SET_TYPE, CLEAN_DETAIL, SET_POKE_PAGE, CREATE_POKEMON, SET_IMAGE} from '../actions-types/index'; 


///////////////////////////////////////////////////////////////////////////////////////
//get all pokemons
export const getPokemons = () => {
  return async function(dispatch){
    try {
      const {data} = await axios("/pokemon") 
      return dispatch({
        //select type
        type: GET_POKEMON,
        //response with all pokemons
        payload: data
      })
    } catch (error) {
      return {error: error.message}
    }
   
  }
}; 



///////////////////////////////////////////////////////////////////////////////////////
//get name search by query
export const getPokeByName = (name) => {
  return async function(dispatch){
    try {
      const {data} = await axios(`/pokemon?name=${name}`) //get through query

      if(name.length === 0) throw Error('Must have a name')
     
      return dispatch({
        //select type
        type: GET_POKEMON_NAME,
        //response with a name of pokemon
        payload: [data]
      })
   

    } catch (error) {
      return [];  
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//get detail by id
export const getDetail = (id, setIsValid) => {
  return async function(dispatch){
    try {
      const {data} = await axios(`/pokemon/${id}`) //get by id for show detail 
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
      return {error: error.message}
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//get all types
export const getTypes = () => {
  return async function(dispatch){
    try {
      const {data} = await axios('/type')
      return dispatch({ 
        type: GET_TYPES, 
        payload: data
      })
    } catch (error) {
      return {error: error.message}
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//create pokemon
export function createPokemon(newPokemon){
  return async function (dispatch){ 
    try {
      const {data} = await axios.post('/pokemon', newPokemon)
      return dispatch({
        type: CREATE_POKEMON,
        payload: data.new_pokemon
      })
    } catch (error) {
      throw Error({error: error.response.data})
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

///////////////////////////////////////////////////////////////////////////////////////
//clean detail
export const setPokePage = (page) => ({
  type: SET_POKE_PAGE,
  payload: page,
});

///////////////////////////////////////////////////////////////////////////////////////
//clean detail
export const setLoading = (loading) => ({
  type: SET_POKE_PAGE,
  payload: loading,
});


///////////////////////////////////////////////////////////////////////////////////////
//clean detail
export const setImage = (image) => ({
  type: SET_IMAGE,
  payload: image,
});
