import './App.css';
import Main from './Layout/Main';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome/Welcome.jsx'
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
      }
    ]
  }
])



export default router; 