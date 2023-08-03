import axios from 'axios';
import {GET_POKEMON, GET_POKEMON_NAME, GET_DETAIL, NOT_FOUND} from '../actions-types/index'; 
require('dotenv').config();
const {URL_BACK_API} = process.env; 

export const getPokemons = () => {
  return async function(dispatch){
    const {data} = await axios(URL_BACK_API) //get pokemons from backend
    return dispatch({
      //select type
      type: GET_POKEMON,
      //response with all pokemons
      payload: data.payload
    })
  }
}; 

///////////////////////////////////////////////////////////////////////////////////////

export const getPokeByName = (name) => {
  return async function(dispatch){
    try {
      const {data} = await axios(`${URL_BACK_API}?name=${name}`) //get through query

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
        payload: data.payload
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
      const {data} = axios(`${URL_BACK_API}/${id}`) //get by id for show detail 
      dispatch({
        //select type
        type: GET_DETAIL,
        //response with id pokemon
        payload: data.payload
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

