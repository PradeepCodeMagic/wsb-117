import React, { useContext } from 'react'
import { MainContext } from './context/CommanContext'

export default function Header() {

  const {counter}=useContext(MainContext)

  

  return (
    <div>
    Header Part
      Counter - {counter}
    </div>
  )
}
