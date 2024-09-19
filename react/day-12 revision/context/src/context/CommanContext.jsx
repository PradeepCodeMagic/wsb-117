import React, { Children, createContext, useState } from 'react'

 export let MainContext=createContext()

export default function CommanContext({children}) {

    const [counter,setCounter]=useState(22)
    const [Salery,setSalery]=useState(23456672222)

    let data={
        counter,setCounter,Salery,setSalery
    }

  return (
   <MainContext.Provider value={data} >
            {children}
   </MainContext.Provider>
  )
}
