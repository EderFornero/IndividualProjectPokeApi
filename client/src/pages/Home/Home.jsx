import React, { useEffect } from "react";
//components
import Cards from "../../components/Cards/Cards";
import Loader from "../../components/Loader/Loader";
import TypeFilter from "../../components/TypeFilter/TypeFilter.jsx";
import AllOrders from "../../components/AllOrders/AllOrders.jsx";
//react-redux
import { useDispatch, useSelector } from "react-redux";
//actions
import { setLoading, setPokePage } from "../../redux/actions";
//css
import "./Home.css";

function Home() {

  const dispatch = useDispatch();
  const { loading, allPokemons } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setLoading(false));
    dispatch(setPokePage(0));
  }, [dispatch]);

  return (
    <div data-testid="div-container-home">
      {!loading ? (
        allPokemons.length ? (
          <>
            <div className="filter-and-order">
              <TypeFilter data-testid="type-filter-container"/>
              <AllOrders data-testid="pokemon-sort-container"/>
            </div>
            <Cards data-testid="pokemon-card" />
          </>
        ) : (
          <Loader data-testid='loading-spinner' />
        )
      ) : (
        <div className="there-are-not">
          <p>There aren't pokemons</p>
        </div>
      )}
    </div>
  );
}

export default Home;
