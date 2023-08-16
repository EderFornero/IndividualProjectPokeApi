import React from "react";
//router
import { useNavigate } from "react-router-dom";
//css
import './NotFound.css';
import { styled } from "styled-components";

function NotFound() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); //back to former page
  };

  return (
    <div className="div-container-goback">
      <Button onClick={goBack}>&#11178; GO BACK</Button>
    </div>
  );
}

export default NotFound;


export const Button = styled.button`
 appearance: none;
 background-color: var(--main-bg);
 border: 0.125em solid var(--main-hover);
 border-radius: 0.9375em;
 box-sizing: border-box;
 color: var(--button-font);
 cursor: pointer;
 display: inline-block;
 font-size: 25px;
 font-weight: 600;
 line-height: normal;
 min-height: 22px;
 min-width: 40px;
 outline: none;
 padding: 1em 2.3em;
 text-align: center;
 text-decoration: none;
 transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 will-change: transform;


&:disabled {
 pointer-events: none;
}

&:hover {
 background-color: lightgreen;
 box-shadow: var(--button-hover) 0 8px 15px;
 transform: translateY(-2px);
}

&:active {
 box-shadow: none;
 transform: translateY(0);
}
`