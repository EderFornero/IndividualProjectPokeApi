import React, {useState} from 'react'
//react-redux
import { useSelector} from 'react-redux'; 
//helpers
import validation from '../Helpers/Validation.js'
//css
import './CreatePokemon.css'
//axios
import axios from 'axios';

function CreatePokemon() {

  const types = useSelector(state => state.getTypes); 


  const [error, setError] = useState({}); 

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


  const handleOnChange = (e) => { 
    const {name, value} = e.target; 
    setPokemon({
      ...pokemon,
      [name]: value 
    })
  }

  const handleOnChangeType = (e) => {
    const {value} = e.target; 
    setPokemon({
      ...pokemon, 
      types: pokemon.types.includes(value) 
      ? pokemon.types.filter(type => type !== value) 
      : [...pokemon.types, value]
    })
  }


  const handleOnSubmit = (e) => {
    e.preventDefault(); 
    const errors = validation(pokemon); 
    setError(errors)
    if(Object.keys(errors).length === 0) console.log("Correct data...");
  }

  const handleOnCreate = async () => {
    const res = await axios.post('http://localhost:3001/pokemon', pokemon); 
    if(res.status === 201){ 
      console.log("Pokemon creado correctamente", res.data.new_pokemon);
    }else{
      console.log("Error al crear pokemon", error.message);
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

        <button type='submit' onClick={handleOnCreate}>Create</button>
      </form>
    </div>
  )
}

export default CreatePokemon;
