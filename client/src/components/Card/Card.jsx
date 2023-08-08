import React from "react";
//css
import "./Card.css";
//router
import {Link} from 'react-router-dom'; 

function Card({ pokemon }) {
  const {id, name, health_points, attack, types } = pokemon;
  return (
    <div className="card-content">
      {pokemon && 
      <>
      <h2>{name}</h2>
      <h4>Health Points: {health_points}</h4>
      <h4>Attack: {attack}</h4>
      <h4>
      Types: {Array.isArray(types) && types.map(type => typeof type === 'object' ? type.name : type).join(' - ')}
      </h4> 
      <Link to={`detail/${id}`}>Show more →</Link>
      </>
    }
    </div>
  );
}

export default Card;
