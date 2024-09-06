import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gallery from './Gallery.jsx';
import About from './About.jsx';
import Todo from './Todo.jsx';

const ws=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/gallery",
    element:<Gallery/>
  }
  ,
  {
    path:"/about",
    element:<About/>
  }
  ,
  {
    path:"/todo",
    element:<Todo/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={ws}/>

  </StrictMode>,
)
