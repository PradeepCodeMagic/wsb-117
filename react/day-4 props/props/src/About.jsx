import React from 'react'
import Gallery from './Gallery'

export default function About({props}) {

  
  return (
    <>
    <div style={{width:"600px",height:"500px",backgroundColor:"red"}} >
      <h2>Name:{props.name} </h2>
      <h3>Age: {props.age} </h3>
      <h4>Mobile Number:{props.mobile} </h4>
      <img src={props.img}  style={{width:"100%", height:"50%" }} />
    </div>
    <Gallery ws={props} />
    </>
  )
}
