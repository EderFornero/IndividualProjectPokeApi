import React, {useState} from 'react'
//react-redux
import { useSelector} from 'react-redux'; 
//router
import { useNavigate } from 'react-router'
//helpers
import validation from '../Helpers/Validation.js'
//css
import './CreatePokemon.css'
//axios
import axios from 'axios';

function CreatePokemon() {

  const types = useSelector(state => state.getTypes); 
  const navigate = useNavigate(); 

  //pokemon successfully created state
  const [pokemonCreated, setPokemonCreated] = useState(false); 
  const [errorPokemon, setErrorPokemon] = useState(false); 
  const [disableButton, setDisableButton] = useState(false); 

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

  //handle on submit 
  const handleOnSubmit = (e) => {
    e.preventDefault(); 
  }

  //handle on create
  const handleOnCreate = async () => {
    try {
      const res = await axios.post('http://localhost:3001/pokemon', pokemon);
      if(res.status === 201) { 
        setPokemonCreated(true)
        //send automatically user to home after pokemon successfully created
        setTimeout(() => {
          navigate('/home')
        }, 2000);
      } 
    } catch (error) {
      setErrorPokemon(true)
      setTimeout(() => { 
        setErrorPokemon(false)
      }, 1000)
    
    }
  }

  return (
    <div>
      <h3>¡Create your own Pokemon!</h3>
      <form onSubmit={handleOnSubmit}>
        
        {/* Name */}
        <label>
          Name:
          <input placeholder='Ex: Messi' type="text" name="name" value={pokemon.name} onChange={handleOnChange} />
          {error.name && <p className="error-message">{error.name}</p>}
        </label>

    <br />

        {/* Image */}
        <label>
          Image:
          <input placeholder='Ex: https://shorturl.at/dotLM' type="text" name="image" value={pokemon.image} onChange={handleOnChange} />
          {error.image && <p className="error-message">{error.image}</p>}
        </label>

        <br />

        {/* Health Points */}
        <label>
          Health Points:
          <input placeholder='Ex: 45' type="text" name="health_points" value={pokemon.health_points} onChange={handleOnChange} />
          {error.health_points && <p className="error-message">{error.health_points}</p>}
        </label>

      <br />

        {/* Attack */}
        <label>
          Attack:
          <input placeholder='Ex: 55' type="text" name="attack" value={pokemon.attack} onChange={handleOnChange} />
          {error.attack && <p className="error-message">{error.attack}</p>}
        </label>

      <br />

        {/* Defense */}
        <label>
          Defense:
          <input placeholder='Ex: 20' type="text" name="defense" value={pokemon.defense} onChange={handleOnChange} />
          {error.defense && <p className="error-message">{error.defense}</p>}
        </label>

      <br />

        {/* Speed */}
        <label>
          Speed:
          <input placeholder='Ex: 76' type="text" name="speed" value={pokemon.speed} onChange={handleOnChange} />
          {error.speed && <p className="error-message">{error.speed}</p>}
        </label>

      <br />

        {/* Height */}
        <label>
          Height:
          <input placeholder='Ex: 11' type="text" name="height" value={pokemon.height} onChange={handleOnChange} />
          {error.height && <p className="error-message">{error.height}</p>}
        </label>

      <br />

        {/* Weight */}
        <label>
          Weight:
          <input placeholder='Ex: 25' type="text" name="weight" value={pokemon.weight} onChange={handleOnChange} />
          {error.weight && <p className="error-message">{error.weight}</p>}
        </label>

      <br />

         {/* Types */}
         <label>
          Types:
          <select className='select-types' multiple name="types" value={pokemon.types} onChange={handleOnChangeType}>
            {types.map((type, i) => (
              <option key={i} value={type.name}>{type.name}</option>
            ))}
            
          </select>
          {error.types && <p className="error-message">{error.types}</p>}
        </label>

        <button type='submit' disabled={disableButton} onClick={handleOnCreate}>Create</button>
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
