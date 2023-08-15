import React, {useState} from 'react'
//actions
import { filterPokemonType, setPokePage } from '../../redux/actions';
//react redux
import { useDispatch, useSelector } from 'react-redux';
//css
import './TypeFilter.css'
import styled from 'styled-components'



function TypeFilter() {

  const dispatch = useDispatch(); 

  const types = useSelector((state) => state.getTypes);

  const [isOpen, setIsOpen] = useState(false);
 

  const toggleOpenStyle = () => {
    setIsOpen(!isOpen)
  }




  const handleFilter = (type) => {
    dispatch(filterPokemonType(type));
    dispatch(setPokePage(0));
  };

  return (
 
  <div className='filters-container'>
    <div className='search-by-type'>
      <Button onClick={() => toggleOpenStyle()}>Search by type</Button>
    </div>

    <div className={`${isOpen ? 'div-opened' : 'div-closed'}`}>
      <div className='div-container-buttons'>
      <button className='buttons-types' onClick={() => handleFilter(null)}>
        ALL TYPES
      </button>


      {types?.map((type) => (
        <button
        className='buttons-types'
        key={type.name}
        onClick={() => handleFilter(type.name)}
        >
          {type.name.toUpperCase()}
        </button>
        ))}
      </div>
    </div>

  </div>
  )
}

export default TypeFilter; 


export const Button = styled.button`
 appearance: none;
 background-color: var(--main-bg);
 border: 0.125em solid var(--main-hover);
 border-radius: 0.9375em;
 box-sizing: border-box;
 color: var(--button-font);
 cursor: pointer;
 display: inline-block;
 font-size: 15px;
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
 color: #fff;
 background-color: #000;
 box-shadow: var(--button-hover) 0 8px 15px;
 transform: translateY(-2px);
}

&:active {
 box-shadow: none;
 transform: translateY(0);
}
`