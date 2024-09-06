import React, { useState } from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'

export default function Todo() {

    let [inputValue,setInputValue]=useState("")
    const [allTodo,setAlltodo]=useState([])

    let addData=()=>{
        setAlltodo([...allTodo,inputValue])
        setInputValue(" ")
    }

    
    return (
        <div>
            <Header />
            <Container>
                <h3 className='text-center' > To Do App </h3>

                <div className='w-100 p-2 mt-2'>
                    <input type='text' onChange={(e)=>setInputValue(e.target.value)} value={inputValue}  className='w-75 p-1 ' placeholder='enter your todo' />
                    <button className='px-3 py-1 ms-3 ' onClick={addData} > Add </button>
                </div>

                <div>
                    <ul type="none" >
                        {allTodo.length>0 ? 
                            allTodo.map((v,i)=>{
                                console.log(v)
                                return(
                                    <li> {v} <button>Delete</button>  </li>
                                )
                            })
                         :
                         <li>no todo add yet....</li>
                          
                          }
                       
                    </ul>
                </div>

                
            </Container>
        </div>
    )
}
