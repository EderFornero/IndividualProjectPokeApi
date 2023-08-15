import React from "react";
//css
import "./Card.css";
//router
import { Link } from "react-router-dom";
//
import { getTypeClass } from "../Helpers";

function Card({ pokemon }) {
  const { id, name, image, types } = pokemon;
  //condicional class
  // const condicionalClass = getTypeClass(pokemon);

  return (
    
      <div
        className={`card-content
 
     `}
      >
        {pokemon && (
          <>
            <div className="card-name-showing">
              <h2 className="card-name-showing-h2">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </h2>
            </div>
            <div className="card-image-showing">
              <img className="card-image-showing-img" src={image} alt={name} />
            </div>
            <div className="card-types-showing">
              <h4 className="card-types-showing-h4">
                {types?.length > 1 ? "Types: " : "Type: "}
                {Array.isArray(types) &&
                  types.map((type) => type.name.charAt(0).toUpperCase() + type.name.slice(1)).join(" - ")}
              </h4>
            </div>
            <div className="link-to-detail-page">
              <Link className="link-to-detail-page-tag" to={`detail/${id}`}>
                Show more →
              </Link>
            </div>
          </>
        )}
      </div>
 
  );
}

export default Card;
