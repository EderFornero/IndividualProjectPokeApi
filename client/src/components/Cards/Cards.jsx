import React, { useState } from "react";
//css
import "./Cards.css";
//components
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
//actions
import { setPokePage } from "../../redux/actions";
//helpers 
import {sortOptions, filterOptions, filterOptionByType} from '../Helpers'

function Cards() {

  //states
  const { filter, sort, type, pokePage, allPokemons } = useSelector((state) => state);

  //pagination
  const perPage = 12; 
  const dispatch = useDispatch();


  const previousPage = () => {
    //avoid invalid values
    dispatch(setPokePage(Math.max(pokePage - 1, 0))); 
   
  }

  const nextPage = () => {
    //go to next page
    dispatch(setPokePage(pokePage + 1)); 
   
  }


  //Calculate totalPages based on the total number of pokémon after filters
  const filteredPokemons = 
  allPokemons
    .filter(filterOptions[filter])
    .filter(filterOptionByType(type));
  const totalPages = Math.ceil(filteredPokemons.length / perPage);

  //calculating start and final based on pokemons per page
  const start = pokePage * perPage; 
  const final = start + perPage; 

  return (
    <div className="div-contain-cards">
      <div className="pagination-buttons">
        <button onClick={previousPage} disabled={pokePage === 0}>
          Previous
        </button>
        <div>{pokePage} ... <span>{totalPages !== 0 ? totalPages - 1 : 0}</span></div>
        <button onClick={nextPage} disabled={pokePage === totalPages - 1 || filteredPokemons.length === 0}>
          Next
        </button>
      </div>
      
      <div className="div-cards">
        {filteredPokemons
            .sort(sortOptions[sort])
            .slice(start, final)
            .map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)}
      </div>
    </div>
  );
}

export default Cards;
