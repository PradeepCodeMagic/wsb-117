import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from './ProductDetails.jsx';
import CartContext from './context/CartContext.jsx';
import Wishlist from './Wishlist.jsx';
import Cart from './Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/product/:id",
    element:<ProductDetails/>,
  },
  {
    path: "/wishlist",
    element: <Wishlist/>,
  },
  ,
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <CartContext>
          <RouterProvider router={router} />
      </CartContext>
 
  </StrictMode>,
)
