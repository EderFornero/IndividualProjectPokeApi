import React, {useEffect, useState} from "react";
//actions
import {getPokemons, getDetail} from '../../redux/actions/index';
//react redux
import {useDispatch, useSelector} from 'react-redux'; 
//components
import Cards from '../../components/Cards/Cards'; 
import Loader from '../../components/Loader/Loader';

function Home() {

  const dispatch = useDispatch(); 
  
  const allPokemons = useSelector(state => state.allPokemons) //extract data from the redux store state
 
  //loader
  const [loading, setLoading] = useState(false);

  //mounting the component
  useEffect(() => {
    setLoading(true)
      dispatch(getPokemons())
  }, [dispatch])

  //set 2 seconds for charge API info
  setTimeout(() => {
    setLoading(false)
   }, 2000);

 
  
  return (
    <div>
      {
        loading ? <Loader /> 
        :
        <Cards allPokemons={allPokemons}/>
      }
    </div>
  );
}

export default Home;
