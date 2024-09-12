import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function ProductDetails() {

    const [singelData,setSingelData]=useState()

    console.log(singelData)

    let urlId=useParams().id;


   
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${urlId}`)

        .then((ress)=>{
            setSingelData(ress.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
   

    // let path=useLocation().pathname
    // console.log(path.split("/")[2])
  return (
    <div>
      ProductDetails hello
    </div>
  )
}
