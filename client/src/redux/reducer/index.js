import {
  GET_POKEMON,
  GET_POKEMON_NAME,
  GET_DETAIL,
  GET_TYPES,
  TYPE_FILTER,
} from "../actions-types/index";

const initialState = {
  allPokemons: [],
  copyAllPokemons: [],
  getDetail: {},
  getTypes: [],

  /////////////filter/////////////
  filteredTypes: "all",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        allPokemons: action.payload,
        copyAllPokemons: action.payload,
      };

    case GET_POKEMON_NAME:
      return {
        ...state,
        allPokemons: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        getDetail: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        getTypes: action.payload,
      };

    case TYPE_FILTER:
      if (action.payload === "all") {
        return {
          ...state,
          allPokemons: state.copyAllPokemons,
          filteredTypes: action.payload,
        }
      } else {
        const filtered = state.copyAllPokemons.filter((pokemon) => {
          //filter by type from API or type from Database
          if (typeof pokemon.types[0] === "string") {
            return pokemon.types.some((type) => type === action.payload);
          } else {
            return pokemon.types.some((type) => type.name === action.payload);
          }
        })

        return {
          ...state,
          filteredTypes: action.payload,
          allPokemons: filtered,
        };
        // return{
        //   ...state,
        //   filteredTypes: action.payload,
        //   allPokemons: state.copyAllPokemons.filter((pokemon) => {
        //   return pokemon.types.some((t) => t.name === action.payload);
        // })
        // }
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
