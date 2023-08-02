import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'; 
import Nav from '../components/Nav/Nav';

function Main() {
    const location = useLocation(); 
    console.log(location);
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
