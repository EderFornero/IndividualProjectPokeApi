import React from "react";
//css
import "./Cards.css";
//components
import Card from "../Card/Card";
import { useSelector } from "react-redux";

function Cards() {
  const { allPokemons, filter, sort, type } = useSelector((state) => state);
  

  const sortOptions = {
    nameAsc: (a, b) => a.name.localeCompare(b.name),
    nameDes: (a, b) => b.name.localeCompare(a.name),
    attackAsc: (a, b) => a.attack - b.attack,
    attackDes: (a, b) => b.attack - a.attack,
  };

  const filterOptions = {
    db: (pokemon) => typeof pokemon.id === "string",
    api: (pokemon) => typeof pokemon.id === "number",
    none: (pokemon) => pokemon,
  };

  const filterOptionByType = (type) => {
    if(typeof type === 'string') return pokemon => pokemon.types.some((t) => t.name === type)
    else return pokemon => pokemon
  }

  return (
    <div className="div-contain-cards">
      <div className="div-cards">
        {allPokemons &&
          allPokemons
            .sort(sortOptions[sort])
            .filter(filterOptions[filter])
            .filter(filterOptionByType(type))
            .map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)}
      </div>
    </div>
  );
}

export default Cards;
