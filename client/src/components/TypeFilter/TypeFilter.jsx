import React, {useEffect} from 'react'
//actions
import { filterPokemonType, getTypes, setPokePage } from '../../redux/actions';
//react redux
import { useDispatch, useSelector } from 'react-redux';


function TypeFilter() {

  const dispatch = useDispatch(); 

  const types = useSelector((state) => state.getTypes);

  //charge all types
  useEffect(() => {
   dispatch(getTypes())
  }, [dispatch])


  const handleFilter = (type) => {
    dispatch(filterPokemonType(type));
    dispatch(setPokePage(0));
  };

  return (
    <div>
      <h2 className='filters'>Filters</h2>
    <div>

    <button onClick={() => handleFilter(null)}>
      All
    </button>

    {types?.map((type) => (
      <button
      key={type.name}
      onClick={() => handleFilter(type.name)}
      >
        {type.name.toLowerCase()}
      </button>
    ))}
    </div>

  </div>
  )
}

export default TypeFilter; 
