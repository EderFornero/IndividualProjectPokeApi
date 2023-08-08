import React, {useEffect, useState} from "react";
//components
import Cards from '../../components/Cards/Cards'; 
import Loader from '../../components/Loader/Loader';

function Home() {

  //loader
  const [loading, setLoading] = useState(false);

  //mounting the component
  useEffect(() => {
    setLoading(true)
  }, [])

  //set 2 seconds for charge API info
  setTimeout(() => {
    setLoading(false)
   }, 2000);

  return (
    <div>
      {
        loading ? <Loader /> 
        :
        <Cards />
      }
    </div>
  );
}

export default Home;
