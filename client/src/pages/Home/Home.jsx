import React, { useState } from "react";
//components
import Cards from "../../components/Cards/Cards";
import Loader from "../../components/Loader/Loader";
import TypeFilter from "../../components/TypeFilter/TypeFilter.jsx";
import AllOrders from "../../components/AllOrders/AllOrders.jsx";
//css
import "./Home.css";

function Home() {
  //loader
  const [loading, setLoading] = useState(true);

  //set loader time
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="filter-and-order">
            <TypeFilter />
            <AllOrders />
          </div>
          <Cards />
        </>
      )}
    </div>
  );
}

export default Home;
