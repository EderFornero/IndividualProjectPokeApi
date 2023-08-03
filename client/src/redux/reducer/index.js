import {GET_POKEMON, GET_POKEMON_NAME, GET_DETAIL} from '../actions-types/index'; 

const initialState = {
  allPokemons: [], 
  getDetail: {}, 
}


const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_POKEMON:
      return {
        ...state,
        allPokemons: action.payload,
      }
    
    case GET_POKEMON_NAME: 
      return{
        ...state, 
        allPokemons: action.payload, 
      }

    case GET_DETAIL: 
      return{ 
        ...state, 
        getDetail: action.payload,
      }

      default: 
      return{
        ...state,
      }
  }
}






export default reducer; 