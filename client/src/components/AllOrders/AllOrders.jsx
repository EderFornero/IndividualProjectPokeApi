import React, { useState } from "react";
//react redux
import { useDispatch } from "react-redux";
//actions
import { filterPokemon, orderPokemon, setPokePage } from "../../redux/actions";
//css
import './AllOrders.css';
import {Button} from '../TypeFilter/TypeFilter.jsx';

function OriginFilter() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false); 


  const handleFilter = (e) => {
    dispatch(orderPokemon(e.target.name));
  };

  const handleOriginFilter = (e) => {
    dispatch(filterPokemon(e.target.name));
    dispatch(setPokePage(0));
  };


  const toggleSort = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sort-container">
      <div className="sort-by-name-attack">
        <Button onClick={() => toggleSort()}>Sort and Filter by</Button>
      </div>

      <div className={`${isOpen ? 'div-sort-opened' : 'div-sort-closed'}`}>
        <div className="div-all-sort">
          <button
           className="sort-button"
           name="nameAsc"
           onClick={handleFilter}
          >
           &#10607; A-Z
          </button>

          <button
            className="sort-button"
            name="nameDes"
            onClick={handleFilter}
          >
            &#10607; Z-A
          </button>
          <button
            className="sort-button"
            name="attackAsc"
            onClick={handleFilter}
         >
           + Attack
         </button>
          <button
            className="sort-button"
            name="attackDes"
            onClick={handleFilter}
         >
            - Attack
         </button>
      

      <button
        className="sort-button"
        name="api"
        onClick={handleOriginFilter}
      >
        API Pokemons
      </button>

      <button
        className="sort-button"
        name="db"
        onClick={handleOriginFilter}
      >
        Created Pokemons
      </button>

      <button
        className="sort-button"
        name="none"
        onClick={handleOriginFilter}
      >
        All Pokemons
      </button>
      
       </div>
      </div>
    </div>
  );
}

export default OriginFilter;
