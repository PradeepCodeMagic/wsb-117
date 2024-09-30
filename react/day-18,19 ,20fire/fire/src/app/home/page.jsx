"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from '../FireConfig'
import { uid } from 'uid';

export default function page() {

  let userInfo = (e) => {
    e.preventDefault()

    let studentsInfo = {
      name: e.target.uName.value,
      email: e.target.uEmail.value,
      number: e.target.uNumber.value,
    }



    let myId = uid();


    const db = getDatabase(app);

    set(ref(db, 'BCA/' + myId), studentsInfo);
    alert("done......")

  }


  let [allData,setAllData]=useState(null)

  console.log(allData)
  let displayData = () => {
    const db = getDatabase(app);

    const starCountRef = ref(db, 'BCA/');

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      let finalAryy=[]
 
     for(let newData in data){
      // console.log(data[newData].studentsInfo.name)
     

      let newObj={
        userId:newData,
        name:data[newData].studentsInfo.name,
        number:data[newData].studentsInfo.number,
        email:data[newData].studentsInfo.email,
      }

      finalAryy.push(newObj)

      setAllData(finalAryy)
     }

     

     
      
      
      
    
    });

  }

  useEffect(()=>{
    displayData()
  },[])



  return (
    <div className='bg-[#ccc] p-[20px] ' >


      <form class="max-w-sm mx-auto" onSubmit={userInfo} >
        <div class="mb-5">
          <label for="terxt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
          <input type="terxt" name='uName' id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-5">
          <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
          <input type="text" name='uEmail' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div class="mb-5">
          <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Number</label>
          <input type="number" name='uNumber' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>


      {/* //////////////////////////////////////////////////////////////////// */}


      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Sr.
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Number
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td class="px-6 py-4">
                pradeep
              </td>
              <td class="px-6 py-4">
                987654321
              </td>
              <td class="px-6 py-4">
                xyz@gmail.com
              </td>
            </tr>

          </tbody>
        </table>
      </div>


    </div>
  )
}
