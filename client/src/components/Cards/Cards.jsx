import React from "react";
//css
import "./Cards.css";
//components
import Card from "../Card/Card";
import { useSelector } from "react-redux";

function Cards({showPokes, pokePage, totalPages, previousPage, nextPage}) {
  const { filter, sort, type } = useSelector((state) => state);
  

  const sortOptions = {
    nameAsc: (a, b) => a.name.localeCompare(b.name),
    nameDes: (a, b) => b.name.localeCompare(a.name),
    attackDes: (a, b) => a.attack - b.attack,
    attackAsc: (a, b) => b.attack - a.attack
  };

  const filterOptions = {
    db: (pokemon) => typeof pokemon.id === "string",
    api: (pokemon) => typeof pokemon.id === "number",
    none: (pokemon) => pokemon
  };

  const filterOptionByType = (type) => {
    if(typeof type === 'string') return pokemon => pokemon.types.some((t) => t.name === type)
    else return pokemon => pokemon
  }

  return (
    <div className="div-contain-cards">
      <div className="pagination-buttons">
        <button onClick={previousPage} disabled={pokePage === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={pokePage === totalPages - 1}>
          Next
        </button>
      </div>
      
      <div className="div-cards">
        {showPokes
            .sort(sortOptions[sort])
            .filter(filterOptions[filter])
            .filter(filterOptionByType(type))
            .map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)}
      </div>
    </div>
  );
}

export default Cards;
