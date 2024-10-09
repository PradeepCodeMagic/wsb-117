"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Comman/Header'

export default function page() {

  let wishAllItem=useSelector((state)=>state.wish.wishProduct)

 

  return (
    <div>
    <Header/>
      hello wish
    </div>
  )
}
