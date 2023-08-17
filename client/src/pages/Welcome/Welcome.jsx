import React from "react";
//router
import { useNavigate } from "react-router-dom";
//css
import "./Welcome.css";

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
