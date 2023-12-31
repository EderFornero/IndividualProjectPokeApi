import React, {useEffect, useState} from 'react'
//react-redux
import { useDispatch, useSelector} from 'react-redux'; 
//router
import { useNavigate } from 'react-router'
//helpers
import validation from '../Helpers/Validation.js'
//css
import './CreatePokemon.css'
import  styled  from 'styled-components';
import { Button } from '../Nav/Nav.jsx';
//actions
import { createPokemon } from '../../redux/actions/index.js';
//components 
import { Cloudinary } from '../Cloudinary/Cloudinary.jsx';



function CreatePokemon() {

  const types = useSelector(state => state.getTypes);  
  const image = useSelector(state => state.image);

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  //pokemon successfully created state
  const [pokemonCreated, setPokemonCreated] = useState(false); 
  const [errorPokemon, setErrorPokemon] = useState(false); 
  const [disableButton, setDisableButton] = useState(true); 
  const [selectedTypes, setSelectedTypes] = useState([]);

  //handle error state
  const [error, setError] = useState({}); 

  //pokemon 
  const [pokemon, setPokemon] = useState({
    name: '', 
    image: '', 
    health_points: '',
    attack: '',
    defense: '', 
    speed: 0,
    height: 0,
    weight: 0,
    types: [], 
  }); 

  useEffect(() => {
    setPokemon({...pokemon, image})
  }, [image])
  
  //handle on change 
  const handleOnChange = (e) => { 
    const {name, value} = e.target; 
    setPokemon({
      ...pokemon,
      [name]: value 
    })
    const validate = validation({
      ...pokemon,
      [name]: value
    })
    setError(validate); 
    if(Object.keys(validate).length === 0){
      setDisableButton(false)
    }
    else{
       setDisableButton(true)
    }
  }

  //handle on change by type 
  const handleOnChangeType = (e) => {
    const {value} = e.target; 

    const update = pokemon.types.includes(value) 
                  ? pokemon.types.filter(type => type !== value) 
                  : [...pokemon.types, value]

    setSelectedTypes(update)
    setPokemon({
      ...pokemon, 
      types: update,
    })

    const validate = validation({
      ...pokemon,
      types: update
    })

    setError(validate);

    if (Object.keys(validate).length === 0) {
    setDisableButton(false);
    } else {
    setDisableButton(true);
    }
  }

  //remove type selected
  const handleRemoveSelectedType = (removedType) => {

    const update = selectedTypes.filter(type => type !== removedType);
    setSelectedTypes(update);
    
    const updatedPokemon = pokemon.types.filter(type => type !== removedType);
    setPokemon({
      ...pokemon,
      types: updatedPokemon,
    });
  
    const validate = validation({
      ...pokemon,
      types: updatedPokemon,
    });
  
    setError(validate);
  
    if (Object.keys(validate).length === 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  //handle on submit 
  const handleOnSubmit = (e) => {
    e.preventDefault(); 
  }



  //handle on create
  const handleOnCreate = async () => {
    try {
      const res = await dispatch(createPokemon(pokemon));
      if (res.payload) { 
        setPokemonCreated(true);
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      }
    } catch (error) {
      setErrorPokemon(true);

      setTimeout(() => {
        setErrorPokemon(false); 
      }, 1000)
    }
  };
  


  return (
    <div className='form-container'>
      <div className='div-container-create-title'>
      <h3>¡Create your own Pokemon!</h3>
      </div>
      <form onSubmit={handleOnSubmit}>
      
      <Div>
        {/* Name */}
        <label>
          Name:
          <input placeholder='Ex: Messi' type="text" name="name" value={pokemon.name} onChange={handleOnChange} />
          {error.name && <p className="error-message">{error.name}</p>}
          </label>

      </Div>

        <br />

      <DivCloudinary>
        <Cloudinary />
        {!image && <p className="error-message">{error.image}</p>}
      </DivCloudinary>

        <br />

      <Div>

        {/* Health Points */}
        <label>
          Health Points:
          <input placeholder='Ex: 45' type="number" min="1" name="health_points" value={pokemon.health_points} onChange={handleOnChange} />
          {error.health_points && <p className="error-message">{error.health_points}</p>}
        </label>

      </Div>

        <br />

      <Div>

        {/* Attack */}
        <label>
          Attack:
          <input placeholder='Ex: 55' type="number" min="1" name="attack" value={pokemon.attack} onChange={handleOnChange} />
          {error.attack && <p className="error-message">{error.attack}</p>}
        </label>

      </Div>

        <br />

      <Div>

        {/* Defense */}
        <label>
          Defense:
          <input placeholder='Ex: 20' type="number" min="1" name="defense" value={pokemon.defense} onChange={handleOnChange} />
          {error.defense && <p className="error-message">{error.defense}</p>}
        </label>
       

      </Div>

        <br />

      <Div>

        {/* Speed */}
        <label>
          Speed:
          <input placeholder='Ex: 76' type="number" min="0" name="speed" value={pokemon.speed} onChange={handleOnChange} />
          {error.speed && <p className="error-message">{error.speed}</p>}
        </label>

      </Div>
      
        <br />

      <Div>
        {/* Height */}
        <label>
          Height:
          <input placeholder='Ex: 11' type="number" min="0" name="height" value={pokemon.height} onChange={handleOnChange} />
          {error.height && <p className="error-message">{error.height}</p>}
        </label>
      </Div>

        <br />
   
      <Div>
        {/* Weight */}
        <label>
          Weight:
          <input placeholder='Ex: 25' type="number" min="0" name="weight" value={pokemon.weight} onChange={handleOnChange} />
          {error.weight && <p className="error-message">{error.weight}</p>}
        </label>

      </Div>

        <br />

      <Div className='div-container-select-types'>
        {/* Types */}
        <label className='label-types'>
          Types:
          <select
            className='select-types'
            multiple
            name="types"
            value={selectedTypes}
            onChange={handleOnChangeType}
          >
            {types && types.map((type, i) => (
              <option key={i} value={type.name}>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</option>
            ))}
          </select>

          {selectedTypes.length > 0 && (
            <div className="div-selected-types">
              {selectedTypes.map((type, i) => (
                  <ButtonTypes
                    key={i}
                    className="remove-type-button"
                    onClick={() => handleRemoveSelectedType(type)}
                  >
                   {type.charAt(0).toUpperCase() + type.slice(1)} &#10060;
                  </ButtonTypes>
              ))}
            </div>
          )}
          {error.types && <p className="error-message">{error.types}</p>}
        </label>
      </Div>

        <br />

      <Div className='create-button'>
        <Button type='submit' disabled={disableButton} onClick={handleOnCreate}>Create</Button>
      </Div>
      </form>
     
     
     
    <div className='error-message-container'>
       {/*error on create*/}
        {
         errorPokemon && 
            <p className="error-message-create">Pokemon already exist </p>
       }
      
       {/*after pokemon successfully created*/}
       {
        pokemonCreated && 
         <>
          <div className='div-loader'><div className='loader'></div></div>
           <div className="success-message" id='success-element'>
            Pokemon successfully created
          </div>
        </>
        }
    </div>

    </div>
  )
}

export default CreatePokemon;


export const ButtonTypes = styled.button`
 appearance: none;
 background-color: var(--main-bg);
 border: 0.125em solid var(--main-hover);
 border-radius: 0.9375em;
 box-sizing: border-box;
 color: var(--button-font);
 cursor: pointer;
 display: inline-block;
 font-size: 10px;
 font-weight: 500;
 line-height: normal;
 margin-left: 5px;
 margin-top: 2px;
 min-height: 15px;
 min-width: 30px;
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
 background-color: var(--main-disable);
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


const Div = styled.div`
  width: 450px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (max-width: 600px){
    width: 300px;
  }
  
` 

const DivCloudinary = styled.div`
  display: flex;
  flex-direction: column-reverse;
` 