import React from 'react'

export default function Ws() {
    let Data=[
        {
            name:"ws"
        },
        {
            name:"pradeep"
        },
        {
            name:"dileep"
        },
        {
            name:"arjun"
        },
        {
            name:"akay"
        },

    ]

    let userClick=()=>{
        alert("hello")
    }

    let liClick=(myName)=>{
        alert(myName)
    }

  return (
    <div>
      Print :-
      <ul>
        {Data.map((v,i)=>{
            return(
                <li onClick={()=>liClick(v.name)} > {v.name} </li>
            )
        })}

      </ul>

      <h2 onClick={userClick} >hello ws</h2>
       
    </div>
  )
}
