import React, {useEffect} from 'react'
//actions
import { filterByType, getTypes } from '../../redux/actions';
//react redux
import { useDispatch, useSelector } from 'react-redux';


function TypeFilter() {

  const dispatch = useDispatch(); 

  const filtered = useSelector((state) => state.filteredTypes); 
  const types = useSelector((state) => state.getTypes);

  //charge all types

  useEffect(() => {
   dispatch(getTypes())
  }, [dispatch])


  const handleFilter = (type) => {
    dispatch(filterByType(type));
  };

  return (
    <div>
    <h2 className='filtersxd'>Filters</h2>
    <div  className='type-container'>

    <button onClick={() =>
      handleFilter("all")}
      className='button-type'>
      All
    </button>
    {types?.map((type, i) => (
      <button
      key={i}
      onClick={() =>
        filtered === type.name ? handleFilter("all") : handleFilter(type.name)}
        
        className='button-type'
        >
        {type.name.toLowerCase()}
      </button>
    ))}
    </div>

  </div>
  )
}

export default TypeFilter; 
