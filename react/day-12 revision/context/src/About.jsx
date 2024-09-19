import React, { useContext } from 'react'
import { MainContext } from './context/CommanContext'

export default function About() {
  const {Salery}=useContext(MainContext)
  return (
    <div>
      my salary amout : {Salery};
    </div>
  )
}
