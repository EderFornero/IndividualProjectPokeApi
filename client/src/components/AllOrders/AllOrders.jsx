import React from "react";
//react redux
import { useDispatch } from "react-redux";
//actions
import { filterPokemon, orderPokemon } from "../../redux/actions";

function OriginFilter() {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(orderPokemon(e.target.name));
  };

  const handleOriginFilter = (e) => {
    dispatch(filterPokemon(e.target.name));
  };


  return (
    <div>
      <div>
        <button
          name="nameAsc"
          onClick={handleFilter}
          className="button-ordenator"
        >
          &#10607; A-Z
        </button>

        <button
          name="nameDes"
          onClick={handleFilter}
        >
          &#10607; Z-A
        </button>
      </div>

      <button
        name="api"
        onClick={handleOriginFilter}
      >
        API Pokemons
      </button>

      <button
        name="db"
        onClick={handleOriginFilter}
      >
        Created Pokemons
      </button>
    </div>
  );
}

export default OriginFilter;
