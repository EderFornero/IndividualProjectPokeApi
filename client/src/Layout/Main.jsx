import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'; 
import Nav from '../components/Nav/Nav';

function Main() {
    const location = useLocation(); 
    console.log(location);
   const showNav = location.pathname !== '/';

  return (
    <div>
        {
            showNav && <Nav />
        }
        <Outlet />
    </div>
  )
}

export default Main;
