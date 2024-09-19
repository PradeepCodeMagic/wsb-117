import React, { Children, createContext, useState } from 'react'


 export const Econtext=createContext()

export default function CartContext({children}) {
    const [counter,setCounter]=useState(10)
    const [dcounter,setdCounter]=useState(50)
  // start
    const [wishP,setWishp]=useState([])
    const [cartP,setCartP]=useState([])

    const Data={counter,setCounter,dcounter,setdCounter,wishP,setWishp,cartP,setCartP}

  return (
    <Econtext.Provider value={Data} >
            {children}
    </Econtext.Provider>
  )
}
