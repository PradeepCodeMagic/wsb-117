
import { useState } from 'react'
import './App.css'

function App() {

  let [data,setData]=useState(1)

  
  
  let Addition=()=>{
    setData(data+1)
    
  }

  return (
    <>
      <button onClick={()=>setData(data-1)} >-</button> 

      <h1> {data} </h1>

      <button onClick={Addition}  className={data>=20 ? "active" : ""}  >+</button> 
    </> 
  )
}

export default App
