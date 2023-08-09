import {
  GET_POKEMON,
  GET_POKEMON_NAME,
  GET_DETAIL,
  GET_TYPES,
  SET_FILTER,
  SET_ORDER,
  SET_TYPE,
  CLEAN_DETAIL,
} from "../actions-types/index";

const initialState = {
  allPokemons: [],
  copyAllPokemons: [],
  getDetail: {},
  getTypes: [],

  /////////////filter/////////////
  sort: "nameAsc",
  filter: "none",
  type: null,

   /////////////cleaner/////////////
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
//////////////////////////////////////////////////////////
//get all pokemons
    case GET_POKEMON:
      return {
        ...state,
        allPokemons: action.payload,
        copyAllPokemons: action.payload,
      };

//////////////////////////////////////////////////////////
//get pokemon by name
    case GET_POKEMON_NAME:
      return {
        ...state,
        allPokemons: action.payload,
      };

//////////////////////////////////////////////////////////
//get pokemon detail
    case GET_DETAIL:
      return {
        ...state,
        getDetail: action.payload,
      };

//////////////////////////////////////////////////////////
//get all types
    case GET_TYPES:
      return {
        ...state,
        getTypes: action.payload,
      };

//////////////////////////////////////////////////////////
//sort by name and attack
    case SET_ORDER:
      return{
        ...state, 
        sort: action.payload
      }
     
//////////////////////////////////////////////////////////
//filter by origin
    case SET_FILTER: 
    return{ 
      ...state, 
      filter: action.payload
    }

//////////////////////////////////////////////////////////
//filter by type 
    case SET_TYPE: 
    return{ 
      ...state, 
      type: action.payload 
    }

//////////////////////////////////////////////////////////
//clean detail 
    case CLEAN_DETAIL: 
    return{ 
      ...state, 
      getDetail: action.payload
    }

    default:
      return {
        ...state,
      };
  }
};


export default reducer;
