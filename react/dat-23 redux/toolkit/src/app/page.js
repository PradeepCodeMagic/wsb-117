"use client"
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

export default function Home() {

  const myCount=useSelector((state)=>state.counter.value)

  

  const dispatch =useDispatch()

  let decWork=()=>{
    dispatch(decrement())
  }

  return (
    <>

      <center>
        <h3> {myCount} </h3>

        <button className="border-2 p-3 bg-red-600" onClick={decWork} >-</button>

        <button className="border-2 p-3 bg-green-600" onClick={()=>dispatch(increment())} >+</button>

      </center>
    </>
  );
}
