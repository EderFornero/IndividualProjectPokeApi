import React, { useEffect }  from 'react'
//react router 
import { Outlet, useLocation, useParams } from 'react-router-dom';
//components 
import Nav from '../components/Nav/Nav';
//react redux
import {useDispatch} from 'react-redux'; 
//actions
import {getTypes} from '../redux/actions/index';

function Main() {

  const dispatch = useDispatch(); 
  //get id by useParams 
  const {id} = useParams();
  //charge types before anything else
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch])


  //use location
  const location = useLocation(); 
  //do not show navbar in welcome page
  const showNav = location.pathname !== '/'; 
  //do not show navbar in detail view
  const showDetail = location.pathname !== `/home/detail/${id}`;

  return (
    <>
        {
          showNav && showDetail && <Nav />
        }
        <Outlet />
    </>
  )
}

export default Main;
