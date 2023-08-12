import React, {useEffect, useState} from "react";
//components
import Cards from '../../components/Cards/Cards'; 
import Loader from '../../components/Loader/Loader';
import TypeFilter from '../../components/TypeFilter/TypeFilter.jsx';
import AllOrders from '../../components/AllOrders/AllOrders.jsx';
//react redux
import { useDispatch } from "react-redux";
//action
import { getPokemons } from "../../redux/actions";

function Home() {

  const dispatch = useDispatch(); 
 
  //loader
  const [loading, setLoading] = useState(true);

  //mounting the component
  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  //set loader time
  setTimeout(() => {
    setLoading(false)
  }, 1000)

  return (
    <div>
      {
        loading ? <Loader /> 
        :
        <>
        <TypeFilter />
        <AllOrders />
        <Cards />
        </>
      }
    </div>
  );
}

export default Home;
