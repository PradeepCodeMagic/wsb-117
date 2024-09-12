import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import axios from 'axios'

function App() {
  const [allCat, setAllCat] = useState([])

  const [allProduct,setAllproduct]=useState([])

  const [loading,setLoading]=useState(false)


  


  let displatCat = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((ress) => {
        setAllCat(ress.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  let disProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((ress)=>{
      setAllproduct(ress.data.products)
      setLoading(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  


  useEffect(() => {
    displatCat()
    disProduct()
  }, [])


  return (
    <>
      <Header />
      <div className="max-w-[1140px]  mx-auto grid grid-cols-[20%_auto] gap-2 ">
        <div className="">
          <h2 className='text-[25px] font-bold py-[10px] text-center' >Category</h2>

          <div className=''>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {allCat.map((v)=>{
                return(
                  <CatLi catProps={v} />
                )
              })}
             
            </ul>
          </div>



        </div>
        <div className="">
          <h2 className='text-[25px] font-bold py-[10px] text-center '> All Product </h2>
          <div className=" grid grid-cols-4 gap-2 ">

          {/* {allProduct.length>0 ?
            allProduct.map((v)=>{
              return(
                <Card/>
                  
              )
            })

           :
            <>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            </>
            } */}

            {loading==true ?
              allProduct.map((v)=>{
              return(
                <Card/>
                  
              )
            })
              : 
              <>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            <LoadingCart/>
            </>
              }
                  
                  
          </div>
        </div>
      </div>
    </>
  )
}

export default App


let CatLi = ({catProps}) => {


  return (
    <>
      <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"> {catProps.name} </li>
      
    </>


  )
}


let Card=()=>{
  return(
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
  )
}


let LoadingCart=()=>{
  return(
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-700 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>
  )
}
