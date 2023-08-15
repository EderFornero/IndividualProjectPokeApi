import {
  GET_POKEMON,
  GET_POKEMON_NAME,
  GET_DETAIL,
  GET_TYPES,
  SET_FILTER,
  SET_ORDER,
  SET_TYPE,
  CLEAN_DETAIL,
  SET_POKE_PAGE,
  SET_LOADING,
  CREATE_POKEMON,
} from "../actions-types/index";

const initialState = {
  allPokemons: [],
  getDetail: {},
  getTypes: [],
  
  /////////////filter/////////////
  sort: null,
  filter: "none",
  type: null,

  /////////////pages//////////////////
  pokePage: 0,

  /////////////loading//////////////////
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //////////////////////////////////////////////////////////
    //get all pokemons
    case GET_POKEMON:
      return {
        ...state,
        allPokemons: action.payload,
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
    //create pokemon
    case CREATE_POKEMON: {
      let newPokemon = {
        name: action.payload.name,
        image: action.payload.image,
        types: action.payload.types, 
        attack: action.payload.attack,
        defense: action.payload.defense,
        speed: action.payload.speed,
        health_points: action.payload.health_points,
      };

      return {
        ...state,
        allPokemons: [...state.allPokemons, newPokemon], 
      };
    }

    //////////////////////////////////////////////////////////
    //sort by name and attack
    case SET_ORDER:
      return {
        ...state,
        sort: action.payload,
      };

    //////////////////////////////////////////////////////////
    //filter by origin
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    //////////////////////////////////////////////////////////
    //filter by type
    case SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };

    //////////////////////////////////////////////////////////
    //clean detail
    case CLEAN_DETAIL:
      return {
        ...state,
        getDetail: action.payload,
      };

    //////////////////////////////////////////////////////////
    //set poke page
    case SET_POKE_PAGE:
      return {
        ...state,
        pokePage: action.payload,
      };

    //////////////////////////////////////////////////////////
    //set poke page
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
