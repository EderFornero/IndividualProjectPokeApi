import './App.css';
//main
import Main from './Layout/Main';
//error component
import NotFound from './pages/NotFound';
//pages
import Welcome from './pages/Welcome/Welcome.jsx';
import Home from './pages/Home/Home';

import {
  createBrowserRouter
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Welcome /> 
      },
      {
        path: 'home',
        children: [
          {
            index: true,
            element: <Home />
          }
        ]
      }
    ]
  }
])



export default router; 