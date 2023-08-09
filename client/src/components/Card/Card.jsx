import React from "react";
//css
import "./Card.css";
//router
import {Link} from 'react-router-dom'; 

function Card({ pokemon }) {
  
  const {id, name, image, types } = pokemon;

  return (
    <div className="card-content">
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
