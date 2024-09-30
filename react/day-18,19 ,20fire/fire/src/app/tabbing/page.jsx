"use client"
import React, { useState } from 'react'

export default function page() {

    let [tabs,setTabs]=useState(1)

    console.log(tabs)
  return (
    <div className='main' >
      <ul>
        <li onClick={()=>setTabs(1)}>home1</li>
        <li onClick={()=>setTabs(2)}>home2</li>
        <li onClick={()=>setTabs(3)}>home3</li>
        <li onClick={()=>setTabs(4)}>home4</li>
      </ul>


      <div className={`tabs ${tabs==1 ? "active":""} `}   >Home 1</div>
      <div className={`tabs ${tabs==2 ? "active":""} `}  >Home 2</div>
      <div className={`tabs ${tabs==3 ? "active":""} `} >Home 3</div>
      <div className={`tabs ${tabs==4 ? "active":""} `}  >Home 4</div>
    </div>
  )
}
