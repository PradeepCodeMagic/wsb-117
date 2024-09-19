import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

function App() {

  const [allCat, setAllCat] = useState([])
  const [allProduct, setAllProdcut] = useState([])



  let showCat = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((ress) => {
        setAllCat(ress.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let showProduct = (url) => {

  let ApiUrl;

    if(url==undefined){
      ApiUrl='https://dummyjson.com/products?limit=200'
    }
    else{
      ApiUrl=url
    }
    axios.get(ApiUrl)
      .then((ress) => {
        setAllProdcut(ress.data.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let singleCat=(url)=>{
    showProduct(url)
  }



  useEffect(() => {
    showCat()
    showProduct()
  }, [])

  return (
    <>
      <Header />
      <div className='max-w-[1240px] mx-auto grid grid-cols-[20%_auto] mt-[15px] '>
        <div className=' p-[10px] '>
          <h3 className='text-[26px] font-bold py-2 ' > Category </h3>


          <ul class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

            {allCat.map((v,i) => {
              return (
                <li key={i} class="w-full px-4 py-2 rounded-b-lg" onClick={()=>singleCat(v.url)} > {v.name} </li>
              )
            })}


          </ul>

        </div>

        <div className=''>
          <h3 className='text-[26px] font-bold py-2 ' > Product </h3>
          <div className=' p-[10px] grid grid-cols-4 gap-2 '>


            {allProduct.map((v, i) => {

              
              return (
                <div key={i} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={v.thumbnail} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {v.title} </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to={`/product/${v.id}`}  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      id : {v.id}
                      
                    </Link>
                  </div>
                </div>
              )

            })}







          </div>
        </div>
      </div>
    </>
  )
}

export default App
