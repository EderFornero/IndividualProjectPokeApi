import React, {useEffect, useState} from "react";
//components
import Cards from '../../components/Cards/Cards'; 
import Loader from '../../components/Loader/Loader';
import TypeFilter from '../../components/TypeFilter/TypeFilter.jsx';
import AllOrders from '../../components/AllOrders/AllOrders.jsx';
//react redux
import { useDispatch, useSelector } from "react-redux";
//action
import { getPokemons } from "../../redux/actions";

function Home() {

  const dispatch = useDispatch(); 
  const allPokemons = useSelector(state => state.allPokemons)
  //loader
  const [loading, setLoading] = useState(true);

  //page
  const [pokePage, setPokePage] = useState(0);
  const [savePoke, setSavePoke] = useState([]);
  const perPage = 10; 

  const previousPage = () => {
    setPokePage(pokePage - 1); 
  }

  const nextPage = () => {
    setPokePage(pokePage + 1); 
  }


  //mounting the component
  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  //this useEffect is responsible for calculating the pokemons to displayed on the current page
  useEffect(() => {
    const start = pokePage * perPage; 
    const final = start + perPage; 
    const showPokes = allPokemons.slice(start, final);
    setPokePage(showPokes)
  }, [pokePage, allPokemons])


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
