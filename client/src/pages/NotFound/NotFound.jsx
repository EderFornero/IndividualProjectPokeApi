import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); //back to former page
  };

  return (
    <div>
      <button onClick={goBack}>GO BACK</button>
    </div>
  );
}

export default NotFound;
