//main
import Main from './Layout/Main';
//error component
import NotFound from './pages/NotFound/NotFound.jsx';
//pages
import Welcome from './pages/Welcome/Welcome.jsx';
import Home from './pages/Home/Home.jsx';
import Detail from './pages/Detail/Detail.jsx'; 
import CreatePokemon from './components/CreatePokemon/CreatePokemon';

import {
  createBrowserRouter
} from 'react-router-dom'



const router = createBrowserRouter([
  {
    //main
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      //welcome page
      {
        index: true,
        element: <Welcome /> 
      },
      //home page
      {
        path: 'home',
        children: [
          {
            index: true,
            element: <Home />
          },
          //detail page
          {
            path: 'detail/:id',
            children: [
              {
                index: true,
                element: <Detail />
              }
            ]
          }
        ]
      }, 
      {
        path: 'create',
        children: [
          {
            index: true, 
            element: <CreatePokemon />
          }
        ]
      }
    ]
  }
])



export default router; 