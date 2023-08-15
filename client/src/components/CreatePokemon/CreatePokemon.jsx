import React, {useEffect, useState} from 'react'
//react-redux
import { useDispatch, useSelector} from 'react-redux'; 
//router
import { useNavigate } from 'react-router'
//helpers
import validation from '../Helpers/Validation.js'
//css
import './CreatePokemon.css'
import {Button} from '../Nav/Nav.jsx'
//actions
import { createPokemon } from '../../redux/actions/index.js';


function CreatePokemon() {

  const types = useSelector(state => state.getTypes);  
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
    speed: '',
    height: '',
    weight: '',
    types: [], 
  }); 

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
      console.log("res: ", res);
      if (res.payload) { 
        setPokemonCreated(true);
      }
    } catch (error) {
      setErrorPokemon(true);
      setTimeout(() => {
        setErrorPokemon(false); 
      }, 1000)
    }
  };
  
  useEffect(() => {
    if (pokemonCreated) {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [pokemonCreated, navigate]);

  return (
    <div className='form-container'>
      <h3>¡Create your own Pokemon!</h3>
      <form onSubmit={handleOnSubmit}>
      
      <div>
        {/* Name */}
        <label>
          Name:
          <input placeholder='Ex: Messi' type="text" name="name" value={pokemon.name} onChange={handleOnChange} />
          {error.name && <p className="error-message">{error.name}</p>}
        </label>

      </div>

        <br />

      <div>
        {/* Image */}
        <label>
          Image:
          <input placeholder='Ex: https://shorturl.at/dotLM' type="text" name="image" value={pokemon.image} onChange={handleOnChange} />
          {error.image && <p className="error-message">{error.image}</p>}
        </label>
      </div>

        <br />

      <div>

        {/* Health Points */}
        <label>
          Health Points:
          <input placeholder='Ex: 45' type="text" name="health_points" value={pokemon.health_points} onChange={handleOnChange} />
          {error.health_points && <p className="error-message">{error.health_points}</p>}
        </label>

      </div>

        <br />

      <div>

        {/* Attack */}
        <label>
          Attack:
          <input placeholder='Ex: 55' type="text" name="attack" value={pokemon.attack} onChange={handleOnChange} />
          {error.attack && <p className="error-message">{error.attack}</p>}
        </label>

      </div>

        <br />

      <div>

        {/* Defense */}
        <label>
          Defense:
          <input placeholder='Ex: 20' type="text" name="defense" value={pokemon.defense} onChange={handleOnChange} />
        </label>
        {error.defense && <p className="error-message">{error.defense}</p>}

      </div>

        <br />

      <div>

        {/* Speed */}
        <label>
          Speed:
          <input placeholder='Ex: 76' type="text" name="speed" value={pokemon.speed} onChange={handleOnChange} />
          {error.speed && <p className="error-message">{error.speed}</p>}
        </label>

      </div>
      
        <br />

      <div>
        {/* Height */}
        <label>
          Height:
          <input placeholder='Ex: 11' type="text" name="height" value={pokemon.height} onChange={handleOnChange} />
          {error.height && <p className="error-message">{error.height}</p>}
        </label>
      </div>

        <br />
   
      <div>
        {/* Weight */}
        <label>
          Weight:
          <input placeholder='Ex: 25' type="text" name="weight" value={pokemon.weight} onChange={handleOnChange} />
          {error.weight && <p className="error-message">{error.weight}</p>}
        </label>

      </div>

        <br />

        <div>
        {/* Types */}
        <label>
          Types:
          <select
            className='select-types'
            name="types"
            value={selectedTypes}
            onChange={handleOnChangeType}
          >
            {types && types.map((type, i) => (
              <option key={i} value={type.name}>{type.name}</option>
            ))}
          </select>

          {selectedTypes.length > 0 && (
            <div className="selected-types">
              {selectedTypes.map((type, i) => (
                  <button
                    key={i}
                    className="remove-type-button"
                    onClick={() => handleRemoveSelectedType(type)}
                  >
                   {type}
                  </button>
              ))}
            </div>
          )}
          {error.types && <p className="error-message">{error.types}</p>}
        </label>
      </div>

        <br />

      <div className='create-button'>
        <Button  type='submit' disabled={disableButton} onClick={handleOnCreate}>Create</Button>
      </div>
      </form>
     
      {/*error on create*/}
      {
        errorPokemon && 
        <div className="error-message-create">
          Error on create your own pokemon 
        </div>
      }

      {/*after pokemon successfully created*/}
      {
      pokemonCreated && 
      <>
        <div className='div-loader'><div className='loader'></div></div>
        <div className="success-message">
        Pokemon successfully created
        </div>
      </>
      }
    </div>
  )
}

export default CreatePokemon;
