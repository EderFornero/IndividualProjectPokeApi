import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate(); 
  return (
    <div className="div-container">

      {/* image */}
      <div className="background-image">

        {/* button */}
        <div className="div-button">
          <button className="button-link link-tag-button" onClick={() => navigate("home")}>
           LET'S GO
          </button>
        </div>


      </div>

    </div>
  );
}

export default Welcome;
