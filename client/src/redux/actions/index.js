import axios from 'axios';
import {GET_POKEMON, GET_POKEMON_NAME, GET_DETAIL, NOT_FOUND} from '../actions-types/index'; 


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

export const getPokeByName = (name) => {
  return async function(dispatch){
    try {
      const {data} = await axios(`http://localhost:3001/pokemon?name=${name}`) //get through query

      if(!data){
        console.log("No data recived for the API");
      }
   
      //verify length
      if(data.length === 0){
        return{
          //return type not found 
          type: NOT_FOUND,
          //get []
          payload: []
        }
      } //end if
   
      return dispatch({
        //select type
        type: GET_POKEMON_NAME,
        //response with a name of pokemon
        payload: data
      })

    } catch (error) {
      throw Error("Pokemon not found", error.message);  
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////

export const getDetail = (id, setIsValid) => {
  return async function(dispatch){
    try {
      const {data} = axios(`http://localhost:3001/pokemon/${id}`) //get by id for show detail 
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
      setIsValid(false, alert(error.message));
    }
  }
}

