import React, { useEffect } from "react";
//css
import "./Cards.css";
//actions
import {getPokemons} from '../../redux/actions/index';
//components
import Card from '../Card/Card';
import {useDispatch,  useSelector } from "react-redux";

function Cards() {

  const dispatch = useDispatch(); 
  const allPokemons = useSelector(state => state.allPokemons)

  //mounting the component
  useEffect(() => {
      dispatch(getPokemons())
  }, [dispatch])

  return (
    <div className="div-contain-cards">
      <div className="div-cards">
        {
        allPokemons && allPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
    </div>
  );
}

export default Cards;
