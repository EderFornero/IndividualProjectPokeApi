import React, { useEffect }  from 'react'
//react router 
import { Outlet, useLocation } from 'react-router-dom';
//components 
import Nav from '../components/Nav/Nav';
//react redux
import {useDispatch} from 'react-redux'; 
//actions
import {getTypes} from '../redux/actions/index';

function Main() {

  const dispatch = useDispatch(); 


  //charge types before anything else
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch])


  //use location
  const location = useLocation(); 
  //do not show navbar in welcome page
  const showNav = location.pathname !== '/'; 


  return (
    <>
        {
          showNav && <Nav />
        }
        <Outlet />
    </>
  )
}

export default Main;
