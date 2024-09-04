import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'

function App() {

  let userObj={
    name:"pradeep",
    age:22,
    mobile:9876543210,
    img:"https://uptownskylla.in/wp-content/uploads/2022/09/01-1-2048x1497.jpg"
  }

  
  return (
    <>
      {/* home page */}
      
      <About props={userObj} />
        
    </>
  )
}

export default App



