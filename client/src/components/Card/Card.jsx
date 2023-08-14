import React from "react";
//css
import "./Card.css";
//router
import {Link} from 'react-router-dom'; 

function Card({ pokemon }) {
  
  const {id, name, image, types } = pokemon;

  const fireClass = types.find(t => t.name === 'fire'); 
  const waterClass = types.find(t => t.name === 'water');
  const poisonClass = types.find(t => t.name === 'poison');
  const electricClass = types.find(t => t.name === 'electric');
  const waterElectricClass = types.find(t => t.name === 'water') && types.find(t => t.name === 'electric');
  const waterPoisonClass = types.find(t => t.name === 'water') && types.find(t => t.name === 'poison');

  return (
    <div className={
     `card-content
     ${fireClass ? 'fire-card' : ''} 
     ${waterClass ? 'water-card' : ''}
     ${poisonClass ? 'poison-card' : ''}
     ${electricClass ? 'electric-card' : ''}
     ${waterElectricClass ? 'water-electric-card' : ''}
     ${waterPoisonClass ? 'water-poison-card' : ''}
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
