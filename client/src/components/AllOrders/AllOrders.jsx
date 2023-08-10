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
        >
          &#10607; A-Z
        </button>

        <button
          name="nameDes"
          onClick={handleFilter}
        >
          &#10607; Z-A
        </button>
        <button
          name="attackAsc"
          onClick={handleFilter}
        >
          + Attack
        </button>
        <button
          name="attackDes"
          onClick={handleFilter}
        >
          - Attack
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
