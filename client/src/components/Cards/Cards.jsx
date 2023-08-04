import React from "react";
//css
import "./Cards.css";
//components
import Card from '../Card/Card';

function Cards({ allPokemons }) {
  return (
    <div className="div-contain-cards">
      <div className="div-cards">
        {
        allPokemons && allPokemons.map((poke) => (
          <Card key={poke.id} poke={poke}/>
        ))}
        </div>
    </div>
  );
}

export default Cards;
