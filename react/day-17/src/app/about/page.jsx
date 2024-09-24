"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [data,setData]=useState([])

    console.log(data)
    let displayData=()=>{
        axios.get("https://dummyjson.com/products")
        .then((ress)=>{
            setData(ress.data.products)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        displayData()
    },[])


  return (
    <div className=' max-w-[1140px] mx-auto  grid grid-cols-4 gap-2' >
     
    {data.map((v,i)=>{
        return(
            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={v.thumbnail} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {v.title}
            </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button className='bg-[skyblue] p-2  ' > 
        <Link href={`/${v.id}`} >
        {v.id}
        </Link>
         </button>
    </div>
</div>
        )
    })}



    </div>
  )
}
