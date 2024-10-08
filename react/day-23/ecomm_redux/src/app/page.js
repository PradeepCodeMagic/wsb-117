'use client'

import { useDispatch, useSelector } from "react-redux";
import Header from "./Comman/Header";
import axios from "axios";
import { setError, setProduct ,setLoading } from "./redux/features/productSlice";
import { useEffect } from 'react'


export default function Home() {
  

 
    // // const product=useSelector((state)=>state.product.allproduct)

    const {allproduct , status_code ,loading}=useSelector((state)=>state.product)

    console.log(loading)
    const dispatch=useDispatch()


    // let myObj={
    //   name:"pradeep",
    //   age:33
    // }

    // let {name,age}=myObj

    // console.log(name,age)
  

  let displayData=()=>{
    dispatch(setLoading())


    axios.get('https://dummyjson.com/products')
    .then((ress)=>{
        dispatch(setProduct(ress.data.products))
    })
    .catch((error)=>{
        dispatch(setError(error))
    })
  }

  displayData()
    
    


  return (
  <>
    <Header/>
    <div className="w-[1000px] grid grid-cols-4 mx-auto">

      
      {allproduct.map((v,i)=>{
        return(
          <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={v.thumbnail} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
        )
      })}






    </div>
  </>
  );
}
