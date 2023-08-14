import React from "react";
//css
import "./Card.css";
//router
import {Link} from 'react-router-dom'; 
//
import {getTypeClass} from '../Helpers'

function Card({ pokemon }) {
  
  const {id, name, image, types } = pokemon;
  //condicional class
  const condicionalClass = getTypeClass(pokemon)

  return (
    <div className={
     `card-content
     ${condicionalClass} 
     `}>

      {pokemon && 
      <>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h4>
      Types: {Array.isArray(types) && types.map(type => type.name).join(' - ')}
      </h4> 
      <Link to={`detail/${id}`}>Show more →</Link>
      </>
    }
    </div>
  );
}

export default Card;
