import React from "react";
//css
import "./Cards.css";
import {Button} from '../Nav/Nav'
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

  const startPage = () => {
    dispatch(setPokePage(0))
  }
  
  const finalPage = () => {
    //go to next page
    dispatch(setPokePage(totalPages - 1)); 
  }

  

  const filteredPokemons = 
  allPokemons
    .filter(filterOptions[filter])
    .filter(filterOptionByType(type));


  const start = pokePage * perPage; 
  const final = start + perPage; 
  const totalPages = Math.ceil(filteredPokemons.length / perPage);


  return (
    <div className="div-contain-cards">
      <div className="pagination-div-buttons">
        <Button onClick={previousPage} disabled={pokePage === 0}>
          Previous
        </Button>
        <div className="span-go-to-start-final"><span onClick={startPage}>1</span> ... {pokePage + 1} ... <span className="span-go-to-final" onClick={finalPage}>{totalPages}</span></div>
        <Button onClick={nextPage} disabled={pokePage === totalPages - 1 || filteredPokemons.length === 0}>
          Next
        </Button>
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
