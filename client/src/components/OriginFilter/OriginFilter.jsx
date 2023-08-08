import React from 'react'
//react redux
import {useDispatch, useSelector} from 'react-redux'; 
//actions
import { filterByPokemonOrigin } from '../../redux/actions';

function OriginFilter() {
  
  const dispatch = useDispatch(); 
  const filtered = useSelector((state) => state.allPokemons)

  const handleOriginFilter = (e) => {
    dispatch(filterByPokemonOrigin(e.target.name));
  };

  return (
    <div>
      {filtered.length > 1 && (
        <button
          name="numeric"
          onClick={handleOriginFilter}
          className="button-ordenator"
        >
          API Pokemons
        </button>
      )}
      {filtered.length > 1 && (
        <button
          name="uuid"
          onClick={handleOriginFilter}
          className="button-ordenator"
        >
          Created Pokemons
        </button>
      )}
    </div>
  )
}

export default OriginFilter
