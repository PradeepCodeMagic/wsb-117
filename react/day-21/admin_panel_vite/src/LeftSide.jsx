import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftSide() {
  return (
    <div>
      <h2>
        <Link to={"/"}>Frank and Oak</Link>
      </h2>

      <h2>
        <Link to={"/addcourse"} >Add Course</Link>
      </h2>


      <h2>
      <Link to={"/viewcourse"} >View Course</Link>
      </h2>
    </div>
  )
}
