import React, { useState } from 'react'

export default function Modal() {

    let [showModal,setShowModal]=useState(false)

        let showModalDiv=()=>{
            setShowModal(!showModal)
        }

        console.log(showModal)


  return (
    <div>
      <div className={showModal==true ? "activeModal" : "modal"} >gello students</div>


      <button onClick={showModalDiv} > {showModal==true ? "hide" : "show"}  </button>
    </div>
  )
}
