import React, { useContext } from 'react'
import Header from './Header'
import { Econtext } from './context/CartContext'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Wishlist() {
  let {wishP,setWishp,cartP,setCartP}=useContext(Econtext)

  let addtoCart=(id,items)=>{
    let finalItem=wishP.filter((v,i)=>i!=id)
    
      setCartP([...cartP,items])
      setWishp(finalItem)
  }
  
  return (
    <div>
    <Header/>
     
  <div class="container mx-auto mt-10 text-black ">
    <div class="flex shadow-md my-10">
      <div class="w-full bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
         
        </div>

        {wishP.length>0 
        ? 
        (wishP.map((v,i)=>{

          console.log(v)
          return(
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24" src={v.thumbnail} alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm"> {v.title} </span>
              <span class="text-red-500 text-xs"> {v.brand} </span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
            </div>
          </div>
        
          <span class="text-center w-1/5 font-semibold text-sm">$ {v.price.toFixed(2)} </span>
          <span  class="text-center w-1/5 font-semibold text-sm">
          <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>addtoCart(i,v)} > add to cart </button>
          </span>
        </div>
          )
        })) 
        : 
        "No data found in wishlist"
         }
       

       

        <Link to={"/"} class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
      </div>

      

    </div>
  </div>
  <ToastContainer />
    </div>
  )
}
