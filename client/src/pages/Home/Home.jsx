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
  const perPage = 10; 

  const previousPage = () => {
    //avoid invalid values
    setPokePage(Math.max(pokePage - 1, 0)); 
  }

  const nextPage = () => {
    setPokePage(pokePage + 1); 
  }

  //mounting the component
  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  //calculating all pokemons to displayed on the current page
  const totalPages = Math.ceil(allPokemons.length / perPage);
  const start = pokePage * perPage; 
  const final = start + perPage; 
  const showPokes = allPokemons.slice(start, final);


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
        <Cards 
        showPokes={showPokes} 
        pokePage={pokePage} 
        totalPages={totalPages} 
        previousPage={previousPage} 
        nextPage={nextPage}
        />
        </>
      }
    </div>
  );
}

export default Home;
