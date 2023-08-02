import React from "react";

import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="div-container">

      {/* image */}
      <div className="background-image">

        {/* button */}
        <div className="div-button">
          <button className="button-link">
            <Link className="link-tag-button" to="/home">LET'S GO</Link>
          </button>
        </div>


      </div>

    </div>
  );
}

export default Welcome;
